const copyArrayOfObjects = (objectsArray) => {
  const arrayCopy = [];
  objectsArray.forEach((object) => {
    arrayCopy.push({ ...object })
  });
  return arrayCopy;
};

export default copyArrayOfObjects;
