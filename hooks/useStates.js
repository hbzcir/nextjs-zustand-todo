import { useState } from 'react';

const useStates = (initialStates) => {
  const [values, setValues] = useState(initialStates);
  const setStates = (key, value) => {
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return [values, setStates];
};

export default useStates;
