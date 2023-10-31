<script>
    import {Router, Link, Route} from "svelte-navigator"
    import Home from "./pages/Home/Home.svelte";
    import CoffeeFacts from "./pages/CoffeeFacts/CoffeeFacts.svelte";
    import CoffeeOverview from "./pages/CoffeeOverview/CoffeeOverview.svelte";
    import WhoDataCoffeeLover from "./pages/WhoDataCoffeeLover/WhoDataCoffeeLover.svelte";
    import RegisterCoffeeLover from "./pages/RegisterCoffeeLover/RegisterCoffeeLover.svelte";

</script>

<Router>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/coffee-overview">Overview</Link>
        <Link to="/coffee-facts">Facts</Link>
        <Link to="/register">Register</Link>
        <Link to="/who-is-u">Who</Link>
    </nav>

    <div>
        <Route path="/" component={Home}></Route>
        <Route path="/coffee-overview" component={CoffeeOverview}><CoffeeOverview /></Route>
        <Route path="/coffee-facts" component={CoffeeFacts}><CoffeeFacts /></Route>
        <Route path="/register" component={RegisterCoffeeLover}><RegisterCoffeeLover /></Route>
        <Route path="/who-is-u" component={WhoDataCoffeeLover}><WhoDataCoffeeLover /></Route>
    </div>
</Router>

