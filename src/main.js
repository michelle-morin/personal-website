import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("nav button").click(function() {
    $(".collapse").collapse();
  });
  $("#headingOne").click(function() {
    $(".collapse").collapse();
  });
  $("#headingTwo").click(function() {
    $(".collapse").collapse();
  });
  $("#headingThree").click(function() {
    $(".collapse").collapse();
  });
  $("#headingFour").click(function() {
    $(".collapse").collapse();
  });
  $("#headingFive").click(function() {
    $(".collapse").collapse();
  });
});