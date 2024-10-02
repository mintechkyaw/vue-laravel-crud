<template>
    <nav>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView/>
</template>

<script setup>
import { RouterView,RouterLink } from 'vue-router';
</script>