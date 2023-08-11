import { API_URL, MEMBERS_API_ENDPOINT } from '../ApiConig';

const GetListUser = async () => {
    try {
        // alert('getAPI');
        const response = await fetch(`${API_URL}${MEMBERS_API_ENDPOINT}`);
        const json = await response.json();
        console.log("json.user zzzzzzzzzzzzzzzzzzzz", json.user);
        return json.user
    } catch (error) {
        console.error(error);
        return [];
    }
};

const addUser = async () => {

}


export default {GetListUser, addUser}