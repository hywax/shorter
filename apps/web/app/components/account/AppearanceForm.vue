<template>
  <UPageCard
    :title="$t('account.appearance.title')"
    :description="$t('account.appearance.description')"
  >
    <div class="space-y-4">
      <UFormGroup :label="$t('account.appearance.form.theme.label')">
        <UColorModeSelect />
      </UFormGroup>
      <UFormGroup :label="$t('account.appearance.form.i18n.label')">
        <ULocaleSelect />
      </UFormGroup>
    </div>
  </UPageCard>
</template>
