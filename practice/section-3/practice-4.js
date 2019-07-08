'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result=[];
	var i,j;
	for(i=0;i<collectionA.length;){
		for(j=i;j<=collectionA.length;j++){
			var count=0;
			if(collectionA[i]!=collectionA[j]){
				for(var k=i;k<j;k++){
					if(collectionA[i].length==1) count++;
					if(collectionA[i].length!=1) count+=Number(collectionA[i].charAt(collectionA[i].length-1));
				}
				result.push({key:collectionA[i].charAt(0),count:count});
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
