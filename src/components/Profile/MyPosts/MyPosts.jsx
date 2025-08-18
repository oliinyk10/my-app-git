import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts =() => {
    return (

<div>
      <div>
        My post
        <div>
          <textarea> </textarea>
          <button>Add post</button>
         
        </div>
      </div>

      <div className={classes.posts}>
<Post />
<Post />
<Post />
      </div>
      </div>
    )
}

export default MyPosts;