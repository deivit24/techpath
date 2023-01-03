import { Tool, ToolValue } from '@/types';
import { EXPERIENCE } from '../Form/consts';

const UI = ['HTML', 'CSS'];
const FRONTENDLANGUAGE = ['JAVASCRIPT', 'TYPESCRIPT'];
const FRAMEWORK = ['REACT', 'VUE', 'ANGULAR', 'EMBER', 'SVELTE'];
const UIWEIGHT = 0.2;
const FRAMEWORKWEIGHT = 0.3;
const FRONTENDLANGUAGEWEIGHT = 0.5;
const BACKENDLANGUAGE = ['PYTHON', 'NODEJS', 'PHP', 'GO', 'JAVA', 'RUBY', '.NET'];
const BACKENDFRAMEWORK = ['FLASK', 'DJANGO', 'EXPRESS', 'FASTAPI', 'SPRING BOOT', 'LARAVEL', 'RAILS', '.NET CORE'];
const DATABASE = ['MYSQL', 'POSTGRESQL', 'MONGODB', 'SQLITE', 'MARIADB'];
const BACKENDFRAMEWORKWEIGHT = 0.2;
const BACKENDLANGUAGEWEIGHT = 0.5;
const DBWEIGHT = 0.3;

const calculateFrontend = (tools: Array<Tool>) => {
  let uiYears = [];
  let langYears = [];
  let frameworkYears = [];

  for (const t of tools) {
    if (UI.includes(t.tool.toUpperCase())) {
      uiYears.push(t.years);
    } else if (FRONTENDLANGUAGE.includes(t.tool.toUpperCase())) {
      langYears.push(t.years);
    } else if (FRAMEWORK.includes(t.tool.toUpperCase())) {
      frameworkYears.push(t.years);
    }
  }

  const uiScore = uiYears.length > 0 ? getAverage(uiYears) : [0];
  const langScore = langYears.length > 0 ? getAverage(langYears) : [0];
  const frameworkScore = frameworkYears.length > 0 ? getAverage(frameworkYears) : [0];

  const uiWA = weightedAverageScore(uiScore, UIWEIGHT);
  const langWA = weightedAverageScore(langScore, FRONTENDLANGUAGEWEIGHT);
  const frameworkWA = weightedAverageScore(frameworkScore, FRAMEWORKWEIGHT);

  return ((uiWA + langWA + frameworkWA) / 10) * 100;
};

const calculateBackend = (tools: Array<Tool>) => {
  let dbYears = [];
  let langYears = [];
  let frameworkYears = [];

  for (const t of tools) {
    if (DATABASE.includes(t.tool.toUpperCase())) {
      dbYears.push(t.years);
    } else if (BACKENDLANGUAGE.includes(t.tool.toUpperCase())) {
      langYears.push(t.years);
    } else if (BACKENDFRAMEWORK.includes(t.tool.toUpperCase())) {
      frameworkYears.push(t.years);
    }
  }

  const dbScore = dbYears.length > 0 ? getAverage(dbYears) : [0];
  const langScore = langYears.length > 0 ? getAverage(langYears) : [0];
  const frameworkScore = frameworkYears.length > 0 ? getAverage(frameworkYears) : [0];

  const dbWA = weightedAverageScore(dbScore, DBWEIGHT);
  const langWA = weightedAverageScore(langScore, BACKENDLANGUAGEWEIGHT);
  const frameworkWA = weightedAverageScore(frameworkScore, BACKENDFRAMEWORKWEIGHT);

  return ((dbWA + langWA + frameworkWA) / 10) * 100;
};
const weightedAverageScore = (score: number, wa: number) => {
  return score * wa;
};

const calculateFullStack = (frontendScore: number, backendScore: number) => {
  if (frontendScore === 0 || backendScore === 0) return 0;
  const backendWeight = 0.5 * frontendScore;
  const frontendWeight = 0.5 * backendScore;
  return Math.floor(backendWeight + frontendWeight);
};

const getAverage = (arr: Array<Number>) => arr.reduce((sum, num) => sum + num, 0) / arr.length;

export { calculateFrontend, calculateBackend, calculateFullStack };
