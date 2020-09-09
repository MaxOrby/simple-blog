exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql`

     query{
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            edges {
              node {
                id
                frontmatter {
                  slug
                }
              }
            }
          }

     }
    
    `

// Create pagination
    
    const postPerPage = 3

    const numPages = Math.ceil(data.allMdx.edges.lenght / postPerPage)

    Array.from({ length: numPages }).forEach(_, i) => {
        actions.createPages({
             path: i === 0 ? `/` : `\${i + 1}`
         })
     }


}