import pkg from '@supabase/supabase-js';
const {SupabaseClient, createClient} = pkg;

import { KEY, URL } from '$env/static/private'

export class Auth {
    supabase: SupabaseClient
    constructor() {
        this.supabase = createClient(URL, KEY);
    }

    async signUp(email:string, password: string) {
        const { data, error } = await this.supabase.auth.signUp({
            email: email,
            password: password,
        })

        console.log(error, data)

        return {
            data: data,
            error: error
        }
    }

    async signIn(email:string, password: string) {
        const { data, error } = await this.supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        console.log(error, data)

        return {
            data: data,
            error: error
        }
    }
}

