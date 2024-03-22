import React from 'react'
import ContentTop from '../../component/ContentTop/ContentTop'
import ContentMain from '../../component/ContentMain/ContentMain'
import "./Content.css"
const Content = () => {
  return (
    <div className='main-content'>
      <ContentTop/>
      <ContentMain/>
    </div>
  )
}

export default Content
