class TrieNode {
  constructor(string) {
    this.character = string
    this.child = new Map()
    this.terminal = false
  }

  isTerminal() {
    if (this.terminal === true) {
      return true
    }
  }

  numChildren() {
    return this.child.size
  }

  hasChild() {
    if (this.child) return true
  }

  getChild() {
    if (this.child) return this.child
  }

  addChild(string) {
    let currentNode = this
    for (let ch of string) {
      if (!currentNode.child.has(ch)) {
        currentNode.child.set(ch, new TrieNode(ch))
      }
      currentNode = currentNode.child.get(ch)
    }
    currentNode.terminal = true

    return currentNode
  }
}

export default TrieNode
