export const requestAuthInterceptor = config => {
  const { headers: originalHeaders } = config
  // place your auth token from your store here
  const token = ''

  const headers = {
    ...originalHeaders,
    Authorization: token,
  }

  return { ...config, headers }
}
