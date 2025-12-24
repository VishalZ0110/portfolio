// Publications Data
// Add, edit, or remove publications here

import lisrImage from '../assets/lisr.png';
import reg3dImage from '../assets/3d_reg.png';

export const publications = [
  {
    id: 1,
    title: 'LISR: Learning Linear 3D Implicit Surface Representation Using Compactly Supported Radial Basis Functions',
    authors: 'Pandey, A., Yadav, V., Nagar, R., & Chaudhury, S.',
    venue: 'AAAI 2024',
    image: lisrImage,
    links: [
      { label: 'View Publication', url: 'https://ojs.aaai.org/index.php/AAAI/article/view/28239' },
      { label: 'PDF', url: 'https://arxiv.org/pdf/2402.07301' },
      { label: 'Video/Poster', url: 'https://underline.io/lecture/93120-lisr-learning-linear-3d-implicit-surface-representation-using-compactly-supported-radial-basis-functions' }
    ]
  },
  {
    id: 2,
    title: 'A Challenge on 3D Reconstruction and Restoration of Indian Heritage from Partial and Noisy Scans',
    authors: 'Pandey, A., Yadav, V., Karthikeyan, A., Solanki, D., Nagar, R.',
    venue: 'NCVPRIPG 2023',
    image: reg3dImage,
    links: [
      { label: 'Springer', url: 'https://link.springer.com/chapter/10.1007/978-981-97-5212-6_18' }
    ]
  }
];

