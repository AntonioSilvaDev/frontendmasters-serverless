const { query } = require("./utils/hasura");

exports.handler = async (event) => {
  const { id, title, tagline, poster } = JSON.parse(event.body);

  const result = await query({
    query: `
      mutation ($id: String!, $poster: String!, $tagline: String!, $title: String!) {
        insert_movies_one(object: {id: $id, title: $title, poster: $poster, tagline: $tagline}) {
          id
          poster
          tagline
          title
        }
      }
    `,
    variables: { id, title, tagline, poster },
  });
  console.log(result);

  return {
    statusCode: 200,
    body: `Here is the movie data: ${JSON.stringify(result)}`,
  };
};
