import { supabase } from '@/api/supabase'

export const getFileFromBucket = (bucketName, fileName) => {
  const { data, error } = supabase.storage.from(bucketName).getPublicUrl(fileName)

  if (error) {
    throw new Error(error)
  }

  return data.publicUrl
}
