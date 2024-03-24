import Image from "next/image";

import { Hero, Container, Fullscreen, List } from "../components/theme";
import Title from "../components/title";
import ListElem from "../components/list_elem";

import HeroBG from "../public/asset/image/herobg.jpg";

import { Project, Slide } from "../data/notion";

async function MakeList() {
  const ListArr = await Project();
  return ListArr.map((item: any) => ListElem(item));
}

async function MakeSlide() {
  const test = await Slide();
  return test.map((item: any, index: number) => {
    const { From, Date, Name, Link, Img } = item;
    return (
      <div key={index}>
        <a href={Link} target="_blank" rel="noreferrer noopener">
          <Image
            src={Img}
            alt={Name}
            width={1280}
            height={720}
            className="slide-img"
          />
          <p className="mt-2 text-2xl font-bold">{Name}</p>
          <div>
            <span className="pill-sm bg-blue-200">{Date}</span>
          </div>
          <p className="text-base">{From}</p>
        </a>
      </div>
    );
  });
}

export default async function Home() {
  return (
    <div className="page">
      <Hero>
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
            <p className="text-xl">23학번 헌내기 대학생입니다</p>
            <p className="text-xl">코더빡이라고 불러주시면 됩니다</p>
          </div>
        </div>
      </Hero>

      <Container>
        <div className="flex grid-col-2">
          <div className="flex-1">
            <Title header="자기소개" subheader="Introduce" />
            <div className="mt-4">
              <p className="text-xl">국민대학교 소프트웨어학부 23학번 재학생</p>
              <p className="text-xl">KMUSW KPSC 회장 (2023~2024)</p>
              <p className="text-xl">GDSC Kookmin Core Member (2024)</p>
              <p className="text-xl">Software Maestro 15기 (2024)</p>
            </div>
          </div>
          {/* <div>여기는 명함 자리</div> */}
        </div>
      </Container>

      <List>
        <Title header="프로젝트" subheader="Project" />
        <p className="text-xl">생활 속의 불편함을 소프트웨어로 해결합니다</p>
        <div className="flex flex-col mt-16 gap-8">{await MakeList()}</div>
      </List>

      <List>
        <Title header="대외활동" subheader="Timeline" />
        <p className="text-xl">
          코더빡은 어떤 삶을 살아왔는가에 대한 기록입니다
        </p>
      </List>

      <Container>
        <Title header="발표자료" subheader="Slide" />
        <p className="text-xl">발표를 통해 공유한 지식들을 정리해두었습니다</p>
        <div className="mt-8 gap-8 slide-container">{await MakeSlide()}</div>
      </Container>
    </div>
  );
}
