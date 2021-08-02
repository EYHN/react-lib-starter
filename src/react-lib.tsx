import { FunctionComponent, useCallback, useState } from 'react';

export const ExampleComponent: FunctionComponent = () => {
  const [count, setCount] = useState<number>(0);

  const AddOne = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <div>
      Example React Component: {count} <button onClick={AddOne}>+1</button>
    </div>
  );
};
