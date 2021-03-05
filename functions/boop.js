// first serverless function
// Serverless functions just need to return a statusCode and a body
exports.handler = async () => {
  return {
    statusCode: 200,
    body: "Boop!",
  };
};
