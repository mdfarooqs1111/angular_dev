import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from './dummy-tasks';
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required:true}) userId?:string;
  @Input({required:true}) name?: string;
  isAddingTask!: boolean;

  tasks = dummyTasks;


  get selectedUserTasksDetails(){
    return this.tasks.filter((task)=> task.userId === this.userId)
  }

  onCompletetask(taskId:string) {
   this.tasks = this.tasks.filter((task)=> task.id != taskId)
  }

  onStartAddTask(){
    this.isAddingTask = true
  }
}
