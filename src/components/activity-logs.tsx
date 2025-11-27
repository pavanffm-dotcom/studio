'use client';

import { Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const logs = [
  {
    action: 'Logged In',
    timestamp: new Date(Date.now() - 2 * 60 * 1000).toLocaleString(),
    details: 'From device: Mac, Browser: Chrome',
  },
  {
    action: 'Viewed Tool',
    timestamp: new Date(Date.now() - 5 * 60 * 1000).toLocaleString(),
    details: 'Tool: Runway',
  },
  {
    action: 'Changed Password',
    timestamp: new Date(Date.now() - 10 * 60 * 1000).toLocaleString(),
    details: 'Password was successfully updated',
  },
  {
    action: 'Updated Profile',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toLocaleString(),
    details: 'Display name changed to "AI Explorer"',
  },
  {
    action: 'Logged In',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleString(),
    details: 'From device: iPhone, Browser: Safari',
  },
];

export function ActivityLogs() {
  return (
    <div className="px-2">
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {logs.map((log, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-secondary rounded-full p-2 mt-1">
                  <Activity className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">{log.action}</p>
                  <p className="text-sm text-muted-foreground">{log.details}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {log.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
