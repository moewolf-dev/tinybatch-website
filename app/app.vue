<template>
  <div>
    <!-- Google Analytics integration -->
    <Script v-if="config.public.googleAnalyticsId" 
      :src="`https://www.googletagmanager.com/gtag/js?id=${config.public.googleAnalyticsId}`" 
      async 
    />
    <Script v-if="config.public.googleAnalyticsId">
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '{{ config.public.googleAnalyticsId }}');
    </Script>
    
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
</script>
