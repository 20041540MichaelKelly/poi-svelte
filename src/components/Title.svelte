<script>
    import {title, subTitle, user} from "../stores.js"
    import sign_post from "/src/assets/sign_post.jpg"

</script>

<div class="uk-width-1-2@m  uk-card uk-card-default uk-padding-small uk-visible@m">
    <div class="uk-grid">
        <div class="uk-width-1-6@m">
            <a href="/"> <img src="{sign_post}" width="60" alt="img"/> </a>
        </div>
        <div class="uk-width-expand@m uk-text-left">
            <div class="title">
                {$title}
            </div>
            <div class="uk-text-muted uk-text-small">
                {$subTitle}
            </div>
        </div>
        <div class="uk-card uk-card-small uk-text-center uk-padding-remove">
            <a target="_blank" href="https:////github.com/20041540MichaelKelly/poi-svelte">
                <div>
                    <i class="fas fa-map-signs fa-3x" style="color:rgb(95, 96, 173)" title="Source repo" pos="bottom" uk-tooltip></i>
                </div>
                <div class="uk-width-expand@m uk-text-left">
                    <div class="uk-text-muted uk-text-center" style="font-size:xx-small">{$user.email} </div>
                </div>
            </a>
        </div>
    </div>
</div>