import { useAsyncStorage } from '@react-native-async-storage/async-storage';

interface Task {
  id: string;
  taskDescription: string;
  completed: boolean;
}

export async function getTasks() {
  const data = await useAsyncStorage('tasks').getItem();

  return JSON.parse(data as string) || [];
}

export async function createTask(task: Task) {
  try {
    const tasks = await getTasks();

    await useAsyncStorage('tasks').setItem(JSON.stringify([task, ...tasks]));
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function updateTask(tasks: Task[]) {
  await useAsyncStorage('tasks').setItem(JSON.stringify(tasks));
}
