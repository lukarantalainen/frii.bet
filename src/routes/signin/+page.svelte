<div id=wrapper>
    <div id=signin>
        <label for="email">Email:</label>
        <input type="text" id="email" name="email"><br><br>
        <label for="password">Password:</label>
        <input type="password" id="lname" name="lname"><br><br>
        <input type="submit" value="Submit">
    </div>
</div>


<style>
    #wrapper {
        display: flex;
        justify-content: center;
        margin-top: 100px;
        margin-left: 100px;
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