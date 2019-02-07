function Plane(){
};

Plane.prototype.land = function(airport){
  airport.allowLanding(this)
  this._location = airport
};

// var plane1 = new Plane;
// var airport1 = new Airport;

Plane.prototype.takeoff = function(){
  this._location.allowTakeoff(this);
};
//
// // console.log(plane1);
// console.log(plane1.land(airport1));
// // console.log(plane1.takeoff());
