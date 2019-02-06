var Plane = function(){};

Plane.prototype.land = function(airport){
  return airport.allowLanding(this);
};
