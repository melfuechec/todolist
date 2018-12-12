import React, { Component } from 'react';
import './App.css';
import './Alert.js';
import Button from '@material-ui/core/Button';

export class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }

  render() {
    return (
      <div className = 'main'>
        <img className = 'image' src='https://oneclassblog.com/wp-content/uploads/2018/01/1000X500_Things_To_Do_Web_97cf2f8c-7268-44fe-bc00-166478faa73c.png' alt='to-do-list'/>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor = "new-todo">
            What needs to be done?
          </label>
          <input className = 'input'
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
              <Button variant="contained" color="primary" align="center">
            Add #{this.state.items.length + 1}
              </Button>
          </button>
        </form>
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default TodoApp;