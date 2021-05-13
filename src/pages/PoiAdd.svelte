<script>
    import island_poiadd from "/src/assets/island_poiadd.jpg";
    import {navBar, mainBar, subTitle, title} from "../stores"
    import PoiAddForm from "../components/PoiAddForm.svelte";

    title.set("POI Inc.");
    subTitle.set("Add a POI!");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <img width="300" src="{island_poiadd}" alt="homer">
        </div>
    </div>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <PoiAddForm/>
        </div>
    </div>
</div>