<template>
  <div class="space-y-16">
    <section class="text-center py-12">
      <h1 class="text-5xl font-black">PRICING PLANS</h1>
      <p class="font-serif text-xl mt-4 opacity-80">Simple, transparent, retro pricing.</p>
    </section>

    <div class="grid md:grid-cols-3 gap-8">
      <div v-for="plan in plans" :key="plan.name" 
        :class="['retro-card flex flex-col', plan.highlight ? 'border-retro-accent shadow-retro-lg -translate-y-2' : '']">
        <div v-if="plan.highlight" class="bg-retro-accent text-white font-retro text-xs py-1 text-center -mx-4 -mt-4 mb-4 uppercase">
          Most Popular
        </div>
        <h3 class="text-2xl font-bold mb-2 uppercase font-retro">{{ plan.name }}</h3>
        <div class="text-4xl font-black mb-6">
          {{ plan.price }}<span class="text-lg font-normal font-serif">/{{ plan.period }}</span>
        </div>
        
        <ul class="space-y-4 mb-8 flex-grow font-serif">
          <li v-for="feature in plan.features" :key="feature" class="flex items-center">
            <span class="text-retro-accent mr-2">✦</span> {{ feature }}
          </li>
        </ul>

        <button :class="['retro-button w-full', plan.highlight ? 'bg-retro-accent' : 'bg-white text-retro-fg hover:bg-retro-bg']">
          {{ plan.cta }}
        </button>
      </div>
    </div>

    <!-- Comparison Table -->
    <section class="mt-20 overflow-x-auto">
      <table class="w-full border-4 border-retro-border text-left font-retro">
        <thead>
          <tr class="bg-retro-border text-white uppercase">
            <th class="p-4 border-r-2 border-white">Features</th>
            <th class="p-4 border-r-2 border-white">Basic</th>
            <th class="p-4 border-r-2 border-white">Pro</th>
            <th class="p-4">Enterprise</th>
          </tr>
        </thead>
        <tbody class="font-serif text-lg">
          <tr class="border-b-2 border-retro-border border-dashed">
            <td class="p-4 border-r-2 border-retro-border font-bold">Cloud Sync</td>
            <td class="p-4 border-r-2 border-retro-border">No</td>
            <td class="p-4 border-r-2 border-retro-border">Yes</td>
            <td class="p-4">Yes</td>
          </tr>
          <tr class="border-b-2 border-retro-border border-dashed bg-retro-bg/30">
            <td class="p-4 border-r-2 border-retro-border font-bold">Batch Limit</td>
            <td class="p-4 border-r-2 border-retro-border">100/day</td>
            <td class="p-4 border-r-2 border-retro-border">Unlimited</td>
            <td class="p-4">Unlimited</td>
          </tr>
          <tr>
            <td class="p-4 border-r-2 border-retro-border font-bold">Priority Support</td>
            <td class="p-4 border-r-2 border-retro-border">No</td>
            <td class="p-4 border-r-2 border-retro-border">Email</td>
            <td class="p-4">24/7 Phone</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup>
const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    features: ['All basic tools', 'Community support', 'Local processing', 'Commercial use'],
    cta: 'Get Started',
    highlight: false
  },
  {
    name: 'Professional',
    price: '$12',
    period: 'mo',
    features: ['Unlimited batches', 'Cloud storage (5GB)', 'API Access', 'Email support', 'Beta features'],
    cta: 'Go Pro',
    highlight: true
  },
  {
    name: 'Studio',
    price: '$49',
    period: 'mo',
    features: ['Multi-user teams', 'White-labeling', 'Advanced analytics', 'Custom integration', 'Priority support'],
    cta: 'Contact Sales',
    highlight: false
  }
]
</script>
