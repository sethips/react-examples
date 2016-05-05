import React from 'react';

var LineChart = require("react-chartjs").Line;

class Products extends React.Component {

  constructor(props) {
    super(props);
    //  this.state.products = [];
    this.state = {};
    this.state.filterText = "";
    this.state.lineData = {};

    this.state.products = [
      {
        id: 1,
        x: 1,
        y: 1
      }, {
        id: 2,
        x: 2,
        y: 4
      }
    ];
    var data = this.state.products.map(function(data) {

      return ({x: data.x, y: data.y});

    });
  //  console.log(data);

    this.state.lineData = [
      {
        label: "series1",
        values: data
      }
    ];

  }
  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };
  handleRowDel(product) {
    var index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var product = {
      id: id,
      x: 0,
      y: 0
    }

    console.log("button clicket");
    this.state.products.push(product);
    this.setState(this.state.products);


  }

  handleProductTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var products = this.state.products;

    var newProducts = products.map(function(product) {
      for (var key in product) {
        if (key == item.name && product.id == item.id) {
          //  console.log("inside mao");
          //   console.log(product);
          product.id = item.id;
          product[key] = item.value;

        }
      }
      return product;
    });
    this.setState(newProducts);
    var x = this.state.products.map(function(data) {

      return (data.x);

    });
    var y = this.state.products.map(function(data) {

      return (data.y);

    });
  //  console.log(  this.state.lineData);


    this.state.lineData = {
    labels: x,
    datasets: [
        {
            label: "y",

            data: y,
        }
    ]
};
this.forceUpdate();
    console.log(this.state.lineData);
  };



  render() {
var datum=     function getDatum(j) {
   var sin = [],
       cos = [];

   for (var i = 0; i < 100; i++) {
     sin.push({x: i, y: Math.sin(i/j)});
     cos.push({x: i, y: .5 * Math.cos(i/j)});
   }

   return [
     {
       values: sin,
       key: 'Sine Wave',
       color: '#ff7f0e'
     },
     {
       values: cos,
       key: 'Cosine Wave',
       color: '#2ca02c'
     }
   ];
 }
var chartOptions = {

               legend: {
                   position: 'bottom',
               },
               hover: {
                   mode: 'label'
               },
               scales: {
                   xAxes: [{
                       display: true,
                       scaleLabel: {
                           display: true,
                           labelString: 'x'
                       }
                   }],
                   yAxes: [{
                       display: true,
                       scaleLabel: {
                           display: true,
                           labelString: 'y'
                       }
                   }]
               },
               title: {
                   display: true,
                   text: 'Chart.js Line Chart - Legend'
               }
           }

    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
        <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText}/>

         <LineChart data={this.state.lineData} options={chartOptions} redraw />

      </div>
    );

  }

}
class SearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      <div>

        <input type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>

      </div>

    );
  }

}

class ProductTable extends React.Component {

  render() {
    var onProductTableUpdate = this.props.onProductTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var product = this.props.products.map(function(product) {

      return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
    });
    return (
      <div>

        <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>x</th>
              <th>y</th>

            </tr>
          </thead>

          <tbody>
            {product}

          </tbody>

        </table>
      </div>
    );

  }

}

class ProductRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.product);

  }
  render() {

    return (
      <tr className="eachRow">
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          "type": "x",
          value: this.props.product.x,
          id: this.props.product.id
        }}/>
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "y",
          value: this.props.product.y,
          id: this.props.product.id
        }}/>

        <td className="del-cell">
          <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
        </td>
      </tr>
    );

  }

}
class EditableCell extends React.Component {

  render() {
    return (
      <td>
        <input type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}/>
      </td>
    );

  }

}

export default Products;
