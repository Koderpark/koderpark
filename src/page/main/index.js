import { Outlet } from "react-router-dom";

import Hero from "./Hero.js";
import { BusinessCard } from "./BusinessCard.js";
import Award from "./Award.js";
import Interest from "./Interest.js";
import Timeline from "./Timeline.js";

import Container from "../section/container.js";
import List from "../section/list.js";
import Fullscreen from "../section/fullscreen.js";

import "../../style/vars.css";

function Test(){
  return (
    <div>
      <p className="text-4xl font-bold">2023</p>
      <p className="text-8xl font-bold">Portfolio</p>
      <p className="text-4xl font-bold mb-4">Koder / 박성훈</p>
      <p className="text-xl">2004년생 새내기 대학생입니다</p>
      <p className="text-xl">코더빡이라고 불러주시면 됩니다</p>
    </div>
  )
}

function Main() {
  return (
    <div>
      <Container><Test/></Container>
      <Fullscreen><Test/></Fullscreen>
      <List><Test/></List>
    </div>
  );
}
export default Main;
