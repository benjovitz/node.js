<script>
    import {Router, Link, Route} from "svelte-navigator"
    import Home from "./pages/Home/Home.svelte";
    import CoffeeFacts from "./pages/CoffeeFacts/CoffeeFacts.svelte";
    import CoffeeOverview from "./pages/CoffeeOverview/CoffeeOverview.svelte";

</script>

<Router>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/coffee-overview">Overview</Link>
        <Link to="/coffee-facts">Facts</Link>
    </nav>

    <div>
        <Route path="/" component={Home}></Route>
        <Route path="/coffee-overview" component={CoffeeOverview}><CoffeeOverview /></Route>
        <Route path="/coffee-facts" component={CoffeeFacts}><CoffeeFacts /></Route>
    </div>
</Router>

