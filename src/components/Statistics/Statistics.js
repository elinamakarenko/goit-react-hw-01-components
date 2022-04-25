import PropTypes from 'prop-types';
import s from "./Statistics.module.css"

function Statistics ({title, stats}){
return(<section className={s.statistics}>
    {title && <h2 className={s.title}>{title}</h2> }

<ul className={s.statList}>
{stats.map(stat=>(
    <li key={stat.id} className={s.item} style={{backgroundColor: getRandomHexColor()}}>
    <span className={s.label}>{stat.label}</span>
    <br/>
    <span className={s.percentage}>{stat.percentage}%</span>
  </li>
))}
</ul>
</section>);
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }
    ))
};
export default Statistics;