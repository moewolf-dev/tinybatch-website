<template>
  <div class="space-y-12">
    <div class="flex justify-between items-end border-b-4 border-retro-border pb-4">
      <div>
        <h1 class="text-4xl font-black uppercase">User Control Panel</h1>
        <p class="font-serif italic">Logged in as: <span class="font-bold">admin@tinybatch.dev</span></p>
      </div>
      <button class="font-retro text-sm uppercase underline">Sign Out</button>
    </div>

    <div class="grid md:grid-cols-4 gap-8">
      <!-- Sidebar Nav -->
      <aside class="space-y-2 font-retro uppercase text-sm">
        <NuxtLink to="/account" class="block p-3 border-2 border-retro-border bg-retro-bg shadow-retro translate-x-1 translate-y-1">Overview</NuxtLink>
        <NuxtLink to="/account/orders" class="block p-3 border-2 border-retro-border hover:bg-retro-bg transition-colors">Order History</NuxtLink>
        <NuxtLink to="/account/settings" class="block p-3 border-2 border-retro-border hover:bg-retro-bg transition-colors">System Settings</NuxtLink>
      </aside>

      <!-- Main Content -->
      <div class="md:col-span-3 space-y-8">
        <div class="retro-card bg-white">
          <h2 class="text-2xl font-bold mb-4 font-retro">ACTIVE SUBSCRIPTION</h2>
          <div class="flex justify-between items-center p-4 bg-retro-bg border-4 border-retro-border border-double">
            <div>
              <p class="font-retro text-sm uppercase opacity-60">Plan</p>
              <p class="text-xl font-bold">Professional Tier</p>
            </div>
            <div>
              <p class="font-retro text-sm uppercase opacity-60">Expires</p>
              <p class="text-xl font-bold">Feb 21, 2027</p>
            </div>
            <button class="retro-button bg-retro-accent text-white py-1">Manage</button>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="retro-card">
            <h3 class="font-bold font-retro mb-4 underline uppercase">Quick Tools</h3>
            <ul class="font-serif space-y-2">
              <li>↳ Cloud Backup: <span class="text-retro-accent font-bold">ENABLED</span></li>
              <li>↳ API Usage: <span class="font-bold">1.2k / 10k</span></li>
              <li>↳ Storage: <span class="font-bold">245 MB / 5 GB</span></li>
            </ul>
          </div>
          <div class="retro-card">
            <h3 class="font-bold font-retro mb-4 underline uppercase">System Status</h3>
            <ul class="font-serif space-y-2">
              <li class="flex justify-between">Batch Engine: <span class="font-retro text-sm text-green-600 font-bold">ONLINE</span></li>
              <li class="flex justify-between">Cloud Sync: <span class="font-retro text-sm text-green-600 font-bold">CONNECTED</span></li>
              <li class="flex justify-between">Last Login: <span class="font-bold text-sm">2 mins ago</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
