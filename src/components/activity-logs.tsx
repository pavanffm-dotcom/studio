
'use client';

import { Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useCollection, useFirestore, useUser, useMemoFirebase } from '@/firebase';
import { collection, query, where, orderBy, Timestamp } from 'firebase/firestore';
import { Skeleton } from './ui/skeleton';
import { formatDistanceToNow } from 'date-fns';

interface ActivityLog {
    id: string;
    userId: string;
    toolName: string;
    action: string;
    timestamp: Timestamp;
}

const LogSkeleton = () => (
    <div className="flex items-start gap-4">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-2">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-3 w-32" />
        </div>
    </div>
)

export function ActivityLogs() {
  const { user } = useUser();
  const firestore = useFirestore();

  const activityLogsQuery = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return query(
        collection(firestore, 'activity_logs'), 
        where('userId', '==', user.uid),
        orderBy('timestamp', 'desc')
    );
  }, [firestore, user]);

  const { data: logs, isLoading } = useCollection<ActivityLog>(activityLogsQuery);

  return (
    <div className="px-2">
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {isLoading && (
                <>
                    <LogSkeleton />
                    <LogSkeleton />
                    <LogSkeleton />
                </>
            )}
            {logs && logs.length > 0 ? (
                logs.map((log) => (
                    <div key={log.id} className="flex items-start gap-4">
                        <div className="bg-secondary rounded-full p-2 mt-1">
                        <Activity className="w-5 h-5 text-secondary-foreground" />
                        </div>
                        <div>
                        <p className="font-semibold">
                            Viewed <span className="text-primary">{log.toolName}</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {log.timestamp ? formatDistanceToNow(log.timestamp.toDate(), { addSuffix: true }) : '...'}
                        </p>
                        </div>
                    </div>
                ))
            ) : (
                !isLoading && <p className='text-sm text-muted-foreground text-center'>No activity recorded yet.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
