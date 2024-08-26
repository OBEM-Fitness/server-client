type TableColumns = {
    [key: string]: string;
}

export type TableTypes = {
    name: string;
    columns: TableColumns;
    content: string;
}

export type TablesType = {
    [key: string]: TableTypes;
}