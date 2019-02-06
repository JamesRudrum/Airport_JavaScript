describe ('Plane', function(){

  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  describe('tells a plane when to', function(){
    it('land', function(){
      expect(plane.land(airport).toBe(true))


    });

  });

});
