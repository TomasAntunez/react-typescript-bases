import { useEffect, useRef, useState } from "react";

import { reqResApi } from "../api";
import { ReqResUsersResponse, User } from "../interfaces";


export const useUsers = () => {

  const [ users, setUsers ] = useState<User[]>([]);
  
  const page = useRef<number>(1);


  const loadUsers = async () => {
    try {
      const response = await reqResApi.get<ReqResUsersResponse>('/users', {
        params: { page: page.current }
      });

      if ( response.data.data.length > 0 ) {
        setUsers(response.data.data);
        return;
      }

      page.current--;
      alert('There are no more records');

    } catch (error) {
      console.log(error);
    }
  };

  const nextPage = async () => {
    page.current++;
    loadUsers();
  };

  const previousPage = async () => {
    if ( page.current > 1 ) {
      page.current--;
      loadUsers();
    }
  };


  useEffect(() => {
    loadUsers();
  }, []);


  return { users, nextPage, previousPage };

};
