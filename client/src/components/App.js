import React from "react";
import Select from "react-select";
import axios from "axios";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      states: [],
      selectedStates: [],
      styles: {
        container: (provided, state) => ({
          ...provided,
          width: '95%'
        }),
        control: (provided, state) => ({
          ...provided,
          border: state.isSelected ? '1px solid black' : 'red',
          width: '95%',
          // color: 'white'
        }),
        option: (provided, state) => ({
          ...provided,
          margin: 0,
          padding: '10px',
          color: '#252726',
          backgroundColor: state.isFocused ? '#F1F2F7' : 'white',
          borderBottom: '1px solid #EFF1F7',
        }),
        multiValue: (provided, state) => ({
          ...provided,
          backgroundColor: '#717573',
          color: 'white',
        })
      }
    };
  }

  async componentDidMount() {
    console.log("componentDidMount()")

    // get and set available States
    axios.get("http://localhost:5006/state", {})
    .then((resp) => {
      const states = resp.data.states.map(x => ({value: x, label: x}))
      this.setState({
        states: states
      });
    }, (error) => {
      console.log("error getting states", error)
    });


    // get and set user state
    const userResp = await axios.get("http://localhost:5006/user", {
      headers: {
        Authorization: "Bearer 123"
      }
    })

    const user = userResp.data.user
    this.setState({
      user: user
    });

    this.setState({
      selectedStates: [{value: "California", label: "California"}]
    })
  }

  onStateChange = e => {
    const states = (e != null) ? e : []
    this.setState({
      selectedStates: states
    });
    console.log("user.id:", this.state.user.id)
    axios.post(`http://localhost:5006/user/states`, {
      states: states
    },
    {
      headers: {
        Authorization: "Bearer 123"
      }
    })
  };

  onSaveClick = async () => {};

  render() {
    const { user, states, selectedStates, styles } = this.state;

    return (
      <div className="app-main">
        <div className="app-main-content">
          <div>
            <h1>{user.firstName ? `${user.firstName}'s` : "Your"} resident states</h1>
            <p>Which states did you reside in during 2018?</p>
          </div>
          <div>
            <Select
              options={states}
              onChange={this.onStateChange}
              isMulti
              closeMenuOnSelect={false}
              value={selectedStates}
              styles={styles}
            />
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
