import path from 'path'
import {
  addTrailingSlash,
  getMarkdown,
  getPaths,
  walkDir,
} from '../../lib/paths'

describe('paths library', () => {
  describe('with trailing slash', () => {
    it('addTrailingSlash() do nothing', () => {
      const expected = 'dir/'
      const actual = addTrailingSlash(expected)
      expect(actual).toMatch(expected)
    })
  })

  describe('without trailing slash', () => {
    it('addTrailingSlash() add trailing slash', () => {
      const expected = 'dir/'
      const actual = addTrailingSlash('dir')
      expect(actual).toMatch(expected)
    })
  })

  it('walkDir() returns path strings', () => {
    const expected = ['foo', 'foo/bar', 'foo/bar/baz', 'foo/bar/baz/qux']
    const baseDir = path.join(process.cwd(), 'test/lib/__dirs__')
    let actual = []
    walkDir(baseDir, (dirpath, _stats) => {
      actual = [...actual, dirpath.replace(addTrailingSlash(baseDir), '')]
    })
    expect(actual).toMatchObject(expected)
  })

  it('getPaths() returns path strings', () => {
    const expected = ['foo', 'foo/bar', 'foo/bar/baz', 'foo/bar/baz/qux']
    const actual = getPaths(path.join(process.cwd(), 'test/lib/__dirs__'))
    expect(actual).toMatchObject(expected)
  })

  describe('when dir has no index.md', () => {
    it('getMarkdown() lists directries', () => {
      const expected = `# Index\n\n- bar`.trim()
      const actual = getMarkdown(
        path.join(process.cwd(), 'test/lib/__dirs__', 'foo')
      ).trim()

      expect(actual).toMatch(expected)
    })
  })

  describe('when dir has index.md', () => {
    it('getMarkdown() returns file content', () => {
      const expected = `# Bar\n\nThis is bar.`.trim()
      const actual = getMarkdown(
        path.join(process.cwd(), 'test/lib/__dirs__', 'foo/bar')
      ).trim()

      expect(actual).toMatch(expected)
    })
  })

  describe(`when dir don't exist`, () => {
    it('getMarkdown() returns null', () => {
      const expected = null
      const actual = getMarkdown(
        path.join(process.cwd(), 'test/lib/__dirs__', 'not/exist')
      )

      expect(actual).toBe(expected)
    })
  })
})
