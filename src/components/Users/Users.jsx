import React from "react";
import classes from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0){
    
  props.setUsers([
    {
      id: 1,
      photoUrl:
        "https://static-cse.canva.com/blob/195615/paul-skorupskas-7KLa-xLbSXA-unsplash-2.jpg",
      followed: true,
      fullName: "Dmitry",
      status: "I am a boss",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 2,
      photoUrl: "https://www.rosphoto.com/images/u/articles/1510/3_13.jpg",
      followed: false,
      fullName: "Sasza",
      status: "I am a barista",
      location: { city: "Krakow", country: "Poland" },
    },
    {
      id: 3,
      photoUrl: "https://www.rosphoto.com/images/u/articles/1510/3_13.jpg",
      followed: false,
      fullName: "Kira",
      status: "I am a artist",
      location: { city: "Lviv", country: "Ukraine" },
    },
    {
      id: 4,
      photoUrl:
        "https://static-cse.canva.com/blob/195615/paul-skorupskas-7KLa-xLbSXA-unsplash-2.jpg",
      followed: true,
      fullName: "Pawel",
      status: "I am a driver",
      location: { city: "Moscow", country: "Russia" },
    },
  ])}
  return (
    <div className="wrapper-content content_box">
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt="photo" />
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
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>

            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
