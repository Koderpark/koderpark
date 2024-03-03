import Image from "next/image";

import { Container, Fullscreen, List } from "../components/theme";
import Title from "../components/title";
import ListElem from "../components/list_elem";

import HeroBG from "../public/asset/image/herobg.jpg";

import Test from "../data/notion";

async function MakeList() {
  const ListArr = await Test();
  return ListArr.map((item: any) => ListElem(item));
}

export default async function Home() {
  return (
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
            <p className="text-xl">23학번 헌내기 대학생입니다</p>
            <p className="text-xl">코더빡이라고 불러주시면 됩니다</p>
          </div>
        </div>
      </Container>

      <Fullscreen>
        <div className="flex grid-col-2">
          <div className="flex-1">
            <Title header="자기소개" subheader="Introduce" />
            <div className="mt-4">
              <p className="text-xl">국민대학교 소프트웨어학부 23학번 재학생</p>
              <p className="text-xl">KMUSW KPSC 회장 (2023~2024)</p>
              <p className="text-xl">GDSC Kookmin Core Member (2024)</p>
            </div>
          </div>
          {/* <div>여기는 명함 자리</div> */}
        </div>
      </Fullscreen>

      <List>
        <Title header="프로젝트" subheader="Project" />
        <div className="flex flex-col mt-16 gap-8">{await MakeList()}</div>
      </List>

      <List>
        <Title header="대외활동" subheader="Achievement" />
      </List>
    </div>
  );
}
