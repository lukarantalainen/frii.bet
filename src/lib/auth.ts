import { createClient, SupabaseClient } from '@supabase/supabase-js'

export const supabase: SupabaseClient = createClient('https://<project>.supabase.co', '<your-anon-key>') // todo hanki myöhmemin