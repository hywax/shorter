<template>
  <footer class="py-4">
    <UContainer class="flex items-center justify-between gap-x-3">
      <div class="flex items-center justify-center lg:justify-start lex-1 gap-x-1.5">
        <p class="text-gray-500 dark:text-gray-400 text-sm/6 truncate">
          <I18nT keypath="app.footer.copyright" scope="global">
            <template #author>
              <UTooltip :text="$t('app.footer.personal')">
                <ULink
                  class="text-gray-900 dark:text-white"
                  target="_blank"
                  :to="meta.author.url"
                >
                  {{ meta.author.name }}
                </ULink>
              </UTooltip>
            </template>
            <template #version>
              0.0.0
            </template>
          </I18nT>
        </p>
      </div>
      <div class="flex-1 flex items-center justify-end gap-x-1.5">
        <UColorModeToggle />
        <UTooltip
          v-if="$config.public.disableSponsorLink !== 'false'"
          :text="$t('app.footer.boosty')"
        >
          <UButton
            color="gray"
            variant="ghost"
            target="_blank"
            :to="meta.sponsorLink"
            :icon="icons.social.boosty"
            :aria-label="$t('app.footer.boosty')"
          />
        </UTooltip>
        <UTooltip
          v-if="$config.public.disableSourceLink !== 'false'"
          :text="$t('app.footer.github')"
        >
          <UButton
            color="gray"
            variant="ghost"
            target="_blank"
            :to="meta.sourceLink"
            :icon="icons.social.github"
            :aria-label="$t('app.footer.github')"
          />
        </UTooltip>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
const { meta, icons } = useAppConfig()
</script>
