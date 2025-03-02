import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ouwxchsnwojvfftqifck.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91d3hjaHNud29qdmZmdHFpZmNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4NzY4MzAsImV4cCI6MjA1NjQ1MjgzMH0.vfPdLKEo05aQ2OSeU3GaVeZCEjIResncjze8VHCgHr0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
