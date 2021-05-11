export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "609a5759f03e68dc307f7eca",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-nbnvqy4f",
                  apiId: "f89c30ad-2c42-4ee9-8860-51bc6fa27ffa",
                },
                {
                  buildHookId: "609a575a03966acf120c9fb5",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-22k4amih",
                  apiId: "23a9cef5-665d-4d34-85bc-cba43dd81707",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Hamisakim/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-22k4amih.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
