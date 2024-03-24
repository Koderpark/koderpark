export default function title(props: { header: string; subheader: string }) {
  return (
    <div className="lib-grid-m">
      <p className="inline-block text-5xl font-bold">{props.header}</p>
      <p className="inline-block text-2xl">{props.subheader}</p>
    </div>
  );
}
