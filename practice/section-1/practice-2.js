'use strict';

function collectSameElements(collectionA, collectionB) {
  var result=[];
  var i,j;
    for(i=0;i<collectionA.length;i++){
      for(j=0;j<collectionB[0].length;j++){
        if(collectionB[0][j]==collectionA[i]){
          result.push(collectionA[i]);
        }

      }
    }
    return result;
}
