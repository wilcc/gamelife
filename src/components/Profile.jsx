import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';


export default function Profile(props) {
    console.log('thisisprops',props)
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
            <div>
          <ProgressBar variant="success" now={40} />
        </div>

              <br />
            </div>
            <div className="floated profile-stat followers" id="num_followers">
            <ProgressBar variant="info" now={props.percent} />
              <br />
            </div>
            <div className="floated profile-stat following" id="num_following">
            <ProgressBar variant="warning" now={60} />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
