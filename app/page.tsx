import Image from "next/image";
import { Container } from "../components/container";
import { Hero, List } from "../components/theme";
import Title from "../components/title";
import ListElem from "../components/list_elem";

import HeroBG from "../public/asset/image/herobg.jpg";
import Gantt from "../components/gantt";
import Contact from "../components/contact";

import { Project, Slide, Timeline } from "../data/notion";

async function MakeList() {
  const ListArr = await Project();
  return ListArr.map((item: any) => ListElem(item));
}

async function MakeSlide() {
  const test = await Slide();
  return test.map((item: any, index: number) => {
    const { From, Date, Name, ID, Img } = item;
    const Link = `https://koderpark.github.io/StaticAssets/Slide/${ID}.pdf`;
    const Thumbnail = `https://koderpark.github.io/StaticAssets/SlideThumbnail/${ID}.png`;
    return (
      <div key={index}>
        <a href={Link} target="_blank" rel="noreferrer noopener">
          <Image
            src={Thumbnail}
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

async function GetTimeline() {
  const query = await Timeline();

  const mnYear = Math.min(
    ...query.map((item: any, idx: number) => {
      return item.Start;
    })
  );
  const mxYear = Math.max(
    ...query.map((item: any, idx: number) => {
      return item.End;
    })
  );

  return { data: query, mnYear, mxYear };
}

async function MakeTimelineGuide(tlData: any) {
  let arr = [];
  for (let i = tlData.mnYear; i <= tlData.mxYear; i++) {
    arr.push(<div className="w-64">{i}</div>);
  }
  return arr;
}

export default function Home() {
  const tlData = GetTimeline();

  return (
    <div className="page pb-32">
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
            <p className="text-8xl font-bold">Portfolio</p>ㅌ
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
              <p className="text-xl">
                국민대학교 소프트웨어학부 23학번 재학생입니다.
              </p>
              <p className="text-xl">
                백엔드 소프트웨어 엔지니어를 희망하고 있습니다.
              </p>
              <p className="text-xl">GDSC Kookmin Core Member (2024)</p>
              <p className="text-xl">Software Maestro 15기 (2024)</p>
            </div>
          </div>
          <div>여기는 명함 자리</div>
        </div>
      </Container>

      <Container size="m">
        <Title header="기술 스택" subheader="Tech Stack" />
        <p className="text-xl">저는 이런 것들에 관심을 가지고 있습니다</p>
        <div className="p-4 my-4 rounded-xl bg-heavy">
          <i className="devicon-react-original colored" />
          <i className="devicon-nextjs-plain colored" />
          <i className="devicon-typescript-plain colored" />
          <i className="devicon-javascript-plain colored" />
          <i className="devicon-tailwindcss-plain colored" />
          <i className="devicon-nodejs-plain-wordmark colored" />
          <i className="devicon-cplusplus-plain colored" />
          <i className="devicon-docker-plain colored" />

          <i className="devicon-jenkins-line" />

          <i className="devicon-mysql-original colored" />
          <i className="devicon-notion-plain" />
        </div>
      </Container>

      <Container type="heavy" size="xl">
        <Title header="대외활동" subheader="Timeline" />
        <p className="text-xl">
          코더빡은 어떤 삶을 살아왔는가에 대한 기록입니다
        </p>
        <Gantt></Gantt>
      </Container>

      <Container size="m">
        <Title header="프로젝트" subheader="Project" />
        <p className="text-xl">생활 속의 불편함을 소프트웨어로 해결합니다</p>
        <div className="flex flex-col mt-16 gap-8">{MakeList()}</div>
      </Container>

      <Container size="xl">
        <Container size="m">
          <Title header="발표자료" subheader="Slide" />
          <p className="text-xl">
            발표를 통해 공유한 지식들을 정리해두었습니다
          </p>
        </Container>
        <div className="mt-8 gap-8 slide-container">{MakeSlide()}</div>
      </Container>

      <Contact></Contact>
    </div>
  );
}
