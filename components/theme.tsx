function Hero(props: any) {
  return (
    <div className="bg-light lib-grid">
      <div className="lib-grid-l flex flex-column items-center">
        <div className="relative w-full bg-heavy rounded-[16px] overflow-hidden text-gray-100">
          {props.children}
        </div>
      </div>
    </div>
  );
}

function Fullscreen(props: any) {
  return (
    <div className="bg-heavy lib-grid py-8">
      <div className="lib-grid-xl">{props.children}</div>
    </div>
  );
}

function Container(props: any) {
  return (
    <div className="bg-heavy lib-grid py-8">
      <div className="lib-grid-l">{props.children}</div>
    </div>
  );
}

function List(props: any) {
  return <div className="lib-grid">{props.children}</div>;
}

export { Hero, Container, Fullscreen, List };
