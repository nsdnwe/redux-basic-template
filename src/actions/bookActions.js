import $ from 'jquery'

export function fetchBooks() {
    return(
        function (dispatch) {
            const url = 'http://NsdBooksTrainingApi.azurewebsites.net/Api/Books/';
            $.getJSON(url).then((response) => {
                setTimeout(() => 
                    dispatch({ "type": "FETCH_BOOKS_FULFILLED", "payload": response })
                , 2000) // Wait 2s to show "Fetching books" message for some time. Remove setTimeout in real a solution
            });
        }
    )
}

export function addBook(payload) {  
    return(
        function (dispatch) {
            dispatch({ type: "ADD_BOOK", payload })
        }
    )
}   