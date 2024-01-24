export default function Fullscreen(props: any) {
  return (
    <div className="bg-heavy lib-grid py-8">
      <div className="lib-grid-l">{props.children}</div>
    </div>
  );
}
