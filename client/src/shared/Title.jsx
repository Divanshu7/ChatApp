import React from 'react'
import{Helmet} from "react-helmet-async"

const Title = ({
title="chat app",
desc="this is desc",
}) => {
  return (
    <Helmet >
        <title>{title}</title>
        <meta name='descption ' content={desc}></meta>
    </Helmet>
  )
}

export default Title