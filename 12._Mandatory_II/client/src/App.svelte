 <script>
  import {Router, Link, Route} from "svelte-navigator"
  import Login from "./pages/Login/Login.svelte";
  import PrivateRoute from "./pages/PrivateRoute/PrivateRoute.svelte";
  import { user } from "./stores/userStore";
  import MyInfo from "./pages/MyInfo/MyInfo.svelte";
  import toast, {Toaster} from "svelte-french-toast";
  import Contact from "./pages/Contact/Contact.svelte";
  import SignUp from "./pages/SignUp/SignUp.svelte";
  import Forgot from "./pages/Forgot/Forgot.svelte";

  async function handleLogout() {
		$user = null;
      await fetch("http://localhost:8080/auth/logout",{
            credentials: "include"
        })
	}

  async function handleCookieTest(){
    const response = await fetch("http://localhost:8080/auth/cookieTest",{
            credentials: "include"
        })
		if(!response.ok){
			toast.error("error")
		}else {
			const result = await response.json()
			toast.success("success")
		}
		
  }
</script>


<Router>
	<header>

		<nav>
      {#if $user}
      <Link to="profile">Profile</Link>
      <Link to="myInfo">My info</Link>
      {:else}
      <Link to="login">Login</Link>
      {/if}
			<Link to="contact">Contact</Link>
		</nav>
	</header>

  <main>
    <Route path="/" >
    <h1>HOME</h1>
    </Route>
		<Route path="login">
			<Login />
		</Route>
    
    <Route path="signup">
      <SignUp />
    </Route>

		<Route path="contact">
			<Contact />
		</Route>
    <Route path="forgot">
      <Forgot />
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
<Toaster />