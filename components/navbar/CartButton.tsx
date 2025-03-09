import Link from 'next/link';
import { Button } from '../ui/button';
import { LuShoppingCart } from 'react-icons/lu';
function CartButton() {
  //temp
  const numItemsInCart = 9;

  return (
    <Button asChild variant='outline' size='icon' className='flex justify-center items-center relative'>
      <Link href='/cart'>
        <LuShoppingCart />
        <span className='absolute -top-2 -right-2 bg-blue-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs'>
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}
export default CartButton;
