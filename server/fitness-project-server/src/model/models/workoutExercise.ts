import { TableTypes } from "../../types/dbTypes";

export const workoutExercise: TableTypes = {
    name: "workout_exercise",
    columns: {
        workoutId: "workout_id",
        exerciseId: "exercise_id",
        reps: "reps",
        sets: "sets",
        burntCal: "burnt_cal"
    },
    content: `
        workout_id INT(10) NOT NULL,
        exercise_id INT(10) NOT NULL,
        reps INT(3) NOT NULL,
        sets INT(3) NOT NULL,
        burnt_cal INT(10) NOT NULL,
        FOREIGN KEY (workout_id) REFERENCES workout_plan(workout_id),
        FOREIGN KEY (exercise_id) REFERENCES exercise(exercise_id)
    `
}