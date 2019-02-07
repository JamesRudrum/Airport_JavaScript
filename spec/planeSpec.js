describe ('Plane', function(){

  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['allowLanding'], ['allowTakeoff']);
  });

  describe('tells a plane to', function(){
    it('land', function(){
      plane.land(airport);
      expect(airport.allowLanding).toHaveBeenCalledWith(plane);
    });

    it('takeoff', function(){
      plane.land(airport);
      plane.takeoff();
      expect(airport.allowTakeoff).toHaveBeenCalled();
    });
  });
});
