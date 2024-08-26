import { TableTypes } from "../../types/dbTypes";

export const exercise: TableTypes = {
    name: "exercise",
    columns: {
        exerciseId: "exercise_id",
        name: "name",
        imgUrl: "img_url",
        equipment: "equipment",
        muscleFamily: "muscle_family",
        description: "description"
    },
    content: `
        exercise_id INT(10) NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        img_url VARCHAR(255) NOT NULL,
        equipment VARCHAR(100) NOT NULL,
        muscle_family VARCHAR(100) NOT NULL,
        description VARCHAR(300) NOT NULL,
        PRIMARY KEY (exercise_id),
        UNIQUE (exercise_id)
    `
}