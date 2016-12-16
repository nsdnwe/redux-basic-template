const initialState = []
export default function bookReducer(state = initialState, action) {
    var newState = JSON.parse(JSON.stringify(state)) // This doesen't work: Object.assign({}, state). If you know a better solution, do tell me 

    switch (action.type) {
        case "ADD_BOOK": newState.push(action.payload); break;
        case "FETCH_BOOKS_FULFILLED": newState = action.payload; break;
    }
    return newState
}