'use strict';

function Airport(){
this.thePlanes = [];
}

Airport.prototype.land = function(plane){
  if(this.thePlanes.length >= this.AirportCapasity()){
    throw new Error('Cannot Land Airport is Full')
  }else{
    this.thePlanes.push(plane);
  }
}

Airport.prototype.totalPlanes = function(){
  return this.thePlanes;
}

Airport.prototype.takeoff = function(plane){
  if(this.randomWeather() == 1){
    throw new Error('Cannot takeoff weather is stormy')
  }else{
    this.thePlanes.pop(plane);
  }
}

Airport.prototype.randomWeather = function(){
  return Math.floor(Math.random() * 2);
}

Airport.prototype.AirportCapasity = function(){
  this.capasity = window.prompt("Enter Capasity: ");
  return this.capasity;
}

Airport.prototype.totalCapasity = function(){
  return this.capasity;
}

function Plane(){

}
