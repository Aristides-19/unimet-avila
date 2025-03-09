import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qmaishikvkajuwsgmpbn.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtYWlzaGlrdmthanV3c2dtcGJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyMTI3ODcsImV4cCI6MjA1Njc4ODc4N30.dK4nItZhYEfTRGxzZWHW74-3cIY22UzUDg7-SRlGQQI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
