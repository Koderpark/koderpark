import "../style/Card.css";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

import {
  AtSymbolIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

function FlipCard() {
  const [isFlip, setFlip] = useState(true);
  return (
    <div className="card-container">
      <CSSTransition in={isFlip} timeout={300} classNames="flip">
        <div
          className="card-wrapper bg-slate-50 text-slate-950 shadow-lg p-0"
          onClick={() => setFlip((v) => !v)}
        >
          <Front />
          <Back />
        </div>
      </CSSTransition>
    </div>
  );
}

function Front() {
  return (
    <div className="card front">
      <div className="relative h-full w-full">
        <div className="mb-2">
          <div className="bg-slate-900 text-slate-50 inline-block p-1">
            <p className="text-4xl font-bold inline">박성훈 </p>
            <p className="text-xl fond-bold inline">Koderpark</p>
          </div>
        </div>

        <div className="mb-2">
          <div className="inline-block px-1">
            <p>한 명의 다섯 시간으로 다섯 명의 한 시간을 만드는게</p>
            <p>프로그래머라 생각합니다</p>
          </div>
        </div>
        <div className="mb-2">
          <div className="inline-block px-1">
            <p>그 "한명"이 될 수 있도록 노력하고 있습니다</p>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 bg-slate-200 text-slate-950 px-2 py-1">
          <div className="contact">
            <DevicePhoneMobileIcon />
            <p className="text-sm">+82 10 7399 6630</p>
          </div>

          <div className="contact">
            <AtSymbolIcon />
            <p className="text-sm">koder0205@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Back() {
  return (
    <div className="card back">
      <div className="mb-2">
        <div className="bg-slate-900 text-slate-50 inline-block p-1">
          <p className="text-2xl font-bold">Link</p>
        </div>
      </div>
    </div>
  );
}

function BusinessCard() {
  return (
    <div className="bg-slate-800 text-slate-50 px-24 py-16 overflow-auto">
      <div className="float-left w-fit h-full grid">
        <div>
          <p className="text-6xl font-bold inline-block">Business Card</p>

          <p className="text-2xl font-bold inline-block ms-2">Flippable</p>
        </div>
        <p className="text-lg">사이버-명함입니다</p>
        <p className="text-lg">클릭으로 뒤집어 보실 수 있습니다</p>
        <p className="text-lg">
          블로그를 포함한 다양한 페이지에서 만나보실 수 있습니다(예정됨)
        </p>
      </div>

      <div className="float-right w-fit h-full grid">
        <FlipCard />
      </div>
    </div>
  );
}
export default BusinessCard;
