import axios from "axios";

export class PoiService {
    poiList = [];
    userList = [];
    baseUrl = "";
    user = "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getPois() {
        try {
            const response = await axios.get(this.baseUrl + "/api/poi")
            this.poiList = response.data;
            return this.poiList;
        } catch (error) {
            return [];
        }
    }

    async getUsers() {
        try {
            const response = await axios.get(this.baseUrl + "/api/users")
            this.userList = response.data;
            return this.userList;
        } catch (error) {
            return [];
        }
    }

    async getUser(id) {
        try {
            const response = await axios.get(this.baseUrl + "/api/users/findOne" , id);
            this.user = response.data;
        } catch (error) {
            return [];
        }
    }

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
            return response.status == 200;
        } catch (error) {
            return false;
        }
    }

    async poiAdd(name, description, location, imagefile, categories) {
        try {
            const poiAdd = {
                name: name,
                description: description,
                location: location,
                imagefile: imagefile,
                categories: categories
            };
            const response = await axios.post(this.baseUrl + "/api/users/" + user._id + "/poi", poiAdd);
            return response.status == 200;
        } catch (error) {
            return false;
        }
    }
}