import React from 'react'

interface IUser{
  userName: string;
  password: string;
  gender: string;
  children: boolean;
  country: string;
}
const defaultUser: IUser = {
  userName: "vanbd",
  password: "12345",
  gender: "man",
  children: true,
  country: "VN",
};

function MultipleIputForm() {
  const [User, setUser] = React.useState(defaultUser);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(User);
  }
  const handleChange = (event: any) => {
    if(event.target.type === 'checkbox') {
      setUser((values) => ({
        ...values, [event.target?.name]: event.target.checked,
      }));
    }
    setUser((values) => ({...values, [event.target?.name]: event.target?.value}));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input style={{ margin: "10px"}}
          type="text" 
          name="userName" 
          placeholder="Nhập Name"
          value={User.userName}
          onChange={handleChange}
        />
        <br />
        <label>Password: </label>
        <input style={{ margin: "10px" }}
          type="password"
          name = "password"
          placeholder='Nhập password'
          value={User.password} 
          onChange={handleChange}
        />
        <br />
        <label htmlFor="gender">Man</label>
        <input style={{margin:"10px"}}
          type="radio" 
          name="gender"
          value="man"
          checked={User.gender === 'man'}
          onChange={handleChange}
        />
        <label htmlFor="gender">Woman</label>
        <input style={{margin:"10px"}}
          type="radio" 
          name="gender"
          value="woman"
          checked={User.gender !== 'man'}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="children">Children:</label>
        <input style={{margin:"10px"}}
          type="checkbox" 
          name="children"
          checked={!!User.children}
          onChange={handleChange} 
        />
        <br />
        <label htmlFor="country">Country:</label>
        <select style={{margin:"10px"}} name="country" value={User.country} onChange={handleChange}>
          <option value="VN">VietNam</option>
          <option value="US">United State</option>
          <option value="JP">Japan</option>
        </select>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default MultipleIputForm