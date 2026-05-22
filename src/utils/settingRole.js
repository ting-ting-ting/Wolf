import { shuffle } from 'lodash';
import { WOLF_MODE, WITCH_MODE, GUARD_MODE, BIG_WOLF_MODE } from '../constants'

const WOLF = 'ROLE_WOLF';
const SEER = 'ROLE_SEER';
const WITCH = 'ROLE_WITCH';
const HUNTER = 'ROLE_HUNTER';
const IDIOT = 'ROLE_IDIOT';
const GUARD = 'ROLE_GUARD';
const VILLAGER = 'ROLE_VILLAGER';
const BIG_WOLF = 'ROLE_BIG_WOLF';
const times = 10000000;

function getAllNumbers(arr, val) {
  var indexes = [], i = -1;
  while ((i = arr.indexOf(val, i+1)) !== -1){
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
  let target = Math.round(9.75 - (0.125 * wolfSum));
  let i = -1;

  while ((i = allOfNumbersOfWolf.indexOf(target)) !== -1){
    target += 1;
  }

  return target
}

function setttingRole(mode) {
  const baseRoles = [WOLF, WOLF, WOLF, SEER, WITCH, HUNTER, VILLAGER, VILLAGER, VILLAGER, VILLAGER];
  const roles = (() => {
    switch (mode) {
      case WITCH_MODE:
      case GUARD_MODE:
      case BIG_WOLF_MODE:
        return [
          ...baseRoles,
          BIG_WOLF,
          GUARD,
        ];

      default:
       return [
          ...baseRoles,
          WOLF,
          IDIOT,
       ];
    }
  })();

  const rolesAfterShuffle = shuffle(roles);
  // const numberOfSeer = rolesAfterShuffle.findIndex(r => r === SEER) + 1;
  // const numberOfWitch = rolesAfterShuffle.findIndex(r => r === WITCH) + 1;
  // const numberOfHunter = rolesAfterShuffle.findIndex(r => r === HUNTER) + 1;
  // const numberOfIdiot = rolesAfterShuffle.findIndex(r => r === IDIOT) + 1;
  // const allOfNumbersOfWolf = getAllNumbers(rolesAfterShuffle, WOLF);
  // const killNumber = conjectureFormula(allOfNumbersOfWolf);

  let rainbowIndex = -1;

  if (!mode || mode === WOLF_MODE) {
    const nonWolfIndices = rolesAfterShuffle
      .map((r, i) => r !== WOLF ? i : -1)
      .filter(i => i !== -1);

    rainbowIndex = nonWolfIndices[Math.floor(Math.random() * nonWolfIndices.length)];
  }

  const result = {
    roles: rolesAfterShuffle,
    rainbowIndex,
    // numberOfSeer,
    // numberOfWitch,
    // numberOfHunter,
    // numberOfIdiot,
    // allOfNumbersOfWolf,
    // killNumber,
    // isKillWitch: killNumber === numberOfWitch,
    // isKillGod: (
    //   killNumber === numberOfSeer ||
    //   killNumber === numberOfWitch ||
    //   killNumber === numberOfHunter ||
    //   killNumber === numberOfIdiot
    // ),
  }

  return result;
}

function settingData() {
  const roles = [WOLF, WOLF, WOLF, WOLF, SEER, WITCH, HUNTER, IDIOT, VILLAGER, VILLAGER, VILLAGER, VILLAGER];

  const rolesAfterShuffle = shuffle(roles);
  const numberOfWitch = rolesAfterShuffle.findIndex(r => r === WITCH) + 1;
  const allOfNumbersOfWolf = getAllNumbers(rolesAfterShuffle, WOLF);
  const sumOfNumberOfWolf = allOfNumbersOfWolf.reduce((prev, curr) => prev + curr, 0);

  const data = {
    x: sumOfNumberOfWolf,
    y: numberOfWitch
  }

  return data;
}

function runData() {
  var xData = [];
  var yData = [];

  for (var i = 0 ; i < times ; i++) {
    const data = settingData();
    xData.push(data.x);
    yData.push(data.y);
  }

  return {
    xData,
    yData,
  }
}

function getProbability() {
  var killWitchCase = [];
  var killGodCase = [];

  for (var i = 0 ; i < times ; i++) {
    const result = setttingRole();

    if (result.isKillWitch) {
      killWitchCase.push(i)
    }

    if (result.isKillGod) {
      killGodCase.push(i)
    }
  }

  const killWitchP = (killWitchCase.length / times) * 100;
  const killGodP = (killGodCase.length / times) * 100;

  console.log('P', killWitchP, killGodP);
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
  GUARD,
  VILLAGER,
  BIG_WOLF,
  setttingRole,
  runData,
  runLinearRegression,
  getProbability,
}