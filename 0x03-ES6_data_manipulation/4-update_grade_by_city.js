const updateStudentGradeByCity = (getListStudents, city, newGrades) => {
  const stCity = getListStudents.filter((st) => st.location === city);

    const stGrades = stCity.map(st => {
      const grade = newGrades[st.id] || 'N/A';
      return { ...st, grade };
    });
  return stGrades;
};

export default updateStudentGradeByCity;
