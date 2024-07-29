import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Professional Experience</h2>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Duration</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MentRent</td>
            <td>FastAPI Developer Backend (Freelancing)</td>
            <td>25/07/2024 – Present</td>
            <td>
              <ul>
                <li>Developed JWT based Authentication system for session-based API token management</li>
                <li>Developed APIs for Mailing of OTP and different booking transactions using Brevo 3rd Party APIs</li>
                <li>Designed and Developed Mentor, Mentee and Booking related APIs using Pydantic, MongoDB and FastAPI in Python</li>
                <li>Used Jinja Templating Language for Frontend Rendering for FastAPI login screen</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Suven Consultants and Technology Pvt. Ltd.</td>
            <td>Front-End Developer Intern</td>
            <td>21/06/2023 – 19/07/2023</td>
            <td>
              <ul>
                <li>Created a frontend component with Drop Down and Multiselect elements for Filter Bar using React JS</li>
                <li>Developed various forms with custom fields</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Bolt IoT</td>
            <td>Software Development Technology Intern</td>
            <td>01/05/2023 – 04/06/2023</td>
            <td>
              <ul>
                <li>Learnt python programming</li>
                <li>Created Video Explanations for Coding Problems</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Experience;
