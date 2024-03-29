import { Tool, ToolValue } from '@/types';
import { EXPERIENCE, TOOLS } from './consts';

const UI = ['HTML', 'CSS'];
const FRONTENDLANGUAGE = ['JAVASCRIPT', 'TYPESCRIPT'];
const FRAMEWORK = ['REACT', 'VUE', 'ANGULAR', 'EMBER', 'SVELTE'];
const UIWEIGHT = 0.2;
const FRAMEWORKWEIGHT = 0.3;
const FRONTENDLANGUAGEWEIGHT = 0.5;
const BACKENDLANGUAGE = ['PYTHON', 'NODEJS', 'PHP', 'GO', 'JAVA', 'RUBY', '.NET', 'LUA', 'C', 'C++', 'RUST', 'HASKELL'];
const BACKENDFRAMEWORK = ['FLASK', 'DJANGO', 'EXPRESS', 'FASTAPI', 'SPRING BOOT', 'LARAVEL', 'RAILS', '.NET CORE'];
const DATABASE = ['MYSQL', 'POSTGRESQL', 'MONGODB', 'SQLITE', 'MARIADB'];
const BACKENDFRAMEWORKWEIGHT = 0.2;
const BACKENDLANGUAGEWEIGHT = 0.5;
const DBWEIGHT = 0.3;

const GITWEIGHT = 0.1;
const BUILDWEIGHT = 0.1;
const CMWEIGHT = 0.1;
const CIWEIGHT = 0.1;
const CONTAINERWEIGHT = 0.2;
const CLOUDWEIGHT = 0.2;
const MONITORWEIGHT = 0.1;
const TESTWEIGHT = 0.1;

const GIT = ['GIT'];
const BUILD = ['MAVEN'];
const CI = ['JENKINS'];
const CM = ['CHEF', 'PUPPET', 'ANSIBLE'];
const CONTAINER = ['DOCKER', 'KUBERNETES'];
const CLOUD = ['AMAZON WEB SERVICE', 'GOOGLE CLOUD', 'AZURE DEVOPS'];
const MONITOR = ['SPLUNK'];
const TEST = ['SELENIUM'];
const calculateFrontend = (tools: Array<Tool>) => {
  let uiYears = [];
  let langYears = [];
  let frameworkYears = [];

  for (const t of tools) {
    if (UI.includes(t.tool.toUpperCase())) {
      uiYears.push(t.years * 10);
    } else if (FRONTENDLANGUAGE.includes(t.tool.toUpperCase())) {
      langYears.push(t.years * 10);
    } else if (FRAMEWORK.includes(t.tool.toUpperCase())) {
      frameworkYears.push(t.years * 10);
    }
  }

  const uiScore = calculateWeightedCategoryScore(uiYears, 0.1);
  const langScore = calculateWeightedCategoryScore(langYears, 0.3);
  const frameworkScore = calculateWeightedCategoryScore(frameworkYears, 0.2);

  const uiWA = weightedAverageScore(uiScore, UIWEIGHT);
  const langWA = weightedAverageScore(langScore, FRONTENDLANGUAGEWEIGHT);
  const frameworkWA = weightedAverageScore(frameworkScore, FRAMEWORKWEIGHT);

  return uiWA + langWA + frameworkWA;
};

const calculateBackend = (tools: Array<Tool>) => {
  let dbYears = [];
  let langYears = [];
  let frameworkYears = [];

  for (const t of tools) {
    if (DATABASE.includes(t.tool.toUpperCase())) {
      dbYears.push(t.years * 10);
    } else if (BACKENDLANGUAGE.includes(t.tool.toUpperCase())) {
      langYears.push(t.years * 10);
    } else if (BACKENDFRAMEWORK.includes(t.tool.toUpperCase())) {
      frameworkYears.push(t.years * 10);
    }
  }

  const langScore = calculateWeightedCategoryScore(langYears, 0.3);
  const dbScore = calculateWeightedCategoryScore(dbYears, 0.2);
  const frameworkScore = calculateWeightedCategoryScore(frameworkYears, 0.1);

  const dbWA = weightedAverageScore(dbScore, DBWEIGHT);
  const langWA = weightedAverageScore(langScore, BACKENDLANGUAGEWEIGHT);
  const frameworkWA = weightedAverageScore(frameworkScore, BACKENDFRAMEWORKWEIGHT);

  return dbWA + langWA + frameworkWA;
};

