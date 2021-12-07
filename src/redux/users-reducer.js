const FOLLOW = "FOLLOW",
  UNFOLLOW = "UNFOLLOW",
  SET_CURRENT_PAGE = "SETCURRENTPAGE",
  SET_TOTAL_COUNT = "SETTOTALCOUNT",
  SET_USERS = "SETUSERS";

let initialState = {
  usersData: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 5,
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

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
case SET_TOTAL_COUNT:{
  return{
    ...state,
    totalUsersCount: action.totalCount,
  }
}
    case SET_USERS: {
      return {
        ...state,
        usersData: [ ...action.users],
      };
    }

    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const setUsersAC = (users) => ({ type: SET_USERS, users });

export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalUsersCountAC = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });


