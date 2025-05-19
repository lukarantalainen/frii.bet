<script lang="ts">
    import { browser } from '$app/environment';
    import type { PageProps } from './$types';
    import Cookies from "js-cookie";

    let email = $state("");
    let password = $state("");

    let isLogin = $state(false);

    let { data }: PageProps = $props();

    if(browser) {
        if(data.token) {
            var t = new Date();
             t.setSeconds(t.getSeconds() + 3600);
            alert("Succesfully signed in");
            Cookies.set("token", data.token, { expires: t });
        }
    }
    

    $effect(() => {
        console.log(data);
    });
    
    function action() {
        var t = new Date();
        t.setSeconds(t.getSeconds() + 5);

        Cookies.set("email",email, { expires:t });
        Cookies.set("password",password, { expires:t });
        Cookies.set("login",`${isLogin}`, { expires:t });

        window.location.reload()
    }
    
    
</script>

<div id=wrapper>
    <div id=signin>
        <label for="email">Email:</label>
        <input bind:value={email} type="text" id="email" name="email"><br><br>
        <label for="password">Password:</label>
        <input bind:value={password} type="password" id="lname" name="lname"><br><br>
        {#if isLogin}
            <button on:click={_=>action()} type="submit">Sign in</button>

        {:else}
            <button on:click={_=>action()} type="submit">Sign up</button>

        {/if}
        <a on:click={()=>isLogin=!isLogin}>Toggle</a>
    </div>
</div>


<style>
    #wrapper {
        display: flex;
        justify-content: center;
        margin-top: 100px;
        margin-left: 100px;
        padding: 2rem;
    }

    #signin {
        display: flex; 
        flex-direction: column;
        width: 500px;
    }

    input {
        border-radius: 1rem;
        height: 2rem;
        width: 15rem;
    }

</style>