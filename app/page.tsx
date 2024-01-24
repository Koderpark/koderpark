import Image from "next/image";
import Container from "../components/container";
import Fullscreen from "../components/fullscreen";
import List from "../components/list";
import Header from "../components/header";

import HeroBG from "../public/asset/image/herobg.jpg";
const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_SECRET });

async function Test() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DB,
  });

  return response.results.map((item: any, idx: number) => {
    const Title = item.properties["Title"].title[0].text.content;
    const Year = item.properties["Year"].select.name;
    const Type = item.properties["Type"].select.name;
    const Tech = item.properties["Tech"].multi_select.map(
      (x: any, idx: number) => {
        return (
          <span key={idx} className={`pill pill-sm bg-${x.color}-200`}>
            {x.name}
          </span>
        );
      }
    );
    const Content = item.properties["Content"].rich_text[0].text.content;
    const Url = item.properties["Url"].url;

    return (
      <div key={idx} className="">
        <div className="flex gap-1 mb-2">{Tech}</div>
        <a href={Url} className="text-3xl font-bold">
          {Title}
        </a>
        <span className="text-base font-semibold">{Year + " | " + Type}</span>
        <p>{Content}</p>
      </div>
    );
  });
}

export default async function Home() {
  return (
    <div className="bg-light">
      <Header />
      <div className="page">
        <Container>
          <div className="grid relative p-16">
            <div className="absolute top-0 left-0 size-full bg-black">
              <Image
                src={HeroBG}
                alt=""
                className="h-full object-cover opacity-60"
              />
            </div>
            <div className="relative text-gray-100 lib-grid">
              <p className="text-4xl font-bold">2024</p>
              <p className="text-8xl font-bold">Portfolio</p>
              <p className="text-4xl font-bold mb-4">Koder / 박성훈</p>
              <p className="text-xl">2004년생 헌내기 대학생입니다</p>
              <p className="text-xl">코더빡이라고 불러주시면 됩니다</p>
            </div>
          </div>
        </Container>

        <Fullscreen>
          <h1>test</h1>
        </Fullscreen>

        <List>
          <div className="flex flex-col gap-8">{Test()}</div>
        </List>
      </div>
    </div>
  );
}
