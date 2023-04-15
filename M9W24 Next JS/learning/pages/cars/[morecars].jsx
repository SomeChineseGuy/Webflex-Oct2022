import { useRouter } from "next/router"

export default function CarsList() {
  const router = useRouter();
  console.log(router);
  const handBack = () => {
    router.back()
  }
  const handleReplace = () => {
    router.replace('/')

  }
  return (
    <div>
      <h1>This is the Cars List! {router.query.morecars}</h1>
      <button onClick={handBack}>Back</button>
      <button onClick={() => router.replace('/')}>Replace</button>
    </div>
  )
};