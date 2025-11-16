import { sleep } from "../utils/sleep";

const AlwaysSuspend: React.FC = () => {
  throw sleep(1000);
};

export default AlwaysSuspend;
