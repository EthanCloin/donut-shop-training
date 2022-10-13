import "./DonutItem.css";

interface Props {
  title: string;
}
const DonutItem = ({ title }: Props) => {
  return (
    <div className="Donut">
      <h2>{title}</h2>
    </div>
  );
};

export default DonutItem;
