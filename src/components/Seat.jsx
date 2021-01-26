import React from 'react';
import { 
  WOLF,
  SEER,
  WITCH,
  HUNTER,
  IDIOT,
  VILLAGER,
} from '../utils/settingRole';

const Seat = ({
  role,
  number,
}) => {
  return (
    <div className="seat">
      <p>{number}</p>
      <div className="role" />
    </div>
  );
}

export default React.memo(Seat);