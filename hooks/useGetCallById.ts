import { useEffect, useState } from 'react';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';

export const useGetCallById = (id: string | string[]) => {
  const [call, setCall] = useState<Call | null>(null);
  const [isCallLoading, setIsCallLoading] = useState(true);

  const client = useStreamVideoClient();

  useEffect(() => {
    if (!client) return;

    const loadCall = async () => {
      setIsCallLoading(true); // Set loading state before fetching
      try {
        const { calls } = await client.queryCalls({ filter_conditions: { id } });

        if (calls.length > 0) {
          setCall(calls[0]);
        } else {
          setCall(null); // Handle case where no calls are found
        }
      } catch (error) {
        console.error('Error fetching call:', error);
        setCall(null); // Reset call on error
      } finally {
        setIsCallLoading(false); // Ensure loading state is updated
      }
    };

    loadCall();
  }, [client, id]);

  return { call, isCallLoading };
};