var apiKey = require('./../.env').apiKey;

function Symptom() {
}

Symptom.prototype.getSymptoms = function(populateCheckboxes) {
  $.get('https://api.betterdoctor.com/2016-03-01/conditions?user_key=' + apiKey)
   .then(function(result) {
      console.log("success: ");
      console.log(result);
      var symptomList = result.data;
      populateCheckboxes(symptomList);
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.symptomModule = Symptom;
