'use strict';

function countSameElements(collection) {
  var result = new Array();
	for(let i = 0;i<collection.length;i++){
		if(collection[i].length>1){
			let character = collection[i][0];
			let num = parseInt(collection[i].match(/\d+/g));
			if(result.length==0){
				let obj = new Object();
				obj.name = character;
				obj.summary = num;
				result.push({name:obj.name,summary:obj.summary});
			}else{
				let j = 0;
				for(;j<result.length;j++){
					if(result[j].name == character){
						result[j].summary+=num;
						break;
					}
				}
				if(j == result.length){
					let obj = new Object();
					obj.name = character;
					obj.summary = num;
					result.push({name:obj.name,summary:obj.summary});
				}
			}
		}
		else{
			if(result.length==0){
				let obj = new Object();
				obj.name = collection[i];
				obj.summary = 1;
				result.push({name:obj.name,summary:obj.summary});
			}else{
				let j = 0;
				for(;j<result.length;j++){
					if(result[j].name == collection[i]){
						result[j].summary++;
						break;
					}
				}
				if(j == result.length){
					let obj = new Object();
					obj.name = collection[i];
					obj.summary = 1;
					result.push({name:obj.name,summary:obj.summary});
				}
			}
		}
	}
	return result;
}
