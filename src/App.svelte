<script>
  import {setContext} from "svelte";
  import {PoiService} from "./services/poi-service";
  import Poi from "./pages/Poi.svelte";
  import Users from "./pages/Users.svelte";
  import Navigator from "./components/Navigator.svelte";
  import Router from "svelte-spa-router";

  setContext("PoiService", new PoiService("http://localhost:4000"));

  let routes = {
    "/poi": Poi,
    "/users": Users,
  }
</script>

<div class="uk-container">
  <Navigator/>
  <Router {routes}/>
</div>