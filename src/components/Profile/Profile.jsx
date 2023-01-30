import PropTypes from 'prop-types';
import user from "../../user.json"
import {Stats} from "./ProfileStats/ProfileStats"
import {Description} from "./ProfileDescription/ProfileDescription"
import profileCss from "./Profile.module.css"

export const Profile = function () {
    return (
        <div className={profileCss.profile}>
          <Description 
            avatar={user.avatar}
            name={user.username}
            tag={user.tag}
            location={user.location}/>
          <Stats 
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}/>
        </div>
      );
}

Description.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }
  
  Stats.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }