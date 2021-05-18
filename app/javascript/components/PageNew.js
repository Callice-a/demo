import React from 'react'

const PageNew = (props) =>{
    return(
        <div>
            <h1>New Page Form</h1>
            <form action='/pages' method='post'>
                <p>Title</p>
                <input name='page[title]'/>
                <p>Author</p>
                <input name='page[author]'/>
                <p>Body</p>
                <input name='page[body]'/>
                <button type='submit'>add</button>
            </form>
        </div>
    )
}

export default PageNew