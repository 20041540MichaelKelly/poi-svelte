<script>
    import {onMount, getContext} from 'svelte'
    const poiService = getContext("PoiService");

    let poiList;
    onMount(async () => {
        poiList = await poiService.getPois()
    })
</script>
<div class="uk-margin uk-width-5xlarge uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
    <table class="uk-table uk-table-striped">
        <caption>
            Places of Interest
        </caption>
        <thead>
        <th>Name</th>
        <th>Description</th>
        <th>Location</th>
        <th>Weather</th>
        <th>Image</th>
        <th>Category</th>
        <th>Created By</th>
        </thead>
        <tbody class="uk-text-left">
        {#if poiList}
            {#each poiList as poi}
                <tr>
                    <td>{poi.name}</td>
                    <td>{poi.description}</td>
                    <td>{poi.location}</td>
                    <td>{poi.weather}</td>
                    <td><img src="{poi.imagefile}"></td>
                    <td>{poi.categories}</td>
                    <td>{poi.firstName}</td>
                </tr>
            {/each}
        {/if}
        </tbody>
    </table>
</div>