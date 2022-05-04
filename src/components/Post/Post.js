import React from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import loveIcon from "../../assets/love.svg";
import commentIcon from "../../assets/comment.svg";
import shareIcon from "../../assets/share.svg";

function Post({ username, caption, imageURL, comments }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Remy Sharp"
          src="https://media-exp1.licdn.com/dms/image/C5603AQHrjQP7ly-wSw/profile-displayphoto-shrink_200_200/0/1644169425495?e=1654128000&v=beta&t=-gap9wBU_za_MN73bDycv6CcBXslalGM6ubUaO2hwZ4"
        />
        <h3>{username}</h3>
      </div>
      <img src={imageURL} alt="post" className="post__img" />
      <div className="post__analytics">
        <img className="post__analytics--img" src={loveIcon} alt="loveIcon" />
        <img
          className="post__analytics--img"
          src={commentIcon}
          alt="commentIcon"
        />
        <img className="post__analytics--img" src={shareIcon} alt="shareIcon" />
        <div className="post__analytics--text">100 Likes</div>
        <div className="post__caption">
          <strong>{username}</strong> : {caption}
        </div>
        <div className="post__comments">
          {comments.map((comment, index) => (
            <div key={index} className="post__comment--item">
              <strong>{comment.commentBy}</strong> {comment.comment}
            </div>
          ))}
        </div>
        <div className="post__comments--input">
          <input type="text" placeholder="Add a comment" />
        </div>
      </div>
    </div>
  );
}

export default Post;
