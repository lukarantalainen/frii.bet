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

    <a href="/p4">
    <div class=game3>
        game3
    </div> 
    </a>

    <a href="/p5">
    <div class=game4>
        game4
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
        <a href="/p2">
        <div class=game1> 
           Link1
        </div>
        </a>
    
        <a href="/p3">
        <div class=game2>
            Link2
        </div>
        </a>
    
        <a href="/p4">
        <div class=game3>
            Link3
        </div> 
        </a>
    
        <a href="/p5">
        <div class=game4>
            Link4
        </div>
        </a>
    </div>
    
    </div>

<style>

    #frame {
        outline: 2px dotted blue;
        margin: 10px;
    }

    #header {
        position: relative;
        top: 0;
        margin-top: -15px;
        margin-bottom: -30px;
    }

    h1 {
    color: #ffffff;
    text-decoration: none;
    }

    #games {
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;

        width: 100%;
        padding-top: 10px;
        overflow: clip;
        gap: 20px;
    }

    #games div {
    background-color: rgb(255, 98, 216);
        width: 300px;
        height: 200px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #games a {
        color: white;
        text-decoration: none;
        font-size: 30px;
    }

    @media screen and (max-width: 768px) {
    #games {
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-content: space-between;
    }

    #games div {
        width:  35vw;
        height: 150px;
    }

    }



</style>