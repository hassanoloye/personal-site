import React from "react"
import SkillsList from "../elements/SkillsList"
import Resume from "../../resume.json"

Resume.skills.sort((skill1, skill2) => {
    if (skill1.level < skill2.level) {
        return 1
    }
    if (skill1.level > skill2.level) {
        return -1
    }
    return 0

})

function Skills() {
    return(
        <section className="section" id="skills">
            <div className="container">
                <h1 className="title">Skills</h1>
                <div className="columns">
                    <div className="column is-6">
                        <div className="has-text-centered">
                            <span className="icon has-text-link">
                                <i className="fas fa-3x fa-laptop-code"/>
                            </span>
                            <h2 className="title is-5">Software Development</h2>
                        </div>
                        <SkillsList skills = {
                            Resume.skills.filter(skill => skill.keywords.includes('Software Developer')).sort().reduce((obj,item) => ((obj[item.name] = item.level, obj)),{})
                        } />
                    </div>
                                        <div className="column is-6">
                        <div className="has-text-centered">
                            <span className="icon has-text-link">
                                <i className="fas fa-3x fa-language"/>
                            </span>
                            <h2 className="title is-5">Languages</h2>
                        </div>
                        <SkillsList skills = {
                            Resume.skills.filter(skill => skill.keywords.includes('Language')).reduce((obj,item) => ((obj[item.name] = item.level, obj)),{})
                        } />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
