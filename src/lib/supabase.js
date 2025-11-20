import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://gbfbtealewakpwbofyjz.supabase.co'
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdiZmJ0ZWFsZXdha3B3Ym9meWp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExOTM1MTYsImV4cCI6MjA3Njc2OTUxNn0.ssJjcYaJyKRuSq65Ebvy28QHU8Oz2ysjJ7Fo02TVUXA`
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase 