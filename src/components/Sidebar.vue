<script setup>

const user = {
  id: 1,
  userNmae : 'Syed Numan'
}
</script>

<template>
    <section class="mt-[40px] text-white p-5">
        <ul class="flex flex-col space-y-5">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link :to="{name:'user',params:{username: user.userNmae}}">User Profile</router-link>
          </li>
 
        </ul>
      </section>
</template>

<style>

</style>