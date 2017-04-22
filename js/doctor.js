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
      displayDoctors(doctors);
      console.log(doctors);
    })
   .fail(function(error){
      $('#results').text(error.responseJSON.message);
    });
};

Doctor.prototype.getLandline = function(doctor) {
  var landline = "";
  doctor.practices[0].phones.forEach(function(phone) {
    if (phone.type == "landline") {
      landline = phone.number;
    }
  });
  landline = landline.slice(0, 3) + "-" + landline.slice(3, 6) + "-" + landline.slice(6, 10);
  console.log("landline: " + landline);
  return landline;
};

exports.doctorModule = Doctor;
