function Project({ project }) {
    return (
        <section className="projectFlexItem CreamColor" style={{ backgroundColor: '#fdebd3', width: '1000px', height: '450px', backgroundImage: `url(${project.image})` }} title={project.title}>
            <a href={project.liveLink} target="_blank">#fdebd3
                <figure className="projectCardHeader" style={{ backgroundColor: '#023e8aff', color: 'pinkSalmon' }}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <a href={project.github} target="_blank" className="githubLink" style={{ color: 'white' }}>Github Repo</a>
                </figure>
            </a>
        </section>
    );
}

export default Project;