import React from "react"
import ResponsiveAppBar from "./ResponsiveAppBar"
import PostFetcher from "./DataFetcher"
import ApiResponseTime from "./feature"
import CountApi from "./CountApi"


const App = () => {
  return(
    <>
      <ResponsiveAppBar />
      <ApiResponseTime />
      <CountApi />
      <PostFetcher />
    </>
  )
}

export default App