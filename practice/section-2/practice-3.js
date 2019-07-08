'use strict';

function countSameElements(collection) {
	var collectionA=collection;
	collectionA.push(" ");
  var result=[];
	var i,j;
	for(i=0;i<collectionA.length;){
		for(j=i;j<collectionA.length;j++){
			var count=0;
			if(collectionA[i].substr(0, 1)!=collectionA[j].substr(0, 1)){
				for(var k=i;k<j;k++){
					if(collectionA[k].length==1) count++;
					if(collectionA[k].length!=1){
						count+=parseInt(collectionA[k].match(/\d+/g));
						// console.log(parseInt(collectionA[i].match(/\d+/g)));
					} 
				}
				result.push({name:collectionA[i].charAt(0),summary:count});
				break;
			}
		}
		i=j;

	}
	console.log(result);
	return result;
}
