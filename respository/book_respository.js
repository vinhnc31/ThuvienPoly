import { API_URL, BOOKS_API_ENDPOINT,BOOKS_API_ENDPOINT10, CATEGORY_BOOKS_API_ENDPOINT } from '../ApiConig';

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
const GetListBook10 = async () => {
  try {
    const response = await fetch(`${API_URL}${BOOKS_API_ENDPOINT10}`);
    const json = await response.json();
    const listBooks = json.book;
    return listBooks;
  } catch (error) {
    console.error(error);
    return [];
  }
};


export default { GetListBook,GetListBook10 }