'use client';

import { CheckCircle2, User, Mail, BarChart3 } from 'lucide-react';

const permissions = [
  {
    icon: User,
    title: 'Profile Information',
    description: 'We store your display name and profile picture.',
    granted: true,
  },
  {
    icon: Mail,
    title: 'Email Address',
    description: 'Used for authentication and communication.',
    granted: true,
  },
];

export function DataPermissions() {
  return (
    <div className="p-4 bg-background rounded-lg">
      <h3 className="text-lg font-semibold mb-4">
        Data We Collect & Why
      </h3>
      <div className="space-y-4">
        {permissions.map((permission) => (
          <div key={permission.title} className="flex items-start gap-4 p-3 bg-secondary/50 rounded-lg">
            <permission.icon className="w-6 h-6 text-primary mt-1" />
            <div>
              <h4 className="font-semibold">{permission.title}</h4>
              <p className="text-sm text-muted-foreground">
                {permission.description}
              </p>
            </div>
            <CheckCircle2
              className={`w-6 h-6 ml-auto mt-1 ${
                permission.granted ? 'text-green-500' : 'text-muted-foreground/30'
              }`}
            />
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-6 text-center">
        You can manage your data and privacy settings at any time. For more details, please see our Privacy Policy.
      </p>
    </div>
  );
}
