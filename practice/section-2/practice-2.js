'use strict';

function countSameElements(collection) {
	var result=[];
	var i,j;
	for(i=0;i<collection.length;){
		for(j=i;j<=collection.length;j++){
			var count=0;
			if(collection[i]!=collection[j]){
				for(var k=i;k<j;k++){
					if(collection[i].length==1) count++;
					if(collection[i].length!=1) count+=Number(collection[i].charAt(collection[i].length-1));
				}
				result.push({key:collection[i].charAt(0),count:count});
				break;
			}
		}
		i=j;

	}
	console.log(result);
	return result;
}
