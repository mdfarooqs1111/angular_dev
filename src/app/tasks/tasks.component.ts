import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId?: string;
  @Input({ required: true }) name?: string;
  isAddingTask!: boolean;

  tasks = dummyTasks;

  get selectedUserTasksDetails() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompletetask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id != taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.isAddingTask = false;
    console.log(taskData);

    this.tasks.unshift({
      id : new Date().getTime().toString(),
      userId: this.userId || '',
      title: taskData.title,
      summary : taskData.summary,
      dueDate : taskData.date,
    })
  }
}
