import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './components/Post';
import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Greyfish",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs9fSoqm0D_uSd1MdxKNC-qiEGu8vl0ixQMA&usqp=CAU",
      caption: "We'll be posting about crazy animals"
    },
    {
      username: "Sandra",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3F0U5I8ie-oif5GAgiAwetraqaIivk5Xcvw&usqp=CAU",
      caption: "Check out this crazy monkey, or ape like..."
    },
    {
      username: "John",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE3zvk59wehAUA9YonMTZIVyGPl-nEYjYl9g&usqp=CAU",
      caption: "Crazy see creature"
    },
  ]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
    <div className="App">
      
      {/* Header */}
      <div className="app__header">
        <img 
          className="app__headerImage" 
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      <h1>Jimmy's IG Clone</h1>

      {/* Loop through the posts */}
      {
        posts.map(post => (
          <Post 
            username={post.username}
            imageUrl={post.imageUrl} 
            caption={post.caption}
          />
        ))
      }

      {/* Posts */}
      {/* <Post 
          username="Greyfish"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs9fSoqm0D_uSd1MdxKNC-qiEGu8vl0ixQMA&usqp=CAU" 
          caption="We'll be posting about crazy animals"
        />
      <Post 
          username="Sandra"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3F0U5I8ie-oif5GAgiAwetraqaIivk5Xcvw&usqp=CAU" 
          caption="Check out this crazy monkey, or ape like..."
      />
      <Post 
          username="John"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE3zvk59wehAUA9YonMTZIVyGPl-nEYjYl9g&usqp=CAU" 
          caption="Crazy see creature"
      /> */}

    </div>
  );
}

export default App;
