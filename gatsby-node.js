const fetch = require("node-fetch")
const queryString = require("query-string")

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest },
  configOptions) => {
  const { createNode } = actions;

  // delete configOptions.plugins;


  const processMovie = movie => {
    const movieId = createNodeId(`movie-${movie.id}`)
    const nodeContent = JSON.stringify(movie)
    const nodeData = Object.assign({}, movie, {
      id: movieId,
      parent: `__SOURCE__`,
      internal: {
        type: `Movie`,
        content: nodeContent,
        contentDigest: createContentDigest(movie),
      },
      children: [],
      imdb_code: movie.imdb_code,
      title_english: movie.title_english,
      title_long: movie.title_long,
      slug: movie.slug,
      rating: movie.rating,
      runtime: movie.runtime,
      genres: movie.genres,
      summary: movie.summary,
      description_full: movie.description_full,
      synopsis: movie.synopsis,
      background_image: movie.background_image,
      background_image_original: movie.background_image_original,
      small_cover_image: movie.small_cover_image,
      medium_cover_image: movie.medium_cover_image,
      large_cover_image: movie.large_cover_image,
      torrents: movie.torrents,
      url: movie.url,
      title: movie.title,
      year: movie.year,
    })
    return nodeData;
  }

  const apiOptions = queryString.stringify(configOptions)

  const apiUrl = `https://yts.mx/api/v2/list_movies.json?${apiOptions}`
  // fetch raw data from the randomuser api

  // map into these results and create nodes
  return (
    // Fetch a response from the apiUrl
    fetch(apiUrl)
      // Parse the response as JSON
      .then(response => response.json())
      // Process the response data into a node
      .then(data => {
        // For each query result (or 'hit')
        data.data.movies.forEach(movie => {
          // Process the photo data to match the structure of a Gatsby node
          const nodeData = processMovie(movie)
          // Use Gatsby's createNode helper to create a node from the node data
          createNode(nodeData)
        })
      })
  )

}