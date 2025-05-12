import type { PageServerLoad } from './$types';
import { Auth } from "$lib/auth"

export const load: PageServerLoad = async ({ cookies }) => {
  const password = cookies.get('password');
  const email = cookies.get('email');
  const login = cookies.get("login") === "true";

 
  if(!email || !password) {
    console.error("ÄÄÄÄÄÄÄ");
  } else {
    let auth: Auth = new Auth();
    if(login) {
      auth.signIn(email,password).then(obj => {
        console.log(obj)
      })
    } else {
      auth.signUp(email,password).then(obj => {
        console.log(obj)
      })
    }

  }


};
