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
    // $('#test-result').text(output);
  });
});

var populateCheckboxes = function(symptomList) {
  console.log("pop: ");
  console.log(symptomList);

  symptomList.forEach(function(symptom) {
    $('#symptom-checkboxes').append("<input type='checkbox' name='symptoms' value='" + symptom.name + "'>" + symptom.name + "<br>");
  });
};
