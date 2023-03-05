# How To Use Spotify Web API
Similar documentation can be found [here](https://developer.spotify.com/documentation/general/guides/authorization/code-flow/).  
Note: the user must be signed in to Music Metrics.


## Step 1: User Authorization

---

At the click of a button on the web page, a JavaScript function is executed that sends a <code>GET</code> request to the
Spotify API. The request contains the following parameters in the URI:

  * <code>client_id</code> - The client ID of the application - this can be public
  * <code>response_type</code> - The type of response that is expected from the API ("code" in this case)
  * <code>redirect_uri</code> - The URI to which the user is redirected after authorization, success or failure - must be defined in the [application settings](https://developer.spotify.com/dashboard/applications)
  * <code>scope</code> - The [permissions](https://developer.spotify.com/documentation/general/guides/authorization/scopes/) that the application requests (in a space-separated list)
  * <code>state</code> - A randomly generated token to prevent [CSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery) attacks

As this request is processed by Spotify, the user will be redirected to a Spotify pop-up which shows the user the scopes
in detail that they will be allowing MusicMetrics access to. Whether or not the user authorizes the application, they will
be redirected to the <code>redirect_uri</code> with the following parameters:

  * <code>code</code> - The authorization code that can be exchanged for an access token
  * <code>state</code> - The randomly generated token that was sent in the original request

The front end then validates the <code>state</code> and if it is valid, stores the <code>code</code> in the database
using the <code>/updateCode</code> endpoint with their Music Metrics auth token. The code is now ready to be used to fetch
access tokens from Spotify.

## Step 2: Request Access Tokens

---

Now that we have the code and client secret stored on the back end, we can make a <code>POST</code> request to the Spotify Web API
to exchange the code for an access token. The request contains the following parameters in the body:

  * <code>grant_type</code> - The type of grant that is being requested ("authorization_code" in this case)
  * <code>code</code> - The authorization code that was received in Step 1
  * <code>redirect_uri</code> - Not used for actual redirection in this case, but for validation (must match the URI used in Step 1)

In addition to these parameters, the request must contain the following headers:

  * <code>Authorization</code> - Base 64 encoded string that contains the client ID and client secret key. The field must have the format: <code>Authorization: Basic [base64 encoded client_id:client_secret]</code>
  * <code>Content-Type</code> - The type of data being sent ("application/x-www-form-urlencoded" in this case)

If the request is successful, the response will contain the following parameters:

  * <code>access_token</code> - The access token that can be used to make requests to the Spotify Web API
  * <code>token_type</code> - The type of token ("Bearer" in this case)
  * <code>scope</code> - A space-separated list of scopes
  * <code>expires_in</code> - The number of seconds until the token expires
  * <code>refresh_token</code> - The refresh token that can be used to request a new access token

This <code>access_token</code> is now ready to be used to make requests to the Spotify Web API.

## Step 3: Refreshing the Token

---

The access token that was received in Step 2 will expire after a certain amount of time (usually 1 hour). To prevent this, we can use the
refresh token that was received in Step 2 to request a new access token. The request contains the following parameters in the body:

  * <code>grant_type</code> - The type of grant that is being requested ("refresh_token" in this case)
  * <code>refresh_token</code> - The refresh token that was received in Step 2

In addition to these parameters, the request must contain the same headers as in Step 2. The response will contain the same
parameters as in Step 2, except that the <code>refresh_token</code> will not be included.