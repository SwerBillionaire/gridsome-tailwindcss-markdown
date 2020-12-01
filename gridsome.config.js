// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome TailwindCSS Boilerplate",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "content/posts/**/*.md",
        refs: {
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
  ],
  templates: {
    Post: [
      {
        path: "/post/:title",
        component: "~/templates/Post.vue",
      },
    ],
  },
  transformers: {
    remark: {
      plugins: ["remark-attr"],
    },
  },
};
