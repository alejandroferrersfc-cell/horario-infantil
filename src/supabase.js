import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://juvkkrazhufadasrvxzv.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_UWI3lgUVmQEdt_1LS9W2Pg_RHW030Uw'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)