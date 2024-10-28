import { Card } from "../components";
import { useTitle } from "../hooks";

export const Home = () => {
  useTitle("Home");
  return (
    <main className="flex gap-4 justify-evenly flex-wrap">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </main>
  );
};
