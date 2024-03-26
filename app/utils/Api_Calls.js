import fs from 'fs/promises';
import axios from 'axios';

export async function getStoredNotes() {
  const rawFileContent = await fs.readFile('notes.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedNotes = data.notes ?? [];
  return storedNotes;
}

export function storeNotes(notes) {
  return fs.writeFile('notes.json', JSON.stringify({ notes: notes || [] }));
}

export async function getAllUsers() {
  try {
    const usersApiRespnse = await axios.get("http://localhost:8085/api/user/get_users");
    const users = usersApiRespnse.data ?? [];
    return users;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}

export async function getOneUser(user_id) {
  try {
    const usersApiRespnse = await axios.get(`http://localhost:8085/api/user/${user_id}`);
    const users = usersApiRespnse.data ?? [];
    return users;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}
export async function addUsers(adduserdata) {
  try {
    const usersApiRespnse = await axios.post("http://localhost:8085/api/user/add_users", adduserdata);
    // const users = usersApiRespnse.data ?? [];
    return usersApiRespnse;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}


export async function updateUsers(adduserdata,user_id) {
  try {
    const usersApiRespnse = await axios.put(`http://localhost:8085/api/user/updateUsers/${user_id}`, adduserdata);
    return usersApiRespnse;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}

export async function deleteUsers(user_id) {
  try {
    const usersApiRespnse = await axios.delete(`http://localhost:8085/api/user/deleteUser/${user_id}`);
    return usersApiRespnse;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}
