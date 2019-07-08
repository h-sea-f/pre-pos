'use strict';

function collectSameElements(collectionA, objectB) {
  var result=[];
    var i,j;
      for(i=0;i<collectionA.length;i++){
        for(j=0;j<objectB.value.length;j++){
          if(objectB.value[j]==collectionA[i].key){
            result.push(collectionA[i].key);
          }

        }
      }
      return result;
}
