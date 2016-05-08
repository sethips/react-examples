import React from 'react';
import ReactDOM from 'react-dom';
import Products from './component/Products.jsx';
import $ from 'jquery';
var count = 0;
var temp = {};



var refreshIntervalId = setInterval(function() {

    $.ajax({
        url: 'http://techdojo.pagekite.me/sensordata',
        dataType: 'json',
        cache: false,
        success: function(data) {
            temp = {
                count: count,
                temperature: data.temperature,
                humidity: data.humidity
            }
        },
        error: function(xhr, status, err) {

        }
    });
    count = count + 1;
    if (count == 11)
        clearInterval(refreshIntervalId);
    if (typeof temp.count != 'undefined') {
        ReactDOM.render(
            <Products data={temp}/>, document.getElementById('root'));
    }

}, 4000);
