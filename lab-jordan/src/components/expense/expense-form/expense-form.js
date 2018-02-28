import React from 'react';

class ExpenseForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = this.props.expense
    ? this.props.expense
    : {
        name: '',
        price: '',
        category: this.props.categoryID
      };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState({name: '', price: ''});
  }

  render() {
    <form className="expense-form" onSubmit={this.handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={this.state.name}
        onChange={this.handleChange}/>

      <input
        type="number"
        name="price"
        placeholder="price"
        value={this.state.name}
        onChange={this.handleChange}/>

        <button type="submit">{this.props.buttonText}</button>
    </form>
  }
}

export default ExpenseForm;
