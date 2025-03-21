import { Label } from '../ui/label';
import { Input } from '../ui/input';

export default function ImageInput() {
  const name = 'image';
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        Image
      </Label>
      <Input id={name} name='image' type='file' required accept='image/*' />
    </div>
  );
}
