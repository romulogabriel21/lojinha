import './Search.css'
import {BiSearch} from 'react-icons/bi'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

const Search = () => {

    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!search.trim()) return

        navigate(`/search_res?q=${search}`)
        console.log(search)
        setSearch('')
    }

  return (
    <form onSubmit={handleSubmit} >
        <input onChange={(e) => setSearch(e.target.value)}
            value={search} className='input-search'
            type="text" placeholder='Busque um Produto' />
        <button className='button-search'>
            <BiSearch className='icon-search' />
        </button>
    </form>
  )
}

export default Search