import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function GetData({posts}) {
  console.log(posts);
  // const [url, setUrl] = useState('');
  // const [isLoaded, setIsLoaded] = useState(false)
  // useEffect(() => {
  //   axios.put('/api/userinfo')
  //   .then(res => {
  //     console.log(res.data.name);
  //     setUrl(res.data.name)
  //     setIsLoaded(true)
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }, [])
  return (
    <div>
      <h1>Hello</h1>
      {/* <img src={data} alt="" /> */}
      {posts.map(post => {
        return (
          <p>{post.content}</p>
        )
      })}
    </div>
  )
};

// Fetch all posts (in /pages/index.tsx)
export async function getStaticProps() {
  const prisma = new PrismaClient()
  const posts = await prisma.post.findMany()

  return {
    props : { posts }
  }
}