import { ToolItem, Experience } from '@/types';

const FRONTEND = [
  {
    name: 'Vue',
    type: ['FRONTEND'],
    color: '#3EB883',
    imageUrl: 'https://img.stackshare.io/service/3837/paeckCWC.png',
  },
  {
    name: 'React',
    type: ['FRONTEND'],
    color: '#61DBFB',
    imageUrl: 'https://img.stackshare.io/service/1020/OYIaJ1KK.png',
  },
  {
    name: 'Ember',
    type: ['FRONTEND'],
    color: '#E14529',
    imageUrl: 'https://img.stackshare.io/service/1018/3s1seyc0csl75btyw1vl.png',
  },
  {
    name: 'HTML',
    type: ['FRONTEND'],
    color: '#F16524',
    imageUrl: 'https://img.stackshare.io/service/2538/kEpgHiC9.png',
  },
  {
    name: 'CSS',
    type: ['FRONTEND'],
    color: '#0D73B7',
    imageUrl: 'https://img.stackshare.io/service/6727/css.png',
  },
  {
    name: 'Angular',
    type: ['FRONTEND'],
    color: '#E62537',
    imageUrl: 'https://img.stackshare.io/service/1019/square.png',
  },
  {
    name: 'JavaScript',
    type: ['FRONTEND', 'BACKEND'],
    color: '#F0DB4E',
    imageUrl: 'https://img.stackshare.io/service/1209/javascript.jpeg',
  },
  {
    name: 'TypeScript',
    type: ['FRONTEND'],
    color: '#2875C3',
    imageUrl: 'https://img.stackshare.io/service/1612/bynNY5dJ.jpg',
  },
  {
    name: 'Svelte',
    type: ['FRONTEND'],
    color: '#FF3900',
    imageUrl: 'https://img.stackshare.io/service/6113/7exmJEg4_400x400.png',
  },
];

const BACKEND = [
  {
    name: 'Python',
    type: ['BACKEND', 'EMBEDDED', 'DATA'],
    color: '#FBD537',
    imageUrl: 'https://img.stackshare.io/service/993/pUBY5pVj.png',
  },
  {
    name: 'Ruby',
    type: ['BACKEND'],
    color: '#B40600',
    imageUrl: 'https://img.stackshare.io/service/989/ruby.png',
  },
  {
    name: 'Rails',
    type: ['BACKEND'],
    color: '#CD0000',
    imageUrl: 'https://img.stackshare.io/service/990/x57_Lorv.png',
  },
  {
    name: 'NodeJS',
    type: ['BACKEND'],
    color: '#78AF63',
    imageUrl: 'https://img.stackshare.io/service/1011/n1JRsFeB_400x400.png',
  },
  {
    name: 'PHP',
    type: ['BACKEND'],
    color: '#000000',
    imageUrl: 'https://img.stackshare.io/service/991/hwUcGZ41_400x400.jpg',
  },
  {
    name: 'Go',
    type: ['BACKEND'],
    color: '#00AFD9',
    imageUrl: 'https://img.stackshare.io/service/1005/O6AczwfV_400x400.png',
  },
  {
    name: 'Rust',
    type: ['BACKEND', 'EMBEDDED'],
    color: '#1E191A',
    imageUrl: 'https://img.stackshare.io/service/1070/v7txhrjp9pdqrkdtxxp0.png',
  },
  {
    name: 'Lua',
    type: ['BACKEND', 'EMBEDDED', 'GAME'],
    color: '#000081',
    imageUrl: 'https://img.stackshare.io/service/2118/128px-Lua-Logo.svg.png',
  },
  {
    name: 'Haskell',
    type: ['BACKEND'],
    color: '#5E4F88',
    imageUrl: 'https://img.stackshare.io/service/1069/oCgm29k9.png',
  },
  {
    name: 'C',
    type: ['BACKEND', 'EMBEDDED', 'GAME'],
    color: '#8E8E8E',
    imageUrl: 'https://img.stackshare.io/no-img-open-source.png',
  },
  {
    name: 'Java',
    type: ['BACKEND', 'EMBEDDED'],
    color: '#5D8AA7',
    imageUrl: 'https://img.stackshare.io/service/995/K85ZWV2F.png',
  },
  {
    name: 'C++',
    type: ['BACKEND', 'GAME'],
    color: '#00589E',
    imageUrl: 'https://img.stackshare.io/service/1049/cplusplus.png',
  },
  {
    name: 'Flask',
    type: ['BACKEND'],
    color: '#0B0B0B',
    imageUrl: 'https://img.stackshare.io/service/1001/default_6d109315b60108628b7cd3e159b84645c31ef0e2.png',
  },
  {
    name: 'Django',
    type: ['BACKEND'],
    color: '#082E23',
    imageUrl: 'https://img.stackshare.io/service/994/4aGjtNQv.png',
  },
  {
    name: 'Express',
    type: ['BACKEND'],
    color: '#76D7E8',
    imageUrl: 'https://img.stackshare.io/service/1163/hashtag.png',
  },
  {
    name: 'FastAPI',
    type: ['BACKEND'],
    color: '#00998B',
    imageUrl: 'https://img.stackshare.io/service/25014/default_f6ff39141b468e832d1bc59fc98a060df604d44d.png',
  },
  {
    name: 'Spring Boot',
    type: ['BACKEND'],
    color: '#53B81B',
    imageUrl: 'https://img.stackshare.io/service/2927/nPzvMuo2_400x400.png',
  },
  {
    name: 'Laravel',
    type: ['BACKEND'],
    color: '#EF3B2D',
    imageUrl: 'https://img.stackshare.io/service/992/AcA2LnWL_400x400.jpg',
  },
  {
    name: '.NET',
    type: ['BACKEND'],
    color: '#5027D5',
    imageUrl: 'https://img.stackshare.io/service/1014/IoPy1dce_400x400.png',
  },
];

