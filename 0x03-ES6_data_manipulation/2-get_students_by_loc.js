const getStudentsByLocation = (list, city) => {
  if (list instanceof Array && typeof city === 'string') {
    return list.filter((st) => st.location === city);
  }
  return [];
};

export default getStudentsByLocation;
