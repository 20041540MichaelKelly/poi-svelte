<script>
  import {setContext} from "svelte";
  import {PoiService} from "./services/poi-service";
  import Main from "./pages/Main.svelte"
  import PoiAdd from "./pages/PoiAdd.svelte";
  import Poi from "./pages/Poi.svelte";
  import Users from "./pages/Users.svelte";
  import Login from "./pages/Login.svelte";
  import Navigator from "./components/Navigator.svelte";
  import Router from "svelte-spa-router";

  setContext("PoiService", new PoiService("http://localhost:4000"));

  let routes = {
    "/" : Main,
    "/login": Login,
    "/poi": Poi,
    "/users": Users,
    "/poiadd": PoiAdd,
    "/logout" : Main
  }
</script>

<div class="uk-container">
  <Navigator/>
  <Router {routes}/>
</div>