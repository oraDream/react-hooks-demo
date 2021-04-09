import React, {useState} from 'react'
function UseStateExample(){
    const [pName, setName] = useState('luisa')
    const [age, setAge] =useState(21)
    const [sex,setSex] = useState('man')
    const [work, setWork] = useState('programmer')
    return (
        <div>
            <p>{pName}：{age}岁</p>
            <p>性别：{sex}</p>
            <p>工作: {work}</p>
        </div>
        )
}

export default UseStateExample