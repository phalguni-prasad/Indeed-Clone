import axios from 'axios';

const API_URL="http://localhost:8080";

export const savePost =async(payload)=>{
    try{
    return await axios.post(`${API_URL}/post`,payload);
    }
    catch(error){
        console.log("Error: ",error.message);
        return error.response.data;

    }
}

export const getAllPosts =async() =>{
    try{
        return await axios.post(`${API_URL}/post`);
        }
        catch(error){
            console.log("Error: ",error.message);
            return error.response.data;
    
        }
}