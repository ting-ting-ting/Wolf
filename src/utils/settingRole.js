import { shuffle } from 'lodash';

const WOLF = 'ROLE_WOLF';
const SEER = 'ROLE_SEER';
const WITCH = 'ROLE_WITCH';
const HUNTER = 'ROLE_HUNTER';
const IDIOT = 'ROLE_IDIOT';
const VILLAGER = 'ROLE_VILLAGER';

function getAllIndexes(arr, val) {
  var indexes = [], i = -1;
  while ((i = arr.indexOf(val, i+1)) != -1){
      indexes.push(i + 1);
  }
  return indexes;
}

function linearRegression(y,x){
  var lr = {};
  var n = y.length;
  var sum_x = 0;
  var sum_y = 0;
  var sum_xy = 0;
  var sum_xx = 0;
  var sum_yy = 0;

  for (var i = 0; i < y.length; i++) {

      sum_x += x[i];
      sum_y += y[i];
      sum_xy += (x[i]*y[i]);
      sum_xx += (x[i]*x[i]);
      sum_yy += (y[i]*y[i]);
  } 

  lr['slope'] = (n * sum_xy - sum_x * sum_y) / (n*sum_xx - sum_x * sum_x);
  lr['intercept'] = (sum_y - lr.slope * sum_x)/n;
  lr['r2'] = Math.pow((n*sum_xy - sum_x*sum_y)/Math.sqrt((n*sum_xx-sum_x*sum_x)*(n*sum_yy-sum_y*sum_y)),2);

  return lr;
}

function conjectureFormula(allOfNumbersOfWolf) {
  const wolfSum = allOfNumbersOfWolf.reduce((prev, curr) => prev + curr, 0);
  const target = Math.round(9.75 - (0.125 * wolfSum));
  
  return target
}

function setttingRole() {
  const roles = [WOLF, WOLF, WOLF, WOLF, SEER, WITCH, HUNTER, IDIOT, VILLAGER, VILLAGER, VILLAGER, VILLAGER];

  const rolesAfterShuffle = shuffle(roles);
  const numberOfSeer = rolesAfterShuffle.findIndex(r => r === SEER) + 1;
  const numberOfWitch = rolesAfterShuffle.findIndex(r => r === WITCH) + 1;
  const numberOfHunter = rolesAfterShuffle.findIndex(r => r === HUNTER) + 1;
  const numberOfIdiot = rolesAfterShuffle.findIndex(r => r === IDIOT) + 1;
  const allOfNumbersOfWolf = getAllIndexes(rolesAfterShuffle, WOLF);
  const killNumber = conjectureFormula(allOfNumbersOfWolf);
  const sumOfNumberOfWolf = allOfNumbersOfWolf.reduce((prev, curr) => prev + curr, 0);

  const data = {
    x: sumOfNumberOfWolf,
    y: numberOfWitch
  }

  const result = {
    roles: rolesAfterShuffle,
    numberOfSeer,
    numberOfWitch,
    numberOfHunter,
    numberOfIdiot,
    allOfNumbersOfWolf,
    killNumber,
    isKillWitch: killNumber === numberOfWitch,
    isKillGod: (
      killNumber === numberOfSeer || 
      killNumber === numberOfWitch ||
      killNumber === numberOfHunter ||
      killNumber === numberOfIdiot
    ),
  }

  console.log('result', result);

  return data;
}

function runData() {
  var xData = [];
  var yData = [];

  for (var i = 0 ; i < 10000000 ; i++) {
    const data = setttingRole();
    xData.push(data.x);
    yData.push(data.y);
  }

  return {
    xData,
    yData,
  }
}

function runLinearRegression() {
  const datas = runData();

  const lr = linearRegression(datas.yData, datas.xData);

  console.log('lr', lr);
}

export {
  WOLF,
  SEER,
  WITCH,
  HUNTER,
  IDIOT,
  VILLAGER,
  setttingRole,
  runData,
  runLinearRegression,
}