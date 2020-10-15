import path from 'path'
import { addTrailingSlash, getPaths } from '../../lib/paths'

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

  it('getPaths() get path strings', () => {
    const expected = ['foo', 'foo/bar', 'foo/bar/baz', 'foo/bar/baz/qux']
    const actual = getPaths(path.join(process.cwd(), 'test/lib/__dirs__/'))
    expect(actual).toMatchObject(expected)
  })
})
