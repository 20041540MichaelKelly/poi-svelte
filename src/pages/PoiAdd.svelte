<script>
    import island_poiadd from "/src/assets/island_poiadd.jpg";
    import {navBar, mainBar, subTitle, title} from "../stores"
    import {onMount} from "svelte";
    import PoiAddForm from "../components/PoiAddForm.svelte";
    import {LeafletMap} from "../services/leaflet-map";

    let lat = 52.160858;
    let lng = -7.152420;

    let map;
    onMount(async () => {
        const mapConfig = {
            location: {lat: lat, lng: lng},
            zoom: 8,
            minZoom: 7,
        };
        map = new LeafletMap("poi-map", mapConfig, 'Terrain');
        map.showZoomControl();
       // map.addMarker({lat: lat, lng: lng});
    });

    title.set("POI Inc.");
    subTitle.set("Add a POI!");
    navBar.set({
        bar: mainBar
    });

    function justAddedPoi(name, description) {
        const poiStr = `${name} ${description}`;
        map.addMarker({lat: lat, lng: lng}, poiStr);
        map.moveTo(12, {lat: lat, lng: lng});
    }


</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <div id="poi-map" class="ui embed" style="height:600px"></div>
        </div>
    </div>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <PoiAddForm {justAddedPoi} bind:lat={lat} bind:lng={lng} />
        </div>
    </div>
</div>