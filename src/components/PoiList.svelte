<script
>
    import {onMount, getContext} from 'svelte'

    const poiService = getContext("PoiService");
    import StarRating from 'svelte-star-rating';
    import {push} from "svelte-spa-router";
    import EditForm from "./EditForm.svelte";
    import PoiList from "./PoiList.svelte";
    import PoiInfo from "./PoiInfo.svelte";
    import { place } from "../stores";

    let poiList = [];
    let u;



    onMount(async () => {
        poiList = await poiService.getPois();

    });

    async function edit(poi) {

     // place.name = poi.name;
        place.set({id: poi._id,
            description : poi.description,
            name: poi.name,
            location: poi.location,
            rate: poi.rate,
            imagefile: poi.imagefile,
            person: poi.person});

           push("/edit");


    }

    async function deletePoi(poi) {
        console.log(poi);
        const sucess = await poiService.deletePoi(poi._id);
        if (sucess){
            console.log('yo');
        }

        //push("/poiinfo");

    }

    async function poiPage(poi) {
        place.set({_id: poi._id,
        description : poi.description,
        name: poi.name,
        location: poi.location,
        rate: poi.rate,
        imagefile: poi.imagefile,
        person: poi.person});
        push("/poiinfo");
    }


</script>
<div class="uk-margin uk-width-5xlarge uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
    <table class="uk-table uk-table-striped">
        <caption>
            Places of Interest
        </caption>
        <thead>
        <th>Name</th>
        <th>Weather</th>
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
                    <td>{poi.weather}</td>
                    <td>{poi.categories}</td>
                    <td>{poi.person.firstName} {poi.person.lastName}</td>
                    {#if poi.editor}
                    <td>{poi.editor}</td>
                    {:else}
                    <td></td>
                    {/if}
                    <td> <StarRating rating={poi.rate} /></td>
                    <td>
                        <form on:submit|preventDefault={edit(poi)}>
                            <div class="uk-margin">
                                <button class="uk-button uk-button-link"><i class="fas fa-edit"></i></button>
                            </div>
                        </form>
                    </td>
                    <td>
                        <form on:submit|preventDefault={deletePoi(poi)}>
                            <div class="uk-margin">
                                <button class="uk-button uk-button-link"><i class="fas fa-trash-alt"></i></button>
                            </div>
                        </form>
                    </td>
                    <td>
                        <form on:submit|preventDefault={poiPage(poi)}>
                            <div class="uk-margin">
                                <button class="uk-button uk-button-link"><i class="fas fa-chevron-circle-right"></i></button>
                            </div>
                        </form>
                    </td>
                </tr>
            {/each}
        {/if}
        </tbody>
    </table>
</div>