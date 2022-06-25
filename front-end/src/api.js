const Typesense = require('typesense')

export const client  = new Typesense.Client({
  nodes: [
    {
      host: 'localhost',
      port: '8108',
      protocol: 'http'
    }
  ],
  apiKey:'xyz',
})