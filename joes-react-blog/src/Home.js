import { useState, useEffect } from 'react';
import BlogList from './BlockList';

const Home = () => {
    // This useState Hook re-renders the component once it is updated by the user,
    // in this case by clicking on the button, the state REACTS
    const [blogs, setBlogs] = useState(null);
    const [name, setName] = useState("Joe");

    useEffect(() => {
        // useEffect will always run on every iteration (button click or refresh)
        // By calling the name variable as ana argument inside of the function you can
        // specify you want it runs 
        fetch("http://localhost:8000/blogs") //end point returns with a promise
        .then(res => { //once we get the response from the endpoint (not data yet!)
            return res.json(); //this the turns the data into a JS object
        })
        .then((data) => { //once the json has returned asynchronously (takes time) returns the object(array)
            console.log(data); //shows the data
            setBlogs(data)
        })
    }, []);

    return (
        <div className="home">
            {/* && is conditional exchange in JS, basically if it reads the left and its true, it loads that and doesn't even read the right hand side of the statement and vice versa */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            <button onClick={() => setName("J.Percival")}>Change Name</button>
            <p>{ name }</p>        
        </div>
    );
}

export default Home;