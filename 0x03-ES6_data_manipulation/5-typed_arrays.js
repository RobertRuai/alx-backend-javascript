const createInt8TypedArray = (length, position, value) => {
  const buff = new ArrayBuffer(length);

  const int8View = new Int8Array(buff);

  if (position >= 0 && position < length) {
    int8View[position] = value;
  } else {
    console.error("Position outside range");
  }

  return buff;
};

export default createInt8TypedArray;
