import { useState } from "react"


const Bai2 = () => {
  const [user, setUser] = useState({ name: '', email: '' })
  const [userList, setUserList] = useState([
    { name: 'A', email: 'a@gmail.com' }, 
    { name: 'B', email: 'b@gmail.com' }
  ])


  // const onClicks = () => {
  //   const newSetudent = {
  //     ...student,
  //     score: 5
  //   }
  //   setStudent(newSetudent)
  // }

  const onClick = () => {
    console.log(user)
    setUserList([
      ...userList,
      user
    ]);
    setUser({name:"", email:''})
  }

  const onChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(e.target)
    setUser({
      ...user,
      [name]: value
    })
  }
  
  
  return (
    <div>
      <div>
        <input name='name' value={user.name} onChange={onChange}/>
        <input name='email' value={user.email} onChange={onChange}/>
        <button onClick={onClick}> Add</button>
      </div>
      {userList.map((item) => {
        return (
          <div>
            <div> Ten: {item.name}</div>
            <div> email: {item.email}</div>

          </div>
        )
      })}
      {/* {`hoc sinh co ma so ${student.id}, co diem la ${student.score}`}
      <div><button onClick={onClicks}> Change score</button></div> */}
    </div>
  );
}

export default Bai2;