'use strict';

describe('Airport', function(){
var airport;
var plane;

beforeEach(function(){

});

  it('can land a plane', function(){
    airport = new Airport();
    plane = new Plane();
    airport.land(plane);
    expect(airport.totalPlanes()).toContain(plane);
  });
});
