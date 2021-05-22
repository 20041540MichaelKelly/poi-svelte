<script>
    import PoiList from "../components/PoiList.svelte";
    import {navBar, mainBar, subTitle, title} from "../stores"

    title.set("POI Services Inc.");
    subTitle.set("All Current POI's");
    navBar.set({
        bar: mainBar
    });
</script>

<PoiList />