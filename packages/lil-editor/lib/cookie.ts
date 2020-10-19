export const getCookie = (name) => {
  const matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        // eslint-disable-next-line no-useless-escape
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  )
  return matches ? decodeURIComponent(matches[1]) : undefined
}

export const setCookie = (name, value, options = {}) => {
  options = {
    path: '/',
    // 必要でれば他のデフォルトを追加する
    expires: new Date(Date.now() + 86400e3).toUTCString(),
    ...options,
  }

  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)

  for (const optionKey in options) {
    updatedCookie += '; ' + optionKey
    const optionValue = options[optionKey]
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue
    }
  }

  document.cookie = updatedCookie
}

export const deleteCookie = (name) => {
  setCookie(name, '', {
    'max-age': -1,
  })
}
