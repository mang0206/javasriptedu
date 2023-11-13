import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/common';

export const useWeatherStore = defineStore('weather', () => {
    const state = ref('날씨')

    function setWeather() {
        api("http://192.168.3.123:8088/weather", "get").then(weather => {state.value=weather.time})
    }
    const getState = computed(() => `오늘의 날씨는 ${state.value}입니다.`);
    return { state, setWeather, getState}
})