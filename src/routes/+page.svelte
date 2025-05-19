<title>
    bet.frii.site | Casino, Roulette, Crash, Dice
</title>

<div id=container>
<div id=frame>

<div id=header>
    <h1>
        Games
    </h1>
</div>

<div id=games>
    <a href="/Crash">
    <div class=game1> 
       Crash
    </div>
    </a>
</div>

</div>
</div>
<style>

    #container {
        padding-top: 80px;
        margin-left: 60px;
    }

    #frame {
        margin: 0 8vw 30px;
    }

    h1 {
    color: #ffffff;
    text-decoration: none;
    }

    #games {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(4, 1fr);
        margin-top: 1rem;
    }

    #games div {
    background-color: rgb(133, 133, 133);
    height: 200px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    #games div:hover {
        background-color: #adadad;
        transition: background-color;
        transform: scale(1.05);
    }

    #games a {
        color: white;
        text-decoration: none;
        font-size: 30px;
    }

    @media screen and (max-width: 990px) {
    #games {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    }
    }

</style>