'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { EmailAuthProvider, reauthenticateWithCredential, deleteUser } from 'firebase/auth';
import { AlertDialogDescription, AlertDialogFooter } from './ui/alert-dialog';
import { AlertDialogCancel } from '@radix-ui/react-alert-dialog';

const deleteSchema = z.object({
  password: z.string().min(1, 'Password is required.'),
});

type DeleteFormValue = z.infer<typeof deleteSchema>;

export function DeleteAccount() {
  const auth = useAuth();
  const { toast } = useToast();

  const form = useForm<DeleteFormValue>({
    resolver: zodResolver(deleteSchema),
    defaultValues: {
      password: '',
    },
  });

  const onSubmit = async (data: DeleteFormValue) => {
    const user = auth.currentUser;
    if (!user || !user.email) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'No user is currently logged in or user has no email.',
      });
      return;
    }

    try {
      const credential = EmailAuthProvider.credential(user.email, data.password);
      await reauthenticateWithCredential(user, credential);
      await deleteUser(user);
      
      toast({
        title: 'Account Deleted',
        description: 'Your account has been permanently deleted.',
      });
      // The onAuthStateChanged listener in FirebaseProvider will handle the redirect.

    } catch (error: any) {
      let description = 'An unknown error occurred.';
      if (error.code === 'auth/wrong-password') {
        description = 'The password you entered is incorrect. Please try again.';
      } else if (error.code === 'auth/too-many-requests') {
        description = 'Too many attempts. Please try again later.';
      } else if (error.code === 'auth/requires-recent-login') {
        description = 'This operation is sensitive. Please log out and log in again before deleting your account.'
      }
      toast({
        variant: 'destructive',
        title: 'Deletion Failed',
        description: description,
      });
    }
  };

  return (
    <>
      <AlertDialogDescription>
        This action is permanent and cannot be undone. Please enter your password to confirm you want to permanently delete your account.
      </AlertDialogDescription>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <AlertDialogFooter className="pt-4">
            <AlertDialogCancel asChild>
                <Button variant="outline">Cancel</Button>
            </AlertDialogCancel>
            <Button type="submit" variant="destructive">
              Delete Account
            </Button>
          </AlertDialogFooter>
        </form>
      </Form>
    </>
  );
}
