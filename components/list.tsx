export default function List(props: {inner: JSX.Element}) {
    return (
        <div className="bg-light lib-grid py-32 gap-8">
            {props.inner}
        </div>
    );
}