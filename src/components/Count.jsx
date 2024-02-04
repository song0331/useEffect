import { useEffect, useState } from "react";

export default function Count() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const plus1 = () => setNum1(num1 + 1)
  const minus1 = () => setNum1(num1 - 1)

  const plus2 = () => setNum2(num2 + 1)
  const minus2 = () => setNum2(num2 - 1)

  useEffect(() => {
    console.log('렌더링됨');
  }, [num1, num2])


  return (
    <div className="count_container">

      <div className="num1_wrapper">
        <span>{`num1 = ${num1}`}</span>
        <button type="button" onClick={plus1}>Plus</button>
        <button type="button" onClick={minus1}>Minus</button>
      </div>

      <div className="num2_wrapper">
        <span>{`num2 = ${num2}`}</span>
        <button type="button" onClick={plus2}>Plus</button>
        <button type="button" onClick={minus2}>Minus</button>
      </div>

    </div>
  )
}