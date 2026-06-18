import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://qodcleqiczlmjzkciwvm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvZGNsZXFpY3psbWp6a2Npd3ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5Mzg5MjQsImV4cCI6MjA5NjUxNDkyNH0.fWsIvp0KdiKL9wnxIlLqUe7slisz68g1brFyw9UxQbc'
);