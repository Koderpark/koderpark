import "./Card.css";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

function BusinessCard() {
  const [isFlip, setFlip] = useState(true);
  return (
    <div className="card-container">
      <CSSTransition in={isFlip} timeout={300} classNames="flip">
        <Card
          onClick={() => {
            setFlip((v) => !v);
            //alert(isFlip);
          }}
        />
      </CSSTransition>
    </div>
  );
}

function Card({ onClick }) {
  return (
    <div className="card-wrapper bg-slate-50 shadow-lg p-0" onClick={onClick}>
      <div className="card front p-4">
        <div className="mb-2">
          <div className="bg-slate-900 text-slate-50 inline-block p-1">
            <p className="text-4xl font-bold inline">박성훈 </p>
            <p className="text-xl fond-bold inline">Koderpark</p>
          </div>
        </div>
        <div className="mb-2">
          <div className="bg-slate-200 text-slate-900 inline-block px-1">
            <p className="text-lg">국민대학교 소프트웨어학부 23학번</p>
          </div>
        </div>
        <p className="text-sm">
          "다섯 사람의 한 시간을 위해 다섯 시간을 쓰는 사람이 되고자 합니다"
        </p>
      </div>

      <div className="card back p-4 bg-slate-50">
        <h1>BACK TEST</h1>
      </div>
    </div>
  );
}

function Front() {
  return (
    <div className="h-full w-full card-front p-4">
      <div className="mb-2">
        <div className="bg-slate-900 text-slate-50 inline-block p-1">
          <p className="text-4xl font-bold inline">박성훈 </p>
          <p className="text-xl fond-bold inline">Koderpark</p>
        </div>
      </div>
      <div className="mb-2">
        <div className="bg-slate-200 text-slate-900 inline-block px-1">
          <p className="text-lg">국민대학교 소프트웨어학부 23학번</p>
        </div>
      </div>
      <p className="text-sm">
        다섯 사람의 한 시간을 위해 다섯 시간을 쓰는 사람이 되고자 합니다.
        <br />
        필요하다면 언제나 배우는 능동적인 사람이 되고 싶습니다.
      </p>
    </div>
  );
}

function Back() {
  return (
    <div className="h-full w-full card-back">
      <h1>BACK TEST</h1>
    </div>
  );
}

export default BusinessCard;
