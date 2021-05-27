<script>
    import island_main from "/src/assets/island_main.jpg";
    import PoiList from "./PoiList.svelte";
    import {place} from "../stores";

    let poi_value;
    import StarRating from 'svelte-star-rating';

    const unsubscribe = place.subscribe(value => {
        poi_value = value;
    });

    const url = 'https://elastic-fermi-658e70.netlify.app';
    const title = 'Svelte Share Buttons Component';
    const desc = 'Svelte based social media share buttons component with no tracking.';

</script>
<div class="uk-child-width-1-1@m uk-grid-small uk-grid-match" uk-grid>
    <div>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="{poi_value.imagefile}" alt="">
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">{poi_value.name}</h3>
                <p>{poi_value.description}</p>
                <p>Created by: {poi_value.person.firstName},{poi_value.person.lastName}</p>
                <p>Coordinates: {poi_value.location.lat}, {poi_value.location.lng}</p>
                <p><StarRating rating={poi_value.rate} /></p>
            </div>
        </div>
    </div>
</div>