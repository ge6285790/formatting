import equal from 'deep-equal';

export default function array(that) {

  // 合併兩個 array
  that.arrayMerge = (array1, array2) => {
    const allArray = [...array1, ...array2];
    const mergeArray = [];
    allArray.map(item => {
      if (typeof item === 'object') {
        let append = false;
        mergeArray.map(arrayItem => {
          if (!equal(arrayItem, item)) {
            // console.log(item);
            append = true;

          }
          return arrayItem;
        });
        if (append) {
          mergeArray.push(item);
        }
      }
      if (mergeArray.indexOf(item) < 0) {
        mergeArray.push(item);
      }
      return item;
    });
    return mergeArray;
  }

  // 取出兩個 array 內重複的數值
  that.arraySameValue = (array1, array2) => {
    const allArray = [...array1, ...array2];
    const sameArray = [];
    const mergeArray = [];
    allArray.map(item => {
      if (typeof item === 'object') {
        let append = false;
        mergeArray.map(arrayItem => {
          if (equal(arrayItem, item)) {
            append = true;
          }
          return arrayItem;
        });
        if (append) {
          sameArray.push(item);
        }
      }
      if (mergeArray.indexOf(item) < 0) {
        mergeArray.push(item);
      } else {
        sameArray.push(item);
      }
      return item;
    });
    return sameArray;
  }

  // 將 mainArray 內與 removeArray 內相同的數值移除
  that.arrayRemoveValue = (mainArray, removeArray) => {
    return mainArray.filter(item => {
      let result = true;
      removeArray.map(removeItem => {
        if (equal(removeItem, item)) {
          result = false;
          return removeItem;
        }
        return removeItem;
      });
      return result;
    });
  }

  // 取出兩個 array 內不重複的數值
  that.arrayNonrepeatValue = (array1, array2) => {
    const newKey = that.arrayMerge(array1, array2);
    const sameKey = that.arraySameValue(array1, array2);
    return that.arrayRemoveValue(newKey, sameKey);
  }

}
