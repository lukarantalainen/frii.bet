<title>
    bet.frii.site | Casino, Roulette, Crash, Dice
</title>

<div id=container>
<div id=frame>

<div id=games-title>
    <h1>
        Games
    </h1>
</div>

<div id=games>
    <a href="/Crash">
    <div class=game1> 
       <h2>Crash</h2>
    </div>
    </a>

    <a href="/Dice">
    <div class=game2>
        <h2>Dice</h2>
    </div>
    </a>
</div>

</div>

</div>
<style>
#frame {
    margin: 0 8vw 30px;
}

h1 {
color: #ffffff;
text-decoration: none;
font-size: 24px;
}

h2 {
    font-size: 22px;
    font-weight: 200;
}

#games {
    display: grid;
    gap: 3vw;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 1rem;
}

#games div {
background-color: rgb(133, 133, 133);
height: 200px;
border-radius: 8px;
display: flex;
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

#games p {
    margin-top: 0;
    margin-right: 50px;
}

.game1 {
    background-image: url("dice-background.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left 70% center;
}

.game2 {
    background-image: url("dice-background.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left 70% center;
}

@media screen and (max-width: 600px) {
#games {
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: space-between;
}
}

</style>