const API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pbmR4cm1pcmpvZGdmYXBuaWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE0NTA1NDAsImV4cCI6MjAyNzAyNjU0MH0.dyoc54C3hioQwLoR9cEBJIqjD9E3p5HLQ3a1MPrQMqc'

const PROJECT_URL = 'https://nindxrmirjodgfapnijr.supabase.co'

import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(PROJECT_URL, API_KEY)
