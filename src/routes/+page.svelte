
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
        padding-left: 8px;
    }


    h1 {
    color: #FFFFFF;
    text-decoration: none;
    }

    #games {
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: nowrap;
        padding-top: 10px;
        gap: 20px;
    }

    #games div {
        background-image: linear-gradient(to top left, rgb(175, 255, 254), #ff4081, #1fbfff);
        width: 20vw;
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
    }

    #games div {
        width:  35vw;
        height: 150px;
    }

    }



</style>