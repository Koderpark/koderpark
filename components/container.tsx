export default function Container(props : any) {
    return (
      <div className="bg-light lib-grid py-32">
        <div className="lib-grid-l flex flex-column items-center">
            <div className="w-full bg-heavy rounded-[16px] overflow-hidden">
                {props.children}
            </div>
        </div>
      </div>
    );
}