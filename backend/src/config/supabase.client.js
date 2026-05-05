// supabase.client.js
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://qlbnnbgrkqvrlgvgwkeo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsYm5uYmdya3F2cmxndmd3a2VvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5MTI1MjcsImV4cCI6MjA5MzQ4ODUyN30.KtBHudq1o4xLeRq5gXNI7EyLuSnIdQ8wN42dGa1ZM0g';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

module.exports = supabase;