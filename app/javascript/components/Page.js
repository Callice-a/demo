import React from 'react'

const Page = (props) => {
const { page } = props

    return(
        <div>
            <a href='/pages'>GO BACK</a>
            <h1>{page.name}</h1>
            <p>{page.title}</p>
            <p>{page.body}</p>
            <p>{page.author}</p>
            
            
        </div>
    )
}

export default Page