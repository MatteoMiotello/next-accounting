import React, {ReactElement} from "react";
import useSWR from "swr";
import {getBackendFetcher} from "@/src/common/utils/fetchers";
import {Skeleton} from "antd";
import {AssetDataType, AssetTable} from "@/src/modules/asset/components/table";
import {MainLayout} from "@/src/common/components/layout/layout";
import {NextPageWithLayout} from "@/src/pages/_app";

const Asset: NextPageWithLayout = ( props: any ) => {
    const { data, error, isLoading } = useSWR( '/asset', getBackendFetcher )

    if ( isLoading ) {
         return <Skeleton active></Skeleton>
    }

    if ( error ) {
        return <p>{error.error}</p>
    }

    const assetData: AssetDataType[] = data.map( ( asset: { id: string, name: string, initial_amount: string } ) => {
        return {
            key: 'asset_' + asset.id,
            id: asset.id,
            name: asset.name,
            initialAmount: asset.initial_amount
        }
    } )

    return <AssetTable assets={assetData}/>
}

Asset.getLayout = function getLayout ( page: ReactElement ) {
    return <MainLayout>
        {page}
    </MainLayout>
}

export default Asset;