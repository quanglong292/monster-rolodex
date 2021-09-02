import './App.css';
import { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: "asd1"
        },
        {
          name: "Dracula",
          id: "asd2"
        },
        {
          name: "Zombie",
          id: "asd3"
        },
      ],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    // Lợi dụng re-render khi onChange được run thì chạy lại filterMonsters và rồi nó update luôn CardList
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="serch monsters" handleChange={this.handleChange}/>
        <CardList monsters={filterMonsters} />
      </div>
    )
  }
}

export default App;
