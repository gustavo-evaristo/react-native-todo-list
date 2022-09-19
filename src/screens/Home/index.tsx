import { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import uuid from 'react-native-uuid';
import ClipBoardIcon from '../../assets/clipboard.png';
import { Button, Header, Input, TaskCard, TaskInfo } from '../../components';
import { createTask, getTasks, updateTask } from '../../storage';
import { THEME } from '../../theme';
import { styles } from './styles';

interface Task {
  id: string;
  taskDescription: string;
  completed: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputText, setInputText] = useState('');

  function handleChangeText(text: string) {
    setInputText(text);
  }

  async function fetchTasks() {
    const tasks = await getTasks();
    setTasks(tasks);
  }

  async function handleCreateTask() {
    if (!inputText) return;

    const task = {
      id: uuid.v4() as string,
      taskDescription: inputText,
      completed: false,
    };

    await createTask(task);

    setTasks((state) => [task, ...state]);

    setInputText('');
  }

  async function handleDeleteTask(id: string) {
    const filteredTask = tasks.filter((task: Task) => task.id !== id);

    setTasks(filteredTask);

    await updateTask(filteredTask);
  }

  async function handleCompletedTask(id: string) {
    const taskUpdated = tasks.map((task: Task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTasks(taskUpdated);

    await updateTask(taskUpdated);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.contentInput}>
          <Input onChangeText={handleChangeText} value={inputText} />
          <Button onPress={handleCreateTask} />
        </View>

        <View style={[styles.contentTaskInfo, !tasks.length && styles.taskInfoBorderBottom]}>
          <TaskInfo title="Criadas" count={tasks.length} />

          <TaskInfo
            title="Concluídas"
            count={tasks.filter((task) => task.completed).length}
            textColor={THEME.COLORS.PURPLE}
          />
        </View>

        <View style={styles.contentTasks}>
          <FlatList
            ListEmptyComponent={() => (
              <View style={styles.contentEmptyTasks}>
                <Image source={ClipBoardIcon} />
                <Text style={styles.titleEmptyTasks}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.descriptionEmptyTasks}>Crie tarefas e organize seus itens a fazer</Text>
              </View>
            )}
            data={tasks}
            keyExtractor={(item) => item.taskDescription}
            renderItem={({ item, index }) => (
              <TaskCard
                completed={!!item.completed}
                taskDescription={item.taskDescription}
                key={index}
                handleDelete={() => handleDeleteTask(item.id)}
                handleCompleted={() => handleCompletedTask(item.id)}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}
