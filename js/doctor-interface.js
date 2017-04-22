var Doctor = require('./../js/doctor.js').doctorModule;
var Symptom = require('./../js/symptom.js').symptomModule;

$(document).ready(function() {
  var symptoms = new Symptom();
  symptoms.getSymptoms(populateCheckboxes);

  $('#symptom-form').submit(function(event) {
    event.preventDefault();
    var checked = [];
    $('input[type="checkbox"]:checked').each(function() {
      checked.push($(this).val());
    });
    console.log(checked);
    var doctor = new Doctor();
    doctor.getDoctors(checked, displayDoctors);
  });

  $('.jumbotron').click(function() {
    location.reload();
  });
});

var populateCheckboxes = function(symptomList) {
  symptomList.forEach(function(symptom) {
    $('#symptom-checkboxes').append("<input type='checkbox' name='symptoms' value='" + symptom.name + "'>" + symptom.name + "<br>");
  });
};

var displayDoctors = function(doctors) {
  $('#symptom-form').hide();
  if (doctors.length === 0) {
    $('#info').text("Sorry, no results were found.");
  } else {
    $('#info').text("Matched results:");
    doctors.forEach(function(doctor) {
      $('#results').append("<div class='panel panel-default'><div class='panel-heading'><h4>" + doctor.first_name + " " + doctor.last_name + ", " + doctor.title + "</h4></div><div class='panel-body'>" + doctor.bio + "</div></div>");
    });
  }
  window.scrollTo(0, 0);
};
