var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.testFunction = function(input) {
  var output = input;
  return output;
};

Doctor.prototype.getDoctors = function(symptoms, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ symptoms.join(",") + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&user_key=' + apiKey)
   .then(function(result) {
      var doctors = result.data;
      // results = [];
      // groups.forEach(function(group) {
      //   results.push(group.profile);
      // });
      displayDoctors(doctors);
      console.log(doctors);
    })
   .fail(function(error){
      $('#results').text(error.responseJSON.message);
    });
};

exports.doctorModule = Doctor;
