import React from 'react'

export default function References (props) {
  return (
    <>
      <div className='displayPart'>
        <div className='title'>
          <h3> REFERENCES </h3>
        </div>

        <div className='scrollPart'>
          <ul>
            <li className='jobSquare refList'>
              Melanie Kuftic
              <br />
              Information Technology Specialist III DHRM <br />
              Supervisor <br />
              <a href='mailto:Melanie.Kuftic@dhrm.virginia.gov'>
                Melanie.Kuftic@dhrm.virginia.gov{' '}
              </a>
              <br />
              804-876-0819 <br />
              <br />
              <div className='imageLink'>
                <a
                  href='http://www.stevecrisci.com/images/melanie_kuftic.jpg'
                  target='_blank'
                  rel="noreferrer" 
                >
                  Letter
                </a>
              </div>
            </li>
            <li className='jobSquare refList'>
              Don Tebbet <br />
              Developer Analyst VA State DHRM <br />
              Co-worker <br />
              <a href='mailto:DonTebbet@dhrm.virginia.gov'>
                DonTebbet@dhrm.virginia.gov{' '}
              </a>
              <br />
              434-327-8746 <br />
              <br />
            </li>
            <li className='jobSquare refList'>
              Tom Song <br />
              Web Content Manager at KnifeCenter <br />
              Co-worker <br />
              <a href='mailto:tom@knifecenter.com'>tom@knifecenter.com</a>{' '}
              <br />
              202-557-9500 <br />
              <br />
              <div className='imageLink'>
                <a
                  href='http://www.stevecrisci.com/images/tom_song.jpg'
                  target='_blank'
                  rel="noreferrer" 
                >
                  Letter
                </a>
              </div>
            </li>
            <li className='jobSquare refList'>
              Phil Pastorek <br />
              Software engineer at Washington Post <br />
              <a href='mailto:contact@hirethisdeveloper.com'>
                contact@hirethisdeveloper.com
              </a>
              <br />
              703-953-6046 <br />
              <br />
            </li>
            <li className='jobSquare refList'>
              Leona Jones <br />
              TSTC - Virginia Commonwealth University <br />
              Supervisor <br />
              <a href='mailto:lgjones@vcu.edu'>lgjones@vcu.edu</a>
              <br />
              804-828-6235 <br />
              <br />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
