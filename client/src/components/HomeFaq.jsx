import React, { useState } from 'react'
import '../styles/homeFaq.scss';

import { homeFAQ } from '../data';
import QuestionContainer from './QuestionContainer';





const HomeFaq = () => {
  return (
    <section className='homeFAQMainContainer'>
        <h1>Frequently Asked Questions About 99 Wonderland Park</h1>
        <div className="questionMainContainer">
            {
                homeFAQ.map((data) => {
                    return <QuestionContainer key={data.id} data={data} />
                })

            }
        </div>
    </section>
  )
}

export default HomeFaq