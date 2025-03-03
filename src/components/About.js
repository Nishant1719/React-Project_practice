import React, {useState} from 'react'

export default function About() {
  const [myStyle,setmyStyle] = useState({
    color : 'black',
    backgroundColor : 'white',
    border : '1px solid white'
  });
  const [myBtnText,setmyBtnText] = useState('Enable Dark Mode');

  const handleDarkBtn = () => {
    if(myStyle.color === 'white')
    {
      setmyStyle( 
        {color : 'black',
        backgroundColor : 'white',
        border : '1px solid white'
      });
      setmyBtnText('Enable Dark Mode');
    }
    else
    {
      setmyStyle( 
        {color : 'white',
        backgroundColor : 'black',
        border : '1px solid white'
      });
      setmyBtnText('Enable Light Mode');
    }
  };


  return (
    <>
    <div className="container" style={myStyle}>
      <h2 className='my-2'>About Us</h2>
        <div className="accordion my-3" id="accordionExample" style={myStyle}>
          <div className="accordion-item" >
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
          <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
        <button className="btn btn-primary my-1" onClick={handleDarkBtn}>{myBtnText}</button>
    </div>
    </>
  )
}
