export const ADD_EVENT = "ADD_EVENT";
export const UPDATE_EVENT = "UPDATE_EVENT";


const defaultState = {
  profile: {
    userId: 1,
    name: "User User",
    status: "Hello! I\'m good person!",
    aboutMe: "Fumiko Saito holds a Master of Fine Arts in Creative Writing from the University of Virginia. "
  },
  events: []
}

export const ProfileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return {...state, events: [...state.events, {...action.payload}]}
    case UPDATE_EVENT:
      return {...state, events: action.payload}
    default:
      return state;
  }
}