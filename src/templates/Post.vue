<template>
  <Layout>
    <div
      class="rounded-3xl bg-green-200 max-w-lg p-6 shadow box-border mx-auto"
    >
      <h1 class="text-green-600 font-bold text-xl mb-4">
        {{ $page.post.title }}
      </h1>
      <div v-html="$page.post.content"></div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    title
    author
    tags {
      title
    }
    content
    date
    featuredImage
  }
}
</page-query>

<script>
export default {};
</script>

<style>
.content-image {
  border-radius: 1.5rem;
  margin-top: 16px;
}
</style>
