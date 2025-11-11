// Importation du client Supabase
import { createClient } from '@supabase/supabase-js'

// Chargement des variables d'environnement (depuis ton .env.example)
const SUPABASE_URL = 'https://dxtckfdhzfbwdtptwuza.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4dGNrZmRoemZid2R0cHR3dXphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0ODgyMzcsImV4cCI6MjA3ODA2NDIzN30.YDB8fDz2PAI5ZrBt4DCWAuUkST9NbY0DbC-iMEbw-Mo'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Exemple de fonction : récupération des utilisateurs
async function getUsers() {
  const { data, error } = await supabase.from('users').select('*')
  if (error) {
    console.error('Erreur lors de la récupération :', error.message)
  } else {
    console.log('Utilisateurs :', data)
  }
}

// Exécution du test
getUsers()
