export default function Fullscreen(props: any) {
    return (
        <div className="bg-heavy lib-grid py-16">
            <div className="lib-grid-xl">
                {props.children}
            </div>
        </div>
    );
}