<template>
  <UPageEmpty
    :icon="icons.message"
    :title="$t('app.messages.notImplemented.title')"
  >
    <template #description>
      <p>{{ $t('app.messages.notImplemented.message1') }}</p>
      <p>{{ $t('app.messages.notImplemented.message2') }}</p>
    </template>
    <template #action>
      <div class="flex gap-3">
        <UButton
          type="button"
          target="_blank"
          :icon="icons.social.boosty"
          :to="meta.sponsorLink"
        >
          {{ $t('app.messages.notImplemented.donate') }}
        </UButton>
        <UButton
          trailing
          type="button"
          target="_blank"
          color="white"
          :icon="icons.arrowRight"
          :to="meta.sourceLink"
        >
          {{ $t('app.messages.notImplemented.contribute') }}
        </UButton>
      </div>
    </template>
  </UPageEmpty>
</template>

<script setup lang="ts">
const { icons, meta } = useAppConfig()
</script>
