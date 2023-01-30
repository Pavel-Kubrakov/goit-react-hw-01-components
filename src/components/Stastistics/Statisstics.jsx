import data from "../../data.json"
import { StatisticsTitle } from "./StatisticsTitle/StatisticsTitle"
import { Section } from "./Statisstics.styled"
import { StatisticItem } from "./StatisticsData/StatisticsData"


export const Statisstics = function (){
    return (
    <Section>
        <StatisticsTitle title="Upload stats"/> 
        <StatisticItem data={data}/>
    </Section>)
}