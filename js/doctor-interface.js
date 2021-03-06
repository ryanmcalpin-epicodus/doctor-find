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
    var zipCode = $('#zip').val();
    var distance = $('#distance').val();
    var doctor = new Doctor();
    doctor.getDoctors(checked, zipCode, distance, displayDoctors);
  });
  $('.home-link').click(function() {
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
    $('#info').text("Sorry, no results were found.").append("<br><span class='home-link'>Try Again</span>");
    $('.home-link').click(function() {
      location.reload();
    });
  } else {
    $('#info').text("Matched results:");
    doctors.forEach(function(doctor) {
      var doc = new Doctor();
      var landline = doc.getLandline(doctor);
      var rating = doc.getRating(doctor);
      $('#results').append("<div class='panel panel-default'><div class='panel-heading'><h4>" + doctor.profile.first_name + " " + doctor.profile.last_name + ", " + doctor.profile.title + " | " + doctor.practices[0].name + " | " + landline + "<br>Rating: " + rating + "</h4></div><div class='panel-body'>" + doctor.profile.bio + "</div></div>");
    });
  }
  window.scrollTo(0, 0);
};
