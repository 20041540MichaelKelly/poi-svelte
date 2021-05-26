<script>
  import {setContext} from "svelte";
  import {PoiService} from "./services/poi-service";
  import Main from "./pages/Main.svelte"
  import PoiAdd from "./pages/PoiAdd.svelte";
  import Analysis from "./pages/Analysis.svelte";
  import Poi from "./pages/Poi.svelte";
  import Users from "./pages/Users.svelte";
  import Map from "./pages/map.svelte";
  import Login from "./pages/Login.svelte";
  import Edit from "./pages/Edit.svelte";
  import PoiInfo from "./components/PoiInfo.svelte";
  import UpdateSettings from "./pages/UpdateSettings.svelte";
  import Navigator from "./components/Navigator.svelte";
  import Router from "svelte-spa-router";
  import Signup from "./pages/Signup.svelte";

  setContext("PoiService", new PoiService("https://poi-pro-michael.herokuapp.com"));
 // setContext("PoiService", new PoiService("http://localhost:4000"));

  let routes = {
    "/" : Main,
    "/login": Login,
    "/signup": Signup,
    "/poi": Poi,
    "/analysis": Analysis,
    "/users": Users,
    "/poiadd": PoiAdd,
    "/map": Map,
    "/updatesettings": UpdateSettings,
    "/logout" : Main,
    "/edit" : Edit,
    "/poiinfo" : PoiInfo
  }
</script>

<div class="uk-container">
  <Navigator/>
  <Router {routes}/>
</div>