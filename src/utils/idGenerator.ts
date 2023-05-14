export const idGenerator = () => {
  function getLetters(size: number) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomString = "";

    for (let i = 0; i < size; i++) {
      const index = Math.floor(Math.random() * letters.length);
      randomString += letters.charAt(index);
    }

    return randomString;
  }

  const letters = getLetters(2);
  const int = (Math.floor(Math.random() * 8999) + 1000).toString();
  const id = letters + int;
  return id;
};
