<script lang="ts">
    import { push } from "svelte-spa-router";
    import { onMount, getContext } from "svelte";
    const poiService = getContext("PoiService");
    import StarRating from 'svelte-star-rating';
    import Coordinates from "./Coordinates.svelte";
    import { place } from "../stores";
    import { user } from "../stores";
    export let pId;

    export let lat = 0.0;
    export let lng = 0.0;

    let files = [];
    let poiList = [];
    let id = $place.id;
    let name = $place.name;
    console.log(name);
    let description = $place.description;
    let location = $place.location;
    let imagefile = $place.imagefile;
    let person = $user.email;
    let categories = ["North", "East", "South", "West"];
    let selectedMethod = 0;
    let errorMessage = "";

    let poi_value;


    onMount(async () => {
        poiList = await poiService.getPois()
    });


    async function editPoi() {
        if (files) {
            console.log(files);
            let ifile = files[0];
            console.log(ifile);
            if (ifile) {
                let reader = new FileReader();
                reader.onload = async function (e) {
                    imagefile = reader.result;
                    const success = await poiService.editPoi(name, description, location, imagefile, categories[selectedMethod], person, id);
                    console.log(success);
                };
                reader.readAsDataURL(ifile);
            }

            for (const file of files) {
                console.log(`${file.name}: ${file.size} bytes`);
            }
        }
    }




</script>
<form on:submit|preventDefault={editPoi} class="uk-form-stacked uk-text-left">
    <div class="uk-grid uk-grid-stack">
        <div class="uk-width-1-2@m">
            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">{name}</label>
                <div class="uk-form-controls">
                    <input bind:value={name} class="uk-input" id="form-stacked-text" type="text" name="name" placeholder="Name..." required>
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Description</label>
                <div class="uk-form-controls">
                    <input bind:value={description} class="uk-input" id="form-stacked-text" type="text" name="description" placeholder="Description..." required />
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label" for="form-horizontal-text">Select Image</label>
                <div class="uk-form-controls">
                    <input accept="image/png, image/jpeg" bind:files type="file" class="uk-input" name="imagefile" required>
                </div>
            </div>
            <div class="uk-margin">
                <div class="uk-form-label">Category </div>
                <div class="uk-form-controls">
                    <label><input bind:group={selectedMethod} value={0} class="uk-radio" type="radio" name="categories"> {categories[0]} </label><br>
                    <label><input bind:group={selectedMethod} value={1} class="uk-radio" type="radio" name="categories"> {categories[1]} </label><br>
                    <label><input bind:group={selectedMethod} value={2} class="uk-radio" type="radio" name="categories"> {categories[2]} </label><br>
                    <label><input bind:group={selectedMethod} value={3} class="uk-radio" type="radio" name="categories"> {categories[3]} </label>
                </div>
            </div>
            <div class="uk-margin">
                <button class="submit uk-button uk-button-primary uk-button-large uk-width-1-1">UPDATE</button>
            </div>
            {#if errorMessage}
                <div class="uk-text-left uk-text-small">
                    {errorMessage}
                </div>
            {/if}
        </div>
    </div>
    <Coordinates bind:lat={lat} bind:lng={lng} />
</form>