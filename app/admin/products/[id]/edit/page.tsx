import { fetchAdminProductDetails, updateProductAction, updateProductImageAction } from '@/utils/actions';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import { SubmitButton } from '@/components/form/Buttons';
import CheckboxInput from '@/components/form/CheckboxInput';
import ImageInputContainer from '@/components/form/ImageInputContainer';

// For Next.js App Router, we need to export a component that accepts params
export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  // We need to await the params since it's a Promise
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const product = await fetchAdminProductDetails(id);

  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>update product</h1>
      <div className='border p-8 rounded'>
        <ImageInputContainer
          action={updateProductImageAction}
          name={product.name}
          image={product.image}
          text='update image'
        >
          <input type='hidden' name='id' value={id} />
          <input type='hidden' name='url' value={product.image} />
        </ImageInputContainer>
        <FormContainer action={updateProductAction}>
          <div className='grid gap-4 md:grid-cols-2 my-4'>
            <input type='hidden' name='id' value={id} />
            <FormInput type='text' name='name' label='product name' defaultValue={product.name} />
            <FormInput type='text' name='company' defaultValue={product.company} />
            <PriceInput defaultValue={product.price} />
          </div>
          <TextAreaInput name='description' labelText='product description' defaultValue={product.description} />
          <div className='mt-6'>
            <CheckboxInput name='featured' label='featured' defaultChecked={product.featured} />
          </div>
          <SubmitButton text='update product' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  );
}
