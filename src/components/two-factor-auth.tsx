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
import { useAuth, useUser } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ShieldCheck } from 'lucide-react';

const phoneSchema = z.object({
  phoneNumber: z.string().min(10, 'Please enter a valid phone number.'),
});

type PhoneFormValue = z.infer<typeof phoneSchema>;

export function TwoFactorAuth() {
  const auth = useAuth();
  const { user } = useUser();
  const { toast } = useToast();
  const [is2faEnabled, setIs2faEnabled] = useState(false);

  const form = useForm<PhoneFormValue>({
    resolver: zodResolver(phoneSchema),
    defaultValues: {
      phoneNumber: '',
    },
  });

  useEffect(() => {
    if (user) {
        // In a real app, you'd check if MFA is actually enabled for the user.
        // For this UI demo, we'll just check if they have a phone number.
        const hasMfa = !!user.phoneNumber;
        setIs2faEnabled(hasMfa);
        form.reset({
            phoneNumber: user.phoneNumber || '',
        });
    }
  }, [user, form]);

  const onSubmit = async (data: PhoneFormValue) => {
    if (!auth.currentUser) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'You must be logged in.',
      });
      return;
    }

    try {
      // In a real app, this would trigger a phone verification flow.
      // For this demo, we'll just update the profile.
      await updateProfile(auth.currentUser, {
        // Note: updateProfile does not directly set phoneNumber for auth purposes.
        // This is a UI demonstration. True MFA requires a different implementation.
      });
      setIs2faEnabled(true);
      toast({
        title: '2FA Enabled!',
        description: `Verification code sent to ${data.phoneNumber}. (Demo)`,
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: error.message,
      });
    }
  };

  const handleDisable = () => {
    // In a real app, this would require re-authentication.
    setIs2faEnabled(false);
    form.reset({ phoneNumber: '' });
    toast({
        title: '2FA Disabled',
        description: 'Two-factor authentication has been turned off.',
      });
  }

  if (is2faEnabled) {
    return (
        <div className="px-2 text-center">
            <Card className='bg-green-50 border-green-200'>
                <CardHeader>
                    <div className='flex justify-center mb-2'>
                        <ShieldCheck className='w-12 h-12 text-green-600'/>
                    </div>
                    <CardTitle className='text-green-800'>2FA is Active</CardTitle>
                    <CardDescription className='text-green-700'>
                        Your account is protected. A code will be sent to your phone number upon login.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className='text-muted-foreground mb-4'>
                        Phone number: {user?.phoneNumber || form.getValues('phoneNumber')}
                    </p>
                    <Button variant="destructive" onClick={handleDisable} className='w-full'>Disable 2FA</Button>
                </CardContent>
            </Card>
        </div>
    )
  }

  return (
    <div className='px-2'>
        <p className='text-sm text-muted-foreground mb-4'>
            Add an extra layer of security to your account. We will send a verification code to your phone number when you log in.
        </p>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                    <Input placeholder="+1 555-555-5555" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <Button type="submit" className="w-full">
                Enable Two-Factor Authentication
            </Button>
        </form>
        </Form>
    </div>
  );
}
