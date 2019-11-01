'use strict';

describe('Airport', function(){
var airport;
var plane;

beforeEach(function(){
  airport = new Airport();
  plane = new Plane();
});

  it('can land a plane', function(){
    airport.land(plane);
    expect(airport.totalPlanes()).toContain(plane);
  });

  it('can allow planes to takeoff and leave the airport', function(){
    airport.land(plane);
    airport.takeoff(plane);
    expect(airport.totalPlanes()).not.toContain(plane)
  });
});
