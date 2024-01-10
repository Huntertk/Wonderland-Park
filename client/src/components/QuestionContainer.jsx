import { useState } from 'react';
import {BiSolidChevronDownCircle, BiSolidChevronUpCircle} from 'react-icons/bi';

const QuestionContainer = ({data}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return  (
        <div className='questionNanswerContainer' >
            <div className="questionContainer" onClick={() => setIsModalOpen(prev => !prev)}>
                <h2>{data.ques}</h2>
                <div className="icon">
                   {isModalOpen ? 
                   <BiSolidChevronUpCircle />
                   : 
                   <BiSolidChevronDownCircle/>
                }
                </div>
            </div>
            {
                isModalOpen && <div className="answer">
                    <p>{data.ans}</p>
                </div>
            }
                

        </div>
    )
}

export default QuestionContainer