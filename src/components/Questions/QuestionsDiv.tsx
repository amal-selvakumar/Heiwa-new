import Button from '../Button/Button'
import './QuestionsDiv.css'

function QuestionsDiv() {
  return (
    <div className='questionsDiv'>
      <div className='questionContentContainer'>
        <span>Take the first step towards serenity. Share your retreat preferences</span>
      </div>

      <div className='questionsButtonContainer'>
        <Button variant='outline' size='large'>
          <span>CHAT VIA WHATSAPP</span>
        </Button>

        <Button variant='outline' size='large'>
          <span>ENQUIRE NOW</span>
        </Button>
      </div>
    </div>
  )
}

export default QuestionsDiv
