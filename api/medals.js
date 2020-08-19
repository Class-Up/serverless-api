module.exports = (request, response) {
  response.send('Hello Query ${request.query}')
}