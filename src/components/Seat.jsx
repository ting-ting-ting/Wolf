import React, { useState } from 'react';
import {
  WOLF,
  SEER,
  WITCH,
  HUNTER,
  IDIOT,
  GUARD,
  VILLAGER,
} from '../utils/settingRole';
import {
  WOLF_MODE,
  SEER_MODE,
  WITCH_MODE,
  GUARD_MODE,
} from '../constants';
import wolf from '../images/wolf.jpg';
import seer from '../images/seer.png';
import witch from '../images/witch.jpeg';
import hunter from '../images/hunter.png';
import idiot from '../images/idiot.png';
import guard from '../images/guard.jpeg';
import villager from '../images/villager.jpeg';
import back from '../images/back.jpeg';

const Seat = ({
  role,
  mode,
  number,
}) => {
  const getOpenedRole = () => {
    switch (mode) {
      case WOLF_MODE:
        return role === WOLF;

      case SEER_MODE:
        return role === SEER;

      case WITCH_MODE:
        return role === WITCH;

      case GUARD_MODE:
        return role === GUARD;

      default:
        return role === WOLF;
    }
  }
  const [isOpened, setCardOpened] = useState(getOpenedRole());

  const getRoleImage = () => {
    switch (role) {
      case WOLF:
        return wolf;

      case SEER:
        return seer;

      case WITCH:
        return witch;

      case HUNTER:
        return hunter;

      case IDIOT:
        return idiot;

      case GUARD:
        return guard;

      case VILLAGER:
        return villager;

      default:
        return back;
    }
  }

  return (
    <div className="seat">
      <p>{number}</p>
      <div className="role" onClick={() => setCardOpened(true)}>
        {isOpened ? (
          <img src={getRoleImage()} />
        ) : (
          <img src={back} />
        )}
      </div>
    </div>
  );
}

export default React.memo(Seat);