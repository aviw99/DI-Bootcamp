const data = require('../react.json');

const PostList = () => {
    // const title = data['title']
    return(
        <>
            <h1>Hi this is a title</h1><br/>
            {data.map((item) => {
                return(
                    <>
                    <h1>{item.title}</h1>
                    <p>{item.content}</p>
                    </>
                )
            })}
        </>
    )
}

export default PostList
