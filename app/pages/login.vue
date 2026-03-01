<template>
  <div class="max-w-md mx-auto py-20">
    <div class="retro-card space-y-8">
      <h1 class="text-4xl font-black text-center uppercase font-retro">{{ $t('login.title') }}</h1>
      
      <div class="space-y-4 font-retro">
        <label class="block">
          <span class="text-sm uppercase font-bold">{{ $t('login.fields.username') }}</span>
          <input type="text" class="w-full bg-white border-2 border-retro-border p-3 focus:bg-retro-bg outline-none transition-colors" :placeholder="$t('login.placeholders.username')">
        </label>
        
        <label class="block">
          <span class="text-sm uppercase font-bold">{{ $t('login.fields.securityKey') }}</span>
          <input type="password" class="w-full bg-white border-2 border-retro-border p-3 focus:bg-retro-bg outline-none transition-colors" :placeholder="$t('login.placeholders.securityKey')">
        </label>
      </div>

      <button class="retro-button w-full text-xl py-4" @click="handleLogin">
        {{ $t('login.authenticate') }}
      </button>

      <div class="flex justify-between font-retro text-xs uppercase underline">
        <NuxtLink to="/forgot-password">{{ $t('login.links.forgotPassword') }}</NuxtLink>
        <NuxtLink to="/register">{{ $t('login.links.newUser') }}</NuxtLink>
      </div>

      <div class="pt-8 border-t-2 border-retro-border border-dashed space-y-4">
        <p class="text-center font-retro text-xs uppercase opacity-60">{{ $t('login.thirdParty') }}</p>
        <div class="grid grid-cols-2 gap-4">
          <button class="border-2 border-retro-border p-2 font-retro text-xs hover:bg-retro-bg uppercase">{{ $t('login.providers.github') }}</button>
          <button class="border-2 border-retro-border p-2 font-retro text-xs hover:bg-retro-bg uppercase">{{ $t('login.providers.google') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const handleLogin = () => {
  // Mock login redirect
  navigateTo('/account')
}
</script>
