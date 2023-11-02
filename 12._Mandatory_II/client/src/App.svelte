 <script>
  import {Router, Link, Route} from "svelte-navigator"
  import Login from "./pages/Login/Login.svelte";
  import PrivateRoute from "./pages/PrivateRoute/PrivateRoute.svelte";
  import { user } from "./stores/userStore";
  import MyInfo from "./pages/MyInfo/MyInfo.svelte";

  async function handleLogout() {
		$user = null;
      await fetch("http://localhost:8080/auth/logout",{
            credentials: "include"
        })
	}

  async function handleCookieTest(){
    await fetch("http://localhost:8080/auth/cookieTest",{
            credentials: "include"
        })
  }
</script>


<Router>
	<header>

		<nav>
			<Link to="profile">Profile</Link>
      <Link to="myInfo">My info</Link>
		</nav>
	</header>

  <main>
		<Route path="login">
			<Login />
		</Route>

  <PrivateRoute path="profile" let:location>
    <h3>Welcome {$user.username}</h3>
    <button on:click={handleCookieTest}>Cookie test</button>
    <button on:click={handleLogout}>Logout</button>
  </PrivateRoute>
  <PrivateRoute path="myInfo" let:location>
   <MyInfo /> 
  </PrivateRoute>
  </main>
</Router>


 

 <!-- <script>
	import { Router, Route, Link } from "svelte-navigator";
	import Login from "./pages/Login/Login.svelte";
	import PrivateRoute from "./pages/PrivateRoute/PrivateRoute.svelte";
	import { user } from "./stores/userStore";

	function handleLogout() {
		$user = null;
	}
</script>

<Router>
	<header>
		<h1>History</h1>

		<nav>
			<Link to="/">Home</Link>
			<Link to="about">About</Link>
			<Link to="profile">Profile</Link>
		</nav>
	</header>

	<main>
		<Route path="login">
			<Login />
		</Route>

		<Route path="/">
			<h3>Home</h3>
			<p>Home sweet home...</p>
		</Route>

		<Route path="about">
			<h3>About</h3>
			<p>That's what it's all about!</p>
		</Route>

		<PrivateRoute path="profile" let:location>
			<h3>Welcome {$user.username}</h3>
			<button on:click={handleLogout}>Logout</button>
		</PrivateRoute>
	</main>
</Router>

<style>
	:global(body) {
		font-family: sans-serif;
	}
</style>
 -->