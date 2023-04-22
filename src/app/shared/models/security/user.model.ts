export interface UserModel {
  id: string;
  firstName: string;
  lastName: string;
  token: string;
  refreshToken: string;
}

export interface LoginResponseModel {
  authWellKnownEndPoints: AuthWellKnownEndPoints
  authStateControl: string
  authNonce: any
  jwtKeys: JwtKeys
  storageSilentRenewRunning: string
  storageCodeFlowInProgress: boolean
  codeVerifier: string
  authnResult: AuthnResult
  authzData: string
  access_token_expires_at: number
  userData: UserData
  session_state: string
}

export interface AuthWellKnownEndPoints {
  issuer: string
  jwksUri: string
  authorizationEndpoint: string
  tokenEndpoint: string
  userInfoEndpoint: string
  endSessionEndpoint: string
  checkSessionIframe: string
  revocationEndpoint: string
  introspectionEndpoint: string
}

export interface JwtKeys {
  keys: Key[]
}

export interface Key {
  kty: string
  use: string
  kid: string
  e: string
  n: string
  alg: string
}

export interface AuthnResult {
  id_token: string
  access_token: string
  expires_in: number
  token_type: string
  scope: string
  state: string
  session_state: string
}

export interface UserData {
  name: string
  given_name: string
  family_name: string
  website: string
  sub: string
}


