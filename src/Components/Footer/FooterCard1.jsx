import React from 'react'
const FooterCard1 = ({ type, heading }) => {
  return (
    <>
        <div className='footercard1-contener'>
      <h1>{heading}</h1>
      <div>
        {type.map((i, index) => (
          <div className='footercard1-lable' key={index}>
            <h1 fontSize="15px" _hover={{ color: "whiteAlpha.600" }}>          
              {i.labels}
            </h1>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default FooterCard1