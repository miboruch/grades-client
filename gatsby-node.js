const axios = require('axios');
const path = require('path');

const getStudentsData = async () => {
  const { data } = await axios.get('http://tomaszgadek.com/api/students');
  return data;
};

const getStudentData = async (index) => {
  const { data } = await axios.get(
    `http://tomaszgadek.com/api/students/${index}`
  );
  return data;
};

exports.createPages = async ({ page, actions }) => {
  const { createPage } = actions;
  const studentTemplate = path.resolve('src/templates/studentsTemplate.js');
  const studentsData = await getStudentsData();

  const students = studentsData.map((student, index) => {
    return { ...student, position: ++index };
  });

  studentsData.forEach(async (student) => {
    const studentData = await getStudentData(student.index);

    createPage({
      path: `/student/${student.index}`,
      component: studentTemplate,
      context: { student, studentData }
    });
  });
};
