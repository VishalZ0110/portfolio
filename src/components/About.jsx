const About = () => {
  const skills = [
    '3D Vision',
    'Computer Vision',
    'Machine Learning',
    'Multimodal LLMs (MLLMs)',
    'Agents',
    'Software Development',
    '3D Morphable Models',
    'Scene Understanding',
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a researcher working at the intersection of 3D Computer Vision,
              Multimodal AI, and Spatial Intelligence. I develop models that reason
              about geometry, semantics, and human interaction within complex
              environments — with a focus on 3D reconstruction, scene understanding,
              and vision-language geometric reasoning.
            </p>
            <p>
              I am currently at{' '}
              <a href="https://www.styldod.com/" target="_blank" rel="noopener noreferrer">
                Styldod Inc.
              </a>{' '}
              leading applied research on AI systems that power millions of image
              generations, where I develop novel methods for problems without
              existing solutions. My undergraduate research at{' '}
              <a href="https://www.iitj.ac.in/" target="_blank" rel="noopener noreferrer">
                IIT Jodhpur
              </a>{' '}
              in 3D surface representation and generative models shaped my interest
              in visual computing.
            </p>
            <div className="skills">
              <h3>Key Skills</h3>
              <div className="skill-tags">
                {skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
