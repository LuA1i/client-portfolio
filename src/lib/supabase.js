import { createClient } from '@supabase/supabase-js'
import env from './.env'

const supabaseUrl = 'https://gbfbtealewakpwbofyjz.supabase.co'
const supabaseKey = `${env.SUPABASE_REACT_KEY}`
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase 