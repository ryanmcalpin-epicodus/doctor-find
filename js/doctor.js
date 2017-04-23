var apiKey = require('./../.env').apiKey;
var geoApiKey = require('./../.env').geoApiKey;

function Doctor() {
}

Doctor.prototype.testFunction = function(input) {
  var output = input;
  return output;
};

Doctor.prototype.getDoctors = function(symptoms, zipCode, distance, displayDoctors) {
  var latLong = "";
  $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + zipCode + '&key=' + geoApiKey)
    .then(function(result) {
      latLong = result.results[0].geometry.location.lat + "%2C" + result.results[0].geometry.location.lng;
    }).then(function() {
      $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ symptoms.join(",") + '&location=' + latLong + '%2C' + distance + '&sort=rating-desc&skip=0&limit=100&user_key=' + apiKey)
      .then(function(result) {
        var doctors = result.data;
        displayDoctors(doctors);
      })
      .fail(function(error){
        $('#info').text("We're sorry, something went wrong!");
      });
    })
    .fail(function(error) {
      $('#info').text("We're sorry, something went wrong!");
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
