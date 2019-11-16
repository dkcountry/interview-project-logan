import React from "react";
import axios from "axios";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      states: ["Alabama", "Arizona", "Arkansas"],
      selectedState: "Alabama"
    };
  }

  async componentDidMount() {
    const userRes = await axios.get("http://localhost:5006/user", {
      headers: {
        Authorization: "Bearer 1"
      }
    });

    this.setState({
      user: userRes.data.user
    });
  }

  onStateChange = e => {
    this.setState({
      selectedState: e.target.value
    });
  };

  onSaveClick = async () => {};

  render() {
    const { user, states, selectedState } = this.state;

    return (
      <div className="app-main">
        <div className="app-main-content">
          <div>
            {user.firstName ? `${user.firstName}'s` : "Your"} resident states
          </div>
          <div>
            <select
              options={states}
              placeholder="Select states..."
              value={selectedState}
              onChange={this.onStateChange}
            >
              {states.map(state => (
                <option key={state}>{state}</option>
              ))}
            </select>
          </div>
          <div>
            <button type="button" onClick={this.onSaveClick}>
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
