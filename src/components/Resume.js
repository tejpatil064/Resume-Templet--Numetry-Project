import React from 'react'
import './Resume.css'

const Resume = ({ data }) => {
  return (
    <div className="resume-container">
      <div className="resume">
        <header>
          <h1>{data.name}</h1>
          <h2>{data.title}</h2>
          <div className="contact-info">
            {[
              data.address,
              data.email,
              data.phone,
              data.linkedin,
              data.website
            ]
              .filter(Boolean)
              .map((item, index, arr) => (
                <React.Fragment key={index}>
                  <span>{item}</span>
                  {index < arr.length - 1 && <span className="separator">|</span>}
                </React.Fragment>
              ))}
          </div>
        </header>

        <section>
          <h3>SUMMARY</h3>
          <p>{data.summary}</p>
        </section>

        {data.experience.length > 0 && (
          <section>
            <h3>PROFESSIONAL EXPERIENCE</h3>
            {data.experience.map((exp, index) => (
              <div key={index} className="entry">
                <div className="entry-header">
                  <div className="entry-title">
                    <h4>{exp.title}</h4>
                    <span className="company">{exp.company}</span>
                  </div>
                  <span className="date">{exp.date}</span>
                </div>
                <ul>
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {data.projects.length > 0 && (
          <section>
            <h3>PROJECTS</h3>
            {data.projects.map((project, index) => (
              <div key={index} className="entry">
                <div className="entry-header">
                  <div className="entry-title">
                    <h4>{project.name}</h4>
                  </div>
                  <span className="date">{project.date}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <ul>
                  {project.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {data.skills.length > 0 && (
          <section>
            <h3>SKILLS</h3>
            <div className="skills-grid">
              {data.skills.map((skill, index) => (
                <span key={index} className="skill-item">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {data.education.length > 0 && (
          <section>
            <h3>EDUCATION</h3>
            {data.education.map((edu, index) => (
              <div key={index} className="entry">
                <div className="entry-header">
                  <div className="entry-title">
                    <h4>{edu.degree}</h4>
                    <span className="school">{edu.school}</span>
                  </div>
                  <span className="date">{edu.date}</span>
                </div>
                {edu.details && <p>{edu.details}</p>}
              </div>
            ))}
          </section>
        )}

        <section>
          <h3>ADDITIONAL INFORMATION</h3>
          <div className="additional-info">
            {Object.entries(data.additionalInfo).map(([key, value], index) => (
              value && (
                <div key={index} className="info-item">
                  <strong>{key}:</strong> {value}
                </div>
              )
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Resume

