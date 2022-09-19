export const initialState = {
  exercises: [],
  bodyPart: 'all',
  bodyParts: [],
  youtubeVideos: [
    {
      channelId: 'UCMZHX2oh_s9kFhmCRCNosuw',
      channelName: "Iowa's News Now",
      description: 'undefined.',
      lengthText: '12:33',
      publishedTimeText: '8 years ago',
      thumbnail: [
        {
          height: 270,
          url: 'https://i.ytimg.com/vi/z_XFMWUmuX4/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCFx6L5xx3UmfXfmKUZ5aIAhYENdg',
          width: 480,
        },
      ],
      title: 'Exercise with Marlyce',
      videoId: 'z_XFMWUmuX4',
      viewCountText: '93 views',
    },
  ],
};

export const actionTypes = {
  SET_EXERCISES: 'SET_EXERCISES',
  SET_BODYPART: 'SET_BODYPART',
  SET_BODYPARTS: 'SET_BODYPARTS',
  SET_YOUTUBE_VIDEOS: 'SET_YOUTUBE_VIDEOS',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_EXERCISES:
      return {
        ...state,
        exercises: action.payload,
      };

    case actionTypes.SET_BODYPART:
      return {
        ...state,
        bodypart: action.bodypart,
      };

    case actionTypes.SET_BODYPARTS:
      return {
        ...state,
        bodyparts: action.payload,
      };

    case actionTypes.SET_YOUTUBE_VIDEOS:
      return {
        ...state,
        youtubeVideos: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
