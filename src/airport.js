'use strict';

function Airport(){
this.thePlanes = [];
}

Airport.prototype.land = function(plane){
  this.thePlanes.push(plane);
}

Airport.prototype.totalPlanes = function(){
  return this.thePlanes;
}

Airport.prototype.takeoff = function(plane){
  this.thePlanes.pop(plane);
}
function Plane(){

}
