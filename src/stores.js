import { writable } from "svelte/store";

export const mainBar = [
    {
        title: "PoiAdd",
        icon: "fas fa-map-signs fa-3x",
        colour: "color:rgb(153, 196, 74)",
        link: "/#/poiadd",
    },
    {
        title: "Poi",
        icon: "fas fa-info-circle fa-3x",
        colour: "color:rgb(245, 197, 66)",
        link: "/#/poi",
    },
    {
        title: "Analysis",
        icon: "fas fa-chart-line fa-3x",
        colour: "color:rgb(149, 93, 176)",
        link: "/#/analysis",
    },
    {
        title: "Users",
        icon: "fas fa-address-book fa-3x",
        colour: "color:rgb(66, 179, 245)",
        link: "/#/users",
    },
    {
        title: "POI Map",
        icon: "fas fa-map-marked-alt fa-3x",
        colour: "color:rgb(102, 153, 255)",
        link: "/#/Map",
    },
    {
        title: "UpdateSettings",
        icon: "fas fa-clipboard-list fa-3x",
        colour: "color:rgb(63, 122, 139)",
        link: "/#/updatesettings",
    },
    {
        title: "Logout",
        icon: "fas fa-sign-out-alt fa-3x",
        colour: "color:rgb(156, 70, 128)",
        link: "/#/logout",
    }
];

export const welcomeBar = [
    {
        title: "Sign Up",
        icon: "fas fa-user-cog fa-3x",
        colour: "color:rgb(63, 160, 155)",
        link: "/#/signup",
    },
    {
        title: "Log In",
        icon: "fas fa-user-edit fa-3x",
        colour: "color:green",
        link: "/#/login",
    },
];

export const navBar = writable({
    bar: [],
});
export const title = writable("");
export const subTitle = writable("");

export const user = writable({
    email: "",
    token: ""
});

export const poi = writable({
    id: "",
    name: "",
    description: "",
    location: "",
    imagefile: "",
    categories: ""
});