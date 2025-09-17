const handleStudentGrades = (marks) => {
  if (marks >= 80) {
    return "A";
  } else if (marks >= 60) {
    return "B";
  } else if (marks >= 40) {
    return "C";
  }
  return "No grade";
};

console.log(handleStudentGrades(39));
