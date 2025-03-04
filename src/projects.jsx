import React, { useState } from "react";
import './projects.css';
import arrow from './assets/arrow.png';
import catWorking from './assets/catworking.gif';
import { NavBar } from './App.jsx'; 

function Projects() { 
    const [selected, setSelected] = useState([]);

    const toggleOption = (id) => {
        setSelected((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((item) => item !== id)
                : [...prevSelected, id]
        );
    };

    const data = [
        { id: 'UXDesign', title: 'UX Design' },
        { id: 'React.js', title: 'React.js' },
        { id: 'Python', title: 'Python' },
        { id: 'C++', title: 'C++' },
        { id: 'Javascript', title: 'Javascript' },
        { id: 'Java', title: 'Java' },
        { id: 'Blender', title: 'Blender' },
        { id: 'mySQL', title: 'SQL' },
        { id: 'APIdev', title: 'API Development' },

    ];
    const projects = [
        { id: 2, title: 'Crypto Hustle', image: './src/assets/ProjectCover.png',date: 'Jan 2024- May 2024',   skills: ['React.js', 'C++'] ,descr:'For my Database Systems class I created a schema and created a SQL database replicating the backend interface of AirBNB',link: "https://github.com/561Aloha/CryptoHustle"},
        { id: 3, title: 'Habit Tracker Application', image: './src/assets/ProjectCover.png',date: 'August 2024- December 2024',   skills: ['Python', 'C++'],descr:'For my Object Oriented Class, our team created a Java Application for hospitals and nurses',link: "https://github.com/561Aloha/Habit-Tracker" },
        { id: 4, title: 'Nurse Management System', image: './src/assets/ProjectCover.png', date: 'Jan 2022 - December 2022' ,  skills: ['Python', 'C++'] ,descr:'This UX Design Project is a mobile ordering application.',link: "https://github.com/561Aloha/Nurse-Management" },
        { id: 5, title: 'Weather Dashboard', image: './src/assets/ProjectCover.png', date: 'May 2022- December 2022',  skills: ['Python', 'React.js'] ,descr:'This UX Design Project is a mobile ordering application.', link: "https://github.com/561Aloha/Weather-Dashboard"},
        { id: 6, title: 'Spotify Redesign', image: './src/assets/ProjectCover.png', date: 'May 2024- December 2024',  skills: ['Figma', 'UX Design'] ,descr:'This UX design presentation uses Spotifys current branding as I introduce a conceptual new feature ', link: "https://www.figma.com/slides/Bzbavt4OouWH6zYyLjbPau/Spotify?t=bun8IySF8q4HUFdB-0"},
        { id: 7, title: 'Natures Way Cafe', image: './src/assets/ProjectCover.png', date: 'January 2022- December 2022',  skills: ['Figma', 'UX Design'] ,descr:'This project highlighting the several stages in UX Design', link: "./uxdesign"},

        { id: 1, title: 'Responsive Portfolio', image: './src/assets/ProjectCover.png', date: 'Jan 2024- October 2024',  skills: ['React.js', 'Python'], descr:'This project showcases my skills in API Development. I worked on a team to build this application, which users would view their favorite stocks and redirect to a page that provides more information',link: "https://example.com/project-one" },
    ];

    const filteredProjects = selected.length
        ? projects.filter(project => selected.some(skill => project.skills.includes(skill)))
        : projects;


        return (
            
            <div className="entire-page">
                <NavBar />
                <div className="proj-intro">

                   <h4>Open-source projects I've made over the years, including this website, an emulator, and various games, apps, frameworks, and boilerplates.</h4>
                   <h3>Select what skills you want to see</h3>
                </div>
                <div>
                    <div className="multi-select">
                        {data.map(option => (
                            <button
                                key={option.id}
                                className={`multi-select-button ${selected.includes(option.id) ? 'selected' : ''}`}
                                onClick={() => toggleOption(option.id)}
                            >
                                {option.title}
                            </button>
                        ))}
                    </div>
                </div>
                
        
                <div className="projects-list">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="skills">
                                {project.skills.map(skill => (
                                    <span key={skill} className={`skill-badge ${skill.replace(/\s+/g, '-')}`}>{skill}</span>
                                ))}
                            </div>
                            <h4>{project.date}</h4>
                            <h2>{project.title}</h2>
                            <p>{project.descr}</p>
                            <div className="together">
                                <button onClick={() => window.location.href = project.link}>
                                    Source <img src={arrow} className="source-arrow"></img>
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-projects">
                        <img src={catWorking} alt="Cat working" />
                        <p>No projects found for the selected skills.</p>
                    </div>
                    )}
                </div>

                </div>
        );
    }
    
    export default Projects;