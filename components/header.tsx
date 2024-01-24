import Navigation from "./navigation";

export default function header() {
  return (
    <header id="gh-head" className="px-12 py-4 h-[8rem]">
      <nav className="gh-head-inner grid w-full">
        <div className="gh-head-brand">
          <a className="gh-head-logo text-2xl font-bold" href="{{@site.url}}">
            Koder / 박성훈
          </a>
          <a className="gh-burger" role="button" aria-label="menu">
            <div className="gh-burger-box">
              <div className="gh-burger-inner"></div>
            </div>
          </a>
        </div>
        <div className="gh-head-menu">
          <Navigation />
        </div>
        <div className="gh-head-actions">
          {/* <div className="gh-head-actions-list">{{ search }}</div> */}
        </div>
      </nav>
    </header>
  );
}
