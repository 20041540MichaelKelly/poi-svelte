import axios from "axios";
import {user} from "../stores";

export class PoiService {
    poiList = [];
    userList = [];
    baseUrl = "";

    //user = "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        if (localStorage.poi) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.poi);
        }
    }

    async getPois() {
        try {
            const response = await axios.get(this.baseUrl + "/api/poi");
            console.log(response.data);
            this.poiList = response.data;

            return this.poiList;
        } catch (error) {
            return [];
        }
    }

    async getUsers() {
        try {
            const response = await axios.get(this.baseUrl + "/api/users");
            this.userList = response.data;
            return this.userList;
        } catch (error) {
            return [];
        }
    }

    async getUser(id) {
        try {
            const response = await axios.get(this.baseUrl + "/api/users/findOne", id);
            // this.user = response.data;
        } catch (error) {
            return [];
        }
    }

    async updateSettings(firstName, lastName, email, password, id) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                _id: id
            };
            console.log(userDetails);
            const response = await axios.put(`${this.baseUrl}/api/users/${id}`, userDetails);
            const newUser = await response.data;
            user.set(newUser);
            return true;
        } catch (error) {
            return false;
        }
    }

    async signup(firstName, lastName, email, password) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            };
            const response = await axios.post(this.baseUrl + "/api/users", userDetails);
            const newUser = await response.data;
            user.set(newUser);
            return true;
        } catch (error) {
            return false;
        }
    }

    async logout() {
        user.set({
            email: "",
            token: ""
        });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.poi = null;
    }

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
            if (response.data.success) {
                axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
                user.set({
                    email: email,
                    token: response.data.token
                });
                localStorage.poi = JSON.stringify(response.data.token);
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async makePoi(name, description, location, imagefile, categories) {
        try {
            const poiAdd = {
                name: name,
                description: description,
                location: location,
                //weather: weathers.weather[0].description,
                imagefile: imagefile,
                categories: categories,
            };
            const response = await axios.post(this.baseUrl + "/api/poi", poiAdd);
            console.log(response);
            return response.status === 200;
        } catch (error) {
            return false;
        }
    }
}
