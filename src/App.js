/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';
import Button, { ButtonSizes, ButtonVariants } from './components/Button';
import { Cart } from './components/Icons';
import Input from './components/Input';

function App() {
  return (
    <div className='App'>
      <Typography variant={TypographyVariants.Title3}>Hello world</Typography>
      <Button
        size={ButtonSizes.Small}
        suffix={<Cart />}
        variant={ButtonVariants.Solid}>
        Hello world
      </Button>
      <Input textarea placeholder='Type your name' label='Name' />
    </div>
  );
}

export default App;
