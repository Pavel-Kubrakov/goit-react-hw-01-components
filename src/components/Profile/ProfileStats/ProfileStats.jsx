import stats from "../ProfileStats/Stats.module.css"

export const Stats = function ({followers,views,likes}){
return (
    <ul className={stats.stats}>
        <li className={stats.stat}>
            <span className={stats.name}>Followers</span>
            <span className={stats.number}> {followers.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span>
        </li>
        <li className={stats.stat}>
            <span className={stats.name}>Views</span>
            <span className={stats.number}> {views.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span>
        </li>
        <li className={stats.stat}>
            <span className={stats.name}>Likes</span>
            <span className={stats.number}> {likes.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span>
        </li>
    </ul>)
}