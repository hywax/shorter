<template>
  <Tailwind :config="tailwindConfig">
    <Html>
      <Head />
      <Body class="font-sans">
        <Container class="border border-gray-200">
          <Img src="{{ logotypeImageLink }}" alt="Shorter" class="mx-auto my-4" width="50" height="50" />

          <Heading class="text-center" as="h2">
            <span v-pre>{{ title }}</span>
          </Heading>

          <slot />
        </Container>
      </Body>
    </Html>
  </Tailwind>
</template>

<script setup lang="ts">
import { Body, Container, Head, Heading, Html, Img, Tailwind } from '@vue-email/components'

const tailwindConfig = {
  theme: {
    extend: {
      colors: {
        brand: '#6366f1',
      },
    },
  },
}
</script>