const calculateDevOps = (tools: Array<Tool>) => {
  const GITYEARS = [];
  const BUILDYEARS = [];
  const CMYEARS = [];
  const CIYEARS = [];
  const CONTAINERYEARS = [];
  const CLOUDYEARS = [];
  const MONITORYEARS = [];
  const TESTYEARS = [];

  for (const t of tools) {
    if (GIT.includes(t.tool.toUpperCase())) {
      GITYEARS.push(t.years);
    } else if (BUILD.includes(t.tool.toUpperCase())) {
      BUILDYEARS.push(t.years);
    } else if (CM.includes(t.tool.toUpperCase())) {
      CMYEARS.push(t.years);
    } else if (CI.includes(t.tool.toUpperCase())) {
      CIYEARS.push(t.years);
    } else if (CONTAINER.includes(t.tool.toUpperCase())) {
      CONTAINERYEARS.push(t.years);
    } else if (CLOUD.includes(t.tool.toUpperCase())) {
      CLOUDYEARS.push(t.years);
    } else if (MONITOR.includes(t.tool.toUpperCase())) {
      MONITORYEARS.push(t.years);
    } else if (TEST.includes(t.tool.toUpperCase())) {
      TESTYEARS.push(t.years);
    }
  }
  const GITSCORE = GITYEARS.length > 0 ? getAverage(GITYEARS) : 0;
  const BUILDSCORE = BUILDYEARS.length > 0 ? getAverage(BUILDYEARS) : 0;
  const CMSCORE = CMYEARS.length > 0 ? getAverage(CMYEARS) : 0;
  const CISCORE = CIYEARS.length > 0 ? getAverage(CIYEARS) : 0;
  const CONTAINERSCORE = CONTAINERYEARS.length > 0 ? getAverage(CONTAINERYEARS) : 0;
  const CLOUDSCORE = CLOUDYEARS.length > 0 ? getAverage(CLOUDYEARS) : 0;
  const MONITORSCORE = MONITORYEARS.length > 0 ? getAverage(MONITORYEARS) : 0;
  const TESTSCORE = TESTYEARS.length > 0 ? getAverage(TESTYEARS) : 0;

  const GITWA = weightedAverageScore(GITSCORE, GITWEIGHT);
  const BUILDWA = weightedAverageScore(BUILDSCORE, BUILDWEIGHT);
  const CIWA = weightedAverageScore(CISCORE, CIWEIGHT);
  const CMWA = weightedAverageScore(CMSCORE, CMWEIGHT);
  const CONTAINERWA = weightedAverageScore(CONTAINERSCORE, CONTAINERWEIGHT);
  const CLOUDWA = weightedAverageScore(CLOUDSCORE, CLOUDWEIGHT);
  const MONITORWA = weightedAverageScore(MONITORSCORE, MONITORWEIGHT);
  const TESTWA = weightedAverageScore(TESTSCORE, TESTWEIGHT);
  const sum = getSum([GITWA, BUILDWA, CIWA, CMWA, CONTAINERWA, CLOUDWA, MONITORWA, TESTWA]);

  return (sum / 10) * 100;
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

const getAverage = (array: number[]): number => {
  let sum = 0;
  for (let i = 0; i < array.length; ++i) {
    sum += array[i];
  }
  return sum / array.length;
};

const getSum = (arr: number[]): number => {
  return arr.reduce(function (a, b) {
    return a + b;
  }, 0);
};

const calculateWeightedCategoryScore = (scores: number[], weight: number): number => {
  let langScore: number = 0;
  if (scores.length === 0) {
    langScore = 0;
  } else if (scores.length === 1) {
    langScore = getAverage(scores);
  } else {
    scores.sort((a, b) => a - b);
    let maxScore = scores[scores.length - 1];
    let otherScores = scores.slice(0, scores.length - 1);
    const otherScoresWeight = otherScores.map((score) => score * weight);
    const otherScoresWeightedAvergage = getSum(otherScoresWeight);

    let totalScore = maxScore + otherScoresWeightedAvergage;
    if (totalScore >= 100) langScore = 100;
    else langScore = totalScore;
  }
  return langScore;
};

const showJob = (score: number, type: string) => {
  if (score === 0) return '';
  if (type !== 'DevOps') {
    if (score < 20) {
      return `Junior ${type} Software Engineer (SE I)`;
    } else if (score < 40) {
      return `${type} Software Engineer (SE II)`;
    } else if (score < 60) {
      return `Senior ${type} Software Engineer (SE III)`;
    } else if (score < 70) {
      return `Tech Lead (${type})`;
    } else if (score < 80) {
      return `Staff Engineer (${type}) or Engineering Lead`;
    } else if (score < 90) {
      return `Senior Staff Engineer (${type}) or Engineering Director`;
    } else {
      return `Chief Architect (Principal) (${type}) or VP Director`;
    }
  } else {
    if (score < 20) {
      return `Junior ${type} Engineer`;
    } else if (score < 40) {
      return `${type} Engineer`;
    } else if (score < 60) {
      return `Senior ${type} Engineer`;
    } else if (score < 70) {
      return `Tech Lead (${type})`;
    } else if (score < 80) {
      return `Staff (${type}) Engineer or DevOps Lead`;
    } else if (score < 90) {
      return `Senior Staff (${type}) Engineer or Engineering Director`;
    } else {
      return `Chief Architect (Principal) (${type}) or VP Director`;
    }
  }
};
export { calculateFrontend, calculateBackend, calculateFullStack, calculateDevOps, showJob };
