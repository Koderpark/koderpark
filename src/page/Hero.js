import Card from "./Card.js";
import "./Hero.css";

function Hero() {
  return (
    <div className="bg-slate-100 text-slate-900 h-screen p-24 grid">
      <div className="grid grid-cols-2 grid-flow-row gap-4">
        <div className="place-self-center w-full">
          <p className="text-4xl font-bold">2023</p>
          <p className="text-8xl font-bold">Portfolio</p>
          <p className="text-4xl font-bold">Koder / 박성훈</p>
          <hr />
          <p className="text-xl mb-4">Currently Interested In : </p>
          <div className="flex flex-wrap gap-2 pb-4 tagbox">
            <button class="rounded-full bg-red-500">Design</button>
            <button class="rounded-full bg-red-500">Web Backend</button>
            <button class="rounded-full bg-orange-500">Sysadmin</button>
            <button class="rounded-full bg-blue-500">Problem Solving</button>
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
