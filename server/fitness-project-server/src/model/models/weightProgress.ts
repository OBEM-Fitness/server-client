import { TableTypes } from "../../types/dbTypes";

export const weightProgress: TableTypes = {
    name: "weight_progress",
    columns: {
        userId: "user_id",
        weight: "weight",
        recordedDate: "recorded_date"
    },
    content: `
        user_id INT(10) NOT NULL,
        weight DECIMAL(4,1) NOT NULL,
        recorded_date DATE NOT NULL,
        FOREIGN KEY (user_id) REFERENCES personal_progress_info(user_id)
    `
}