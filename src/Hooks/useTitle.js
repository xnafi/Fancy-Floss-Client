import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `Fancy Floss ${title}`

      
    }, [title])

}
export default useTitle;