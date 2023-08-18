import { Link, useLocation } from "react-router-dom";

function Algorithm() {
  return (
    <div>
      <div className="bg-blue-500 text-slate-50 p-4">
        <p className="text-6xl font-bold">Algorithm</p>
      </div>
      <div className="bg-slate-100 shadow text-slate-950 p-4 overflow-auto">
        <div>
          <div className="w-fit h-full mb-4">
            <p className="text-4xl font-bold mb-1">Baekjoon</p>
            <p className="text-lg">알고리즘 문제를 해결합니다</p>
            <p className="text-lg">
              최근에는 백준 대회 운영에도 참가하고 있습니다.
            </p>
          </div>

          <div className="w-fit h-full mb-8 flex flex-col gap-4">
            <img src="http://mazassumnida.wtf/api/generate_badge?boj=koder0205" />
            <img src="http://mazandi.herokuapp.com/api?handle=koder0205&theme=warm" />
          </div>

          <div className="w-fit h-full mb-4">
            <p className="text-4xl font-bold mb-1">Codeforces</p>
            <p className="text-lg">간간히 대회를 칩니다</p>
          </div>

          <div className="w-fit h-full">
            <img src="https://cf.leed.at?id=koderpark" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Sysadmin() {
  return (
    <div>
      <div className="bg-orange-500 text-slate-50 p-4">
        <p className="text-6xl font-bold">Sysadmin</p>
      </div>
      <div className="bg-slate-100 shadow text-slate-950 p-4 overflow-auto">
        <div>
          <div className="w-fit h-full mb-4">
            <p className="text-4xl font-bold mb-1">Homelab</p>
            <p className="text-lg">홈서버를 구축했습니다.</p>
            <p className="text-lg">지금 사이트도 홈서버에서 호스팅됩니다</p>
            <p className="text-lg">언젠가는 랙에 정리하고싶네요</p>
          </div>

          <div className="w-fit h-full mb-8">
            <p className="text-lg font-bold">홈서버 사양</p>
            <p className="text-base">Asrock jupiter H410</p>
            <p className="text-base">Intel i3-10100</p>
            <p className="text-base">DDR4L 16G</p>
            <p className="text-base">WD Black sn750 - 500GB</p>
            <p className="text-base">Micron MX500 - 2TB</p>
          </div>

          <div className="w-fit h-full mb-4">
            <p className="text-4xl font-bold mb-1">Selfhosting</p>
            <p className="text-lg">여러 솔루션을 직접 배포해 사용합니다</p>
          </div>

          <div className="w-fit h-full">
            <p className="text-lg font-bold">OS Proxmox VE 8.0</p>
            <p className="text-base">Jenkins를 사용한 CI/CD</p>
            <p className="text-base">Xpenology NAS</p>
            <p className="text-base">리버스 프록시 서버 Nginx Proxy Manager</p>
            <p className="text-base">패스워드 관리자 Bitwarden</p>
            <p className="text-base">미디어 관리 Komga/Jellyfin/Airsonic</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Develop() {
  return (
    <div>
      <div className="bg-red-500 text-slate-50 p-4">
        <p className="text-6xl font-bold">Develop</p>
      </div>
      <div className="bg-slate-100 shadow text-slate-950 p-4 overflow-auto">
        <div>
          <div className="w-fit h-full mb-8">
            <p className="text-4xl font-bold mb-1">BaekjoonHub</p>
            <p className="text-lg">백준 문제를 해결할 시 자동으로 커밋되는</p>
            <p className="text-lg">브라우저 확장입니다.</p>
            <p className="text-lg">오류 해결에 기여했습니다.</p>
          </div>

          <div className="w-fit h-full mb-8">
            <p className="text-4xl font-bold mb-1">
              KPSC 동아리 홈페이지(예정)
            </p>
            <p className="text-lg">동아리원 관리와 문제 추천 등을</p>
            <p className="text-lg">기획하고 있습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
function Note() {
  return (
    <div>
      <div className="bg-violet-500 text-slate-50 p-4">
        <p className="text-6xl font-bold">Note-taking</p>
      </div>
      <div className="bg-slate-100 shadow text-slate-950 p-4 overflow-auto">
        <div>
          <div className="w-fit h-full mb-8">
            <p className="text-4xl font-bold mb-1">Notion</p>
            <p className="text-lg">과외 진행 시 내용 정리나</p>
            <p className="text-lg">TIL(Today I Learned) </p>
            <p className="text-lg">일부 웹페이지에서 접근하는 데이터베이스</p>
            <p className="text-lg">관리 목적으로 사용합니다</p>
          </div>

          <div className="w-fit h-full mb-8">
            <p className="text-4xl font-bold mb-1">개인 블로그</p>
            <p className="text-lg">상반기/하반기 별 회고글</p>
            <p className="text-lg">홈서버 구축 과정의 기록</p>
            <p className="text-lg">백준에서 해결한 문제</p>
            <p className="text-lg">대회나 어떠한 활동의 후기</p>
            <p className="text-lg">등을 퍼블릭하게 기록합니다</p>
            <p className="text-lg">Tistory -> Ghost 마이그레이션을</p>
            <p className="text-lg">생각중입니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Interest() {
  const location = useLocation();

  return (
    <div className="bg-slate-800 text-slate-50 p-24 grid">
      <div className="mb-8">
        <p className="text-6xl font-bold">Interest</p>
        <p className="text-lg">
          박성훈이라는 사람을 설명할 수 있는 단어들입니다
        </p>
      </div>

      <div className="flex gap-8 grid grid-cols-4">
        <Algorithm />
        <Sysadmin />
        <Develop />
        <Note />
      </div>
    </div>
  );
}
export default Interest;
