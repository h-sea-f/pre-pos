'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result=[];
	var i,j;
	for(i=0;i<collectionA.length;){
		for(j=i;j<=collectionA.length;j++){
			if(collectionA[i]!=collectionA[j]){
				result.push({key:collectionA[i],count:j-i});
				break;
			}
		}
		i=j;

	}
	console.log(result);
	for(var i=0;i<result.length;i++){
  	for(var j=0;j<objectB.value.length;j++){
  		if(result[i].key==objectB.value[j]){
  			var a=parseInt(result[i].count/3);
  			result[i].count-=a;
  		}
  			
  	}

  }
  return result;
}
