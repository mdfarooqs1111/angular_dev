import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId?: string;
  @Input({ required: true }) name?: string;
  isAddingTask!: boolean;

  constructor(private tasksService: TasksService) {}
  get selectedUserTasksDetails() {
    return this.tasksService.getUserTasks(this.userId|| '');
  }

 

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
