import styles from '../styles/Title.module.scss';

const { title, title__letter } = styles;

const Title = ({className}: {className?: string}) => (
  <div className={`${title} ${className}`}>
    <span className={title__letter}>m</span>
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