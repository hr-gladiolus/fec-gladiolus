import { useState } from 'react';

// custom modal hook
export default function useModal() {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return {
    visible,
    toggle,
  };
}
