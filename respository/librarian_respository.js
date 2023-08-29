import { API_URL, LIBRARIANS_API_ENDPOINT ,LIBRARIANS_LOGIN_ENDPOINT} from '../ApiConig';

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
const LoginAS = async(email,password)=>{
    try {
        fetch(`${API_URL}${LIBRARIANS_LOGIN_ENDPOINT}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email:email,password:password }), // Dữ liệu bạn muốn gửi
        })
          .then((response) => response.json())
          .then((data) => {     
                    console.log("Data:", data);
                    console.log(data.message);
                    // Dữ liệu trả về từ server (nếu có)
              
            return data.message;
          })
          .catch((error) => {
            console.error(error);
          });
    } catch (error) {
        console.error(error);
        return [];
    }
}



export default {GetListLibrarian,LoginAS}