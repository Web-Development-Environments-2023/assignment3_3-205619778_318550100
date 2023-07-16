<template>
    <div id="about">
        <h1 class="about-title">About</h1>
        <div id="about-text">
            <p>This site was created by Maor Biton & Kalanit Segal.<br/>
            Here are some other projects we have developed during the course:</p>
            <ul>
                <li>Online Chicken Invaders Game:<br>
                    <a href="https://web-development-environments-2023.github.io/assignment2-318550100_205619778/">Chicken Invaders game</a><br>
                </li>
                <li>Personal Websites about someone from the third age:<br>
                    <a href="https://web-development-environments-2023.github.io/205619778/">Maor's website</a><br>
                    <a href="https://web-development-environments-2023.github.io/318550100/">Kalanit's website</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
#about{    
    margin: auto;
    margin-top: 5%;
    width: 50%;
    max-width: 800px;
    padding: 20px;
    color: rgb(255, 255, 255);
    background-color: rgba(0, 0, 0, 0.61);
    font-family: 'KG First Time In Forever', sans-serif;
}
.about-title{
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    color: rgb(189, 161, 111);
    font-weight: 700;
}
</style>