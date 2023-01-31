import useSWR from "swr"
import {Skeleton, Table} from "antd";
import {UserDataType, UserTable} from "@/src/modules/user/components/user_table";
import {getBackendFetcher} from "@/src/common/utils/fetchers";


export default function Home() {
    const { data, error, isLoading } = useSWR( '/user', getBackendFetcher )

    if ( isLoading ) { return <Skeleton active/> }

    if ( error ) {return <span> {error.error} </span> }

    const users = data.map( ( value: UserDataType ) => {
        return {
            key: value.id + "_user",
            id: value.id,
            email: value.email,
            username: value.username
        } }
    )

    return <UserTable users={users}></UserTable>
}