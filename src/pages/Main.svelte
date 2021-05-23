<script>
    import {title, subTitle, navBar, welcomeBar} from "../stores"
    import island_main from "/src/assets/island_main.jpg";
    title.set("POI Inc");
    subTitle.set("Sign up or Log in");

    navBar.set({
        bar: welcomeBar
    });
</script>

<div class="uk-container uk-margin">
    <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center">
        <div class="uk-position-large uk-position uk-overlay uk-overlay-default">
            <h1 class="uk-heading-small">A GUIDE TO THE ISLANDS OF IRELAND Front End</h1>
            <p>An island itself, Ireland is surrounded by smaller islands and islets. Some of these, like the Aran Islands and Skellig Island, are quite well known internationally. And although others, such as Inishbiggle and Gola Island, may be a little less familiar, that doesn't make them any less interesting.
                Use this page to help you find the islands and islets you would most like to visit.</p>
            <p><img width="500" src="{island_main}" alt="island" /></p>
        </div>
    </div>
</div>