'use strict';

function createUpdatedCollection(collectionA, objectB) {
  	var collection=collectionA;
  for(var i=0;i<collection.length;i++){
  	for(var j=0;j<objectB.value.length;j++){
  		if(collection[i].key==objectB.value[j]){
  			var a=parseInt(collection[i].count/3);
  			collection[i].count-=a;
  		}
  			
  	}

  }
  return collection;
}
