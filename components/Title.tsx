import styles from '../styles/Title.module.scss';

const { title, title__letter } = styles;

const Title = ({style}: {style?: {[key:string]: any}}) => (
  <div className={title} style={style}>
    <span className={title__letter}>M</span>
    <span className={title__letter}>e</span>
    <span className={title__letter}>t</span>
    <span className={title__letter}>t</span>
    <span className={title__letter}>a</span>
    <span className={title__letter}>w</span>
    <span className={title__letter}>a</span>
    <span className={title__letter}>y</span>
  </div>
)

export default Title;