import { Injectable } from "@angular/core";
import { DUMMY_TASK } from "../constant/dummy-task";
import { NewTask } from "../type/Task";
import { type User } from "../type/User";

@Injectable({providedIn : 'root'})
export class TaskService {


    private tasks = DUMMY_TASK;

    getUserTask (user : User) {
        return this.tasks.filter((task) => task.userId === user.id);
    }

    addTask (taskData : NewTask , user : User) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: user.id,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.dueDate
          });
    }

    removeTaks(id : string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }
}