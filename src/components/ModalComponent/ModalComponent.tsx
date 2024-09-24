import './ModalComponent.css'
import { IoMdClose } from "react-icons/io";

type ModalProps={
   data:{ title:string;
    smallDescription:string;
    firstTitle:string;
    firstContent:string;
    secondTitle:string;
    secondContent:string;
    imageUrl:string;
   },
   onCloseButtonClick:(value:boolean) => void;
}

function ModalComponent({data,onCloseButtonClick}:ModalProps) {
    
    const handleCloseClick=()=>{
      onCloseButtonClick(false);
    }

  return (
    <div className='modalComponent'>
      <div className='modal'>
        <div className='modalImageContainer'>
          <img src={data.imageUrl} alt='imageUrl'/>
        </div>

        <div className='modalContentContainer'>
            <div className='closeIconContainer'>
              <IoMdClose onClick={handleCloseClick}/>
            </div>

            <div className='modalTitleContainer'>
                <div className='modalTitle'>
                    <span>{data.title}</span>
                </div>

                <div className='modalSmallDescriptionContainer'>
                    <span>{data.smallDescription}</span>
                </div>
            </div>

            <div className='modalDescriptionContainer'>
                <div className='modalContent'>
                    <ul>
                        <li>
                            <span>{data.firstTitle}</span>
                            <span>{data.firstContent}</span>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <span>{data.secondTitle}</span>
                            <span>{data.secondContent}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ModalComponent
