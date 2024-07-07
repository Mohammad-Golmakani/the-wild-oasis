import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tqxtmpboomcbkyahbdsl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxeHRtcGJvb21jYmt5YWhiZHNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxOTI1NDUsImV4cCI6MjAzMzc2ODU0NX0.uMQgURO0nw-yeQwl47XcH38LmDBwG18Iec6-tu4vPeE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
