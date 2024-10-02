<template>
    <nav class="flex justify-center space-x-2 pt-2">
        <RouterLink class="text-xl text-white no-underline rounded-md px-2 py-1 bg-neutral-500" to="/home">Home</RouterLink>
        <RouterLink class="text-xl text-white no-underline rounded-md px-2 py-1 bg-neutral-500" to="/about">About</RouterLink>
    </nav>
    <RouterView/>
</template>

<script setup>

import { RouterView, RouterLink } from 'vue-router';
</script>