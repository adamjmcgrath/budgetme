import { handleAuth, handleLogin } from '@auth0/nextjs-auth0'

export default handleAuth({
  async login(req, res) {
    try {
      await handleLogin(req, res, {
        authorizationParams: {
          audience: process.env.AUTH0_AUDIENCE,
          // Add the `offline_access` scope to also get a Refresh Token
          scope: 'openid profile email read:products', // or AUTH0_SCOPE
        },
      })
    } catch (error) {
      res.status(500).send({
        error:
          error instanceof Error
            ? error.message
            : 'There was an error trying to login',
      })
    }
  },
})
