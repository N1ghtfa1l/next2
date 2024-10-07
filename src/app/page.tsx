import style from "../app/page.module.css"
import ModalName from "./components/ModalName/ModalName";
export default function Home() {
  return (
    <div className={style.intro}>
      <ModalName />
    </div>
  );
}
