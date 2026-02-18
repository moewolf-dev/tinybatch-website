<template>
  <div class="space-y-16 max-w-4xl mx-auto">
    <section class="space-y-8">
      <h1 class="text-6xl font-black underline decoration-retro-accent decoration-8 underline-offset-8">
        WE BUILD TINY THINGS FOR BIG IDEAS.
      </h1>
      <p class="text-2xl font-serif leading-relaxed italic">
        "Tinybatch was born out of frustration with bloated software. We wanted tools that do one thing, do it fast, and look like they belong in 1994."
      </p>
    </section>

    <section class="grid md:grid-cols-2 gap-12 py-12 border-t-4 border-b-4 border-retro-border border-double">
      <div class="space-y-4">
        <h2 class="text-3xl font-bold font-retro uppercase">Our Mission</h2>
        <p class="font-serif text-lg leading-relaxed">
          At Tinybatch, we believe software should be predictable, portable, and pretty in its own weird way. Our suite of batch tools is designed to run in modern browsers while maintaining the simplicity of the early web.
        </p>
      </div>
      <div class="space-y-4">
        <h2 class="text-3xl font-bold font-retro uppercase">Our Stack</h2>
        <p class="font-serif text-lg leading-relaxed">
          While our UI screams the 90s, our engine is built on Nuxt 4, Vue 3, and WebAssembly. We combine the reliability of modern web technologies with the aesthetics of the golden age of computing.
        </p>
      </div>
    </section>

    <section class="space-y-8">
      <h2 class="text-4xl font-black text-center">THE TEAM</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div v-for="i in 3" :key="i" class="text-center group">
          <div class="w-full aspect-square bg-retro-bg border-4 border-retro-border shadow-retro mb-4 group-hover:scale-105 transition-transform overflow-hidden relative grayscale group-hover:grayscale-0">
             <!-- Placeholder for avatar -->
             <div class="absolute inset-0 flex items-center justify-center text-6xl font-black text-retro-border/20">
               MB
             </div>
          </div>
          <h4 class="font-bold font-retro uppercase">Member {{ i }}</h4>
          <span class="font-serif text-sm italic">The Architect</span>
        </div>
      </div>
    </section>

    <div class="retro-card bg-retro-accent text-white text-center p-12 mt-20">
      <h2 class="text-4xl font-black mb-6 uppercase font-retro text-white">READY TO JOIN THE BATCH?</h2>
      <p class="font-serif text-xl mb-8">Join over 50,000 developers using Tinybatch every day.</p>
      <NuxtLink to="/login" class="bg-white text-retro-accent px-12 py-4 font-retro border-4 border-white shadow-retro hover:shadow-retro-lg transition-all inline-block uppercase text-xl">
        SIGN UP NOW
      </NuxtLink>
    </div>
  </div>
</template>
