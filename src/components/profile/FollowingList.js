import React, { Fragment } from 'react';
import FollowCard from './RelationshipCard';
import icons from '../../assets/icons.svg';

const FollowingList = (props) => {
  const {
    following,
    userFullName,
    ownProfile,
    history,
  } = props;
  const handleClick = (userId) => {
    history.push(`/user/profile/${userId}`);
  };
  return (
    <Fragment>
      {
        following.length === 0
          ? (
            <div className="no-record centralizer">
              <div>
                <svg className="icon">
                  <use xlinkHref={`${icons}#sad`} />
                </svg>&nbsp;&nbsp;
                <span>{ownProfile ? 'You are not following anyone.' : `${userFullName} is not following anyone`}</span>
              </div>
            </div>
          )
          : following.map((user) => <FollowCard handleClick={handleClick} key={user.id} type="following" userId={user.followedUserId} user={user.followedUser} />)
      }
    </Fragment>
  );
};

export default FollowingList;
