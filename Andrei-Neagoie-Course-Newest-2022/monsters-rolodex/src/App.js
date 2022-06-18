import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
    const [searchField, setSearchField] = useState("");
    const [katz, setKatz] = useState([]);

    console.log("render");
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => setKatz(users));
    }, []);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
    };
    const filteredMonsters = katz.filter((kat) => {
        return kat.name.toLowerCase().includes(searchField);
    });

    return (
        <div className="App">
            <h1 className="app-title">Kool Katz</h1>
            <SearchBox onChangeHandler={onSearchChange} className="kat-search-box" placeholder="Search katz" />
            <CardList katz={filteredMonsters} />
        </div>
    );
};

// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             katz: [],
//             searchField: "",
//         };
//     }
//     componentDidMount() {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then((res) => res.json())
//             .then((users) =>
//                 this.setState(() => {
//                     return { katz: users };
//                 })
//             );
//     }

//     onSearchChange = (event) => {
//         const searchField = event.target.value.toLowerCase();
//         this.setState(() => {
//             return { searchField };
//         });
//     };
//     render() {
//         console.log("render from appjs");
//         const { katz, searchField } = this.state;
//         const { onSearchChange } = this;
//         const filteredMonsters = katz.filter((kat) => {
//             return kat.name.toLowerCase().includes(searchField);
//         });
//         return (
//             <div className="App">
//             <h1 className="app-title">Kool Katz</h1>
//                 <SearchBox
//                     onChangeHandler={onSearchChange}
//                     className="kat-search-box"
//                     placeholder="Search katz"
//                 />
//                 <CardList katz={filteredMonsters} />
//             </div>
//         );
//     }
// }

export default App;
