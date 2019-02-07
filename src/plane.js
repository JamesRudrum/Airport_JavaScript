function Plane(){
};

Plane.prototype.land = function(airport){
  airport.allowLanding(this)
  this._location = airport;
};

// var plane1 = new Plane;
// var airport1 = new Airport;

Plane.prototype.takeoff = function(airport){
  this._location.allowTakeoff();
   // console.log(this._location)
};


 // console.log(this._location)
