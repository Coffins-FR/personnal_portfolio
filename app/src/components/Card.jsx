import React from 'react'

const Card = ({...props}) => {
  return (
    <div className="card-container">
        <div className="card">
            <img src={props.img} alt="" />
            <div className='smokey-overlay'>
                <p className='number'>{props.number}.</p>
                <h2 className='card-title'>{props.title}</h2>
                <p className='annotate'>{props.describe}</p>
            </div>
        </div>
    </div>
  )
}

export default Card