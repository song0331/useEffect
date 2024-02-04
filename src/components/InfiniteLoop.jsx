import { useEffect, useState } from "react";

export default function InfiniteLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
    console.log('무한 루프에 빠짐');
  });

  return (
    <h2>무한 루프에 빠짐</h2>
  )
}