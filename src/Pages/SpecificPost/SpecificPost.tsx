import React, { useEffect, useState } from 'react'
import './SpecificPost.scss'
import NavBar from 'src/Components/NavBar/NavBar'
import { useLocation } from 'react-router-dom'
import { carPostType, getSingleCarPostsAxios } from 'src/lib/apiService'

const SpecificPost: React.FC = () => {
  const [loadingState, setLoadingState] = useState(true),
    [loadDataError, setLoadDataError] = useState(false),
    [postDataState, setPostDataState] = useState<carPostType>()
  const { state } = useLocation()
  const url = state.id.toString()
  useEffect(() => {
    const getDataFromApi = async () => {
      const loadedData = await getSingleCarPostsAxios(`/carposts/${url}`)
      setLoadingState(false)
      setPostDataState(loadedData)
    }
    try {
      getDataFromApi()
    } catch (error) {
      setLoadDataError(true)
    }
  }, [])
  return (
    <div className="SpecificPost">
      <NavBar />
      <div className="SpecificPost__content">konkretny post</div>
      <div>id to ${postDataState?._id}</div>
      <button
        onClick={() => {
          console.log(state)
        }}
      >
        przycisk bozy
      </button>
    </div>
  )
}

export default SpecificPost
