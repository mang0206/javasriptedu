<template>
    <h1>맹민재의 실습 페이지</h1> <br>
    <hr>
    <br><br><br><br>
    <TeamCard name="도회" food="피자" srcUrl="/src/images/4.jpg" teamNum="2"></TeamCard>
    <team-card name="민재" food="치킨" srcUrl="/src/images/dauner.png" teamNum="2"></team-card>
    <team-card name="애림" food="김치찌개" srcUrl="/src/images/duke_luau.png" teamNum="2"></team-card>
    <TeamCard name="동우" food="우동" srcUrl="/src/images/sundie.png" teamNum="2"></TeamCard>
</template>

<script>
import TeamCard from '@/components/TeamCard.vue';
export default {
    name: 'WorkView',
    components: {TeamCard}
}

</script>
<style>
    /* #teamcards {
        text-align: center;
        width:36rem
    } */
</style>