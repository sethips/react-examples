import React from 'react';
import ReactDOM from 'react-dom';
import Products from './component/Products.jsx';
import $ from 'jquery';
var count = 0 ;
  var temp = {};



  var refreshIntervalId = setInterval(function() {

  $.ajax({
       url: 'http://techdojo.pagekite.me/sensordata',
       dataType: 'json',
       cache: false,
       success: function(data) {
//console.log(data);
    temp = {
        count : count,
        temperature: data.temperature,
        humidity:data.humidity
      }
       },
       error: function(xhr, status, err) {
      
       }
     });
     count = count+1;
     console.log(count);
     if(count==6)
clearInterval(refreshIntervalId);
console.log(temp.count);
if(typeof temp.count!="undefined"){
  ReactDOM.render(
    <Products data={temp}/>, document.getElementById('root'));}
 
}, 4000);
      
  

