import { fetchFeaturedProducts } from '@/utils/actions';
import EmtpyList from '../global/EmtpyList';
import SectionTitle from '../global/SectionTitle';
import ProductsGrid from '../products/ProductsGrid';

async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();
  if (products.length === 0) return <EmtpyList />;
  return (
    <section className='pt-24'>
      <SectionTitle text='featured products' />
      <ProductsGrid products={products} />
    </section>
  );
}
export default FeaturedProducts;
