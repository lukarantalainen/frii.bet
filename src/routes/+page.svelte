<title>
    bet.frii.site | Casino, Roulette, Crash, Dice
</title>

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

    <a href="/p2">
    <div class=game2>
        Dice
    </div>
    </a>

    <a href="/p3">
    <div class=game3>
        Link 3
    </div> 
    </a>

    <a href="/p4">
    <div class=game4>
        Link 4
    </div>
    </a>
</div>

</div>

<div id=frame>

    <div id=header>
        <h1>
            More games
        </h1>
    </div>
    
    <div id=games>
        <a href="/p1">
        <div class=game1> 
           Link1
        </div>
        </a>
    
        <a href="/p2">
        <div class=game2>
            Link2
        </div>
        </a>
    
        <a href="/p3">
        <div class=game3>
            Link3
        </div> 
        </a>
    
        <a href="/p4">
        <div class=game4>
            Link4
        </div>
        </a>
    </div>
    
    </div>

<style>

    #frame {
        margin: 10px;
        margin: 10px 8vw 30px;
    }

    #header {
        position: relative;
        top: 0;
        margin-top: -15px;
        margin-bottom: -1em;
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
    flex: wrap;
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