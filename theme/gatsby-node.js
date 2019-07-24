exports.createPages = ({ actions, reporter }) => {
  reporter.warn("make sure to load data from somewhere!")

  // TODO replace this with data from somewhere
  actions.createPage({
    path: "/",
    component: require.resolve("./src/templates/page.js"),
    context: {
      articles: [
        {
          heading:
            "What lower Netflix pricing tells us about competing in India",
          content: `
          <p>
          At a conference in New Delhi early last year, Netflix CEO Reed Hastings was confronted with a que...
          </p>
        `,
        },
        {
          heading:
            "Benchling’s software for managing biotech research nabs $34.5 million",
          content: `
          <p>
          In a field where the laboratory notebook is still considered the state of the art, it’s no wonder a company like Benchling, which provides software for managing life sciences research was abl...
          </p>
        `,
        },
        {
          heading:
            "Duo’s Wendy Nather to talk security at TC Sessions: Enterprise",
          content: `
          <p>
          When it comes to enterprise security, how do you move fast without breaking things? Enter Duo’s Wendy Nather, who will join us at TC Sessions: Enterprise in San Francisco on September 5, wher...
          </p>
        `,
        },
      ],
    },
  })
}
