import { Component } from "react";

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        console.log("render from cardlist");
        return (
            <div className="card-list">
                {monsters.map((monster) => (
                    <div className="card-container" key={monster.id}>
                        <img
                            alt={`monster ${monster.name}`}
                            src={`https://robohash.org/${monster.id}?set=set4&size=180x180`}
                        />
                        <h1>{monster.name}</h1>
                        <p>{monster.email}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default CardList;
