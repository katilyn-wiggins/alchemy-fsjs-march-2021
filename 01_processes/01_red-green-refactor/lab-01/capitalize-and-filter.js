const capitalizeAndFilter = (arr) => {
  const newArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index].charAt(0) !== 'f') {
      newArr.push(arr[index].toUpperCase());
    }
  }
  return newArr;
};

module.exports = capitalizeAndFilter;
