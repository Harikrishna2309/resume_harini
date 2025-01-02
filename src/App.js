import "./App.css";
import profile from "./images/images.jpg";
function App() {
  return (
    <div className="resume-container">
      <header className="header-class">
        <div className="header-left">
          <h1>Harini E A</h1>
          <p>
            Email:{" "}
            <a href="mailto:harinieswaran@gmail.com">harinieswaran@gmail.com</a>
          </p>
          <p>Cell: 7397105663</p>
          <p>
            {" "}
            <a
              href="https://www.linkedin.com/in/harini-eswaran"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div className="image-container">
          <img src={profile} alt="profile" />
        </div>
      </header>

      <section>
        <h2>Career Objective</h2>
        <p>
          Committed, efficient and aspiring MBA candidate with dual
          specialization in Marketing and Human resources, looking for an
          internship where I can enhance my skills and utilize them to
          contribute meaningfully to the organization's progress. I am eager to
          take on challenges, collaborate with a dynamic team, and grow both
          personally and professionally while making a positive impact.
        </p>
      </section>

      <section>
        <h2>Academic</h2>
        <div className="academic-sec">
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Institute/University</th>
              <th>Year of Passing</th>
              <th>CGPA/Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MBA</td>
              <td>
                Amrita School of Business, Amrita Vishwa Vidyapeetham,
                Coimbatore
              </td>
              <td>2026</td>
              <td>9.58*/10</td>
            </tr>
            <tr>
              <td>UG (B.E - EEE)</td>
              <td>
                Dr. Mahalingam College of Engineering and Technology, Pollachi
              </td>
              <td>2023</td>
              <td>9.56/10</td>
            </tr>
            <tr>
              <td>+2</td>
              <td>Vishwa Sishya Vidyodaya School, Pollachi</td>
              <td>2019</td>
              <td>92/100</td>
            </tr>
            <tr>
              <td>10th</td>
              <td>Disha – A Life School, Pollachi</td>
              <td>2017</td>
              <td>91.1/100</td>
            </tr>
          </tbody>
        </table>
        </div>
        
      </section>

      <section>
        <h2>Summer Internship</h2>
        <p>
          <strong>Organization:</strong> Bosch Rexroth Centre of Excellence,
          Pollachi
        </p>
        <p>
          <strong>Duration:</strong> 2 months
        </p>
        <p>
          Collaborated with the staff to explore industrial automation and
          worked in a hands-on project on Automated Pick and Place System using
          Pneumatics. Developed an Automated Pick and Place System using
          Pneumatics and developed Human Machine Interface System for control.
        </p>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Automated Pick and Place System:</strong> Developed using
            Pneumatics with expertise in Hydraulics, Pneumatics, PLC
            development, Sensorics, HMI, and SCADA.
          </li>
          <li>
            <strong>
              A Wide Conversion ratio bidirectional modified SEPIC Converter:
            </strong>{" "}
            Studied SEPIC converters, developed a prototype, and achieved a high
            buck and boost ratio.
          </li>
        </ul>
      </section>

      <section>
        <h2>Professional Certification</h2>
        <ul>
          <li>
            Principles of Management, National Programme on Technology Enhanced
            Learning (2021)
          </li>
          <li>Business English Certification – Preliminary (2020)</li>
          <li>Typewriting Certification – English Junior Grade (2020)</li>
        </ul>
      </section>

      <section>
        <h2>Domain Related Technical Skills and Certification</h2>
        <ul>
          <li>Sales and CRM Overview, Coursera (Ongoing).</li>
          <li>Talent Acquisition, Coursera (Ongoing).</li>
          <li>Microsoft Excel: Beginner to Advance, Udemy (Ongoing).</li>
          <li>
            Finance for Non-Finance Professionals, Coursera, November 2024.
          </li>
          <li>HR Analytics, Udemy, November 2024.</li>
          <li>Digital Marketing, Hubspot, October 2024.</li>
          <li>
            Building a Business Presence with Facebook Marketing, Coursera,
            October 2024.
          </li>
        </ul>
      </section>

      <section>
        <h2>IT Skills</h2>
        <p>MS Office</p>
      </section>

      <section>
        <h2>Papers Presented</h2>
        <p>
          Presented paper on “A Wide Conversion ratio bidirectional modified
          SEPIC Converter with Non- Dissipative Current Snubber” at the
          International Conference on Innovation towards Sustainable Development
          Goals (April 2023) and received the “Best Paper Presenter Award”.
        </p>
      </section>

      <section>
        <h2>Achievements and Responsibilities</h2>
        <ul>
          <li>
            Gold Medalist – 1st Rank Holder (2023) – Dr. Mahalingam College of
            Engineering and Technology
          </li>
          <li>
            Dean’s High Achiever Award – Merit with Scholarship, Amrita School
            of Business (2024)
          </li>
          <li>
            Member of Operations Committee, Pragati’25 – Business Fest, Amrita
            School of Business (2024)
          </li>
          <li>
            President of Rostrum Club, Dr. Mahalingam College of Engineering and
            Technology (2021-2023)
          </li>
          <li>
            Student Member of Internal Quality Assurance Cell, Academic Council
            (2022-2023)
          </li>
        </ul>
      </section>

      <section>
        <h2>Personal Strengths</h2>
        <ul>
          <li>Communication Skills</li>
          <li>Assertiveness</li>
          <li>Dedicated</li>
          <li>Self-motivated</li>
          <li>Good Negotiation Skills</li>
        </ul>
      </section>

      <section>
        <h2>Personal Details</h2>
        <p>
          <strong>Date of Birth:</strong> 03-12-2001
        </p>
        <p>
          <strong>Languages Known:</strong> English (Professional), Tamil
          (Native)
        </p>
        <p>
          <strong>Hobbies:</strong> Threadcraft
        </p>
        <p>
          <strong>Permanent Address:</strong> 1/125, Balraj Gounder Thottam, C
          Arthanaripalayam, R Ponnapuram (P.O), Pollachi, Coimbatore, Tamil Nadu
          - 642002
        </p>
      </section>
    </div>
  );
}

export default App;
