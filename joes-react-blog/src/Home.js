import { useState } from 'react';

const Home = () => {
    // This useState Hook re-renders the component once it is updated by the user,
    // in this case by clicking on the button, the state REACTS
    const [blogs, setBlogs] = useState([
        {title:"My New Website", body: "lorem impsum ...", author: "Joe", id: 1},
        {title:"Welcome Party!", body: "lorem impsum ...", author: "Dan", id: 2},
        {title:"UX Design Top Tips", body: "lorem impsum ...", author: "Joe", id: 3}
    ]);

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;