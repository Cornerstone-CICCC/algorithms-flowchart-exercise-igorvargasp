

const handleStudentGrades = (grade) => {
    if(grade >= 80) {
        return "A"
    }else if( grade >= 60) {
        return "B"
    }else if( grade >= 40) {
        return "C"
    }  
    return "No grade"
}


console.log(handleStudentGrades(39))