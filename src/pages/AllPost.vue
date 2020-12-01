<template>
  <Layout>
    <div>
      <ul>
        <li
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
          class="rounded-md bg-green-100 shadow p-4 link"
        >
          <g-link :to="edge.node.path">
            <span class="text-indigo-500 font-bold underline">
              {{ edge.node.title }} by {{ edge.node.author }}
            </span>
          </g-link>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost {
    totalCount
    edges {
      node {
        id
        title
        path
        author
      }
    }
  }
}
</page-query>

<script>
export default {};
</script>

<style scoped>
.link:not(:last-child) {
  margin-bottom: 8px;
}
</style>
