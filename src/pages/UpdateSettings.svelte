<script>
    import {title, subTitle, navBar, mainBar} from "../stores"
    import island_login from "/src/assets/island_login.jpg";
    import UpdateSettingsForm from "../components/UpdateSettingsForm.svelte";

    title.set("POI Inc");
    subTitle.set("Please Sign Up");

    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-2-3@m">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <h3 class="uk-card-title uk-text-center">Welcome!</h3>
            <UpdateSettingsForm />
        </div>
    </div>
    <div class="uk-width-1-3@m ">
        <img width="300" src="{island_login}" alt="island">
    </div>
</div>