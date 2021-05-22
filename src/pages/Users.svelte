<script>
    import UserList from "../components/UserList.svelte";
    import usersImg from "/src/assets/users.jpg";
    import {navBar, mainBar, subTitle, title} from "../stores"

    title.set("Poi Services Inc.");
    subTitle.set("Latest Users");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <UserList/>
        </div>
    </div>
    <div class="uk-width-1-2@m ">
        <img width="300" src="{usersImg}" alt="users">
    </div>
</div>