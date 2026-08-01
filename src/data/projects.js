// Projects Data
// Add, edit, or remove projects here

import barebonesProjectImage from '../assets/barebones-project.png';
import headAvatarImage from '../assets/head_avatar.jpg';
import vitlocImage from '../assets/vitloc.png';
import pcrImage from '../assets/pcr.jpg';
import rehueImage from '../assets/rehue.png';

export const projects = [
  {
    id: 0,
    title: 'ReHue',
    tech: 'ReactJS • ONNX Runtime Web • SAM',
    description: 'ReHue is a web application that enables users to preview realistic color changes on objects within an image before making real world decisions. Users can precisely select one or more regions, assign different colors, refine selections, and compare multiple variations while preserving their progress across sessions. By transforming imagined color changes into realistic visual previews, the project reduces the uncertainty and effort involved in choosing colors for objects such as walls, furniture, clothing, products, and vehicles.',
    image: rehueImage,
    links: [
      { label: 'Demo', url: 'https://tryrehue.vercel.app/' }
    ]
  },
  {
    id: 1,
    title: 'BareBones: Benchmarking Zero-Shot Geometric Comprehension in VLMs',
    tech: 'Python • PyTorch • VLMs',
    description: "Designed WTP-Bench, a fine-grained dataset of 1,160 Pokémon silhouettes across 8 generational tiers, to evaluate whether modern Vision-Language Models (VLMs) truly understand geometric structure by removing texture, color, and context. Evaluated 26 proprietary and open-weight models, revealing a consistent 'Texture Bias Cliff' where models suffer severe accuracy drops on silhouettes, exposing major limitations in shape-based reasoning and geometric grounding.",
    image: barebonesProjectImage,
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2604.10528' },
      { label: 'GitHub', url: 'https://github.com/VishalZ0110/WTP-Bench' }
    ]
  },
  {
    id: 2,
    title: 'Head Avatar',
    tech: '3D Morphable Models • Python • Pytorch',
    description: "Created a system to generate videos of a target identity driven by another person's poses and expressions. Used 3D face reconstruction for dataset creation and trained a diffusion-based model to generate realistic RGB frames.",
    image: headAvatarImage,
    links: []
  },
  {
    id: 3,
    title: 'ViTLoc (Robotics Course Project for Localisation Task)',
    tech: 'Python • Pytorch • NeRF',
    description: 'Enhanced pose estimation by replacing traditional CNN backbones with Vision Transformers (ViT) to capture global context and long-range dependencies.',
    image: vitlocImage,
    links: [
      { label: 'GitHub', url: 'https://github.com/eternal-f1ame/ViTLoc' },
      { label: 'Project Report', url: 'https://drive.google.com/file/d/1u9bl3dFJI9sns2Pn1wEEeqPNzJktr280/view?usp=sharing' }
    ]
  },
  {
    id: 4,
    title: 'Point Cloud Registration for Cultural Heritage Site Restoration',
    tech: 'Python • 3D Computer Vision • PyTorch',
    description: 'Reconstructed detailed 3D models of Indian heritage sites by combining multiple partial and noisy scans. Explored both classical and learning-based methods to accurately align complex 3D data. First-place winner of the NCVPRIPG23 3D challenge.',
    descriptionLink: {
      text: 'NCVPRIPG23 3D challenge.',
      url: 'https://sites.google.com/iitj.ac.in/3drpc/home'
    },
    image: pcrImage,
    links: [
      { label: 'Springer', url: 'https://link.springer.com/chapter/10.1007/978-981-97-5212-6_18' }
    ]
  }
];

