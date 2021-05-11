export class PoiService {
    poiList = [];
    baseUrl = "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getPois() {
        try {
            const response = await fetch(this.baseUrl + "/api/poi")
            this.poiList = await response.json();
            return this.poiList;
        } catch (error) {
            return [];
        }
    }

    async getUsers() {
        try {
            const response = await fetch(this.baseUrl + "/api/users")
            this.userList = await response.json();
            return this.userList;
        } catch (error) {
            return [];
        }
    }
}