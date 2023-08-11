import { API_URL, LIBRARIANS_API_ENDPOINT } from '../ApiConig';

const GetListLibrarian = async () => {
    try {
        // alert('getAPI');
        const response = await fetch(`${API_URL}${LIBRARIANS_API_ENDPOINT}`);
        const json = await response.json();
        console.log("-----------------THỦ THƯ------------------", json.librarian);
        return json.librarian
    } catch (error) {
        console.error(error);
        return [];
    }
};



export default {GetListLibrarian}