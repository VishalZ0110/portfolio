// Projects Data
// Add, edit, or remove projects here

import headAvatarImage from '../assets/head_avatar.jpg';
import vitlocImage from '../assets/vitloc.png';
import pcrImage from '../assets/pcr.jpg';
import retinopathyImage from '../assets/retinopathy.png';

export const projects = [
  {
    id: 1,
    title: 'Head Avatar',
    tech: '3D Morphable Models • Python • Pytorch',
    description: "Created a system to generate videos of a target identity driven by another person's poses and expressions. Used 3D face reconstruction for dataset creation and trained a diffusion-based model to generate realistic RGB frames.",
    image: headAvatarImage,
    links: []
  },
  {
    id: 2,
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
    id: 3,
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
  },
  {
    id: 4,
    title: 'Detection of Hypertensive Retinopathy',
    tech: 'Python • Computer Vision • PyTorch',
    description: 'Built a deep learning model to detect early signs of Hypertensive Retinopathy from retinal fundus images. Focused on improving diagnostic accuracy through preprocessing, augmentation, and CNN-based feature learning.',
    image: retinopathyImage,
    links: []
  }
];

