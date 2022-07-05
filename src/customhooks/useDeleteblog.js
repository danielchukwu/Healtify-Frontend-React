import { useNavigate } from "react-router-dom";

const useDeleteblog = (id) => {
   const navigate = useNavigate()

   const handleDeleteBlog = () => {
      fetch('http://localhost:7000/blogs/'+id, {
         method: "DELETE"
      }).then(() => {
         console.log('blog deleted!')
         navigate('/')
      })
   }

   return handleDeleteBlog
}

export default useDeleteblog;