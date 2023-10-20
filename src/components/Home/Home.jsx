import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="container">
               <div class="ocean">
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
</div>
            <div className="intro">
                <h1 className="intro-title">Welcome to the SDE Website</h1>
                <p className="intro-text">Explore important placement-related algorithms & questions</p>
            </div>
            <div className="algorithms">
                <h2 className="algorithm-title">Featured Algorithms</h2>
                <ul className="algorithm-list">
                <li><a href="https://www.geeksforgeeks.org/dynamic-programming/">Dynamic Programming</a></li>
                    <li><a href="https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/">Graph Algorithms</a></li>
                    <li><a href="https://www.geeksforgeeks.org/sorting-algorithms/">Sorting and Searching</a></li>
                    <li><a href="https://www.geeksforgeeks.org/introduction-to-tree-data-structure-and-algorithm-tutorials/">Tree Data Structures</a></li>
                    <li><a href="https://www.geeksforgeeks.org/introduction-to-recursion-data-structure-and-algorithm-tutorials/">Recursion</a></li>
                    <li><a href="https://www.geeksforgeeks.org/backtracking-algorithms">Backtracking</a></li>
                    <li><a href="https://www.geeksforgeeks.org/hashing-data-structure/">Hashing</a></li>


                </ul>
            </div>
            <div className="logo">
        <img src="https://tse1.mm.bing.net/th?id=OIP.zdaSpxoPHv8DaosKuhtu5wHaGE&pid=Api&P=0&h=180" alt="Your Logo" />
    </div>
        </div>
       
    
    );
}

export default Home;
