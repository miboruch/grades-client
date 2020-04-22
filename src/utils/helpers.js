export const API_URL = 'http://tomaszgadek.com/api/students';

/*
 * Argument - array of 5 students with next mark
 * (current: 3 -> 3.5, current 3.5 -> 4, ...)
 *
 * We have to pick one student conditionally
 * if mark is not 5 then pick one student with the lowest number of points
 *
 * if mark is 5, then pick the student with the highest number of points
 */

export const getLastStudentFromNextMark = (nextMarkStudents) => {
  return nextMarkStudents[0].mark !== 5
    ? nextMarkStudents.reduce((previous, current) =>
        previous.points < current.points ? previous : current
      )
    : nextMarkStudents[0];
};
