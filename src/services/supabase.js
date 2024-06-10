import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://cdseqbsmnixxeliewnkp.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkc2VxYnNtbml4eGVsaWV3bmtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgwMTQ3NzcsImV4cCI6MjAzMzU5MDc3N30.W2Lm5NZXm93aczdNNIb4l4S8wmOl9oFG2I0DjJCpwkQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
