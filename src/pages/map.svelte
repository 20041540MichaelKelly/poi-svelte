<script>
    import {mainBar, navBar, subTitle, title} from "../stores"
    import {LeafletMap} from '../services/leaflet-map';
    import {onMount, getContext} from "svelte";
    const poiService = getContext("PoiService");

    let lat = 52.160858;
    let lng = -7.152420;
    let poiList;

    let map;
    onMount(async () => {
        poiList = await poiService.getPois();

        const mapConfig = {
            location: {lat: lat, lng: lng},
            zoom: 8,
            minZoom: 1,
        };
        map = new LeafletMap("poi-map", mapConfig, 'Terrain');
        map.addLayerGroup('Pois');
        map.showZoomControl();
        map.showLayerControl();
       // console.log(pois);
        poiList.forEach(poi=>{
            const poiStr = `${poi.name} ${poi.description}`;
            console.log(poiStr);
            //if (poi.location) {
                map.addMarker({lat: poi.location.lat, lng: poi.location.lng}, poiStr, 'Pois');
           // }
        });
    });

    title.set("Poi Inc.");
    subTitle.set("Map of all Poi");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-1-1">
        <div id="poi-map" class="ui embed" style="height:800px"></div>
    </div>
</div>