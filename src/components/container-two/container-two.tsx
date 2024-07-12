import { References } from "../references";
import { Skills } from "../skills";
import s from "./container-two.module.css";

export function ContainerTwo() {
  return (
    <div className={s.container2}>
      <Skills />
      <References />
    </div>
  );
}
