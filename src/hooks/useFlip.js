import {useState} from 'react'

const useFlip = (initState = true) => {
    const [value, setValue] = useState(initState)

    const flip = () => {
        setValue(oldValue => !oldValue)
    }

    return [value, flip]
}

export default useFlip;