import './DescriptionBanner.scss'
import hero from '../../assets/hero.png'
export default function DescriptionBanner() {
  return (
    <div className='description_banner'>
        <ul>
            <li><span className='status_badge color-published'></span>Published</li>
            <li><span className='status_badge color-schduled'></span>Schduled</li>
            <li><span className='status_badge color-need-approval'></span>Need Approval</li>
            <li><span className='status_badge color-error'></span>Error</li>
            <li><span className='status_badge color-note'></span>Notes</li>
        </ul>
        <img src={hero} alt="User profile photo" />
    </div>
  )
}
