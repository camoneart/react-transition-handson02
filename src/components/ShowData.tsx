import { useData } from "../hooks/useData";
import { sleep } from "../utils/sleep";

async function fetchData1(): Promise<string> {
  await sleep(1000);
  return `Hello, ${(Math.random() * 1000).toFixed(0)}`;
}

export default function ShowData({ dataKey }: { dataKey: number | string }) {
  console.log("ShowData");
  const data = useData(`ShowData:${dataKey}`, fetchData1);
  return (
    <p>
      Data for {dataKey} is {data}
    </p>
  );
}
