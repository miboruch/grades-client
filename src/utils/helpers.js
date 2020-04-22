export const API_URL = 'http://tomaszgadek.com/api/students';

/*
  * Get all students with mark passed in an argument, and pick the last student points,
  * with the lowest number of points
  *
  * for example:
  *  - Student 1: mark 3.0, points: 15,
  *  - Student 2: mark 3.0, points: 14,
  *  - Student 3: mark 3.0, points: 13
  *
  * Pick student with 13 points -> then calculate
 */
export const getLastStudentPointsWithMark = (students, mark) => {
  const studentsWithTheLowestGrade = students.filter(student => student.mark === mark);
  return Math.min(...studentsWithTheLowestGrade.points);
}
