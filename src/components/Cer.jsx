import "./Cer.css";
import ai from "../image/Ai.png";
import DataAnalyst from "../image/DataAnalyst.jpg";
import react from "../image/React.jpg";
import dataeng from "../image/dataeng.jpg";

export default function cer() {
  return (
    <>
      <h1>Certificate</h1>
      <img className="cer" src={DataAnalyst} />
      <hr />
      <img className="cer" src={ai} />
      <hr />
      <img className="cer" src={dataeng} />
      <hr />
      <img className="cer" src={react} />
    </>
  );
}
