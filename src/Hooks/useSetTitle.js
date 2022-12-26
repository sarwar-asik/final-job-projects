import { useEffect } from "react"

const useSetTitle = title => {
    useEffect(() => {
        document.title = `${title} - Find A Job`
    }, [title])
}

export default useSetTitle