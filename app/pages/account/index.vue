<template>
  <div class="space-y-12">
    <div class="flex justify-between items-end border-b-4 border-retro-border pb-4">
      <div>
        <h1 class="text-4xl font-black uppercase">{{ $t('account.header.title') }}</h1>
        <p class="font-serif italic">{{ $t('account.header.loggedInAs') }} <span class="font-bold">admin@tinybatch.dev</span></p>
      </div>
      <button class="font-retro text-sm uppercase underline">{{ $t('account.header.signOut') }}</button>
    </div>

    <div class="grid md:grid-cols-4 gap-8">
      <!-- Sidebar Nav -->
      <aside class="space-y-2 font-retro uppercase text-sm">
        <NuxtLink to="/account" class="block p-3 border-2 border-retro-border bg-retro-bg shadow-retro translate-x-1 translate-y-1">{{ $t('account.sidebar.overview') }}</NuxtLink>
        <NuxtLink to="/account/orders" class="block p-3 border-2 border-retro-border hover:bg-retro-bg transition-colors">{{ $t('account.sidebar.orderHistory') }}</NuxtLink>
        <NuxtLink to="/account/settings" class="block p-3 border-2 border-retro-border hover:bg-retro-bg transition-colors">{{ $t('account.sidebar.systemSettings') }}</NuxtLink>
      </aside>

      <!-- Main Content -->
      <div class="md:col-span-3 space-y-8">
        <div class="retro-card bg-white">
          <h2 class="text-2xl font-bold mb-4 font-retro">{{ $t('account.subscription.title') }}</h2>
          <div class="flex justify-between items-center p-4 bg-retro-bg border-4 border-retro-border border-double">
            <div>
              <p class="font-retro text-sm uppercase opacity-60">{{ $t('account.subscription.planLabel') }}</p>
              <p class="text-xl font-bold">{{ $t('account.subscription.planValue') }}</p>
            </div>
            <div>
              <p class="font-retro text-sm uppercase opacity-60">{{ $t('account.subscription.expiresLabel') }}</p>
              <p class="text-xl font-bold">Feb 21, 2027</p>
            </div>
            <button class="retro-button bg-retro-accent text-white py-1">{{ $t('account.subscription.manage') }}</button>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="retro-card">
            <h3 class="font-bold font-retro mb-4 underline uppercase">{{ $t('account.quickTools.title') }}</h3>
            <ul class="font-serif space-y-2">
              <li>{{ $t('account.quickTools.cloudBackup') }} <span class="text-retro-accent font-bold">{{ $t('account.quickTools.enabled') }}</span></li>
              <li>{{ $t('account.quickTools.apiUsage') }} <span class="font-bold">1.2k / 10k</span></li>
              <li>{{ $t('account.quickTools.storage') }} <span class="font-bold">245 MB / 5 GB</span></li>
            </ul>
          </div>
          <div class="retro-card">
            <h3 class="font-bold font-retro mb-4 underline uppercase">{{ $t('account.systemStatus.title') }}</h3>
            <ul class="font-serif space-y-2">
              <li class="flex justify-between">{{ $t('account.systemStatus.batchEngine') }} <span class="font-retro text-sm text-green-600 font-bold">{{ $t('account.systemStatus.online') }}</span></li>
              <li class="flex justify-between">{{ $t('account.systemStatus.cloudSync') }} <span class="font-retro text-sm text-green-600 font-bold">{{ $t('account.systemStatus.connected') }}</span></li>
              <li class="flex justify-between">{{ $t('account.systemStatus.lastLogin') }} <span class="font-bold text-sm">{{ $t('account.systemStatus.lastLoginValue') }}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
