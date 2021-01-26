import React from 'react';
import { 
  WOLF,
  SEER,
  WITCH,
  HUNTER,
  IDIOT,
  VILLAGER,
} from '../utils/settingRole';
import wolf from '../images/wolf.jpg';
import seer from '../images/seer.png';
import witch from '../images/witch.jpeg';
import hunter from '../images/hunter.png';
import idiot from '../images/idiot.png';
import villager from '../images/villager.jpeg';

const Seat = ({
  role,
  number,
}) => {
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

      case VILLAGER:
        return villager;
    
      default:
        return null;
    }
  }

  return (
    <div className="seat">
      <p>{number}</p>
      <div className="role">
        <img src={getRoleImage()} />
      </div>
    </div>
  );
}

export default React.memo(Seat);