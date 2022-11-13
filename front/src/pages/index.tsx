import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  const updateCount = () => setCount((c) => c + 1);

  return (
    <div>
      1
    </div>
  );
}
