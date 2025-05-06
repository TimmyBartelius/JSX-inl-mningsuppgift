import useCounter from "../store/useCounter";

export default function Home() {
  const { count, increase } = useCounter();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increase</button>
    </div>
  );
}