const DEVOPS = [
  {
    name: 'Git',
    type: ['DEVOPS'],
    color: '#EF4E2F',
    imageUrl: 'https://img.stackshare.io/service/1046/git.png',
  },
  {
    name: 'Maven',
    type: ['DEVOPS'],
    color: '#CF354C',
    imageUrl: 'https://img.stackshare.io/package_manager/977/default_9833f2ef0bbc2a946b4cc5e9307264033361076b.png',
  },
  {
    name: 'Jenkins',
    type: ['DEVOPS'],
    color: '#F0D7B8',
    imageUrl: 'https://img.stackshare.io/service/670/jenkins.png',
  },
  {
    name: 'Chef',
    type: ['DEVOPS'],
    color: '#F38C00',
    imageUrl: 'https://img.stackshare.io/service/420/24f4ef5e7a67c0d720bf9ae69dd6de2a.png',
  },
  {
    name: 'Puppet',
    type: ['DEVOPS'],
    color: '#F38C00',
    imageUrl: 'https://img.stackshare.io/service/421/954f7381089ac290b4690c5ffd9dd7d3.png',
  },
  {
    name: 'Ansible',
    type: ['DEVOPS'],
    color: '#000000',
    imageUrl: 'https://img.stackshare.io/service/663/ElOjna20.png',
  },
  {
    name: 'Docker',
    type: ['DEVOPS'],
    color: '#0493D2',
    imageUrl: 'https://img.stackshare.io/service/586/n4u37v9t_400x400.png',
  },
  {
    name: 'Kubernetes',
    type: ['DEVOPS'],
    color: '#5C4EE5',
    imageUrl: 'https://img.stackshare.io/package/terraform/image.png',
  },
  {
    name: 'Amazon Web Service',
    type: ['DEVOPS'],
    color: '#E99C32',
    imageUrl: 'https://img.stackshare.io/service/47978/default_ea0289e539375fac5b03a92e708e195c36927a81.jpg',
  },
  {
    name: 'Azure DevOps',
    type: ['DEVOPS'],
    color: '#0079D8',
    imageUrl: 'https://img.stackshare.io/service/4313/XNKktHjN_400x400.png',
  },
  {
    name: 'Google Cloud',
    type: ['DEVOPS'],
    color: '#32A755',
    imageUrl: 'https://img.stackshare.io/service/4240/1a61e4pu_400x400.jpg',
  },
  {
    name: 'Splunk',
    type: ['DEVOPS'],
    color: '#32A755',
    imageUrl: 'https://img.stackshare.io/service/287/default_3ee4c34e118179464e491133fc4ac4f16e46771f.jpg',
  },
  {
    name: 'Selenium',
    type: ['DEVOPS', 'QA'],
    color: '#01B400',
    imageUrl: 'https://img.stackshare.io/service/1517/sbUizSli_400x400.jpg',
  },
];

const DATABASE = [
  {
    name: 'MySQL',
    type: ['DATABASE'],
    color: '#F7950B',
    imageUrl: 'https://img.stackshare.io/service/1025/logo-mysql-170x170.png',
  },
  {
    name: 'PostgreSQL',
    type: ['DATABASE'],
    color: '#2E6691',
    imageUrl: 'https://img.stackshare.io/service/1028/ASOhU5xJ.png',
  },
  {
    name: 'MongoDB',
    type: ['DATABASE'],
    color: '#589733',
    imageUrl: 'https://img.stackshare.io/service/1030/leaf-360x360.png',
  },
  {
    name: 'SQLite',
    type: ['DATABASE'],
    color: '#58B2DC',
    imageUrl: 'https://img.stackshare.io/service/1071/sqlite.jpg',
  },
  {
    name: 'MariaDB',
    type: ['DATABASE'],
    color: '#002B41',
    imageUrl: 'https://img.stackshare.io/service/1615/mariadb-logo-400x400.png',
  },
];
const EXPERIENCE = [
  {
    value: 'Less than one year',
    year: 1,
  },
  {
    value: 'One to three years',
    year: 3,
  },
  {
    value: 'Three to five year',
    year: 5,
  },
  {
    value: 'Five to ten years',
    year: 7,
  },
  {
    value: 'Ten to twenty years',
    year: 9,
  },
  {
    value: 'Twenty++',
    year: 10,
  },
];
const tools = [...BACKEND, ...FRONTEND, ...DATABASE, ...DEVOPS];
const items = ref<ToolItem[]>([]);

tools.forEach((t) => {
  const obj = {
    value: t.name,
  };
  items.value.push(obj);
});

items.value.sort((a, b) => a.value.localeCompare(b.value));

const TOOLS = [...FRONTEND, ...BACKEND, ...DATABASE, ...DEVOPS];

const CHART_COLORS = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)',
};

export { items, TOOLS, EXPERIENCE, CHART_COLORS };
