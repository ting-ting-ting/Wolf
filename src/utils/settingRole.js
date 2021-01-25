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

function conjectureFormula(allOfNumbersOfWolf) {
  const wolfSum = allOfNumbersOfWolf.reduce((prev, curr) => prev + curr, 0);
  const average = (wolfSum) / 4;

  if (average - Math.floor(average) <= 0.5) {
    return Math.floor((average) + 1);
  }
  
  return Math.round((average) + 1);
}

function setttingRole() {
  const roles = [WOLF, WOLF, WOLF, WOLF, SEER, WITCH, HUNTER, IDIOT, VILLAGER, VILLAGER, VILLAGER, VILLAGER];

  const rolesAfterShuffle = shuffle(roles);
  const numberOfSeer = rolesAfterShuffle.findIndex(r => r === SEER) + 1;
  const numberOfWitch = rolesAfterShuffle.findIndex(r => r === WITCH) + 1;
  const numberOfHunter = rolesAfterShuffle.findIndex(r => r === HUNTER) + 1;
  const numberOfIdiot = rolesAfterShuffle.findIndex(r => r === IDIOT) + 1;
  const allOfNumbersOfWolf = getAllIndexes(rolesAfterShuffle, WOLF);
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
    isHitWitch: conjectureFormula(allOfNumbersOfWolf) === numberOfWitch,
    isHitGod: (
      conjectureFormula(allOfNumbersOfWolf) === numberOfSeer || 
      conjectureFormula(allOfNumbersOfWolf) === numberOfWitch ||
      conjectureFormula(allOfNumbersOfWolf) === numberOfHunter ||
      conjectureFormula(allOfNumbersOfWolf) === numberOfIdiot
    ),
  }

  return data;
}

function runData() {
  var xData = [];
  var yData = [];

  for (var i = 0 ; i < 1000 ; i++) {
    const data = setttingRole();
    xData.push(data.x);
    yData.push(data.y);
  }

  return {
    xData,
    yData,
  }
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
}