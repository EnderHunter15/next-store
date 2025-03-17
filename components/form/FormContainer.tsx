'use client';

import { useActionState } from 'react';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { actionFunction } from '@/utils/types';

const initialState = {
  message: '',
};

export default function FormContainer({ action, children }: { action: actionFunction; children: React.ReactNode }) {
  const [state = initialState, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state && state.message) {
      toast(`${state.message}`);
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}
