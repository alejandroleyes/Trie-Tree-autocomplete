import React, { useState, useEffect } from "react"
import "./App.css"
import Search from "./components/Search"
import trieTree from "./utils/TrieTree"
import userList from "./utils/users"
function App() {
  let [trieT] = useState(new trieTree())
  const [inputSearch, setInputSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])

  const handleSearch = (e) => {
    e.preventDefault()
    trieT.insert(inputSearch)
  }

  const handleInput = (value) => {
    if (value.length === 0) {
      value = " "
    }
    setInputSearch(value)
    setSearchResult(trieT.complete(value))
  }

  useEffect(() => {}, [searchResult])

  useEffect(() => {
    for (let user of userList) {
      trieT.insert(user)
    }
  }, [trieT])
  return (
    <div className="App">
      <Search
        handleSearch={handleSearch}
        handleInput={handleInput}
        searchResult={searchResult}
      />
    </div>
  )
}

export default App
