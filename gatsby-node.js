const axios = require('axios');
const path = require('path');

const getStudentData = async (index) => {
  const { data } = await axios.get(
    `http://tomaszgadek.com/api/students/${index}`
  );
  return data;
};

const getStudentsData = async () => {
  const { data } = await axios.get('http://tomaszgadek.com/api/students');

  return Promise.all(
    data.map(async (student) => {
      const result = await getStudentData(student.index);

      return { ...student, ...result };
    })
  );
};

exports.createPages = async ({ page, actions }) => {
  const { createPage } = actions;
  const studentTemplate = path.resolve('src/templates/studentsTemplate.js');
  const studentsData = await getStudentsData();

  await Promise.all(studentsData.map(async student => {
    const studentData = await getStudentData(student.index);

    createPage({
      path: `/student/${student.index}`,
      component: studentTemplate,
      context: { studentData, student }
    });
  }))
};
