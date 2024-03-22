import Project from './Project';

import noteTaker from '../../images/NoteTaker.png';
import CodeQuiz from '../../images/CodeQuiz.png';
import PersonalPortfolio from '../../images/Portfolio.png';

const projectList = [
    {
        title: 'Note Taker',
        description: 'This application is a note taking tool that uses an Express.js back end to save and retrieve note data from a JSON file.',
        image: noteTaker,
        github: 'https://github.com/aevans196/Note_Taker.git',
        liveLink: 'https://note-taker-aevans-56511dacf34d.herokuapp.com/'
    },
    {
        title: 'Code Quiz',
        description: 'This is a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write.',
        image: CodeQuiz,
        github: 'https://github.com/aevans196/Code_Quiz.git',
        liveLink: 'https://aevans196.github.io/Code_Quiz/'
    },
    {
        title: 'Professional Portfolio',
        description: 'This portfolio of work allows me to showcase my skills and talents to potential employers, while applying the core skills learned: flexbox, media queries, and CSS variables.',
        image: Portfolio,
        github: 'https://github.com/aevans196/AAE-Personal-Portfolio.git',
        liveLink: 'https://aevans196.github.io/AAE-Personal-Portfolio/'
    },

];

function Portfolio() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            {projectList.map((project, index) => (
                <Project key={index} project={project} />
            ))}
        </div>
    );
}

export default Portfolio;