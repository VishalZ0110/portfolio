// Projects Data
// Non-published applied and exploratory work.
// Published work (LISR, BareBones, heritage restoration) lives in Publications.

import headAvatarImage from '../assets/head_avatar.jpg';
import vitlocImage from '../assets/vitloc.png';
import rehueImage from '../assets/rehue.png';

export const projects = [
  {
    id: 0,
    title: 'ReHue',
    tech: 'ReactJS • ONNX Runtime Web • SAM',
    description: 'A browser-based image editor for region-wise recoloring that preserves lighting and shadows. Implemented fully client-side image segmentation with ONNX Runtime Web and IndexedDB model caching for real-time mask generation without server round-trips, supporting multi-region selection, per-layer color assignment, brush-based refinement, and persistent session state.',
    image: rehueImage,
    links: [
      { label: 'Demo', url: 'https://tryrehue.vercel.app/' }
    ]
  },
  {
    id: 2,
    title: 'Head Avatar',
    tech: '3D Morphable Models • Diffusion Models • PyTorch',
    description: 'A system to generate videos of a target identity with poses and expressions transferred from a source person. Created the dataset by fitting 3D Morphable Models and inverse-rendering albedo-textured RGB frame pairs, then trained a subject-specific diffusion model to reconstruct realistic RGB frames conditioned on rendered face images.',
    image: headAvatarImage,
    links: []
  },
  {
    id: 3,
    title: 'ViTLoc: Transformer-Based Visual Localisation',
    tech: 'Python • PyTorch • NeRF',
    description: 'A robotics course project for visual localisation. Enhanced pose estimation by replacing traditional CNN backbones with Vision Transformers to capture global context and long-range scene dependencies.',
    image: vitlocImage,
    links: [
      { label: 'GitHub', url: 'https://github.com/eternal-f1ame/ViTLoc' },
      { label: 'Project Report', url: 'https://drive.google.com/file/d/1u9bl3dFJI9sns2Pn1wEEeqPNzJktr280/view?usp=sharing' }
    ]
  }
];
