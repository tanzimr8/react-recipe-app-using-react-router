import React, { useContext } from 'react'
import Loading from '../../components/Loading'
import Recipes from './Recipes'
import ErrorComponent from '../../components/ErrorComponent'
import { GlobalContext } from '../../context'

const Home = () => {
  const {recipeLists,loading,errorMessage} = useContext(GlobalContext)
  return (
    <>
      {loading && <Loading/>}
      {recipeLists && recipeLists.length> 0 ? <Recipes/> : 'nothing'}
      {errorMessage && <ErrorComponent/>}
    </>
  )
}

export default Home
