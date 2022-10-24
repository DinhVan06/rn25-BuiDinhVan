import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface IUser {
  id: string;
  name: string;
}
function DetailPage() {
  let params = useParams();
  const [stateUser, setStateUser] = useState<IUser>({ name: "", id: "" });
  useEffect (() => {
    getUserAPI()
  },[])
  const getUserAPI = () =>
  {
    const url = "https://63528eb7a9f3f34c37413fa8.mockapi.io/users/" + params.id;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        console.log(json);
        setStateUser(json);
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  }
  return(
    <div>
      <p>ID User : {stateUser.id}</p>
      <p>Name User : {stateUser.name}</p>
    </div>
  );
}

export default DetailPage;
