export default function handler(req, res) {
  console.log(req.method);
  if(req.method === "GET") {
    res.status(200).json({ name: 'New data!' })
  }

  if(req.method === "POST") {
    res.status(200).json({name: 'POST DATA'})
  }

  if(req.method === "PUT") {
    res.status(200).json({name: 'PUT DATA'})
  }
  
}