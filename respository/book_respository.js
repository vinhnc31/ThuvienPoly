import { API_URL, BOOKS_API_ENDPOINT, CATEGORY_BOOKS_API_ENDPOINT } from '../ApiConig';

const GetListBook = async () => {
    try {
        const response = await fetch(`${API_URL}${BOOKS_API_ENDPOINT}`);
        const json = await response.json();
        const listBooks = json.book;
        console.log("BOOK-BOOKBOOK-BOOKBOOK-BOOK");
        return listBooks;
    } catch (error) {
        console.error(error);
        return [];
    }
};


export default { GetListBook }