import { API_URL, CATEGORY_BOOKS_API_ENDPOINT } from '../ApiConig';

const getCategoryBooks = async () => {
    try {
        const response = await fetch(`${API_URL}${CATEGORY_BOOKS_API_ENDPOINT}`);
        const category = await response.json();
        console.log("               CATEGORY-CATEGORY-CATEGORY               ", category);
        return category;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default {getCategoryBooks }