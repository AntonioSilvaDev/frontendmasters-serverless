exports.handler = async (event) => {
  const { text } = event.queryStringParameters;

  return {
    statusCode: 200,
    body: `You sent: ${text}`,
  };
};
