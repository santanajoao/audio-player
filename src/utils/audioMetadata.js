const jsmediatags = window.jsmediatags;

const getAudioMetadata = (file) => (
  new Promise((resolve, reject) => (
    new jsmediatags.read(file, {
      onSuccess: function({ tags }) {
        resolve(tags);
      },
      onError: function(error) {
        reject(new Error(error));
      }
    })
  ))
);

const handlePicture = (picture) => {
  const { data, format } = picture;
  let base64String = "";
  for (let i = 0; i < data.length; i++) {
    base64String += String.fromCharCode(data[i]);
  }
  return `data:${format};base64,${window.btoa(base64String)}`;
};

const getAudioFileInfos = async (file) => {
  const { title, artist, picture } = await getAudioMetadata(file);
  const cover = handlePicture(picture);
  const url = URL.createObjectURL(file);
  return { title, artist, cover, name: file.name, url };
}

export default getAudioFileInfos;
