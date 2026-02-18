<template>
  <div class="min-h-screen border-8 border-retro-border flex flex-col scanlines">
    <header class="border-b-4 border-retro-border p-6 bg-retro-bg sticky top-0 z-50">
      <nav class="max-w-7xl mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="text-3xl font-retro font-bold hover:text-retro-accent transition-colors">
          TINYBATCH
        </NuxtLink>
        
        <div class="hidden md:flex space-x-8 font-retro items-center">
          <NuxtLink to="/products" class="hover:underline">{{ $t('nav.products') }}</NuxtLink>
          <NuxtLink to="/pricing" class="hover:underline">{{ $t('nav.pricing') }}</NuxtLink>
          <NuxtLink to="/docs" class="hover:underline">{{ $t('nav.docs') }}</NuxtLink>
          <NuxtLink to="/about" class="hover:underline">{{ $t('nav.about') }}</NuxtLink>
          
          <div class="flex items-center space-x-2 border-l-2 border-retro-border pl-8">
            <USelect 
              v-model="$i18n.locale" 
              :options="locales" 
              variant="none"
              class="font-retro uppercase text-sm cursor-pointer"
            />
          </div>

          <NuxtLink to="/login" class="retro-button text-sm px-6">
            {{ $t('nav.login') }}
          </NuxtLink>
        </div>
      </nav>
    </header>

    <main class="flex-grow p-8 max-w-7xl mx-auto w-full">
      <slot />
    </main>

    <footer class="border-t-4 border-retro-border p-12 bg-retro-bg mt-12">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 font-retro">
        <div class="col-span-2">
          <h3 class="text-xl font-bold mb-4">TINYBATCH.DEV</h3>
          <p class="font-serif normal-case text-lg leading-relaxed max-w-md">
            {{ $t('footer.description') }}
          </p>
        </div>
        <div>
          <h4 class="font-bold mb-4">{{ $t('footer.links') }}</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/about" class="hover:underline">About Us</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink></li>
            <li><NuxtLink to="/terms" class="hover:underline">Terms</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-4">{{ $t('footer.social') }}</h4>
          <ul class="space-y-2">
            <li><a href="#" class="hover:underline">X (Twitter)</a></li>
            <li><a href="#" class="hover:underline">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div class="max-w-7xl mx-auto mt-12 pt-8 border-t-2 border-retro-border text-center font-retro text-sm">
        © {{ new Date().getFullYear() }} TINYBATCH. ALL RIGHTS RESERVED.
      </div>
    </footer>
  </div>
</template>

<script setup>
const { locales } = useI18n()
</script>
