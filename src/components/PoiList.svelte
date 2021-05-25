<script
>
    import {onMount, getContext} from 'svelte'

    const poiService = getContext("PoiService");
    import StarRating from 'svelte-star-rating';
    import {push} from "svelte-spa-router";
    import EditForm from "./EditForm.svelte";
    import PoiList from "./PoiList.svelte";
    import PoiInfo from "./PoiInfo.svelte";

    let poiList = [];
    let u;


    onMount(async () => {
        poiList = await poiService.getPois();

    });

    async function edit() {
        push("/edit");

    }

    async function poiPage(poi) {
        console.log(poi);
        const sucess = await poiService.deletePoi(poi._id);
        if (sucess){
            console.log('yo');
        }

        //push("/poiinfo");

    }


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
        <th>Edited By</th>
        <th>Rating</th>
        </thead>
        <tbody class="uk-text-left">
        {#if poiList}
            {#each poiList as poi}
                <tr>
                    <td>{poi.name}</td>
                    <td>{poi.description}</td>
                    <td>{poi.location.lat} {poi.location.lng}</td>
                    <td>{poi.weather}</td>
                    <td><img src="{poi.imagefile}"></td>
                    <td>{poi.categories}</td>
                    <td>{poi.person.firstName} {poi.person.lastName}</td>
                    <td></td>
                    <td><StarRating rating={3.35} /></td>
                    <td>
                        <form on:submit|preventDefault={edit}>
                            <div class="uk-margin">
                                <button class="uk-button uk-button-primary"><i class="fas fa-edit"></i></button>
                            </div>
                        </form>
                    </td>
                    <td>
                        <form on:submit|preventDefault={poiPage(poi)}>
                            <div class="uk-margin">
                                <button class="uk-button uk-button-danger"><i class="fas fa-trash-alt"></i>
                            </div>
                        </form>
                    </td>
                </tr>
            {/each}
        {/if}
        </tbody>
    </table>
</div>