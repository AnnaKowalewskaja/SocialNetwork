const FOLLOW = "FOLLOW",
  UNFOLLOW = "UNFOLLOW",
  SET_USERS = "SETUSERS";

let initialState = {
  usersData: [
   /* {
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
    },*/
  ],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: [...state.usersData].map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        usersData: [...state.usersData].map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS: {
      return {
        ...state,
        usersData: [...state.usersData, ...action.users],
      };
    }

    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const setUsersAC = (users) => ({ type: SET_USERS, users });

export const updateNewPostTextActionCreator = (newText) => ({
  type: "UPDATE_NEW_POST_TEXT",
  newText: newText,
});
