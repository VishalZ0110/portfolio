// Research Areas Data
export const researchAreas = [
  {
    id: 1,
    icon: 'fas fa-cubes',
    title: '3D Reconstruction & Surface Representation',
    description:
      'Efficient parametric representations of 3D geometry, including implicit surface learning with compactly supported Radial Basis Functions and reconstruction from partial, noisy scans.',
  },
  {
    id: 2,
    icon: 'fas fa-cube',
    title: 'Scene Understanding & Spatial Intelligence',
    description:
      'Recovering structure from sparse cues: generating interactive 3D indoor environments from 2D floor plans, and 3D bounding-box detection from surface-only point clouds derived from monocular depth.',
  },
  {
    id: 3,
    icon: 'fas fa-brain',
    title: 'Vision-Language Models & Geometric Reasoning',
    description:
      'Probing whether VLMs truly understand shape and geometry, including benchmarking zero-shot geometric comprehension and surface texture-dependent reasoning.',
  },
  {
    id: 4,
    icon: 'fas fa-user-circle',
    title: 'Generative Models & Digital Humans',
    description:
      'Identity-preserving face reenactment and video generation using diffusion models conditioned on 3D Morphable Models, and photorealistic image editing that preserves lighting and shadows.',
  },
];

const Research = () => {
  return (
    <section id="research" className="research">
      <div className="container">
        <h2 className="section-title">Research Interests</h2>
        <div className="research-content">
          <p className="research-intro">
            My research lies at the intersection of 3D Computer Vision, Multimodal
            AI, and Spatial Intelligence. I develop models that jointly reason
            about geometry, semantics, physical constraints, and human
            interaction within complex environments, spanning 3D reconstruction,
            scene understanding, digital humans, and multimodal systems, with a
            broader interest in world models and spatially intelligent AI.
          </p>
          <div className="research-cards">
            {researchAreas.map((area) => (
              <div className="research-card" key={area.id}>
                <div className="research-card-icon">
                  <i className={area.icon}></i>
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
