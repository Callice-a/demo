import React from 'react'

const PageEdit = (props) =>{
    const {page} = props
    return(
        <div>
            <h1>Edit Page Form</h1>
            <form action={`/pages/${page.id}`} method='post'>
                <input type="hidden" name="_method" value="patch" />
                <p>Title</p>
                <input defaultValue={page.title} name='page[title]'/>
                <p>Author</p>
                <input defaultValue={page.author} name='page[author]'/>
                <p>Body</p>
                <input defaultValue={page.body} name='page[body]'/>
                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default PageEdit