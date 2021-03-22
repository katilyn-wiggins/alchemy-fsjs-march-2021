const capitalizeAndFilter = (arr) => {
  const newArr = arr.map(str => str.toUpperCase()); 
  const filteredArr = newArr.filter(str => str.charAt(0) !== 'F'); 
  return filteredArr; 
};
module.exports = capitalizeAndFilter;




// const newArr = [];
// for (let index = 0; index < arr.length; index++) {
//   if (arr[index].charAt(0) !== 'f') {
//     newArr.push(arr[index].toUpperCase());
//   }
// }
// return newArr;
