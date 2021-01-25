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
  
  return ((wolfSum) / 4) + 1;
}

function setttingRole() {
  const roles = [WOLF, WOLF, WOLF, WOLF, SEER, WITCH, HUNTER, IDIOT, VILLAGER, VILLAGER, VILLAGER, VILLAGER];

  const rolesAfterShuffle = shuffle(roles);

  const result = {
    roles: rolesAfterShuffle,
    numberOfSeer: rolesAfterShuffle.findIndex(r => r === SEER) + 1,
    numberOfWitch: rolesAfterShuffle.findIndex(r => r === WITCH) + 1,
    numberOfHunter: rolesAfterShuffle.findIndex(r => r === HUNTER) + 1,
    numberOfIdiot: rolesAfterShuffle.findIndex(r => r === IDIOT) + 1,
    allOfNumbersOfWolf: getAllIndexes(rolesAfterShuffle, WOLF),
  }

  console.log('rolesAfterShuffle', result, conjectureFormula(result.allOfNumbersOfWolf));
}

export {
  WOLF,
  SEER,
  WITCH,
  HUNTER,
  IDIOT,
  VILLAGER,
  setttingRole,
}