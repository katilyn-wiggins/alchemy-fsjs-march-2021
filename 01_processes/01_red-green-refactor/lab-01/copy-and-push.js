
const copyAndPush = (array, number) => {
  const clonedArray = [...array]; 
  clonedArray.push(number); 
  return clonedArray;
};

module.exports = copyAndPush;
