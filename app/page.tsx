import Image from "next/image";
import Test from "./components/Test";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <div>Movie Recommendations</div>
      <Test />
    </main>
  );
}
