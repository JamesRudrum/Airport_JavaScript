describe ('Airport', function(){

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
  });

  describe('checks if airport is', function(){
    it('empty array', function(){
      expect(airport).toEqual(jasmine.arrayContaining([]));
    });
  });

  describe('checks if plane is added to array', function(){
    it('when allowLanding is called', function(){
      airport.allowLanding(plane);
      expect(airport.isPlanes()).toEqual([plane]);
    });
  });

  describe('checks if plane is removed from array', function(){
    it('when allowTakeoff is called', function(){
      airport.allowLanding(plane);
      airport.allowTakeoff(plane);
      expect(airport.isPlanes()).toEqual([]);
    });
  });

});
