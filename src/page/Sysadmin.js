import Card from "./Card.js";
import "./Hero.css";

function Hero() {
  return (
    <div className="bg-slate-950 text-slate-50 h-screen p-24 grid">
      <div className="inline-block">
        <p className="text-6xl font-bold bg-orange-500 inline">Sysadmin</p>
      </div>
      <div className="grid grid-cols-2 grid-flow-row gap-4">
        <div className="place-self-center w-full">
          <p className="text-8xl font-bold mb-4">Portfolio</p>
          <p className="text-4xl font-bold mb-4">Koder / 박성훈</p>

          <p className="text-xl mb-2">Currently Interested In : </p>
          <div className="flex gap-3 pb-4">
            <button class="rounded-full bg-red-500">Backend</button>
            <button class="rounded-full bg-orange-500">Sysadmin</button>
            <button class="rounded-full bg-blue-500">Problem Solving</button>
            <button class="rounded-full bg-rose-500">Tech</button>
            <button class="rounded-full bg-violet-500">Note-taking</button>
          </div>
        </div>
        <div className="place-self-center w-full">
          <div className="float-right">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
