import Image from 'next/image'
import Container from '../components/container';
import List from '../components/list';

import "../public/asset/style/index.css"

const { Client } = require('@notionhq/client');

export default async function Home(){
  return (
    <div>
      <Container inner={(
        <div>
          <h1>{JSON.stringify(await test(), null, "\t")}</h1>
        </div>
      )}/>
    </div>
  )
}

const notion = new Client({ auth: process.env.NOTION_SECRET });

async function test(){
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DB
  });
  console.log(response);
  return response;
}
