import { authAPI, profileAPI } from "./../api/api";


const ADD_POST = "ADD-POST",
    SET_USER_PROFILE = "SETUSERPROFILE",
    SET_STATUS = "SET-STATUS",
    UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    postsData: [
        { id: 1, message: "Hi, how are you", likeCount: 12 },
        { id: 2, message: "Hello", likeCount: 134 },
        { id: 3, message: "Hi", likeCount: 14 },
    ],
    newPostText: "",
    defaultPostText: "Write new post",
    profile: null,
    status:"",
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            {
                let id = state.postsData[state.postsData.length - 1].id + 1;
                let body = state.newPostText;
                return {
                    ...state,
                    postsData: [
                        ...state.postsData,
                        { id: id, message: body, likeCount: Math.floor(Math.random() * 300) },
                    ],
                    newPostText: "",
                };
            }

        case SET_USER_PROFILE:
            {
                return {...state, profile: action.profile }
            }

        case UPDATE_NEW_POST_TEXT:
            {
                return {
                    ...state,
                    newPostText: action.newText,
                };
            }
            case SET_STATUS :{
                return {
                    ...state,
                    status: action.status,
                };
            }


        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const updateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText});




export const getStatus = (userId) =>(dispatch) => {

      
        profileAPI.getStatus(userId)
        .then((response) => {
            
            dispatch(setStatus(response.data));
        });
    }


    export const updateStatus = (status) =>(dispatch) => {

      
        profileAPI.updateUserStatus(status)
        .then((response) => {
           if(response.data.resultCode===0){
           
            dispatch(setStatus(status));}
        });

        
    }

export const getProfileUser = (userId ) => {
    return (dispatch) => {

        if (!userId) {
            userId = 21135;
        }
        authAPI.profileUser(userId)

        .then((data) => {
            dispatch(setUserProfile(data));
        });
    }
}