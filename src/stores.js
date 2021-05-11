import { writable } from "svelte/store";

export const mainBar = [{
    title: "Poi",
    icon: "fas fa-hand-holding-usd fa-3x",
    colour: "color:rgb(153, 196, 74)",
    link: "/#/poi",
}, {
    title: "Users",
    icon: "fas fa-clipboard-list fa-3x",
    colour: "color:rgb(63, 122, 139)",
    link: "/#/users",
}];

export const navBar = writable({
    bar: [],
});
export const title = writable("");
export const subTitle = writable("");