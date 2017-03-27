export default function object(that) {

  that.arrayMerge = (array1, array2) => {
    const allArray = [...array1, ...array2];
    const mergeArray = [];
    allArray.map(item => {
      if (mergeArray.indexOf(item) < 0) {
        mergeArray.push(item);
      }
      return item;
    });
    console.log(mergeArray);
    return mergeArray;
  }

  that.arraySameValue = (array1, array2) => {
    const allArray = [...array1, ...array2];
    const sameArray = [];
    const mergeArray = [];
    allArray.map(item => {
      if (mergeArray.indexOf(item) < 0) {
        mergeArray.push(item);
      } else {
        sameArray.push(item);
      }
      return item;
    });
    console.log(sameArray);
    return sameArray;
  }

  that.deepMerge = (obj1, obj2, mergeObj = {}) => {
    // let mergeObj = {};
    const obj1Key = Object.keys(obj1);
    const obj2Key = Object.keys(obj2);
    const newKey = that.arrayMerge(obj1Key, obj2Key);
    const sameKey = that.arraySameValue(obj1Key, obj2Key);
    console.log(newKey, sameKey);
    //已經有全部的 array 以及知道 重複的 key，因此將不重複的地方合併，重複的地方送下去繼續判斷
    newKey.map(item => {
      // if (obj2Key.indexOf(item) > -1 && ) {
    });
    if (obj1Key.length >= obj2Key.length) {
      obj1Key.map((item) => {
        console.log(item);
        if (obj2Key.indexOf(item) > -1) {
          mergeObj[item] = {};
          that.deepMerge(obj1[item], obj2[item], mergeObj);
        } else {
          mergeObj = {
            ...mergeObj,
            ...obj1
          }
          console.log(mergeObj);
        }
      });
    }

  }

}
