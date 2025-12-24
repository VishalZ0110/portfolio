const About = () => {
  const skills = [
    '3D Computer Vision',
    'Computer Vision',
    'Machine Learning',
    'Software Development',
    '3D Morphable Models',
    'Scene Understanding',
    'Python',
    'PyTorch'
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a <strong>Research Engineer</strong> at{' '}
              <a href="https://www.styldod.com/" target="_blank" rel="noopener noreferrer">
                Styldod Inc.
              </a>{' '}
              where I develop AI-powered solutions that transform how people visualize and interact with
              real-estate imagery. My day-to-day work spans the full lifecycle of project development -
              starting with ideation, assessing user experience requirements, and evaluating technical
              feasibility. I plan project workflows, conduct extensive literature reviews of existing methods,
              and experiment with SoTA methods for our use case. When required, I fine-tune methods on our
              data and requirements (e.g. <strong>image editing models for image enhancement</strong>). For
              challenges without existing solutions—such as <strong>instance segmentation of walls</strong>—or
              where existing methods fall short—like{' '}
              <strong>
                3D bounding box detection from surface-only point clouds derived from monocular depth
              </strong>
              —I develop novel methodologies. I also build prototypes, iterate through revisions based on
              qualitative evaluation, and deliver final production-ready builds.
            </p>
            <p>
              I have completed my Bachelor's in <strong>Electrical Engineering</strong> with a{' '}
              <strong>Specialization in Visual Computing</strong> from{' '}
              <strong>Indian Institute of Technology, Jodhpur.</strong> During my time there, I worked with
              Prof.{' '}
              <strong>
                <a href="https://home.iitj.ac.in/~rn/index.html" target="_blank" rel="noopener noreferrer">
                  Rajendra Nagar
                </a>
              </strong>{' '}
              on 3D surface representation using compactly supported Radial Basis Functions, developing memory
              efficient learnable parametric representation. Later, I worked with Prof.{' '}
              <strong>Avinash Sharma</strong> at{' '}
              <a href="https://3dcomputervision.github.io/" target="_blank" rel="noopener noreferrer">
                3DVisLab
              </a>{' '}
              on Face Reenactment using diffusion models conditioned on 3D Face Morphable Models. My research
              experiences at IIT Jodhpur deeply shaped my interest in visual computing and inspired me to
              pursue a career in research.
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

