import Image from "next/image";
import { List } from "../../components/theme";

import HeroBG from "../../public/asset/image/herobg.jpg";

import { Container } from "../../../ReactComponent/";

export default async function Home() {
  return (
    <div className="page">
      <Container size="l">
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
            <p className="text-8xl font-bold">테스트</p>
            <p className="text-4xl font-bold mb-4">Koder / 박성훈</p>
            <p className="text-xl">코딩테스트 / 알고리즘 과외</p>
            <p className="text-xl">코더빡이라고 불러주시면 됩니다</p>
          </div>
        </div>
      </Container>

      <Container type="heavy" size="xl">
        <h1>hello world</h1>
      </Container>

      <Container type="heavy" size="m">
        <h1>test1</h1>
        <h1>test1</h1>
        <h1>test1</h1>
        <h1>test1</h1>
        <h1>test1</h1>
      </Container>
    </div>
  );
}
