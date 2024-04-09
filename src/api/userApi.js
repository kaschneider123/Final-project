import { supabase } from '@/api/supabase'

export const fetchActualUser = async () => {
  const { data } = await supabase.auth.getSession()
  return data?.session?.user || null
}

export const createNewUser = async (email, password) => {
  const {
    data: { user },
    error
  } = await supabase.auth.signUp({ email, password })

  if (error) {
    throw new Error(error.message)
  }

  return user
}

export const logIn = async (email, password) => {
  const {
    data: { user },
    error
  } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    console.error('Error de inicio de sesión en Supabase:', error)
    throw new Error(error.message)
  }

  return user
}

export const logout = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) {
    throw new Error(error.message)
  }
  return undefined
}

export const seeCurrentUser = async () => {
  const { user, error } = supabase.auth.user()
  if (error) {
    throw new Error(error.message)
  }
  return user
}


