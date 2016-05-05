import React from 'react';
import ReactDOM from 'react-dom';
import Products from './component/Products.jsx';
import $ from 'jquery';
  var count = 0
setInterval(function() {

  $.ajax({
       url: "http://techdojo.pagekite.me/sensordata",
       dataType: 'json',
       cache: false,
       success: function(data) {
console.log(data);
       },
       error: function(xhr, status, err) {
         console.error(this.props.url, status, err.toString());
       }
     });
  ReactDOM.render(
    <Products data={data}/>, document.getElementById('root'));

}, 4000);
