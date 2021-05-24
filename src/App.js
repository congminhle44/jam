/** @format */
import NetWorkProvider from './providers/NetworkProvider';
import AlertProvider from './providers/AlertProvider';
import Button, { ButtonSizes, ButtonVariants } from './components/Button';
import { Cart } from './components/Icons';
import Input from './components/Input';
import ModalProvider from './providers/ModalProvider';
import ModalJotai from './components/TextModal';
import Select from './components/Dropdown/Select';
import Option from './components/Dropdown/Option';
import { useState } from 'react';
import LoadingProvider from './providers/LoadingProvider';

function App() {
  const [value, setValue] = useState();

  const handleChooseValue = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <LoadingProvider>
      <NetWorkProvider>
        <Button
          suffix={<Cart />}
          variant={ButtonVariants.Solid}
          size={ButtonSizes.Small}>
          Add to cart
        </Button>
        <Input label='Name' placeholder='Type your name' />
        <Select currentOption={value}>
          <Option onChoose={handleChooseValue} value='minh'>
            Minh
          </Option>
          <Option onChoose={handleChooseValue} value='hai'>
            Hai
          </Option>
          <Option onChoose={handleChooseValue} value='an'>
            An
          </Option>
        </Select>
        <ModalJotai />
        <AlertProvider />
        <ModalProvider />
      </NetWorkProvider>
    </LoadingProvider>
  );
}

export default App;
