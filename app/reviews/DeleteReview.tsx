'use client';

import { deleteReviewAction } from '@/utils/actions';
import FormContainer from '@/components/form/FormContainer';
import { IconButton } from '@/components/form/Buttons';

export default function DeleteReview({ reviewId }: { reviewId: string }) {
  async function handleDelete() {
    return await deleteReviewAction({ reviewId });
  }

  return (
    <FormContainer action={handleDelete}>
      <IconButton actionType='delete' />
    </FormContainer>
  );
}
