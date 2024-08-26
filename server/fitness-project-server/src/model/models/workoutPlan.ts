import { TableTypes } from "../../types/dbTypes";

export const workoutPlan: TableTypes = {
    name: "workout_plan",
    columns: {
        userId: "user_id",
        workoutId: "workout_id",
        name: "name",
        startDate: "start_date",
        finished: "finished"
    },
    content: `
        user_id INT(10) NOT NULL,
        workout_id INT(10) NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        start_date DATE NOT NULL,
        finished BOOLEAN NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
    `
}