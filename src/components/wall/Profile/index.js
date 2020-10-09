import React, {useState} from "react";
import {Button} from "antd";
import {useSelector} from "react-redux";
import Auxiliary from "util/Auxiliary";

const Profile = (props) => {

  const [isFollow, setIsFollow] = useState(false);

  const authUser = useSelector(({auth}) => auth.authUser);

  const handleToggle = () => {
    setIsFollow((previousState) => ({
      isFollow: !previousState.isFollow
    }));
  };

  const {user, userInfo} = props;
  const {id, name, image, address, soldTo, email} = user;
  const {followers, following, frinds} = userInfo;
  return (
    <Auxiliary>
      <div className="gx-profileon">
        <div className="gx-profileon-thumb gx-profileon-thumb-htctrcrop">
          <img src={image} alt=''/>
        </div>
        <div className="gx-profileon-content">
          <p className="gx-profileon-title">{soldTo+"#"+name}</p>
          <span className="gx-fs-sm">{email}</span>
        </div>
      </div>

      {/* <div className="gx-follower gx-text-center">
        <ul className="gx-follower-list">
          <li>
            <span className="gx-follower-title">{followers}</span>
            <span>N° Usuarios</span>
          </li>
          <li>
            <span className="gx-follower-title">{following}</span>
            <span>N° Tipo Usuario</span>
          </li>
          <li>
            <span className="gx-follower-title">{frinds}</span>
            <span>project</span>
          </li>
        </ul>
      </div>
     */}
    </Auxiliary>
  )
};

export default Profile
