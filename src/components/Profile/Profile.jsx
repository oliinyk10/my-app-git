import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile =() => {
    return (
      <div className={classes.content}>
        <div>
        <img src = "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=" /> 
      </div>
      <div>
        ava + description
      </div>

<MyPosts/>
      </div>
    )
}

export default Profile;