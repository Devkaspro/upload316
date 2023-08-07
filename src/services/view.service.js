import { API_URL } from "../constants/constant";

export const getAllViews = async () => {
    try
    {
        const viewData = await fetch(API_URL + 'views');
        const responceData = await viewData.json();
        return responceData;
    } catch (error)
    {
        console.log('Error fetching data:', error);
    }
};