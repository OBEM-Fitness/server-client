import { TableTypes } from "../../types/dbTypes";

export const goalInfo: TableTypes = {
    name: "goal_info",
    columns: {
        workoutId: "workout_id",
        description: "description",
        timeSpan: "time_span",
        weightGoal: "weight_goal",
        stepsGoalAvg: "steps_goal_avg",
        caloriesGoalAvg: "calories_goal_avg"
    },
    content: `
        workout_id INT(10) NOT NULL,
        description VARCHAR(100) DEFAULT NULL,
        time_span ENUM('daily', 'monthly', '3months', '6months', '1year') NOT NULL,
        weight_goal DECIMAL(4,1) DEFAULT NULL,
        steps_goal_avg INT(10) DEFAULT NULL,
        calories_goal_avg INT(10) DEFAULT NULL,
        FOREIGN KEY (workout_id) REFERENCES workout_plan(workout_id)
    `
}