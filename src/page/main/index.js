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
import axios from "axios";

async function query(){
  const result = await axios.post(
    `notion/databases/${process.env.REACT_APP_NOTION_DB}/query`,
    {
      page_size: 100,
    },
    {
      headers: {
        "Authorization": `Bearer ${process.env.REACT_APP_NOTION_TOKEN}`,
        "Notion-Version": "2022-06-28"
      }
    }
  );
  console.log(result);
  return result;
}

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
  query()
  //test();
  return (
    <div>
      <Container><Test/></Container>
      <Fullscreen><Test/></Fullscreen>
      <List><Test/></List>
    </div>
  );
}
export default Main;
