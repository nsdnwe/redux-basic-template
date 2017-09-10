const initialState = {
    bookList: [],
    fetched: false
}
export default function bookReducer(state = initialState, action) {
    var newState = Object.assign({}, state) 

    switch (action.type) {
        case "ADD_BOOK_FULFILLED": newState.bookList.push(action.payload) 
        break

        case "FETCH_BOOKS_FULFILLED": 
        newState = {bookList: action.payload, fetched: true }
        break
    }
    return newState
}