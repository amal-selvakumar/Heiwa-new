import './BookYourEscape.css'
import bookYourEscapeImg from '../../assets/Images/BookYourEscapeImg.svg'
import Button from '../Button/Button'

function BookYourEscape() {
  return (
    <div className='bookYourEscape'>
      <div className='bookYourEscapeImgContainer'>
        <img src={bookYourEscapeImg} alt='bookYourEscape'/>
      </div>

      <div className='bookYourEscapeContentContainer'>
        <div className='bookYourEscapeContent'>
            <div className='bookYourEscapeTitle'>
                <span>BOOK YOUR ESCAPE</span>
            </div>

            <div className='bookYourEscapeDescription'>
                <span>Unplug, unwind, and embrace the soul-soothing experiences India offers. Our boutique stays are waiting to cocoon you in comfort, nature, and wellness. Come, let India whisper its secrets to you.</span>
            </div>

            <div className='bookYourEscapeButtonContainer'>
                <Button variant='outline' size='large'>
                    <span>ENQUIRE NOW</span>
                </Button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BookYourEscape
