import {useState,useEffect} from 'react';
import {Feed,Button} from 'semantic-ui-react';
import {followUser,unfollowUser} from '../../utils/profileActions'

function FollowerNotification({notification,loggedUserFollowStats,setUserFollowStats})
{
    const[disabled,setDisabled]=useState(false);
    const isFollowing=loggedUserFollowStats.following.length>0
    &&loggedUserFollowStats.following.filter(following=> following.user === notification.user._id).length>0
  return(
    <>
    <Feed.Event>
        <Feed.Label image={notification.user.profilePicUrl}/>
            <Feed.Content>
                <Feed.Summary>
                    <>
                    <Feed.User as="a" href={`/${notification.user.username}`}>{notification.user.name}</Feed.User>
                     Started Following You
                    <Feed.Date>{calculateTime(notification.date)}</Feed.Date>
                    </>
                </Feed.Summary>

                <div style={{position:'absolute',right:"5px"}}>
                  <Button size="large" compact icon={isFollowing ? 'check circle' : "add user"} 
                  color={isFollowing ? 'instagram' : 'twitter'}
                  disabled={disabled}
                   onClick={async()=>{
                    setDisabled(true);
                     isFollowing?await unfollowUser(notification.user._id,setUserFollowStats):await followUser(notification.user._id,setUserFollowStats)
                     setDisabled(false)}
                   }/>

                </div>
            </Feed.Content>

    
      </Feed.Event>
      <br/>
    </>
  )
}

export default FollowerNotification