const initialState = {
    bookList: [],
    fetched: false
}
export default function bookReducer(state = initialState, action) {
    var newState = JSON.parse(JSON.stringify(state)) // This doesen't work: Object.assign({}, state). If you know a better solution, do tell me 

    switch (action.type) {
        case "ADD_BOOK": newState.bookList.push(action.payload) 
        break

        case "FETCH_BOOKS_FULFILLED": 
        newState = {bookList: action.payload, fetched: true }
        break

    }
    return newState
}