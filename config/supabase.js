'use strict';

var createClient = require('@supabase/supabase-js').createClient;

var supabaseUrl = process.env.SUPABASE_URL;
var supabaseKey = process.env.SUPABASE_KEY;

var supabase = null;

if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
  console.log('Supabase client initialized');
} else {
  console.warn('Supabase not configured. Set SUPABASE_URL and SUPABASE_KEY in .env');
}

module.exports = supabase;
