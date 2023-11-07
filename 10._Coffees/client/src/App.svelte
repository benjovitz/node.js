<script>
    import {Router, Link, Route} from "svelte-navigator"
    import Home from "./pages/Home/Home.svelte";
    import CoffeeFacts from "./pages/CoffeeFacts/CoffeeFacts.svelte";
    import CoffeeOverview from "./pages/CoffeeOverview/CoffeeOverview.svelte";
    import WhoDataCoffeeLover from "./pages/WhoDataCoffeeLover/WhoDataCoffeeLover.svelte";
    import RegisterCoffeeLover from "./pages/RegisterCoffeeLover/RegisterCoffeeLover.svelte";

    // SSR
    import RegisterCoffeeLoverSSR from "./pages/RegisterCoffeeLoverSSR/RegisterCoffeeLoverSSR.svelte";
    import WhoDataCoffeeLoverSSR from "./pages/WhoDataCoffeeLoverSSR/WhoDataCoffeeLoverSSR.svelte"

</script>

<Router>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/coffee-overview">Overview</Link>
        <Link to="/coffee-facts">Facts</Link>
        <Link to="/register">Register</Link>
        <Link to="/who-is-u">Who</Link>
        <!-- SSR -->
        <Link to="/registerssr">Register SSR</Link>
        <Link to="/who-is-ussr">Who SSR</Link>
    </nav>

    <div>
        <Route path="/" component={Home}></Route>
        <Route path="/coffee-overview" component={CoffeeOverview}><CoffeeOverview /></Route>
        <Route path="/coffee-facts" component={CoffeeFacts}><CoffeeFacts /></Route>
        <Route path="/register" component={RegisterCoffeeLover}><RegisterCoffeeLover /></Route>
        <Route path="/who-is-u" component={WhoDataCoffeeLover}><WhoDataCoffeeLover /></Route>
        <!-- SSR --> 
        <Route path="/registerssr" component={RegisterCoffeeLoverSSR}><RegisterCoffeeLoverSSR /></Route>
        <Route path="/who-is-ussr" component={WhoDataCoffeeLoverSSR}><WhoDataCoffeeLoverSSR /></Route>
    </div>
</Router>

