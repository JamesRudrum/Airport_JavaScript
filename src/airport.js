// var Plane = require('../src/plane');
// plane = new Plane()
function Airport(){
  this.hangar = [];
};


Airport.prototype.allowLanding = function(plane){
  this.hangar.push(plane);
};

Airport.prototype.allowTakeoff = function(plane){
  this.hangar = [];
};

Airport.prototype.isPlanes = function(){
  return this.hangar;
};

// var plane1 = new Plane;
// var airport1 = new Airport;
//
// console.log(airport1);
// console.log(airport1.allowLanding(plane));
