import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        task: '',
        list: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(props) {
    this.setState({
      task: props.target.value
    });
  }

  handleClick() {
    console.log(this.state.list);
    this.setState(state => {
      const list = state.list.concat(state.task);

      return {
        list,
        task: '',
      };
    });
  }

render() {

  const listItem = this.state.list.map((task) =>
      <li>{task}</li>
      );

  return (
  <div>
    <input type='text' placeholder='To Do' value={this.state.task} onChange={this.handleChange} />
    <br />
    <br />
    <button onClick={this.handleClick}>
      Add
    </button>
    
    {listItem}

  </div>
  );
}
}

export default App;
