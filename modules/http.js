import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL


export const getData = async (path) => {
    try {
        const res = await axios.get(baseUrl + path)

        return res
    } catch(e) {
        console.log(e);
    }
}
export const postData = async (path, body) => {
    try {
        const res = await axios.post(baseUrl + path, body)

        return res
    } catch(e) {
        console.log(e);
    }
}

export const patchData = async (path, body) => {
    try {
        const res = await axios.patch(baseUrl + path, body)

        return res
    } catch(e) {
        console.log(e);
    }
}

export const deleteData = async (body) => {
    try {
        const res = await axios.delete(baseUrl + body)

        return res
    } catch(e) {
        console.log(e);
    }
}