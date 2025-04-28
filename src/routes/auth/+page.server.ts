import { supabase } from "../../lib/auth";;
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = ({ params, url }) => {
    const email: string = url.searchParams.get("email") ?? "unknown";
    const password: string = url.searchParams.get("password") ?? "unknown";

    supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

}