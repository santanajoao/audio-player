const getErrorList = (audioFile, validTypes, audioList) => {
  const errorList = [];

  if (!validTypes.includes(audioFile.type)) {
    errorList.push('Tipe de arquivo inválido!');
  }

  const alreayIn = audioList.some(({ name }) => name === audioFile.name);
  if (alreayIn) {
    errorList.push('Você já adicionou esse áudio!');
  }

  return errorList;
};

export default getErrorList;
