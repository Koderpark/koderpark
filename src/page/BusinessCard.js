import "../style/Card.css";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import QR from "../images/QR.png";
import Icon from "../images/profile/only.png";

import {
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  HomeIcon,
  PencilSquareIcon,
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
    <div className="card front bg-slate-50 text-slate-950 p-4">
      <div className="flex flex-col h-full w-full">
        <div className="text-sm font-bold border-l-4 border-slate-600 px-2 py-1">
          <p>한 명의 다섯 시간으로 다섯 명의 한 시간을 만들어내는 직업이</p>
          <p>프로그래머라 생각합니다.</p>
          <p>그 "한 명"이 되고자 노력하고 있습니다.</p>
        </div>
        <div class="flex grow">
          <div className="place-self-end float-right">
            <div className="float-right bg-slate-950 shadow text-slate-50 p-1 mb-1">
              <p className="text-4xl font-bold inline">박성훈 </p>
              <p className="text-xl fond-bold inline">Koderpark</p>
            </div>

            <div className="float-right bg-slate-950 shadow text-slate-50 px-1">
              <p className="text-base font-bold">
                국민대학교 소프트웨어학부 학부생
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Back() {
  return (
    <div className="card back grid grid-rows-2">
      <div className="grow title p-6">
        <img src={Icon} className="h-full" />
      </div>
      <div className="flex">
        <div className="grow flex">
          <div className="self-center px-3">
            <div className="contact">
              <HomeIcon />
              <p className="text-sm font-bold">자기소개</p>
              <p className="text-sm">https://koder.page</p>
            </div>

            <div className="contact">
              <PencilSquareIcon />
              <p className="text-sm font-bold">블로그</p>
              <p className="text-sm">https://blog.koder.page</p>
            </div>

            <div className="contact">
              <DevicePhoneMobileIcon />
              <p className="text-sm font-bold">전화번호</p>
              <p className="text-sm">+82 10 7399 6630</p>
            </div>

            <div className="contact">
              <EnvelopeIcon />
              <p className="text-sm font-bold">이메일</p>
              <p className="text-sm">koder0205@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="p-2">
          <img src={QR} className="h-full" />
        </div>
      </div>
    </div>
  );
}

function BusinessCard() {
  return (
    <div className="bg-slate-800 text-slate-50 p-24 overflow-auto">
      <div className="float-left w-fit h-full grid">
        <div>
          <p className="text-6xl font-bold inline-block">Business Card</p>

          <p className="text-2xl font-bold inline-block ms-2">Flippable</p>
        </div>
        <p className="text-lg">사이버 - 명함입니다</p>
        <p className="text-lg mb-4">
          명함을 클릭하시면 뒷면도 확인해 보실 수 있습니다
        </p>
        <p className="text-lg">블로그를 포함한 다양한 페이지부터</p>
        <p className="text-lg">직접 대면했을때까지</p>
        <p className="text-lg">다양한 상황에서 만나보실 수 있습니다(예정됨)</p>
      </div>

      <div className="float-right w-fit h-full grid">
        <FlipCard />
      </div>
    </div>
  );
}
export default BusinessCard;
