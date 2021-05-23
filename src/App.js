/** @format */
import NetWorkProvider from './providers/NetworkProvider';
import AlertProvider from './providers/AlertProvider';
import Button, { ButtonSizes, ButtonVariants } from './components/Button';
import { Cart } from './components/Icons';
import Input from './components/Input';
import ModalProvider from './providers/ModalProvider';
import ModalJotai from './components/TextModal';

function App() {
  return (
    <NetWorkProvider>
      <Button
        suffix={<Cart />}
        variant={ButtonVariants.Solid}
        size={ButtonSizes.Small}>
        Add to cart
      </Button>
      <Input label='Description' placeholder='Type your description' textarea />
      <ModalJotai />
      <AlertProvider />
      <ModalProvider />
    </NetWorkProvider>
  );
}

export default App;
