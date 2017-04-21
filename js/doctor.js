var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.testFunction = function(input) {
  var output = input;
  return output;
};

exports.doctorModule = Doctor;
