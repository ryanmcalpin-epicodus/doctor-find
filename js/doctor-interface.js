var Doctor = require('./../js/doctor.js').doctorModule;
var Symptom = require('./../js/symptom.js').symptomModule;

$(document).ready(function() {
  var symptoms = new Symptom();
  symptoms.getSymptoms(populateCheckboxes);

  $('#test-form').submit(function(event) {
    event.preventDefault();
    var input = $('#test-input').val();
    var doctor = new Doctor();
    var output = doctor.getDoctors(input);
    $('#test-result').text(output);
  });
});

var populateCheckboxes = function(symptomList) {
  console.log("pop: ");
  console.log(symptomList);

  symptomList.forEach(function(symptom) {
    $('#symptom-checkboxes').append("<input type='checkbox' name='symptoms' value='" + symptom.name + "'>" + symptom.name + "<br>");

  //   var checkbox = document.createElement('input');
  //   checkbox.type = "checkbox";
  //   checkbox.name = "symptoms";
  //   checkbox.value = "REPLACE WITH NAME";
  //   var checkDiv = document.getElementById('symptom-checkboxes');
  //   checkDiv.appendChild(checkbox);
  //   checkDiv.append("NAME")
  //   checkDiv.innerHTML("<br>");
  });
};
