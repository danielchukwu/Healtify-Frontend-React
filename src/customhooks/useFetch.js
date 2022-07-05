import { useState, useEffect} from 'react'

const useFetch = (url) => {
   const [data, setData] = useState(null)
   const [isLoading, setIsLoading] = useState(true)
   const [error, setError] = useState(null) 
   
   useEffect(() => {
      setIsLoading(true)
      setError(null)
      setData(null)

      const abortCont = new AbortController();

      setTimeout(() => (
         fetch(url, {signal: abortCont.signal})
            .then(res => {
               
               if (res.ok === false){
               throw Error('The Server Could Not Fetch Data from this Resource')
               }
               
               return res.json()
            })
            .then(data => {
               setData(data)
               setIsLoading(false)
               setError(false)
            })
            .catch(err => {
               if (err.name === 'AbortError'){
                  console.log('fetch aborted!')
               }else{
                  setError(err.message)
                  setIsLoading(false)
                  setData(false)
               }
            })

   ), 1000)

   return () => abortCont.abort();
   }, [])

   return {data, setData, isLoading, error}
}

export default useFetch;