import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      <button onClick={() => setCount(count + 100)}>Värdet är {count}</button>
    </>
  );
};

export default Button;
