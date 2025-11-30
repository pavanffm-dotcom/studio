'use client';

import { useState } from 'react';
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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth, initiateEmailSignIn, initiateEmailSignUp, initiateGoogleSignIn } from '@/firebase';
import { GalaxyLogo } from '@/components/galaxy-logo';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters.' }),
});

type UserFormValue = z.infer<typeof formSchema>;

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px" {...props}>
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.99,35.536,44,30.169,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
    </svg>
);


export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const auth = useAuth();
  const { toast } = useToast();
  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: UserFormValue) => {
    if (isSignUp) {
      initiateEmailSignUp(auth, data.email, data.password);
    } else {
      initiateEmailSignIn(auth, data.email, data.password);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await initiateGoogleSignIn(auth);
    } catch (error: any) {
      console.error("Google Sign-In Error:", error);
      toast({
        variant: "destructive",
        title: "Google Sign-In Failed",
        description: error.message || "An unknown error occurred during Google sign-in.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-soft-blue via-lavender to-baby-pink p-4">
      <Card className="w-full max-w-sm bg-card/80 backdrop-blur-3xl rounded-[2.5rem] shadow-2xl border-t-2 border-white/50 soft-shadow">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <GalaxyLogo className="w-12 h-12" />
          </div>
          <CardTitle className="text-2xl font-bold">
            {isSignUp ? 'Create an Account' : 'Welcome Back'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...field}
                        className="bg-secondary/50 border-white/30 rounded-xl h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                        className="bg-secondary/50 border-white/30 rounded-xl h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full h-12 text-lg font-bold glow-shadow">
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </Button>
            </form>
          </Form>

          <div className="flex items-center my-6">
            <Separator className="flex-1" />
            <span className="px-4 text-sm text-muted-foreground">OR</span>
            <Separator className="flex-1" />
          </div>
          
          <Button variant="outline" className="w-full h-12 text-base font-bold bg-white/50" onClick={handleGoogleSignIn}>
            <GoogleIcon className="mr-2" />
            Sign in with Google
          </Button>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              <Button
                variant="link"
                className="pl-2 text-primary"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
