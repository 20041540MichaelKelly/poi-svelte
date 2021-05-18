<script lang="ts">
    import {getContext} from "svelte";
    import {user} from "../stores";

    let firstName = $user.firstName;
    let lastName = $user.lastName;
    let email = $user.email;
    let password = $user.password
    let message = "";

    const poiService = getContext("PoiService");

    async function save() {
        let success = await poiService.updateSettings(firstName, lastName, email, password, $user._id)
        if (success) {
            message = "Settings updated";
        } else {
            message = "Error Trying to save settings";
        }
    }
</script>

<form on:submit|preventDefault={save}>
    <div class="uk-margin uk-text-left">
        <div class="uk-margin">
            <label class="uk-form-label">First name</label>
            <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon" uk-icon="icon: user"></span> <input bind:value={firstName}
                                                                               class="uk-input uk-form-large" type="text"
                                                                               name="firstName">
            </div>
        </div>
        <div class="uk-margin">
            <label class="uk-form-label">Last name</label>
            <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon" uk-icon="icon: user"></span> <input bind:value={lastName}
                                                                               class="uk-input uk-form-large" type="text"
                                                                               name="lastName">
            </div>
        </div>
        <label class="uk-form-label">Email</label>
        <div class="uk-inline uk-width-1-1">
            <span class="uk-form-icon" uk-icon="icon: mail"></span> <input bind:value={email} class="uk-input uk-form-large"
                                                                           type="text" name="email">
        </div>
        <div class="uk-margin">
            <label class="uk-form-label">Password</label>
            <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon" uk-icon="icon: lock"></span> <input bind:value={password}
                                                                               class="uk-input uk-form-large" type="password"
                                                                               name="password">
            </div>
        </div>
    </div>
    <div class="uk-margin">
        <button class="uk-button uk-button-primary uk-button-large uk-width-1-1">Save Settings</button>
    </div>
    {#if message}
        <div class="uk-text-left uk-text-small">
            {message}
        </div>
    {/if}
</form>