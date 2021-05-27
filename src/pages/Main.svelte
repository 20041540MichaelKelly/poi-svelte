<script>
    import {title, subTitle, navBar, welcomeBar} from "../stores"
    import island_main from "/src/assets/island_main.jpg";
    title.set("POI Inc");
    subTitle.set("Sign up or Log in");

    import HackerNews from "../../node_modules/svelte-share-buttons-component/src/HackerNews.svelte";
    import Twitter from "../../node_modules/svelte-share-buttons-component/src/Twitter.svelte";
    import Tumblr from "../../node_modules/svelte-share-buttons-component/src/Tumblr.svelte";

    const url = 'https://elastic-fermi-658e70.netlify.app';
    const title_share = 'Social Media Sharing POI Assignment';
    const desc = 'Svelte based social media share buttons component with no tracking.';


    navBar.set({
        bar: welcomeBar
    });
</script>

<div class="uk-container uk-margin">
    <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center">
        <div class="uk-position-large uk-position uk-overlay uk-overlay-default">
            <h1 class="uk-heading-small">A GUIDE TO THE ISLANDS OF IRELAND</h1>
            <h3>FRONT END DEVELOPMENT</h3>
            <p>An island itself, Ireland is surrounded by smaller islands and islets. Some of these, like the Aran Islands and Skellig Island, are quite well known internationally. And although others, such as Inishbiggle and Gola Island, may be a little less familiar, that doesn't make them any less interesting.
                Use this page to help you find the islands and islets you would most like to visit.</p>
            <p><img width="500" src="{island_main}" alt="island" /></p>
            <p> <HackerNews class="share-button" {title_share} {url} />
                <Twitter class="share-button" text="{title_share}" {url} hashtags="github,svelte" via="username" related="other,users" />
                <Tumblr class="share-button" {title_share} {url} caption={desc} /></p>
        </div>
    </div>
</div>