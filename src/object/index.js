import equal from 'deep-equal';

export default function object(that) {

  // 深層合併
  that.deepMerge = (obj1, obj2, mergeObj = {}) => {
    // mergeObj = {};
    const obj1Key = Object.keys(obj1);
    const obj2Key = Object.keys(obj2);
    const newKey = that.arrayMerge(obj1Key, obj2Key); // 合併兩個 array，重複的值只留下一個
    const sameKey = that.arraySameValue(obj1Key, obj2Key); // 取出兩個 array 重複的值
    const uniqueKey = that.arrayNonrepeatValue(obj1Key, obj2Key); // 取出兩個 array 不重複的值
    const key = that.arrayRemoveValue(newKey, sameKey); // 在 array1 內找出 array2 的值，並移除

    uniqueKey.map(item => {
      if (obj1[item]) {
        mergeObj = {
          ...mergeObj,
          [item]: obj1[item],
        }
        return item;
      }
      mergeObj = {
        ...mergeObj,
        [item]: obj2[item],
      }
      return item;
    });

    sameKey.map(item => {
      if (typeof obj1[item] === 'object' && typeof obj2[item] === 'object') {
        mergeObj = {
          ...mergeObj,
          [item]: {}
        };
        mergeObj[item] = that.deepMerge(obj1[item], obj2[item], mergeObj[item]);
        return item;
      }
      mergeObj = {
        ...mergeObj,
        [item]: obj2[item]
      };
      return item;
    })
    return mergeObj;
  }

  that.deepEuqal = (obj1, obj2) => {
    return equal(obj1, obj2)
  }

}
