import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Technical Skills</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Problem Solving Skills</td>
            <td>Data Structures and Algorithms</td>
          </tr>
          <tr>
            <td>Languages/Scripting/DB</td>
            <td>C, Python, JavaScript, Java, Shell, MySQL, MongoDB</td>
          </tr>
          <tr>
            <td>Web-dev & Frameworks</td>
            <td>HTML, CSS, FastAPI, NodeJS, React JS, Pydantic</td>
          </tr>
          <tr>
            <td>Machine Learning</td>
            <td>Scikit-Learn, Numpy, Pandas, Matplotlib, Data Modelling, Data Cleaning, Data Visualization</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Skills;
