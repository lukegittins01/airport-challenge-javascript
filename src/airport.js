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
function Plane(){

}
