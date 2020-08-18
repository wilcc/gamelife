import React from 'react';

export default function Profile() {
  return (
    <div>
      <div className="rela-block container">
        <div className="rela-block profile-card">
          <div className="profile-pic" id="profile_pic"></div>
          <div className="rela-block profile-name-container">
            <div className="rela-block user-name" id="user_name">
              User Name Here
            </div>
            <div className="rela-block user-desc" id="user_description">
              User Description Here
            </div>
          </div>
          <div className="rela-block profile-card-stats">
            <div className="floated profile-stat works" id="num_works">
              28
              <br />
            </div>
            <div className="floated profile-stat followers" id="num_followers">
              112
              <br />
            </div>
            <div className="floated profile-stat following" id="num_following">
              245
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
