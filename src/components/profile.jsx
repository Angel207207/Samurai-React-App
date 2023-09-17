import React from "react";
import s from "./profile.module.css";

const Profile = () => {
  return (
    <div className={s.profile}>
      <div>
        <img src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614638157_46-p-kosmicheskii-fon-dlya-fotoshopa-77.jpg"></img>
      </div>
      <div>Ava + Description</div>
      <div>My Posts</div>
      <div>New Post</div>
      <div className={s.posts}>
        <div className={s.item}>Post 1</div>
        <div className={s.item}>Post 2</div>
      </div>
    </div>
  );
};

export default Profile;
