import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Updating...</h1>
        <h3>While waiting you can still check the prievious version <a href="https://riccardo-lamalfa.vercel.app/">here.</a></h3>
        <h3>Thans for your patience</h3>
      </div>
    </main>
  );
}
