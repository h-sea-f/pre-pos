'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var collection=collectionA;
  for(var i=0;i<collection.length;i++){
  	for(var j=0;j<objectB.value.length;j++){
  		if(collection[i].key==objectB.value[j])
  			collection[i].count--;
  	}

  }
  return collection;
}
