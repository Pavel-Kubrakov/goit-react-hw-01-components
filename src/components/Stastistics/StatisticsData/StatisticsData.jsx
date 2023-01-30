import { DowloadList, DowloadItem, Text } from "./StatisticsData.styled"

export const StatisticItem = function ({data}){
       return (
        <DowloadList>
            {data.map(({id, label, percentage}) => 
                <DowloadItem id={id} key={id}>
                    <Text>{label}</Text>
                    <Text>{percentage}%</Text>
                </DowloadItem>)}
        </DowloadList>)
}