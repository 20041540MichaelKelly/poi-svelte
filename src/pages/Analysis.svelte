<script>
    import island from "/src/assets/island_main.jpg";
    import {navBar, mainBar, subTitle, title} from "../stores"
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";

    const poiService = getContext("PoiService");
    title.set("POI Inc.");
    subTitle.set("Analysis");
    navBar.set({
        bar: mainBar
    });

    let num = 0;

    let userData = {

        labels: [],
        datasets: [
            {
                values: []
            }
        ]
    };

    let data = {
        labels: ["North", "East", "West", "South"],
        datasets: [
            {
                values: [0, 0, 0, 0]
            }
        ]
    };

/*    async function userWork() {
        let poiList = await poiService.getPois();
        let userList = await poiService.getUsers();
        userData.labels = [];
        userData.datasets[0].values = [];
        userList.forEach((user, i) => {
            //userData.labels.push(`${user.firstName}, ${user.lastName}`)
            poiList.forEach(poi => {
                let and = await poiService.getPoi(user._id));
            });
    }); */

    onMount(async () => {
        let poiList = await poiService.getPois();
        let userList = await poiService.getUsers();
        userData.labels = [];
        userData.datasets[0].values = [];

        userList.forEach(user => {
           userData.labels.push(`${user.firstName}, ${user.lastName}`)

        });
        userData.datasets[0].values = [];
        userList.forEach((user,j ) => {
            //userData.labels.push(`${user.firstName}, ${user.lastName}`)
            poiList.forEach((poi,i) => {
                if (user._id[j] == poi.person._id[i]) {
                    if (user.email == user.email){
                        num += 1;
                        console.log(userData.datasets[0].values[i] = num);
                    }
                   // userData.labels.push(user.firstName);
                }
        });
        });


        poiList.forEach(poi => {
            if (poi.categories == "North") {
                data.datasets[0].values[0] += 1
            } else if (poi.categories == "South") {
                data.datasets[0].values[1] += 1
            }  else if (poi.categories == "West") {
                data.datasets[0].values[2] += 1
            }  else if (poi.categories == "East") {
                data.datasets[0].values[3] += 1
            }
        });
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-2-3@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <Chart data={userData} type="bar" />
        </div>
    </div>
    <div class="uk-width-1-3@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <Chart data={data} type="pie" />
        </div>
    </div>
</div>