import React from "react";
import {Table} from "antd/lib";
import {ColumnsType} from "antd/lib/table";
import {useTranslation} from "next-i18next";

export interface AssetDataType {
    key: string;
    id: string;
    name: string;
    initialAmount: string;
}
interface AssetTableProps {
    assets: AssetDataType[];
}


export const AssetTable: React.FC<AssetTableProps> = ( props ) => {
    const { t } = useTranslation('translation')
    const columns: ColumnsType<AssetDataType> = [
        {
            key: 'asset_id',
            title: t( 'asset.id_column' ),
            dataIndex: 'id'
        },
        {
            key: 'asset_name',
            title: t( 'asset.name_column' ),
            dataIndex: 'name',
        },{
            key: 'asset_initial_value',
            title: t( 'asset.initial_value_column' ),
            dataIndex: 'initialAmount'
        }
    ]

    return <Table
        dataSource={props.assets}
        columns={columns}
    />
}