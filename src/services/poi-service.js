import axios from "axios";
import {user} from "../stores";
import { place } from "../stores";

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
                password: password
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
                console.log(response.data);
                user.set({
                    email: email,
                    token: response.data.token,
                });
                localStorage.poi = JSON.stringify(response.data.token);
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async makePoi(name, description, imagefile, categories, rate, location) {
        try {
            const poiAdd = {
                name: name,
                description: description,
                imagefile: imagefile,
                categories: categories,
                rate: rate,
                location: location,
            };
            const response = await axios.post(this.baseUrl + "/api/poi", poiAdd);
            console.log(response);
            return response.status === 200;
        } catch (error) {
            return false;
        }
    }


    async getPoi(id) {
        try {
            const response = await axios.get(this.baseUrl + "/api/poi", id);
            return response.data;
        } catch (error) {
            return false;
        }
    }

    async editPoi(name, description, location, imagefile, categories, id) {
        try {
            const poiDetails = {
                name: name,
                description: description,
                location: location,
                imagefile: imagefile,
                categories: categories,
                _id: id
            };
            console.log(poiDetails);
            const response = await axios.put(`${this.baseUrl}/api/poi`, poiDetails);
            const newPoi = await response.data;
            poi.set(newPoi);
            return true;
        } catch (error) {
            return false;
        }
    }

    async deletePoi(id) {
        const response = await axios.delete(this.baseUrl + "/api/poi/deleteOne/" + id);
        console.log(response);
        console.log('passed');
        window.location.reload();
        return response.status === 200;
    } catch (error) {
        return false;
    }


}
