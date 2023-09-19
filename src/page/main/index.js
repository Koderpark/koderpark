import { Outlet } from "react-router-dom";

import Hero from "./Hero.js";
import { BusinessCard } from "./BusinessCard.js";
import Award from "./Award.js";
import Interest from "./Interest.js";
import Timeline from "./Timeline.js";

function Main() {
  return (
    <div>
      <Hero />
      <BusinessCard />
      <Timeline />
      <Interest />
      <Award />
    </div>
  );
}
export default Main;
