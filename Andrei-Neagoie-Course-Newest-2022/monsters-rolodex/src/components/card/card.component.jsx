import "./card.styles.css";

const Card = ({ kat }) => {
        const { name, email, id } = kat;
        return (
            <div className="card-container" key={id}>
                <img alt={`Kat ${name}`} src={`https://robohash.org/${id}?set=set4&size=180x180`} />
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        );
}

export default Card;
