import find from 'unist-util-find'
import yaml from 'js-yaml'

const extract = () => {
  const transformer = (tree, file) => {
    const node = find(tree, { type: 'yaml' })
    if (node && node.value && file && file.data) {
      file.data.matter = yaml.safeLoad(node.value)
    }
  }
  return transformer
}
export default extract
