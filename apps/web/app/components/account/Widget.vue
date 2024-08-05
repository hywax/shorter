<template>
  <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-end' }">
    <UAvatar :alt="user?.name" size="md" />

    <template #account="{ item }">
      <div class="text-left">
        <p>
          {{ $t('account.widget.singed') }}
        </p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          {{ item.label }}
        </p>
      </div>
    </template>

    <template #item="{ item }">
      <span class="truncate">{{ item.label }}</span>
      <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
    </template>
  </UDropdown>
</template>

<script setup lang="ts">
const { icons } = useAppConfig()
const { clear: singOut, user } = useUserSession()

const items = computed(() => [
  [{
    label: user.value?.email,
    slot: 'account',
    disabled: true,
  }], [{
    label: $t('account.widget.settings'),
    icon: icons.account.settings,
    to: '/account',
  }], [{
    label: $t('account.widget.signOut'),
    icon: icons.account.signOut,
    click: async () => {
      await singOut()
      await navigateTo('/auth/login')
    },
  }],
])
</script>
