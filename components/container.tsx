export default function Container(props: any) {
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
