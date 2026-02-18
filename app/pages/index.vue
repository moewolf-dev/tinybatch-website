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
          EXPLORE TOOLS
        </NuxtLink>
      </div>
    </section>

    <!-- Product Grid -->
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="product in products" :key="product.id" class="retro-card flex flex-col group">
        <div class="mb-4 text-sm font-retro opacity-60 flex justify-between">
          <span>{{ product.category }}</span>
          <span>v{{ product.version }}</span>
        </div>
        <h3 class="text-2xl font-bold mb-3 group-hover:text-retro-accent transition-colors">
          {{ product.name }}
        </h3>
        <p class="font-serif text-lg flex-grow mb-6">
          {{ product.description }}
        </p>
        <div class="pt-4 border-t-2 border-retro-border border-dashed flex justify-between items-center">
          <span class="font-retro text-sm uppercase font-bold text-retro-accent">
            {{ product.status }}
          </span>
          <NuxtLink :to="`/products/${product.id}`" class="font-retro hover:underline text-sm uppercase">
            Launch →
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Retro Feature Section -->
    <section class="bg-white border-4 border-retro-border p-12 shadow-retro transform -rotate-1">
      <div class="rotate-1 space-y-8">
        <h2 class="text-4xl font-black text-center">WHY TINYBATCH?</h2>
        <div class="grid md:grid-cols-3 gap-12 font-serif text-lg leading-relaxed">
          <div class="space-y-4">
            <h4 class="font-retro font-bold text-retro-accent underline">01. PRECISE</h4>
            <p>Every tool is built with a single purpose. No bloat, just the functionality you need to get the job done.</p>
          </div>
          <div class="space-y-4">
            <h4 class="font-retro font-bold text-retro-accent underline">02. BATCH-FIRST</h4>
            <p>Optimized for processing large volumes of data instantly. Speed is not an option, it's a requirement.</p>
          </div>
          <div class="space-y-4">
            <h4 class="font-retro font-bold text-retro-accent underline">03. LOCAL-STATIC</h4>
            <p>Privacy-focused by design. Most operations happen in your browser, keeping your data where it belongs.</p>
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
    category: 'Graphics',
    version: '1.2.0',
    description: 'Compress and resize thousands of images in seconds without losing quality. Bulk export to WebP/AVIF.',
    status: 'Stable'
  },
  {
    id: 'data-converter',
    name: 'CSV-TO-JSON',
    category: 'Data',
    version: '0.9.5',
    description: 'Ultra-fast streaming parser for massive CSV files. Transform complex schemas with custom mapping rules.',
    status: 'Beta'
  },
  {
    id: 'pdf-toolkit',
    name: 'PDF-MERGER',
    category: 'Utility',
    version: '2.0.1',
    description: 'Split, merge, and reorder PDF pages instantly. Password protection and metadata stripping included.',
    status: 'Stable'
  },
  {
    id: 'text-refactor',
    name: 'REGEX-REPLACE',
    category: 'Text',
    version: '1.0.0',
    description: 'Advanced pattern matching and replacement across multiple files. Batch rename files using regex.',
    status: 'Stable'
  },
  {
    id: 'api-ghost',
    name: 'JSON-GHOST',
    category: 'DevTools',
    version: '0.8.0',
    description: 'Generate realistic mock data from JSON schemas. Support for custom providers and massive exports.',
    status: 'Experimental'
  },
  {
    id: 'web-scraper',
    name: 'QUICK-SCRAPE',
    category: 'Web',
    version: '0.5.0',
    description: 'Extract structured data from HTML strings. Fast, lightweight, and perfect for static site generation.',
    status: 'Alpha'
  }
]
</script>
