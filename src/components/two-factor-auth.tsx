
'use client';

import { useEffect, useState } from 'react';
import { useAuth, useUser } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ShieldCheck, ShieldOff } from 'lucide-react';
import { Button } from './ui/button';


export function TwoFactorAuth() {
  const { user } = useUser();
  const { toast } = useToast();
  const [is2faEnabled, setIs2faEnabled] = useState(false);

  useEffect(() => {
    if (user) {
        // In a real app, you'd check a specific MFA flag for the user.
        // For this UI demo, we'll simulate it being off by default.
        setIs2faEnabled(false);
    }
  }, [user]);

  const handleEnable = () => {
    // In a real app, this would trigger a more complex verification flow.
    setIs2faEnabled(true);
    toast({
        title: '2FA Enabled!',
        description: `Two-factor authentication is now active. (Demo)`,
    });
  }


  const handleDisable = () => {
    // In a real app, this would require re-authentication.
    setIs2faEnabled(false);
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
                        Your account is protected with two-factor authentication.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button variant="destructive" onClick={handleDisable} className='w-full'>Disable 2FA</Button>
                </CardContent>
            </Card>
        </div>
    )
  }

  return (
    <div className='px-2'>
        <div className="text-center">
            <Card className='bg-yellow-50 border-yellow-200'>
                <CardHeader>
                    <div className='flex justify-center mb-2'>
                        <ShieldOff className='w-12 h-12 text-yellow-600'/>
                    </div>
                    <CardTitle className='text-yellow-800'>2FA is Inactive</CardTitle>
                    <CardDescription className='text-yellow-700'>
                        Add an extra layer of security to your account.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                     <Button onClick={handleEnable} className='w-full'>Enable 2FA</Button>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
