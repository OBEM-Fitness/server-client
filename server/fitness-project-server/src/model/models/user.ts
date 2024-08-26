import { TableTypes } from "../../types/dbTypes";

export const user: TableTypes = {
    name: "users",
    columns: {
        id: "id",
        username: "username",
        email: "email",
        password: "password",
        phone: "phone",
        profileImg: "profile_img",
        created: "created",
        updated: "updated",
    },
    content: `
        id INT(10) NOT NULL AUTO_INCREMENT,
        username VARCHAR(15) NOT NULL UNIQUE,
        email VARCHAR(50) NOT NULL,
        password VARCHAR(100) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        profile_img VARCHAR(255) NOT NULL,
        created DATE NOT NULL,
        updated DATE NOT NULL,
        PRIMARY KEY (id)
    `
}