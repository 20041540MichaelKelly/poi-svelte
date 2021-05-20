<script>
    export let lat = 0.0;
    export let lng = 0.0;
</script>

<form class="uk-grid-small" uk-grid>
    <div class="uk-width-1-2@s">
        <label class="uk-form-label">Latitude</label>
        <input class="uk-input" type="number" bind:value={lat}>
    </div>
    <div class="uk-width-1-2@s">
        <label class="uk-form-label">Longitude</label>
        <input class="uk-input" type="number" bind:value={lng}>
    </div>
</form>