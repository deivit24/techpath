import { ToolItem, Experience } from '@/types';

const FRONTEND = [
  {
    name: 'Vue',
    type: 'FRONTEND',
    color: '#3EB883',
    icon: 'https://img.stackshare.io/service/3837/paeckCWC.png',
  },
  {
    name: 'React',
    type: 'FRONTEND',
    color: '#61DBFB',
    icon: 'https://img.stackshare.io/service/1020/OYIaJ1KK.png',
  },
  {
    name: 'Ember',
    type: 'FRONTEND',
    color: '#E14529',
    icon: 'https://img.stackshare.io/service/1018/3s1seyc0csl75btyw1vl.png',
  },
  {
    name: 'HTML',
    type: 'FRONTEND',
    color: '#F16524',
    icon: 'https://img.stackshare.io/service/2538/kEpgHiC9.png',
  },
  {
    name: 'CSS',
    type: 'FRONTEND',
    color: '#0D73B7',
    icon: 'https://img.stackshare.io/service/6727/css.png',
  },
  {
    name: 'Angular',
    type: 'FRONTEND',
    color: '#E62537',
    icon: 'https://img.stackshare.io/service/1019/square.png',
  },
  {
    name: 'JavaScript',
    type: 'FRONTEND',
    color: '#F0DB4E',
    icon: 'https://img.stackshare.io/service/1209/javascript.jpeg',
  },
  {
    name: 'TypeScript',
    type: 'FRONTEND',
    color: '#2875C3',
    icon: 'https://img.stackshare.io/service/1612/bynNY5dJ.jpg',
  },
  {
    name: 'Svelte',
    type: 'FRONTEND',
    color: '#FF3900',
    icon: 'https://img.stackshare.io/service/6113/7exmJEg4_400x400.png',
  },
];

const BACKEND = [
  {
    name: 'Python',
    type: 'BACKEND',
    color: '#FBD537',
    icon: 'https://img.stackshare.io/service/993/pUBY5pVj.png',
  },
  {
    name: 'Ruby',
    type: 'BACKEND',
    color: '#B40600',
    icon: 'https://img.stackshare.io/service/989/ruby.png',
  },
  {
    name: 'Rails',
    type: 'BACKEND',
    color: '#CD0000',
    icon: 'https://img.stackshare.io/service/990/x57_Lorv.png',
  },
  {
    name: 'NodeJS',
    type: 'BACKEND',
    color: '#78AF63',
    icon: 'https://img.stackshare.io/service/1011/n1JRsFeB_400x400.png',
  },
  {
    name: 'PHP',
    type: 'BACKEND',
    color: '#000000',
    icon: 'https://img.stackshare.io/service/991/hwUcGZ41_400x400.jpg',
  },
  {
    name: 'Go',
    type: 'BACKEND',
    color: '#00AFD9',
    icon: 'https://img.stackshare.io/service/1005/O6AczwfV_400x400.png',
  },
  // {
  //   name: 'Rust',
  //   type: 'BACKEND',
  //   color: '#1E191A',
  //   icon: 'https://img.stackshare.io/service/1070/v7txhrjp9pdqrkdtxxp0.png',
  // },
  // {
  //   name: 'Lua',
  //   type: 'BACKEND',
  //   color: '#000081',
  //   icon: 'https://img.stackshare.io/service/2118/128px-Lua-Logo.svg.png',
  // },
  // { name: 'Haskell', type: 'BACKEND', color: '#5E4F88', icon: 'https://img.stackshare.io/service/1069/oCgm29k9.png' },
  // {
  //   name: 'C',
  //   type: 'BACKEND',
  //   color: '#8E8E8E',
  //   icon: 'https://img.stackshare.io/no-img-open-source.png',
  // },
  {
    name: 'Java',
    type: 'BACKEND',
    color: '#5D8AA7',
    icon: 'https://img.stackshare.io/service/995/K85ZWV2F.png',
  },
  // {
  //   name: 'C++',
  //   type: 'BACKEND',
  //   color: '#00589E',
  //   icon: 'https://img.stackshare.io/service/1049/cplusplus.png',
  // },
  {
    name: 'Flask',
    type: 'BACKEND',
    color: '#0B0B0B',
    icon: 'https://img.stackshare.io/service/1001/default_6d109315b60108628b7cd3e159b84645c31ef0e2.png',
  },
  { name: 'Django', type: 'BACKEND', color: '#082E23', icon: 'https://img.stackshare.io/service/994/4aGjtNQv.png' },
  {
    name: 'Express',
    type: 'BACKEND',
    color: '#76D7E8',
    icon: 'https://img.stackshare.io/service/1163/hashtag.png',
  },
  {
    name: 'FastAPI',
    type: 'BACKEND',
    color: '#00998B',
    icon: 'https://img.stackshare.io/service/25014/default_f6ff39141b468e832d1bc59fc98a060df604d44d.png',
  },
  {
    name: 'Spring Boot',
    type: 'BACKEND',
    color: '#53B81B',
    icon: 'https://img.stackshare.io/service/2927/nPzvMuo2_400x400.png',
  },
  {
    name: 'Laravel',
    type: 'BACKEND',
    color: '#EF3B2D',
    icon: 'https://img.stackshare.io/service/992/AcA2LnWL_400x400.jpg',
  },
  {
    name: '.NET',
    type: 'BACKEND',
    color: '#5027D5',
    icon: 'https://img.stackshare.io/service/1014/IoPy1dce_400x400.png',
  },
  {
    name: '.NET Core',
    type: 'BACKEND',
    color: '#5C2992',
    icon: 'https://img.stackshare.io/service/6403/default_91fc1f0ee315262794273aa1387eaf8fed8436e6.png',
  },
];

const DATABASE = [
  {
    name: 'MySQL',
    type: 'DATABASE',
    color: '#F7950B',
    icon: 'https://img.stackshare.io/service/1025/logo-mysql-170x170.png',
  },
  {
    name: 'PostgreSQL',
    type: 'DATABASE',
    color: '#2E6691',
    icon: 'https://img.stackshare.io/service/1028/ASOhU5xJ.png',
  },
  {
    name: 'MongoDB',
    type: 'DATABASE',
    color: '#589733',
    icon: 'https://img.stackshare.io/service/1030/leaf-360x360.png',
  },
  {
    name: 'SQLite',
    type: 'DATABASE',
    color: '#58B2DC',
    icon: 'https://img.stackshare.io/service/1071/sqlite.jpg',
  },
  {
    name: 'MariaDB',
    type: 'DATABASE',
    color: '#002B41',
    icon: 'https://img.stackshare.io/service/1615/mariadb-logo-400x400.png',
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
const tools = [...BACKEND, ...FRONTEND, ...DATABASE];
const items = ref<ToolItem[]>([]);
let experience = ref<Experience[]>([]);
experience = EXPERIENCE;
tools.forEach((t) => {
  const obj = {
    value: t.name,
    type: t.type,
  };
  items.value.push(obj);
});

items.value.sort((a, b) => a.value.localeCompare(b.value));

const TOOLS = [...FRONTEND, ...BACKEND, ...DATABASE];

export { items, TOOLS, experience, EXPERIENCE };
