import { supabase } from '@/api/supabase'

const TABLE_NAME = 'tasks'

export const fetchAllTasks = async () => {
  const { data, error } = await supabase.from(TABLE_NAME).select('*')
  if (error) {
    throw new Error(error.message)
  }
  return data
}

export const createTask = async (task) => {
  const { error, data } = await supabase.from(TABLE_NAME).insert(task).select()
  if (error) {
    throw new Error(error.message)
  }
  return data[0]
}

export const deleteSingleTask = async (task) => {
  const { error } = await supabase.from(TABLE_NAME).delete().eq('id', task)
  if (error) {
    throw new Error(error.message)
  }
  return true
}


//***************************/
export const updateSingleTask = async (task) => {
  const { error } = await supabase.from(TABLE_NAME).update(task).eq('id', task.id)
  if (error) {
    throw new Error(error.message)
  }
}

export const isCompleteTask = async (taskId) => {
  try {
    const { error } = await supabase.from(TABLE_NAME).update({ is_complete: true }).eq('id', taskId)
    if (error) {
      throw new Error(error.message)
    }
    return true
  } catch (error) {
    console.error('Error al marcar la tarea como completada', error)
    return false
  }
}



      /*      <button  @click="_deleteTask(task.id)" >Delete</button>
      <button @click="_editTask(task.id)" >Edit</button>
      <button  @click="_isComplete(task.id)" >Done</button>*/