<template>
    <h1>맹민재의 실습 페이지</h1> <br>
    <hr>
    <br><br><br><br>
    <TeamCard v-if="card[0]" name="도회" food="피자" num=0 srcUrl="/src/images/4.jpg" teamNum=2 @disappear="disappear"></TeamCard>
    <team-card v-if="card[1]" name="민재" food="치킨" num=1 srcUrl="/src/images/dauner.png" teamNum=2 @disappear="disappear"></team-card>
    <team-card v-if="card[2]" name="애림" food="김치찌개" num=2 srcUrl="/src/images/duke_luau.png" teamNum=2 @disappear="disappear"></team-card>
    <TeamCard v-if="card[3]" name="동우" food="우동" num=3 srcUrl="/src/images/sundie.png" teamNum=2 @disappear="disappear"></TeamCard>
</template>

<script setup>
import TeamCard from '@/components/TeamCard.vue';
import { reactive } from 'vue';
let card = reactive([true, true, true,true])
function disappear(data) {
    card[data] = false;
}
</script>
<style>
    /* #teamcards {
        text-align: center;
        width:36rem
    } */
</style>