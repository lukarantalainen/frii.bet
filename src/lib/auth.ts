import pkg from '@supabase/supabase-js';
const { SupabaseClient, createClient } = pkg;

import { KEY, URL } from '$env/static/private'

export class Auth {
    supabase: any
    constructor() {
        this.supabase = createClient(URL, KEY);
    }

    async signUp(email:string, password: string) {
        try {
            await this.supabase.auth.signUp({
                email: email,
                password: password,
            }).then(data => {
                return {
                    data: data
                }
            }).catch(err => {
                return {
                    error: err
                }
            })

            return {
                data: data,
                error: error
            }
        } catch(err) {
            return {
                error: err
            }
        }

    }

    async signIn(email: string, password: string) {
    try {
        const { data, error } = await this.supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            console.log("SignIn Error: ", error);
            return { error: error.message };
        }

        console.log("SignIn Success: ", data);
        return {
            data: data, // This contains the user and session details if the login is successful
        };
    } catch (err) {
        console.log("Unexpected Error during SignIn: ", err);
        return {
            error: err.message || 'An unexpected error occurred',
        };
    }
}

}

