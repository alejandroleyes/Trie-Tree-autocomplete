import TrieNode from "./TrieNode"

class TrieTree {
  constructor(strings = []) {
    this.root = new TrieNode("")
  }

  findNode(string) {
    string = string
      .toLowerCase()
      .replace(/\w/, (firstLetter) => firstLetter.toUpperCase())

    let currentNode = this.root
    let array = []
    let depth = 0
    for (let ch of string) {
      if (currentNode.child.has(ch)) {
        currentNode = currentNode.child.get(ch)
        depth++
      }
    }
    array.push(currentNode, depth)
    return array
  }

  traverse(node, list, prefix) {
    /*
          Recorre el trie tree de forma recursiva.
          
        */
    if (node.terminal === true) list.push(prefix)
    for (let c of node.child.keys())
      this.traverse(node.child.get(c), list, prefix + c)
  }

  isEmpty() {
    if (this.root.child.size === 0) {
      return true
    } else {
      return false
    }
  }

  contains(string) {
    let currentNode = this.root
    for (let ch of string) {
      if (!currentNode.child.has(ch)) return false
      currentNode = currentNode.child.get(ch)
    }
    return currentNode.isTerminal()
  }

  insert(string) {
    let currentNode = this.root
    if (string === null) {
      return null
    }
    string = string
      .toLowerCase()
      .replace(/\w/, (firstLetter) => firstLetter.toUpperCase())

    if (!this.contains(string)) {
      currentNode.addChild(string)
    }
    return this.root
  }

  complete(string) {
    string = string
      .toLowerCase()
      .replace(/\w/, (firstLetter) => firstLetter.toUpperCase())
    let prefix = string
    let currentNode = this.root
    let list = []
    for (let ch of string) {
      if (currentNode.child.has(ch)) {
        currentNode = currentNode.child.get(ch)
      } else {
        return list
      }
    }
    this.traverse(currentNode, list, prefix)
    return list
  }

  allTreeStrings() {
    let list = []
    this.traverse(this.root, list, "")
    return list
  }
}

export default TrieTree
