const getStudentIdsSum = (listOfStudents) => {
  listOfStudents.reduce((accumulator, st) => accumulator + st.id, 0)
};

export default getStudentIdsSum;
