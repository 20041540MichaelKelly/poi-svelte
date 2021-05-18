<script lang="ts">
    import { push } from "svelte-spa-router";
    import { onMount, getContext } from "svelte";
    const poiService = getContext("PoiService");

    let poiList = [];
    let name = "";
    let description = "";
    let location = "";
    let imagefile = "";
    let categories = ["North", "East", "South", "West"];
    let selectedMethod = 0;
    let errorMessage = "";

    onMount(async () => {
        poiList = await poiService.getPois()
    });

    async function poiAdd() {
        const success = await poiService.makePoi(name, description, location, imagefile, categories[selectedMethod]);
        if (success) {
            push("/poi");

        } else {
            errorMessage = "POI not completed - some error occurred";
        }
    }
</script>
<form on:submit|preventDefault={poiAdd} class="uk-form-stacked uk-text-left">
    <div class="uk-grid uk-grid-stack">
        <div class="uk-width-1-2@m">
            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Enter Name</label>
                <div class="uk-form-controls">
                    <input bind:value={name} class="uk-input" id="form-stacked-text" type="text" name="name" placeholder="Name...">
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Description</label>
                <div class="uk-form-controls">
                    <input bind:value={description} class="uk-input" id="form-stacked-text" type="text" name="description" placeholder="Description..." />
                </div>
            </div>
            <div class="uk-margin">
                <div class="uk-form-label" for="form-stacked-text">Location</div>
                <div class="uk-form-controls">
                    <input bind:value={location} class="uk-input" id="form-stacked-text" type="text" name="location" placeholder="Location..." />
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label" for="form-horizontal-text">Select Image</label>
                <div class="uk-form-controls">
                    <input bind:value={imagefile} type="file" class="uk-input" name="imagefile" accept="image/png, image/jpeg">
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
                <button class="submit uk-button uk-button-primary uk-button-large uk-width-1-1">Donate</button>
            </div>
            {#if errorMessage}
                <div class="uk-text-left uk-text-small">
                    {errorMessage}
                </div>
            {/if}
        </div>
    </div>
</form>