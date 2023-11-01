import axios from "axios";

export const GetGalleryDAta = async () => {
    const response = await axios.get("http://192.168.2.116:5000/assets", {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}