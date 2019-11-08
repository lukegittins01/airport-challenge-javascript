'use strict';
describe('Airport', function(){
var airport;
var plane;

beforeEach(function(){
  airport = new Airport();
  plane = new Plane();
  spyOn(airport, 'randomWeather').and.returnValue(0);
});

  it('can land a plane', function(){
    airport.land(plane);
    expect(airport.totalPlanes()).toContain(plane);
  });

  it('can allow planes to takeoff and leave the airport', function(){
    airport.land(plane);
    airport.takeoff(plane);
    expect(airport.totalPlanes()).not.toContain(plane);
  });

  it('rejects landing when airport is full', function(){
    spyOn(airport, 'AirportCapasity').and.returnValue(50);
    for (var i = 0; i < airport.AirportCapasity(); i++){
      airport.land(plane);
    }
    expect( function(){ airport.land(); }).toThrowError('Cannot Land Airport is Full')
  });
});

describe('Entering capasity', function(){
  var airport = new Airport();

  it('Sets capasity to 100', function(){
    spyOn(airport, 'AirportCapasity').and.returnValue(100);
    expect(airport.AirportCapasity()).toEqual(100);
  });
});

describe('Weather Conditions', function(){
  var airport = new Airport();

  it('rejects takeoff when weather is stormy', function(){
    spyOn(airport, 'randomWeather').and.returnValue(1);
    expect( function(){ airport.takeoff(); }).toThrowError('Cannot takeoff weather is stormy');
  });

  //it('rejects landing when weather is stormy', function(){
    //spyOn(airport, 'randomWeather').and.returnValue(1);
    //expect( function(){ airport.land(); }).toThrowError('Cannot land weather is stormy');
  //});
});
