<div id=header>
    <h1>
        Games
    </h1>
</div>

<div id=games>
    <a href="/p2">
    <div class=game1> 
       Crash
    </div>
    </a>

    <a href="/p3">
    <div class=game2>
        Dice
    </div>
    </a>

    <a href="/p3">
    <div class=game3>
        game3
    </div> 
    </a>

    <a href="/p3">
    <div class=game4>
        game4
    </div>
    </a>
</div>

<style>

    #header {
        position: relative;
        background-color: #1fbfff;
        top: 0;
        z-index: 300;
        border-radius: 10px;
        margin-top: -10px;
        margin-bottom: -10px;
        padding-left: 8px;
    }


    h1 {
    color: #FFFFFF;
    text-decoration: none;
    }

    #games {
        position: relative;
        background-color: #36c6ff;
        height: 100vh;
        border-radius: 10px;
        justify-content: center;
        display: flex;
        padding-top: 10px;
        gap: 2vw;
    }

    #games div {
        background-image: linear-gradient(to top left, rgb(175, 255, 254), #ff4081, #1fbfff);
        width: 20vw;
        height: 150px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #games a {
        color: white;
        text-decoration: none;
        font-size: 30px;
    }

    @media screen and (max-width: 900px) {
    #games {
    flex-direction: column;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: space-evenly;
    }

    #games div {
        width: 35vw;
    }
    }



</style>