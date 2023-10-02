const getListStudentIds = (list) => {
  if (list instanceof Array) {
    return list.map((st) => st.id);
  }
  return [];
};

export default getListStudentIds;
