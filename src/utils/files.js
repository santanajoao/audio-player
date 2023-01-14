const copyArrayOfFiles = (filesArray) => {
  const arrayCopy = [];
  filesArray.forEach((file) => {
    const fileCopy = new File([file], file.name, { type: file.type });
    arrayCopy.push(fileCopy);
  });
  return arrayCopy;
};

export default copyArrayOfFiles;
