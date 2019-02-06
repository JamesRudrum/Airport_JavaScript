var Airport = function(){
  this.hangar = [];
};

Airport.prototype.allowLanding = function(plane){
  this.hangar.push(plane);
};

Airport.prototype.isPlanes = function(){
  return this.hangar;
};
