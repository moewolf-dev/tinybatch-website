<template>
  <div class="space-y-16">
    <!-- Hero Section -->
    <section class="text-center py-20 space-y-6">
      <h1 class="text-6xl md:text-8xl font-retro font-black leading-none text-retro-border">
        {{ $t('home.hero.title') }}
      </h1>
      <p class="text-xl md:text-2xl font-serif max-w-2xl mx-auto opacity-80">
        {{ $t('home.hero.subtitle') }}
      </p>
      <div class="pt-8">
        <NuxtLink to="/products" class="retro-button text-xl px-12 py-4">
          {{ $t('home.hero.explore') }}
        </NuxtLink>
      </div>
    </section>

    <!-- Product Grid -->
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="product in products" :key="product.id" class="retro-card flex flex-col group">
        <div class="mb-4 text-sm font-retro opacity-60 flex justify-between">
          <span>{{ $t(product.category) }}</span>
          <span>v{{ product.version }}</span>
        </div>
        <h3 class="text-2xl font-bold mb-3 group-hover:text-retro-accent transition-colors">
          {{ product.name }}
        </h3>
        <p class="font-serif text-lg flex-grow mb-6">
          {{ $t(product.description) }}
        </p>
        <div class="pt-4 border-t-2 border-retro-border border-dashed flex justify-between items-center">
          <span class="font-retro text-sm uppercase font-bold text-retro-accent">
            {{ $t(product.status) }}
          </span>
          <NuxtLink :to="`/products/${product.id}`" class="font-retro hover:underline text-sm uppercase">
            {{ $t('home.products.launch') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Retro Feature Section -->
    <section class="bg-white border-4 border-retro-border p-12 shadow-retro transform -rotate-1">
      <div class="rotate-1 space-y-8">
        <h2 class="text-4xl font-black text-center">{{ $t('home.features.title') }}</h2>
        <div class="grid md:grid-cols-3 gap-12 font-serif text-lg leading-relaxed">
          <div class="space-y-4">
            <h4 class="font-retro font-bold text-retro-accent underline">{{ $t('home.features.precise.title') }}</h4>
            <p>{{ $t('home.features.precise.description') }}</p>
          </div>
          <div class="space-y-4">
            <h4 class="font-retro font-bold text-retro-accent underline">{{ $t('home.features.batchFirst.title') }}</h4>
            <p>{{ $t('home.features.batchFirst.description') }}</p>
          </div>
          <div class="space-y-4">
            <h4 class="font-retro font-bold text-retro-accent underline">{{ $t('home.features.localStatic.title') }}</h4>
            <p>{{ $t('home.features.localStatic.description') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const products = [
  {
    id: 'img-batch',
    name: 'IMG-OPTIMIZER',
    category: 'home.products.items.imgBatch.category',
    version: '1.2.0',
    description: 'home.products.items.imgBatch.description',
    status: 'home.products.status.stable'
  },
  {
    id: 'data-converter',
    name: 'CSV-TO-JSON',
    category: 'home.products.items.dataConverter.category',
    version: '0.9.5',
    description: 'home.products.items.dataConverter.description',
    status: 'home.products.status.beta'
  },
  {
    id: 'pdf-toolkit',
    name: 'PDF-MERGER',
    category: 'home.products.items.pdfToolkit.category',
    version: '2.0.1',
    description: 'home.products.items.pdfToolkit.description',
    status: 'home.products.status.stable'
  },
  {
    id: 'text-refactor',
    name: 'REGEX-REPLACE',
    category: 'home.products.items.textRefactor.category',
    version: '1.0.0',
    description: 'home.products.items.textRefactor.description',
    status: 'home.products.status.stable'
  },
  {
    id: 'api-ghost',
    name: 'JSON-GHOST',
    category: 'home.products.items.apiGhost.category',
    version: '0.8.0',
    description: 'home.products.items.apiGhost.description',
    status: 'home.products.status.experimental'
  },
  {
    id: 'web-scraper',
    name: 'QUICK-SCRAPE',
    category: 'home.products.items.webScraper.category',
    version: '0.5.0',
    description: 'home.products.items.webScraper.description',
    status: 'home.products.status.alpha'
  }
]
</script>
