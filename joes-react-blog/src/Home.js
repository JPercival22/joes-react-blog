import { useState, useEffect } from 'react';
import BlogList from './BlockList';

const Home = () => {
    // This useState Hook re-renders the component once it is updated by the user,
    // in this case by clicking on the button, the state REACTS
    const [blogs, setBlogs] = useState([
        { title: "My New Website", body: "lorem impsum ...", author: "Joe", id: 1 },
        { title: "Welcome Party!", body: "lorem impsum ...", author: "Dan", id: 2 },
        { title: "UX Design Top Tips", body: "lorem impsum ...", author: "Joe", id: 3 }
    ]);

    const [name, setName] = useState("Joe");
    const handleDelete = (id) => {
        // this doesn't Mutate(change) the original Blog state AnimationPlaybackEvent, it just updates it with new array on user interaction (click delete button etc)
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        // useEffect will always run on every iteration (button click or refresh)
        // By calling the name variable as ana argument inside of the function you can
        // specify you want it runs 
        console.log("use effect ran");
        console.log(name);
    }, [name]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            <button onClick={() => setName("J.Percival")}>Change Name</button>
            <p>{ name }</p>        
        </div>
    );
}

export default Home;