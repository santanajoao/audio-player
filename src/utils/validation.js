const getError = (audioFile, validTypes, audioList) => {
  if (!validTypes.includes(audioFile.type)) {
    return 'Tipo de arquivo inválido!';
  }

  const alreayIn = audioList.some(({ name }) => name === audioFile.name);
  if (alreayIn) {
    return 'Você já adicionou esse áudio!';
  }

  return null;
};

export default getError;
