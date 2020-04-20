import axios from "axios";

export default {
    searchGoogle: (query) => {
        let queryString = "https://www.googleapis.com/books/v1/volumes?q=";
        queryString += encodeURI(query);
        console.log(`queryString: ${queryString}`)
        return axios
            .get(queryString)
            .then(res => {
                const books = res.data.items;
                return books.map(book => {
                    const { 
                        title, 
                        authors, 
                        publishedDate, 
                        description, 
                        averageRating, 
                        ratingsCount, 
                        infoLink 
                    } = book.volumeInfo;
                    
                    let thumbnail;
                    if (book.volumeInfo.imageLinks){
                        thumbnail = book.volumeInfo.imageLinks.thumbnail;
                    }
                    else{
                        thumbnail = "https://via.placeholder.com/200.png?text=No+Image+Found"
                    }

                    
                    return {
                        title, 
                        authors,
                        publishedDate,
                        description,
                        averageRating,
                        ratingsCount,
                        image: thumbnail,
                        infoLink
                    };
                });
            });
    },

    getSaved: () => {
        return axios.get("api/books")
    },

    saveBook: (book) => {
        return axios.post("api/books", book)
    },

    removeBook: (id) => {
       return axios.delete("api/books/" + id);
    }
};