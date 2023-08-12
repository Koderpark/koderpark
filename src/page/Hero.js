import "../style/Hero.css";

function Hero() {
  return (
    <div className="bg-slate-100 text-slate-950 h-screen px-24">
      <div className="float-left w-fit h-full grid">
        <div className="place-self-center w-full">
          <p className="text-4xl font-bold">2023</p>
          <p className="text-8xl font-bold">Portfolio</p>
          <p className="text-4xl font-bold mb-4">Koder / 박성훈</p>

          <p className="text-xl">2004년생 새내기 대학생입니다</p>
          <p className="text-xl mb-4">코더빡이라고 불러주시면 됩니다</p>
        </div>
      </div>
      <div className="float-right w-fit h-full grid">
        <div className="place-self-center grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            <EduCard />
            <ActCard />
          </div>
          <div className="flex flex-col gap-8">
            <CntCard />
            <SkillCard />
          </div>
        </div>
      </div>
    </div>
  );
}

function EduCard() {
  return (
    <div className="h-fit">
      <p className="text-4xl font-bold mb-4">Education</p>

      <div className="card-elem">
        <p>국민대학교 소프트웨어학부 (2023~NOW)</p>
        <p>GPA 4.06/4.5</p>
        <p>Major GPA 4.33/4.5</p>
      </div>

      <div className="card-elem">
        <p>아름고등학교 (2020~2022)</p>
        <p>AVG Score 3.35</p>
      </div>
    </div>
  );
}

function ActCard() {
  return (
    <div className="h-fit">
      <p className="text-4xl font-bold mb-4">Activity</p>

      <div className="card-elem">
        <p>국민대학교 알고리즘 동아리 KPSC</p>
        <p>2023~NOW 회장</p>
      </div>

      <div className="card-elem">
        <p>국제정보올림피아드 교육생 선발</p>
        <p>2020 (제 30기) 처음반 과정 수료</p>
      </div>

      <div className="card-elem">
        <p>세종과학예술영재학교 영재교육원</p>
        <p>2018 소프트웨어반 수료</p>
      </div>

      <div className="card-elem">
        <p>공주대학교 과학영재교육원</p>
        <p>2017 정보반 수료</p>
      </div>
    </div>
  );
}

function CntCard() {
  return (
    <div className="h-fit">
      <p className="text-4xl font-bold mb-4">Contact</p>

      <div className="card-elem">
        <p>Email Address</p>
        <p>koder0205@gmail.com</p>
      </div>

      <div className="card-elem">
        <p>Phone Number</p>
        <p>+82 10 7399 6630</p>
      </div>

      <div className="card-elem">
        <p>Discord Handle</p>
        <p>koderpark</p>
      </div>
    </div>
  );
}

function SkillCard() {
  return (
    <div className="h-fit">
      <p className="text-4xl font-bold mb-4">Skill</p>

      <div className="card-elem">
        <p>C / C++</p>
        <p>제일 숙련된 언어입니다</p>
        <p>외부 문서 없이 알고리즘 문제를 해결 가능합니다</p>
      </div>

      <div className="card-elem">
        <p>Python</p>
        <p>외부 문서를 참고해 알고리즘 문제를 해결 가능합니다</p>
      </div>

      <div className="card-elem">
        <p>Node.js</p>
        <p>주된 개발 언어입니다</p>
        <p>간단한 프로젝트 개발 경험이 있습니다</p>
      </div>

      <div className="card-elem">
        <p>PHP</p>
        <p>외주작업을 맡아 처리한 경험이 있습니다</p>
      </div>
    </div>
  );
}

export default Hero;
