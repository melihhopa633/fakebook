import "./post.css"
import { MoreVert } from "@material-ui/icons"
import { Users } from "../../dummyData"
import { useState } from "react"

export default function Post({ post }) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLike] = useState(false)
  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1 )
    setIsLike(!isLiked )
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" />
            <span className="postUserName">{Users.filter(u => u.id === post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <div className="postText">{post?.desc}</div>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" onClick={likeHandler} src="/assets/heart.png" alt="" />
            <img className="likeIcon" onClick={likeHandler} src="/assets/like.png" alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
