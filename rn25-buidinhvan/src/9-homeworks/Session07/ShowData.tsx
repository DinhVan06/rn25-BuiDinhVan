import React, { useState, useEffect } from "react";
import "./ShowData.css"
interface IUser {
  id?: string;
  name?: string;
}

function ShowData({}: IUser) {
  const [dataUser, setDataUser] = useState<Array<IUser>>([]);
  useEffect(() => {
    const url = "https://63528eb7a9f3f34c37413fa8.mockapi.io/users";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        setDataUser(json)
        console.log(json);
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  }, []);
  return (
    <div>
        {/* {dataUser?.map((item:any) =>{
            return(
                <div>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                </div>
            )
        })} */}
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
            {dataUser.map((item:any, index:number)=>{
                return(
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                    </tr>
                )
            })}
            
        </table>
        
    </div>
  );
}

export default ShowData;
