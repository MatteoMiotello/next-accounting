import React from "react";
import {Table} from "antd/lib";
import {ColumnsType} from "antd/lib/table";
import {useTranslation} from "next-i18next";

export interface UserDataType {
    key: string
    id: string
    email: string
    username: string
}

export interface UserTableProps {
    users: UserDataType[]
}
export const UserTable: React.FC<UserTableProps> = ( props: UserTableProps ) => {
    const { t } = useTranslation( 'translation' )

    const columns: ColumnsType<UserDataType> = [
        {
            title: t("user.id_column"),
            dataIndex: "id",
            key: "col_id",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "col_email"
        },
        {
            title: "Username",
            dataIndex: "username",
            key: "col_username"
        }
    ]

    return <Table
        columns={columns}
        dataSource={props.users}
    />
}