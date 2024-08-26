import { TableTypes } from "../../types/dbTypes";

export const stepsProgress: TableTypes = {
    name: "steps_progress",
    columns: {
        userId: "user_id",
        steps: "steps",
        recordedDate: "recorded_date"
    },
    content: `
        user_id INT(10) NOT NULL,
        steps INT(10) NOT NULL,
        recorded_date DATE NOT NULL,
        FOREIGN KEY (user_id) REFERENCES personal_progress_info(user_id)
    `
}