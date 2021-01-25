import { shuffle } from 'lodash';

const WOLF = 'ROLE_WOLF';
const SEER = 'ROLE_SEER';
const WITCH = 'ROLE_WITCH';
const HUNTER = 'ROLE_HUNTER';
const IDIOT = 'ROLE_IDIOT';
const VILLAGER = 'ROLE_VILLAGER';

function setttingRole() {
  const roles = [WOLF, WOLF, WOLF, WOLF, SEER, WITCH, HUNTER, IDIOT, VILLAGER, VILLAGER, VILLAGER, VILLAGER];

  const rolesAfterShuffle = shuffle(roles);

  const result = {
    roles: rolesAfterShuffle,
    numberOfWitch: rolesAfterShuffle.findIndex(r => r === WITCH) + 1,
  }

  console.log('rolesAfterShuffle', result);
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