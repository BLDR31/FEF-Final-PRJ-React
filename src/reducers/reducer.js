import Redux from 'redux';

let initialState = {
    username: '',
    userprofile: {},
    repos: []
}

const reducer = (state = initialState, action) => {
      switch(action.type) {
        case 'USERNAME':
          return {
            ...state,
            username: action.username
          }
        break;
        case 'PROFILE':
          return {
            ...state,
            userprofile: action.userprofile
          }
        break;
        case 'REPOS':
          return {
            ...state,
            repos: action.repos
          }

        default:
          return state;
      }
}

export default reducer;
