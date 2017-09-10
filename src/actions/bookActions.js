import $ from 'jquery'

export function fetchBooks() {
    return(
        function (dispatch) {
            const url = 'http://NsdBooksTrainingApi.azurewebsites.net/Api/Books/';
            $.getJSON(url).then((response) => {
                setTimeout(() => 
                    dispatch({ "type": "FETCH_BOOKS_FULFILLED", "payload": response })
                , 1000) // Wait 1s to show "Fetching books" message for some time. Remove setTimeout in real a solution
            });
        }
    )
}

export function addBook(payload) {  
    return(
        function (dispatch) {
            const url = 'http://NsdBooksTrainingApi.azurewebsites.net/Api/Books/'
            console.log(payload)
            $.ajax({
                url,
                type: "POST",
                data: JSON.stringify({id: 0, name: payload.name, author: payload.author, description: payload.description}), // Need id:0 to be added as a new bood
                dataType: "json",
                contentType: "application/json"
            })
            .done((data) => {
                console.log('Saved with new id ' + data.id)
                payload.id = data.id
                dispatch({ type: "ADD_BOOK_FULFILLED", payload })
            })
        }
    )
}   