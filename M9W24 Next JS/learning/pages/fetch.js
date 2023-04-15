import axios from "axios";
import { useEffect, useState } from "react";

export default function Fetch({data}) {

  // const [url, setUrl] = useState('');
  // const [isLoaded, setIsLoaded] = useState(false)
  // useEffect(() => {
  //   axios.get('https://dog.ceo/api/breeds/image/random')
  //   .then(res => {

  //     setUrl(res.data.message)
  //     setIsLoaded(true)
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }, [])

  return (
    <div>
      <h1>Hello</h1>
      {/* {isLoaded && <img src={url} />} */}
      <img src={data} />
    </div>
  )
}

// export const getServerSideProps = async () => {
//   return {
//     props: {

//     }
//   }
// }

export const getStaticProps = async () => {
// this 
  // axios.get('https://dog.ceo/api/breeds/image/random')
  // .then(res => {
  //   console.log(res.data.message);
  // })
  // .catch(err => {
  //   console.log(err);
  // })

  const res = await axios.get('https://dog.ceo/api/breeds/image/random')
  console.log(res.data.message);
  return {
    props: {
      data: res.data.message
    }
  }
}


// App.get('/fetch', (req, res) => {

//this

//   res.render( 
//     return (
//       <div>
//         <h1>Hello</h1>
//         {isLoaded && <img src={url} />}
//       </div>
//     )
//   )
// })