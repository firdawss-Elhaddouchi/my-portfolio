import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css';

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData, technicalSkillsData } from '../../data/skillsData';
import { skillsImage } from '../../utils/skillsImage';

function Skills() {

    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 20px ${theme.primary30}`
    };

    return (
        <div className="skills" style={{ backgroundColor: theme.secondary }}>

            <div className="skillsHeader">
                <h2 style={{ color: theme.primary }}>
                    Skills
                </h2>
            </div>

            {/* Moving skills */}
            <div className="skillsContainer">
                <div className="skill--scroll">

                    <Marquee
                        gradient={false}
                        speed={60}
                        pauseOnHover={true}
                        direction="left"
                    >

                        {skillsData.map((skill, id) => (

                            <div
                                className="skill--box"
                                key={id}
                                style={skillBoxStyle}
                            >

                                <img
                                    src={skillsImage(skill)}
                                    alt={skill}
                                />

                                <h3 style={{ color: theme.tertiary }}>
                                    {skill}
                                </h3>

                            </div>

                        ))}

                    </Marquee>

                </div>
            </div>

            {/* Technical skills */}
            <div className="technicalSkills">

                {technicalSkillsData.map((group) => (

                    <div
                        className="technicalSkillGroup"
                        key={group.id}
                    >

                        <h3 style={{ color: theme.primary }}>
                            {group.title}
                        </h3>

                        <div className="technicalSkillList">

                            {group.skills.map((skill, index) => (

                                <span
                                    className="technicalSkill"
                                    key={index}
                                    style={{
                                        color: theme.tertiary,
                                        borderColor: theme.primary30
                                    }}
                                >
                                    {skill}
                                </span>

                            ))}

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Skills;