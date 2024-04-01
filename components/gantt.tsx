import { JSX } from "react";
import { Project, Slide, Timeline } from "../data/notion";

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
    arr.push(<div className="tl-guide">{i}</div>);
  }
  return arr;
}

async function MakeTimeline(data: any, mnYear: number) {
  let timeline: JSX.Element[] = [];

  data.forEach((item: any, index: number) => {
    const { Id, Name, Start, End, Color } = item;
    timeline.push(
      <div
        key={index}
        className="tlItem rounded"
        style={{
          gridColumnStart: Start - mnYear + 1,
          gridColumnEnd: End - mnYear + 2,
          backgroundColor: `#${Color}`,
        }}
      >
        <p className="tlText">{Name}</p>
      </div>
    );
  });
  return timeline;
}

export default async function Gantt() {
  const Data = await GetTimeline();
  return (
    <div className="overflow-x-scroll mt-16 border break-keep rounded p-1">
      <div
        style={{
          gridTemplateColumns: `repeat(${
            Data.mxYear - Data.mnYear + 1
          }, minmax(100px,1fr))`,
        }}
        className="grid gap-1"
      >
        {await MakeTimelineGuide(Data)}
        {await MakeTimeline(Data.data, Data.mnYear)}
      </div>
    </div>
  );
}
