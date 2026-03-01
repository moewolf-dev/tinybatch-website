<template>
  <div class="space-y-16">
    <section class="text-center py-12">
      <h1 class="text-5xl font-black">{{ $t('pricing.hero.title') }}</h1>
      <p class="font-serif text-xl mt-4 opacity-80">{{ $t('pricing.hero.subtitle') }}</p>
    </section>

    <div class="grid md:grid-cols-3 gap-8">
      <div v-for="plan in plans" :key="plan.name" 
        :class="['retro-card flex flex-col', plan.highlight ? 'border-retro-accent shadow-retro-lg -translate-y-2' : '']">
        <div v-if="plan.highlight" class="bg-retro-accent text-white font-retro text-xs py-1 text-center -mx-4 -mt-4 mb-4 uppercase">
          {{ $t('pricing.mostPopular') }}
        </div>
        <h3 class="text-2xl font-bold mb-2 uppercase font-retro">{{ $t(plan.name) }}</h3>
        <div class="text-4xl font-black mb-6">
          {{ plan.price }}<span class="text-lg font-normal font-serif">/{{ $t(plan.period) }}</span>
        </div>
        
        <ul class="space-y-4 mb-8 flex-grow font-serif">
          <li v-for="feature in plan.features" :key="feature" class="flex items-center">
            <span class="text-retro-accent mr-2">✦</span> {{ $t(feature) }}
          </li>
        </ul>

        <button :class="['retro-button w-full', plan.highlight ? 'bg-retro-accent' : 'bg-white text-retro-fg hover:bg-retro-bg']">
          {{ $t(plan.cta) }}
        </button>
      </div>
    </div>

    <!-- Comparison Table -->
    <section class="mt-20 overflow-x-auto">
      <table class="w-full border-4 border-retro-border text-left font-retro">
        <thead>
          <tr class="bg-retro-border text-white uppercase">
            <th class="p-4 border-r-2 border-white">{{ $t('pricing.table.features') }}</th>
            <th class="p-4 border-r-2 border-white">{{ $t('pricing.table.basic') }}</th>
            <th class="p-4 border-r-2 border-white">{{ $t('pricing.table.pro') }}</th>
            <th class="p-4">{{ $t('pricing.table.enterprise') }}</th>
          </tr>
        </thead>
        <tbody class="font-serif text-lg">
          <tr class="border-b-2 border-retro-border border-dashed">
            <td class="p-4 border-r-2 border-retro-border font-bold">{{ $t('pricing.table.rows.cloudSync.feature') }}</td>
            <td class="p-4 border-r-2 border-retro-border">{{ $t('pricing.table.rows.cloudSync.basic') }}</td>
            <td class="p-4 border-r-2 border-retro-border">{{ $t('pricing.table.rows.cloudSync.pro') }}</td>
            <td class="p-4">{{ $t('pricing.table.rows.cloudSync.enterprise') }}</td>
          </tr>
          <tr class="border-b-2 border-retro-border border-dashed bg-retro-bg/30">
            <td class="p-4 border-r-2 border-retro-border font-bold">{{ $t('pricing.table.rows.batchLimit.feature') }}</td>
            <td class="p-4 border-r-2 border-retro-border">{{ $t('pricing.table.rows.batchLimit.basic') }}</td>
            <td class="p-4 border-r-2 border-retro-border">{{ $t('pricing.table.rows.batchLimit.pro') }}</td>
            <td class="p-4">{{ $t('pricing.table.rows.batchLimit.enterprise') }}</td>
          </tr>
          <tr>
            <td class="p-4 border-r-2 border-retro-border font-bold">{{ $t('pricing.table.rows.prioritySupport.feature') }}</td>
            <td class="p-4 border-r-2 border-retro-border">{{ $t('pricing.table.rows.prioritySupport.basic') }}</td>
            <td class="p-4 border-r-2 border-retro-border">{{ $t('pricing.table.rows.prioritySupport.pro') }}</td>
            <td class="p-4">{{ $t('pricing.table.rows.prioritySupport.enterprise') }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup>
const plans = [
  {
    name: 'pricing.plans.starter.name',
    price: '$0',
    period: 'pricing.period.forever',
    features: [
      'pricing.plans.starter.features.basicTools',
      'pricing.plans.starter.features.communitySupport',
      'pricing.plans.starter.features.localProcessing',
      'pricing.plans.starter.features.commercialUse'
    ],
    cta: 'pricing.plans.starter.cta',
    highlight: false
  },
  {
    name: 'pricing.plans.professional.name',
    price: '$12',
    period: 'pricing.period.month',
    features: [
      'pricing.plans.professional.features.unlimitedBatches',
      'pricing.plans.professional.features.cloudStorage',
      'pricing.plans.professional.features.apiAccess',
      'pricing.plans.professional.features.emailSupport',
      'pricing.plans.professional.features.betaFeatures'
    ],
    cta: 'pricing.plans.professional.cta',
    highlight: true
  },
  {
    name: 'pricing.plans.studio.name',
    price: '$49',
    period: 'pricing.period.month',
    features: [
      'pricing.plans.studio.features.multiUserTeams',
      'pricing.plans.studio.features.whiteLabeling',
      'pricing.plans.studio.features.advancedAnalytics',
      'pricing.plans.studio.features.customIntegration',
      'pricing.plans.studio.features.prioritySupport'
    ],
    cta: 'pricing.plans.studio.cta',
    highlight: false
  }
]
</script>
