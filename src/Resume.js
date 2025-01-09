import React from 'react'
import './Resume.css'

const Resume = ({ data }) => {
  return (
    <div className="resume">
      <header className="header">
        <h1>{data.name}</h1>
        <h2>{data.title}</h2>
        <p className="contact-info">
          {data.address} | {data.number} | {data.email} | {data.linkedin} | {data.website}
        </p>
      </header>

      <section className="section">
        <h3>SUMMARY</h3>
        <p>{data.summary}</p>
      </section>

      <section className="section">
        <h3>PROFESSIONAL EXPERIENCE</h3>
        {data.experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h4>{exp.title}, {exp.company}</h4>
              <span className="date">{exp.date}</span>
            </div>
            <ul>
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="section">
        <h3>PROJECTS</h3>
        {data.projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-header">
              <h4>{project.name}</h4>
              <span className="date">{project.date}</span>
            </div>
            <p>{project.description}</p>
            <ul>
              {project.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="section">
        <h3>SKILLS</h3>
        <div className="skills-grid">
          {data.skills.map((skill, index) => (
            <span key={index} className="skill-item">{skill}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <h3>EDUCATION</h3>
        {data.education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <h4>{edu.degree}</h4>
              <span className="date">{edu.date}</span>
            </div>
            <p>{edu.school}</p>
            {edu.details && <p>{edu.details}</p>}
          </div>
        ))}
      </section>

      <section className="section">
        <h3>ADDITIONAL INFORMATION</h3>
        <div className="additional-info">
          {Object.entries(data.additionalInfo).map(([key, value], index) => (
            <div key={index} className="info-item">
              <strong>{key}:</strong> {value}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Resume

