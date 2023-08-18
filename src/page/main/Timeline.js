import "../../style/Timeline.css";
import tasks from "../../data/Timeline.json";

let start = 2015;
let end = 2023;
let length = Math.min(12, end - start + 1);

const school = [
  {
    name: "공주신월초등학교 재학",
    start: 2015,
    end: 2015,
    bg: "#0cb14b",
  },
  {
    name: "아름초등학교 재학",
    start: 2016,
    end: 2016,
    bg: "#153958",
  },
  {
    name: "아름중학교 재학",
    start: 2017,
    end: 2019,
    bg: "#900026",
  },
  {
    name: "아름고등학교 재학",
    start: 2020,
    end: 2022,
    bg: "#3594d3",
  },
  {
    name: "국민대학교 재학",
    start: 2023,
    end: 2024,
    bg: "#004f9f",
  },
];

function TimelineRange() {
  let elem = [];

  for (let i = start; i <= end; i++) {
    elem.push(
      <div className="inline-block">
        <p className="text-xl text-center TimelineYear p-2">{i}</p>
      </div>
    );
  }
  return elem;
}

function School() {
  let ret = school.map((x) => {
    //let margin = (x.start - start) * 200;
    let width = (x.end - x.start + 1) * 200;
    return (
      <div
        className="inline-block"
        style={{
          backgroundColor: x.bg,
          width: width,
        }}
      >
        <p className="px-2 text-slate-50">{x.name}</p>
      </div>
    );
  });
  return ret;
}

function TimelineList() {
  let ret = tasks.map((x) => {
    let margin = (x.start - start) * 200;
    let width = (x.end - x.start + 1) * 200;
    let name = x.name.map((y) => {
      return <p className="px-2 text-slate-50">{y}</p>;
    });
    return (
      <div
        className="break-all"
        style={{
          backgroundColor: x.bg,
          width: width,
          marginLeft: margin,
        }}
      >
        {name}
      </div>
    );
  });
  return ret;
}

function Timeline() {
  return (
    <div>
      <div className="bg-slate-100 text-slate-950 pt-24 pb-24">
        <div className="mx-24 mb-16">
          <p className="text-6xl font-bold">Timeline</p>
          <p className="text-lg">20XX 년의 저는 무엇을 하고 있었을까요</p>
        </div>
        <div className="gantt h-full w-full overflow-x-scroll Timeline bg-slate-200">
          <div>
            <TimelineRange />
          </div>
          <div className="mb-2">
            <School />
          </div>
          <div className="whitespace-normal mb-3">
            <TimelineList />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Timeline;
