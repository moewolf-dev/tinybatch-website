<template>
  <div class="space-y-16 max-w-4xl mx-auto">
    <section class="space-y-8">
      <h1 class="text-6xl font-black underline decoration-retro-accent decoration-8 underline-offset-8">
        {{ $t('about.hero.title') }}
      </h1>
      <p class="text-2xl font-serif leading-relaxed italic">
        {{ $t('about.hero.quote') }}
      </p>
    </section>

    <section class="grid md:grid-cols-2 gap-12 py-12 border-t-4 border-b-4 border-retro-border border-double">
      <div class="space-y-4">
        <h2 class="text-3xl font-bold font-retro uppercase">{{ $t('about.mission.title') }}</h2>
        <p class="font-serif text-lg leading-relaxed">
          {{ $t('about.mission.description') }}
        </p>
      </div>
      <div class="space-y-4">
        <h2 class="text-3xl font-bold font-retro uppercase">{{ $t('about.stack.title') }}</h2>
        <p class="font-serif text-lg leading-relaxed">
          {{ $t('about.stack.description') }}
        </p>
      </div>
    </section>

    <section class="space-y-8">
      <h2 class="text-4xl font-black text-center">{{ $t('about.team.title') }}</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div v-for="i in 3" :key="i" class="text-center group">
          <div class="w-full aspect-square bg-retro-bg border-4 border-retro-border shadow-retro mb-4 group-hover:scale-105 transition-transform overflow-hidden relative grayscale group-hover:grayscale-0">
             <!-- Placeholder for avatar -->
             <div class="absolute inset-0 flex items-center justify-center text-6xl font-black text-retro-border/20">
               MB
             </div>
          </div>
          <h4 class="font-bold font-retro uppercase">{{ $t('about.team.member', { index: i }) }}</h4>
          <span class="font-serif text-sm italic">{{ $t('about.team.role') }}</span>
        </div>
      </div>
    </section>

    <div class="retro-card bg-retro-accent text-white text-center p-12 mt-20">
      <h2 class="text-4xl font-black mb-6 uppercase font-retro text-white">{{ $t('about.cta.title') }}</h2>
      <p class="font-serif text-xl mb-8">{{ $t('about.cta.subtitle') }}</p>
      <NuxtLink to="/login" class="bg-white text-retro-accent px-12 py-4 font-retro border-4 border-white shadow-retro hover:shadow-retro-lg transition-all inline-block uppercase text-xl">
        {{ $t('about.cta.button') }}
      </NuxtLink>
    </div>
  </div>
</template>
