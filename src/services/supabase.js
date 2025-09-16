import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jckcwrhcghwonlanfdxu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impja2N3cmhjZ2h3b25sYW5mZHh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwMDMyMzIsImV4cCI6MjA3MzU3OTIzMn0.YJTjmjGMiyLPPklYvGk6JjEXDvV5zsS1mkOsE2W2A1Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
