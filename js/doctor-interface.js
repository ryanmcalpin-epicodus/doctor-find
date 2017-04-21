var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  $('#test-form').submit(function(event) {
    event.preventDefault();
    var input = $('#test-input').val();
    var doctor = new Doctor();
    var output = doctor.testFunction(input);
    $('#test-result').text(output);
  });
});
