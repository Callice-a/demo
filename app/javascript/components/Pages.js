import React from 'react'

const Pages = (props) => {
    const pages = props.pages

    const renderPages = ()=>{
        return pages.map( (page)=> {
            return(
                <div>
                    <h1>{page.title}</h1>
                    <p>{page.author}</p>
                    <p>{page.id}</p>
                    <p>{page.body}</p>
                    <a href={`/pages/${page.id}`}>Show Page</a>
                    <a href={`/pages/${page.id}/edit`}>Edit Page</a>
                    <a href={`/pages/${page.id}`} data-method="delete">Delete</a>
                </div>
            )
        })
    }
return(
    <div>
        <h1>APPLE BOI</h1>
        <a href='/pages/new'>Create New Page</a>
        {renderPages()}
    </div>
)
}

export default Pages