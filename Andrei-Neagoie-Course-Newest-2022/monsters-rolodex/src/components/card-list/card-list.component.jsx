import Card from "../card/card.component";
import "./card-list.styles.css";
const CardList = ({katz}) => (
        <div className="card-list">
            {katz.map((kat) => {
                return <Card kat={kat} />;
            })}
        </div>
);

export default CardList;
