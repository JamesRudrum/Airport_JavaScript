describe ('Plane', function(){

  var plane;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['allowLanding']);
  });

  describe('tells a plane when to', function(){
    it('land', function(){
      plane.land(airport);
      expect(airport.allowLanding).toHaveBeenCalledWith(plane);
    });
  });
});
