import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Profile(props) {
  let urll = `images/avatar/con${props.level}.png`;
  return (
    <div>
      <div className="rela-block container">
        <div className="rela-block profile-card">
          <div
          className="profile-pic"
            style={{
              background: `url(${urll}) center/cover no-repeat `,
            }}
          ></div>
          <div className="rela-block profile-name-container">
            <div className="rela-block user-name" id="user_name">
              Meta Character
            </div>
            <div className="rela-block user-desc" id="user_description">
              Level : {props.level}
            </div>
          </div>
          <div className="rela-block profile-card-stats">
            <div className="floated profile-stat works" id="num_works">
              <div>
                <ProgressBar variant="success" now={100} />
              </div>

              <br />
            </div>
            <div className="floated profile-stat followers" id="num_followers">
              <ProgressBar animated variant="warning" now={props.percent} />
              <br />
            </div>
            <div className="floated profile-stat following" id="num_following">
              <ProgressBar variant="info" now={100} />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
