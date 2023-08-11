import { API_URL, BOOKS_API_ENDPOINT } from '../ApiConig';

const GetListBook = async () => {
    try {
        // alert('getAPI');
        const response = await fetch(`${API_URL}${BOOKS_API_ENDPOINT}`);
        const json = await response.json();
        console.log("BOOK-BOOKBOOK-BOOKBOOK-BOOK", json.book);
        return json.book
    } catch (error) {
        console.error(error);
        return [];
    }
};



export default {GetListBook}