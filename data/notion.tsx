const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_SECRET });

export default async function Test() {
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

    return {
      Tech,
      Url,
      Title,
      Year,
      Type,
      Content,
    };
  });
}
