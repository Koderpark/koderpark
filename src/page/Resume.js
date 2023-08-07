import Card from "./Card.js";
import "./Hero.css";

function Resume() {
  return (
    <div className="bg-slate-800 text-slate-50 p-24 grid">
      <div className="mb-16">
        <p className="text-6xl font-bold">Resume</p>
        <p className="text-lg">그래서 박성훈이 누구죠?</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="h-fit bg-slate-950 p-4 shadow-lg">
          <p className="text-3xl font-bold mb-4">Education</p>

          <p className="text-lg font-bold">
            국민대학교 소프트웨어학부 (2023~NOW)
          </p>
          <p className="text-sm">GPA 4.06/4.5</p>
          <p className="text-sm mb-4">Major GPA 4.33/4.5</p>

          <p className="text-lg font-bold">아름고등학교 (2020~2022)</p>
          <p className="text-sm mb-4">AVG Score 3.35</p>
        </div>
        <div className="h-fit bg-slate-950 p-4 shadow-lg">
          <p className="text-3xl font-bold mb-4">Activity</p>

          <p className="text-lg font-bold">국민대학교 알고리즘 동아리 KCPC</p>
          <p className="text-sm mb-4">2023 회장</p>

          <p className="text-lg font-bold">제 30기 국제정보올림피아드</p>
          <p className="text-sm mb-4">2020 처음반 수료</p>

          <p className="text-lg font-bold">세종과학예술영재학교 영재교육원</p>
          <p className="text-sm mb-4">2018 소프트웨어반 수료</p>

          <p className="text-lg font-bold">공주대학교 과학영재교육원</p>
          <p className="text-sm mb-4">2017 정보반 수료</p>
        </div>

        <div className="h-fit bg-slate-950 p-4 shadow-lg">
          <p className="text-3xl font-bold mb-4">Problem Solving</p>

          <p className="text-lg font-bold">백준 / Solved.AC</p>
          <p className="text-sm">Handle Koder0205</p>
          <p className="text-sm mb-4">
            Solve 1000+ / Streak 200+ / Rating 2000+(P2)
          </p>

          <p className="text-lg font-bold">Codeforces</p>
          <p className="text-sm">Handle Koderpark</p>
          <p className="text-sm mb-4">Rating 1318 (Pupil)</p>
        </div>
        <div className="h-fit bg-slate-950 p-4 shadow-lg">
          <p className="text-3xl font-bold mb-4">Contact</p>

          <p className="text-lg font-bold">Email Address</p>
          <p className="text-sm mb-4">koder0205@gmail.com</p>

          <p className="text-lg font-bold">Discord Handle</p>
          <p className="text-sm mb-4">koderpark</p>

          <p className="text-lg font-bold">Phone Number</p>
          <p className="text-sm mb-4">+82 10 7399 6630</p>
        </div>
      </div>
    </div>
  );
}
export default Resume;
