<template>
  <table tabindex="0">
    <thead>
      <tr>
        <th>{{ labels.name }}</th>
        <th>{{ labels.value }}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ labels.type }}</td>
        <td>{{ type }}</td>
      </tr>
      <tr v-if="defaults || required">
        <td>{{ labels.defaults }}</td>
        <td>
          <template v-if="defaults">
            {{ defaults }}
          </template>
          <span v-else style="color: var(--vp-c-danger-1)">
            {{ labels.required }}
          </span>
        </td>
      </tr>
      <tr v-if="example">
        <td>{{ labels.example }}</td>
        <td>
          <code>{{ example }}</code>
        </td>
      </tr>
      <tr v-if="env">
        <td>{{ labels.env }}</td>
        <td>
          <code>{{ env }}</code>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

defineProps<{
  type: string
  defaults?: string
  variants?: string | string[]
  env?: string
  example?: string
  required?: boolean
}>()

const { lang } = useData()
const labels = computed(() => {
  if (lang.value === 'ru-RU') {
    return {
      name: 'Название',
      value: 'Значение',
      type: 'Тип',
      variants: 'Возможные значения',
      defaults: 'По умолчанию',
      example: 'Пример',
      required: 'Обязательный параметр',
      env: 'ENV',
    }
  } else if (lang.value === 'en-US') {
    return {
      name: 'Name',
      value: 'Value',
      type: 'Type',
      variants: 'Variants',
      defaults: 'Default',
      example: 'Example',
      required: 'Required',
      env: 'ENV',
    }
  }

  throw new Error(`Unknown "${lang.value}" lang`)
})
</script>
