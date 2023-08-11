import { API_URL, BOROWING_SLIPS_API_ENDPOINT } from '../ApiConig';

const GetListBorowingSlip = async () => {
    try {
        // alert('getAPI');
        const response = await fetch(`${API_URL}${BOROWING_SLIPS_API_ENDPOINT}`);
        const json = await response.json();
        console.log("PHIẾU MƯỢN", json.borowing);
        return json.borowing
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default {GetListBorowingSlip}