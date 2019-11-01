'use strict';

function Airport(){
this.thePlanes = [];
this.MAX_CAPASITY = 50;
}

Airport.prototype.land = function(plane){
  if(this.thePlanes.length >= this.MAX_CAPASITY){
    throw new Error('Cannot Land Airport is Full')
  }else{
    this.thePlanes.push(plane);
  }

}

Airport.prototype.totalPlanes = function(){
  return this.thePlanes;
}

Airport.prototype.takeoff = function(plane){
  this.thePlanes.pop(plane);
}


function Plane(){

}
