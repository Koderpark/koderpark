export default function elem(param: any) {
  const { Tech, Url, Title, Year, Type, Content } = param;
  return (
    <div>
      <div className="flex gap-1 mb-2">{Tech}</div>
      <a href={Url} className="text-3xl font-bold">
        {Title}
      </a>
      <span className="text-base font-semibold">{Year + " | " + Type}</span>
      <p>{Content}</p>
    </div>
  );
}
