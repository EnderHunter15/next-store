import { fetchProductReviewsByUser } from '@/utils/actions';
import ReviewCard from './ReviewCard';
import SectionTitle from '@/components/global/SectionTitle';
import DeleteReview from './DeleteReview';

export default async function ReviewsPage() {
  const reviews = await fetchProductReviewsByUser();

  if (reviews.length === 0) {
    return <SectionTitle text='You have no reviews yet.' />;
  }

  return (
    <>
      <SectionTitle text='Your Reviews' />
      <section className='grid md:grid-cols-2 gap-8 mt-4'>
        {reviews.map((review) => {
          const { comment, rating } = review;
          const { name, image } = review.product;
          const reviewInfo = { comment, rating, name, image };

          return (
            <ReviewCard key={review.id} reviewInfo={reviewInfo}>
              <DeleteReview reviewId={review.id} />
            </ReviewCard>
          );
        })}
      </section>
    </>
  );
}
