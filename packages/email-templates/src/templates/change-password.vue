<template>
  <Layout>
    <Text>
      You are receiving this email because we received a password reset request for your account at Shorter.
    </Text>
    <Text>
      Please click the button below to reset your password.
    </Text>
    <Text>
      <Button href="{{ resetUrl }}" class="bg-brand px-3 py-2 font-medium leading-4 text-white rounded-md">
        Reset password
      </Button>
    </Text>
    <Text>
      Or copy and paste the token below into the form:
    </Text>
    <Text class="p-2 rounded-md bg-gray-100">
      <span v-pre>{{ token }}</span>
    </Text>
    <Hr class="mt-5" />
    <Text class="text-gray-500">
      This email was intended for <Link href="mailto:{{ emailTo }}" class="text-gray-500 underline">
        <span v-pre>{{ emailTo }}</span>
      </Link>. If you were not expecting this email, you can ignore this email.
    </Text>
  </Layout>
</template>

<script setup lang="ts">
import { Button, Hr, Link, Text } from '@vue-email/components'
import Layout from './_layout.vue'
</script>
