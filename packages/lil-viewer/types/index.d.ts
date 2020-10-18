declare module '*/lil.json' {
  interface Config {
    lang: string
  }
  const config: Config
  export default config
}

declare module 'hast-util-sanitize/lib/github.json' {
  const data: any
  export default data
}
