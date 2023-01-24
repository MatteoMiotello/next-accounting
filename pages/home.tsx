import useSWR from "swr"
import basicApiFetcher from "@/pages/utils/fetchers";
import {Table} from "antd";
import {ColumnsType} from "antd/lib/table";

interface UserDataType {
    id: string
    email: string
    username: string
}

const columns: ColumnsType<UserDataType> = [
    {
        title: "Id",
        dataIndex: "id",
        key: 0,
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "1"
    },
    {
        title: "Username",
        dataIndex: "username",
        key: 2
    }
]


export default function Home() {
    const { data, error, isLoading } = useSWR( '/user', basicApiFetcher )


    if ( isLoading ) { return <span>loading---</span> }

    if ( error ) {return <span> {error.error} </span> }

    const dataSource = data.map( ( value: UserDataType ) => {
        return {
            id: value.id,
            email: value.email,
            username: value.username
        } }
    )

    return <Table
        columns={columns}
        dataSource={dataSource}
    >
    </Table>
}