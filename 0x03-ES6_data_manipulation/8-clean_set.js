const cleanSet = (set, startString) => {
  const resultArray = [];

  const arr = Array.from(set);

  if (startString) {
    for (const elem of arr) {
      if (elem.startsWith(startString)) {
        resultArray.push(elem.substring(startString.length));
      }
    }
  }
  const resultString = resultArray.join('-');

  return resultString;
};

export default cleanSet;
