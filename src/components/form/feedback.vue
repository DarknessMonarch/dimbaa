<script>
const props = defineProps({
    title: String,
    msg:String,

})
</script>
<template>
<div class="feed-c">
    <h1>{{ props.title }}</h1>
    <p>{{ props.msg }}</p>
</div>
</template>
<style>
@import "@/style/user.css";
</style>