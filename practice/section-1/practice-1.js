'use strict';

function collectSameElements(collectionA, collectionB) {
var result=[];
var i,j;
  for(i=0;i<collectionA.length;i++){
    for(j=0;j<collectionB.length;j++){
      if(collectionB[j]==collectionA[i]){
        result.push(collectionA[i]);
      }

    }
  }
  return result;
}
