import AwardsData from "../../data/Awards.json";
import "../../style/Prize.css";

/*import { Client } from "@notionhq/client";
const notion = new Client({
  auth: process.env.REACT_APP_TEST,
  notionVersion: "2022-06-28",
});

async function ParsePrizeList() {
  //console.log(notion);

  const response = await notion.databases.query({
    database_id: "a22a7421f4ee4ea6aca32be5b142ce08",
  });
  //alert("HELLO2");
  alert(JSON.stringify(response));
  return null;
}*/

function Award() {
  return (
    <div className="bg-slate-100 text-slate-950">
      <div className="p-24">
        <p className="text-6xl font-bold">Awards / Honors</p>
        <p className="text-lg">
          수십 마디 말보다 서류 한장이 더 깔끔하다고 생각합니다
        </p>
      </div>
      <div className="px-24 pb-24">
        {/*<div className="float-right w-fit bg-slate-200 shadow-lg p-4 ms-4 m-2">
          <p className="text-4xl font-bold mb-4 ">Selector</p>
          <div>
            <p className="text-xl font-bold">정렬 방법</p>
            <form>
              <input type="radio" value="recent" />
              <p className="text-md">최신순</p>
              <input type="radio" value="grade" />
              <p className="text-md">등급순</p>

              <input type="checkbox" />
              <p className="text-md">등급순</p>
            </form>
          </div>
  </div>*/}
        <div class="">
          <PrizeList />
          {/*<PrizeList /> */}
        </div>
      </div>

      {/*
      <div className="w-full carousel gap-4 pb-24">
        <Flickity className="gap-4 p-4" options={flkty}>
          <PrizeCarousel />
        </Flickity>
      </div>
      */}
    </div>
  );
}

function PrizeCarousel() {
  const ret = AwardsData.results.map((x) => {
    return {
      name: x.properties.이름.title[0].plain_text,
      type: x.properties.분류.select.name,
      date: x.properties.날짜.date.start,
      link: x.properties.후기글.url,
      period: x.properties.부.select.name,
    };
  });

  const ret2 = ret.map((x) => PrizeCarouselItem(x));
  return ret2;
}

function PrizeList() {
  const ret = AwardsData.results.map((x) => {
    return {
      name: x.properties.이름.title[0].plain_text,
      type: x.properties.분류.select.name,
      date: x.properties.날짜.date.start,
      link: x.properties.후기글.url,
      period: x.properties.부.select.name,
    };
  });

  ret.sort();

  const ret2 = ret.map((x) => PrizeListItem(x));
  return ret2;
}

function PrizeCarouselItem(x) {
  let tagClass = "";
  if (x.type === "금상") tagClass = "bg-yellow-400";
  if (x.type === "은상") tagClass = "bg-zinc-400";
  if (x.type === "동상") tagClass = "bg-amber-800";
  if (x.type === "장려상") tagClass = "bg-slate-700";
  if (x.type === "수료증/표창장") {
    tagClass = "bg-sky-400";
    return;
  }
  return (
    <div className="bg-slate-950 shadow-lg p-4 m-2">
      <div className="flex gap-2 mb-4">
        <button class={`rounded-full ${tagClass}`}>{x.type}</button>
        <button class="rounded-full bg-slate-50 text-slate-950">
          {x.period}
        </button>
      </div>
      <div>
        <p className="text-xl">{x.name}</p>
        <p className="text-sm">{x.date}</p>
      </div>
    </div>
  );
}

function PrizeListItem(x) {
  let tagClass = "";
  if (x.type === "금상") tagClass = "bg-yellow-400";
  if (x.type === "은상") tagClass = "bg-zinc-400";
  if (x.type === "동상") tagClass = "bg-amber-800";
  if (x.type === "장려상") tagClass = "bg-slate-950";
  if (x.type === "수료증/표창장") {
    tagClass = "bg-sky-400";
    return;
  }

  return (
    <div className="">
      <div className="mb-4">
        <p
          className={`inline-block award-type rounded-full text-slate-50 ${tagClass}`}
        >
          {x.type}
        </p>
        <p className="text-xl inline-block mx-2">{x.name}</p>
        <p className="award-date text-sm inline-block">{x.date}</p>
      </div>
    </div>
  );
}

export default Award;
