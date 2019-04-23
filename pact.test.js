const { Verifier } = require('@pact-foundation/pact')

// Verify that the provider meets all consumer expectations
describe('dummy pact verification', () => {
  it('should validate the expectations of Our Little Consumer', () => {
    let opts = {
      provider: 'Our Provider',
      providerBaseUrl: 'http://localhost:8081',
      providerStatesSetupUrl: 'http://localhost:8081/setup',
      pactBrokerUrl: 'https://test.pact.dius.com.au/',
      tags: ['prod'],
      pactBrokerUsername: 'dXfltyFMgNOFZAxr8io9wJ37iUpY42M',
      pactBrokerPassword: 'O5AIZWxelWbLvqMd8PkAVycBJh2Psyg1',
      publishVerificationResult: true,
      providerVersion: '1.0.0',
    }

    return new Verifier().verifyProvider(opts).then(output => {
      console.log('Pact Verification Complete!')
      // Not important: console.log(output)
    })
  })
})
