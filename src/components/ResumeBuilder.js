import React, { useState } from 'react'
import { PlusCircle, Download, FileCheck, Trash2 } from 'lucide-react'
import Resume from './Resume'
import Header from './Header'
import './ResumeBuilder.css'

const ResumeBuilder = () => {
  const initialFormData = {
    name: "",
    title: "",
    address: "",
    email: "",
    phone: "",
    linkedin: "",
    website: "",
    summary: "",
    experience: [{
      title: "",
      company: "",
      date: "",
      responsibilities: [
        ""
        
      ]
    },
    {
      title: "",
      company: "",
      date: "",
      responsibilities: [
        "",
      ]
    }],
    projects: [{
      name: "",
      date: "",
      description: "",
      details: [
        "",
        
      ]
    }],
    education: [{
      degree: "",
      school: "",
      date: "",
      details: ""
    }],
    skills: [
      
    ],
    additionalInfo: {
      Languages: "",
      Certifications: "",
      "Awards/Activities": ""
    }
  }

  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [showPreview, setShowPreview] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name) newErrors.name = "Name is required"
    if (!formData.email) newErrors.email = "Email is required"
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format"
    }
    if (!formData.title) newErrors.title = "Job title is required"
    if (!formData.summary) newErrors.summary = "Summary is required"
    
    formData.experience.forEach((exp, index) => {
      if (!exp.title) newErrors[`experience_${index}_title`] = "Job title is required"
      if (!exp.company) newErrors[`experience_${index}_company`] = "Company is required"
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e, section, index, subfield) => {
    const { name, value } = e.target
    
    if (section) {
      if (Array.isArray(formData[section])) {
        const newArray = [...formData[section]]
        if (subfield) {
          newArray[index] = { ...newArray[index], [subfield]: value }
        } else {
          newArray[index] = value
        }
        setFormData({ ...formData, [section]: newArray })
      } else if (section === 'additionalInfo') {
        setFormData({
          ...formData,
          additionalInfo: { ...formData.additionalInfo, [name]: value }
        })
      }
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const addItem = (section) => {
    const newItems = {
      experience: { title: "", company: "", date: "", responsibilities: [""] },
      projects: { name: "", date: "", description: "", details: [""] },
      education: { degree: "", school: "", date: "", details: "" }
    }

    setFormData({
      ...formData,
      [section]: [...formData[section], newItems[section]]
    })
  }

  const removeItem = (section, index) => {
    const newArray = [...formData[section]]
    newArray.splice(index, 1)
    setFormData({ ...formData, [section]: newArray })
  }

  const addSubItem = (section, index, subfield) => {
    const newArray = [...formData[section]]
    newArray[index][subfield] = [...newArray[index][subfield], ""]
    setFormData({ ...formData, [section]: newArray })
  }

  const removeSubItem = (section, index, subfield, subIndex) => {
    const newArray = [...formData[section]]
    newArray[index][subfield].splice(subIndex, 1)
    setFormData({ ...formData, [section]: newArray })
  }

  const handleSkillsChange = (e) => {
    const skills = e.target.value.split(',').map(skill => skill.trim())
    setFormData({ ...formData, skills })
  }

  const generateResume = (e) => {
    e.preventDefault()
    if (validateForm()) {
      setShowPreview(true)
    }
  }

  const downloadResume = () => {
    window.print()
  }

  return (
    <>
      <Header />
      <div className="resume-builder">
        <div className="form-section">
          <form onSubmit={generateResume} className="resume-form">
            <h2>Personal Information</h2>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange(e)}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="title">Job Title</label>
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange(e)}
                className={errors.title ? 'error' : ''}
              />
              {errors.title && <span className="error-message">{errors.title}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange(e)}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="linkedin">LinkedIn</label>
                <input
                  id="linkedin"
                  name="linkedin"
                  type="text"
                  value={formData.linkedin}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  value={formData.website}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>

            <h2>Professional Summary</h2>
            <div className="form-group">
              <label htmlFor="summary">Professional Summary</label>
              <textarea
                id="summary"
                name="summary"
                value={formData.summary}
                onChange={(e) => handleInputChange(e)}
                className={errors.summary ? 'error' : ''}
              />
              {errors.summary && <span className="error-message">{errors.summary}</span>}
            </div>

            <h2>Professional Experience</h2>
            {formData.experience.map((exp, index) => (
              <div key={index} className="section-group">
                <div className="form-group">
                  <label>Job Title</label>
                  <input
                    type="text"
                    value={exp.title}
                    onChange={(e) => handleInputChange(e, 'experience', index, 'title')}
                    className={errors[`experience_${index}_title`] ? 'error' : ''}
                  />
                  {errors[`experience_${index}_title`] && 
                    <span className="error-message">{errors[`experience_${index}_title`]}</span>
                  }
                </div>

                <div className="form-group">
                  <label>Company</label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => handleInputChange(e, 'experience', index, 'company')}
                    className={errors[`experience_${index}_company`] ? 'error' : ''}
                  />
                  {errors[`experience_${index}_company`] && 
                    <span className="error-message">{errors[`experience_${index}_company`]}</span>
                  }
                </div>

                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="text"
                    value={exp.date}
                    onChange={(e) => handleInputChange(e, 'experience', index, 'date')}
                    placeholder="e.g., Jan 2024 - Present"
                  />
                </div>

                {exp.responsibilities.map((resp, respIndex) => (
                  <div key={respIndex} className="form-group">
                    <label>Responsibility {respIndex + 1}</label>
                    <div className="input-with-button">
                      <input
                        type="text"
                        value={resp}
                        onChange={(e) => {
                          const newExp = [...formData.experience]
                          newExp[index].responsibilities[respIndex] = e.target.value
                          setFormData({ ...formData, experience: newExp })
                        }}
                      />
                      <button 
                        type="button" 
                        onClick={() => removeSubItem('experience', index, 'responsibilities', respIndex)}
                        className="remove-button"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
                
                <button 
                  type="button"
                  onClick={() => addSubItem('experience', index, 'responsibilities')}
                  className="add-button"
                >
                  <PlusCircle size={16} />
                  Add Responsibility
                </button>

                {index > 0 && (
                  <button 
                    type="button"
                    onClick={() => removeItem('experience', index)}
                    className="remove-button mt-4"
                  >
                    <Trash2 size={16} />
                    Remove Experience
                  </button>
                )}
              </div>
            ))}
            
            <button 
              type="button"
              onClick={() => addItem('experience')}
              className="add-button mt-4"
            >
              <PlusCircle size={16} />
              Add Experience
            </button>

            <h2>Skills</h2>
            <div className="form-group">
              <label htmlFor="skills">Skills (comma-separated)</label>
              <input
                id="skills"
                type="text"
                value={formData.skills.join(', ')}
                onChange={handleSkillsChange}
                placeholder="e.g., React, JavaScript, CSS"
              />
            </div>

            <h2>Education</h2>
            {formData.education.map((edu, index) => (
              <div key={index} className="section-group">
                <div className="form-group">
                  <label>Degree</label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => handleInputChange(e, 'education', index, 'degree')}
                  />
                </div>

                <div className="form-group">
                  <label>School</label>
                  <input
                    type="text"
                    value={edu.school}
                    onChange={(e) => handleInputChange(e, 'education', index, 'school')}
                  />
                </div>

                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="text"
                    value={edu.date}
                    onChange={(e) => handleInputChange(e, 'education', index, 'date')}
                    placeholder="e.g., Sep 2019 - Sep 2023"
                  />
                </div>

                <div className="form-group">
                  <label>Details</label>
                  <textarea
                    value={edu.details}
                    onChange={(e) => handleInputChange(e, 'education', index, 'details')}
                    placeholder="e.g., Relevant coursework, achievements, etc."
                  />
                </div>

                {index > 0 && (
                  <button 
                    type="button"
                    onClick={() => removeItem('education', index)}
                    className="remove-button mt-4"
                  >
                    <Trash2 size={16} />
                    Remove Education
                  </button>
                )}
              </div>
            ))}
            
            <button 
              type="button"
              onClick={() => addItem('education')}
              className="add-button mt-4"
            >
              <PlusCircle size={16} />
              Add Education
            </button>

            <h2>Projects</h2>
            {formData.projects.map((project, index) => (
              <div key={index} className="section-group">
                <div className="form-group">
                  <label>Project Name</label>
                  <input
                    type="text"
                    value={project.name}
                    onChange={(e) => handleInputChange(e, 'projects', index, 'name')}
                  />
                </div>

                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="text"
                    value={project.date}
                    onChange={(e) => handleInputChange(e, 'projects', index, 'date')}
                    placeholder="e.g., Jan 2023 - Jun 2023"
                  />
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={project.description}
                    onChange={(e) => handleInputChange(e, 'projects', index, 'description')}
                  />
                </div>

                {project.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="form-group">
                    <label>Detail {detailIndex + 1}</label>
                    <div className="input-with-button">
                      <input
                        type="text"
                        value={detail}
                        onChange={(e) => {
                          const newProjects = [...formData.projects]
                          newProjects[index].details[detailIndex] = e.target.value
                          setFormData({ ...formData, projects: newProjects })
                        }}
                      />
                      <button 
                        type="button" 
                        onClick={() => removeSubItem('projects', index, 'details', detailIndex)}
                        className="remove-button"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
                
                <button 
                  type="button"
                  onClick={() => addSubItem('projects', index, 'details')}
                  className="add-button"
                >
                  <PlusCircle size={16} />
                  Add Detail
                </button>

                {index > 0 && (
                  <button 
                    type="button"
                    onClick={() => removeItem('projects', index)}
                    className="remove-button mt-4"
                  >
                    <Trash2 size={16} />
                    Remove Project
                  </button>
                )}
              </div>
            ))}
            
            <button 
              type="button"
              onClick={() => addItem('projects')}
              className="add-button mt-4"
            >
              <PlusCircle size={16} />
              Add Project
            </button>

            <h2>Additional Information</h2>
            <div className="form-group">
              <label>Languages</label>
              <input
                type="text"
                name="Languages"
                value={formData.additionalInfo.Languages}
                onChange={(e) => handleInputChange(e, 'additionalInfo')}
              />
            </div>

            <div className="form-group">
              <label>Certifications</label>
              <input
                type="text"
                name="Certifications"
                value={formData.additionalInfo.Certifications}
                onChange={(e) => handleInputChange(e, 'additionalInfo')}
              />
            </div>

            <div className="form-group">
              <label>Awards/Activities</label>
              <input
                type="text"
                name="Awards/Activities"
                value={formData.additionalInfo["Awards/Activities"]}
                onChange={(e) => handleInputChange(e, 'additionalInfo')}
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn generate-button">
                <FileCheck size={16} />
                Generate Resume
              </button>
              {showPreview && (
                <button type="button" onClick={downloadResume} className="btn download-button">
                  <Download size={16} />
                  Download Resume
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="preview-section">
          {showPreview ? (
            <Resume data={formData} />
          ) : (
            <div className="preview-placeholder">
              <div className="alert">
                Fill in the form and click "Generate Resume" to see your resume preview here.
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ResumeBuilder

