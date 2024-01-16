import Image from 'next/image'
import Container from '../components/container';
import Fullscreen from '../components/fullscreen';
import List from '../components/list';


import HeroBG from "../public/asset/image/herobg.jpg";
const { Client } = require('@notionhq/client');

export default async function Home(){
  return (
    <div>
      <Header></Header>
      <Container>{Hero()}</Container>
      <Fullscreen>{Introduce()}</Fullscreen>
      <List {...(<div><h1>test</h1></div>)}/>
    </div>
  )
}

function Header(){
  return (
    <header id="gh-head" className="px-12 py-8 bg-light">
    <nav className="gh-head-inner grid w-full mb-16">

    <div className="gh-head-brand">
      <a className="gh-head-logo text-2xl font-bold" href="{{@site.url}}">
        HELLOWORLd
      </a>
      <a className="gh-burger" role="button" aria-label="menu">
        <div className="gh-burger-box">
          <div className="gh-burger-inner"></div>
        </div>
      </a>
    </div>
    <div className="gh-head-menu flex items-center text-base">
      <div>test</div>
    </div>
    <div className="gh-head-actions">
      <div className="gh-head-actions-list">

      </div>
    </div>
  </nav>
</header>
  )
}

function Hero(){
  return (
    <div className="grid relative p-16">
      <div className="absolute top-0 left-0 size-full bg-black">
        <Image src={HeroBG} alt="" className="h-full object-cover opacity-60"/>
      </div>
      <div className="relative text-gray-100 lib-grid">
        <p className="text-4xl font-bold">2024</p>
        <p className="text-8xl font-bold">Portfolio</p>
        <p className="text-4xl font-bold mb-4">Koder / 박성훈</p>
        <p className="text-xl">2004년생 헌내기 대학생입니다</p>
        <p className="text-xl">코더빡이라고 불러주시면 됩니다</p>
      </div>
    </div>
  )
}

function Introduce(){
  return (
    <h1>test</h1>
  )
}

const notion = new Client({ auth: process.env.NOTION_SECRET });

async function test(){
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DB
  });
  return response;
}
