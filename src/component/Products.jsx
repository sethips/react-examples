import React from 'react'
class Products extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.name = "a test name";

  }

  componentWillMount() {
    console.log("inside componentWillMount of Product")
  }



  onInput(evt){
    this.setState({name:evt.target.value});

  }

  render() {

    return (
      <div>
        <h1>Products</h1>
          <h1>from input : {this.state.name}</h1>
        <SearchBar/>
        <ProductTable name={this.state.name} onInput = {this.onInput.bind(this)} />
      </div>
    );

  }

}
class SearchBar extends React.Component {

  render() {
    return (
      <div>
        <h2>The searchBar</h2>
          <h1>from input : {this.props.name}</h1>
      </div>

    );
  }

}

class ProductTable extends React.Component {
  componentWillReceiveProps(nextProps) {

    console.log("inside componentWillMount of ProductTable")
    console.log("previous value :" +this.props.name);
    console.log("next value :" +nextProps.name);
  }

  render() {
    return (
      <div>
        <h2>The Product Table</h2>
          <h1>from input : {this.props.name}</h1>
        <ProductRow name={this.props.name} onInput = {this.props.onInput} />
      </div>
    );

  }

}

class ProductRow extends React.Component {

  render() {

    return (
      <div>
        <h3>Product Row</h3>
          <h1>from input : {this.props.name}</h1>
        <EditableCell onInput = {this.props.onInput} name={this.props.name}/>
      </div>
    );

  }

}
class EditableCell extends React.Component {

  render() {
    return (
      <div>
          <h4>EditableCell</h4>
        <h1>from input : {this.props.name}</h1>
        <input type="text" onChange = {this.props.onInput}/>
      </div>
    );

  }

}
export default Products;
