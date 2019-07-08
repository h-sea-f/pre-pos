'use strict';

function countSameElements(collection) {
	var result=[];
	var i,j;
	for(i=0;i<collection.length;){
		for(j=i;j<=collection.length;j++){
			if(collection[i]!=collection[j]){
				result.push({key:collection[i],count:j-i});
				break;
			}
		}
		i=j;

	}
	console.log(result);
	return result;
}
