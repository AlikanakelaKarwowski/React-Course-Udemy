import { Component } from "react";

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        console.log("render from cardlist");
        return (
            <div className="card-list">
                {monsters.map((monster) => {
                    const { name, email, id } = monster;
                    return (
                        <div className="card-container" key={id}>
                            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set4&size=180x180`} />
                            <h1>{name}</h1>
                            <p>{email}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CardList;
