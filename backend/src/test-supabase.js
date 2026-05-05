// test-supabase.js - Prueba de conexión a Supabase
const supabase = require('./config/supabase.client');

async function testConnection() {
  console.log('🔄 Probando conexión a Supabase...');
  
  const { data, error } = await supabase
    .from('pokemons')
    .select('*')
    .limit(1);
  
  if (error) {
    console.error('❌ Error:', error.message);
  } else {
    console.log('✅ Conexión exitosa!');
    console.log('📦 Datos:', data);
  }
}

testConnection();