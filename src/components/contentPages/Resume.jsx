import resume from '../../files/EvansaaResume1.pdf';

function Resume() {
    return (
        <section class="list" style={{ padding: '50px' }}>
            <h1>My Resume</h1>
            <div class="center">
                <a href={resume} class="big" download>Download Here</a>
            </div>

            <div>
                <h1>Web Development Skills</h1>

                <div>
                    <h2>Front End:</h2>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                        <li>Bootstrap / Bulma CSS Frameworks</li>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>Javascript</li>
                        <li>Jquery</li>
                        <li>React</li>
                        
                    </ul>
                </div>

                <div>
                    <h2>Back End:</h2>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                        <li>APIs</li>
                        <li>Express</li>
                        <li>GraphQL</li>
                        <li>MongoDB</li>
                        <li>MySql</li>
                        <li>Node</li>
                    </ul>
                </div>

                <h1>Programming Languages</h1>
                <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                    <li>C</li>
                    <li>C++</li>
                    <li>Java</li>
                </ul>
            </div>
        </section>
    );
}

export default Resume;