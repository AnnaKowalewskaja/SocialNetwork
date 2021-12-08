import React from "react";
import userPhoto from "../../assets/images/user-image.png";
import classes from "./Users.module.css";
import Preloader from "../common/Preloader/Preloader";


 const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

  return (
    <div className="wrapper-content content_box">
       {props.isFetching ? <Preloader/> : null}
      <div className={classes.pageCount}>
        {pages.map((p) => {
          return (
            <button
              onClick={(e) => {
                props.onPageChanged(p);
              }}
              className={props.currentPage === p && classes.selectedPage}
            >
              {p}
            </button>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt="usersPhoto"
              />
            </div>

            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                   props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>

            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};


export default Users;