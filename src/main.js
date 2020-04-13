import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
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