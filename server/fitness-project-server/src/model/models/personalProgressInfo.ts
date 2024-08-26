import { TableTypes } from "../../types/dbTypes";

export const personalProgressInfo: TableTypes = {
    name: "personal_progress_info",
    columns: {
        userId: "user_id",
        weight: "weight",
        height: "height",
        bmi: "bmi",
        calories: "calories",
        steps: "steps"
    },
    content: `
        user_id INT(10) NOT NULL,
        weight DECIMAL(4,1) DEFAULT NULL,
        height DECIMAL(5,2) DEFAULT NULL,
        bmi DECIMAL(3,1) DEFAULT NULL,
        calories INT(10) DEFAULT NULL,
        steps INT(10) DEFAULT NULL,
        PRIMARY KEY (user_id),
        FOREIGN KEY (user_id) REFERENCES users(id)
    `
}