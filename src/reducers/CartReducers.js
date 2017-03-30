export default (state = [], action) => {
  switch(action.type) {
    case "ADD_ITEM":
      return [...state, action.item]
    case "DELETE_ITEM":
      return [...state.slice(0,state.indexOf(action.item),
              ...state.slice(state.indexOf(action.item) + 1))
            ]
      // return [...state, action.item]
    default:
      return state
  }
}
