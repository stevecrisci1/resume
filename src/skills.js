import React from 'react'

export default function Skills () {
  var years = [
    { subject: 'HTML', date: 2007 },
    { subject: 'CSS', date: 2008 },
    { subject: 'C#', date: 2008 },
    { subject: 'SQL', date: 1992 },
    { subject: 'MS SQL ', date: 2006 },
    { subject: '.NET VB ', date: 2003 },
    { subject: '.NET C# ', date: 2008 },
    { subject: 'Javascript ', date: 2009 },
    { subject: 'AJAX ', date: 2007 },
    { subject: 'REST API ', date: 2016 },
    { subject: 'VSS/TFS', date: 2006 },
    { subject: 'Visual Studio', date: 2008 },
    { subject: 'XML ', date: 2008 },
    { subject: 'JSON ', date: 2016 },
    { subject: 'MVC3 ', date: 2012 },
    { subject: 'MVC5 ', date: 2014 },
    { subject: 'Jquery', date: 2016 },
    { subject: 'HL7 ', date: 2006 },
    { subject: 'NoSQL ', date: 2016 },
    { subject: 'RAZOR ', date: 2014 },
    { subject: 'Bootstrap ', date: 2014 },
    { subject: 'MS CRM ', date: 2014 },
    { subject: 'MarkLogic ', date: 2016 },
    { subject: 'AngularJS ', date: 2016 },
    { subject: 'React ', date: 2018 },
    { subject: 'Agile', date: 2014 },
    { subject: 'LINQ ', date: 2008 },
    { subject: 'Selenium ', date: 2017 },
    { subject: 'SSRS ', date: 2011 },
    { subject: 'SSIS ', date: 2011 },
    { subject: 'VB Script ', date: 2011 },
    { subject: 'ASP.NET ', date: 2007 },
    { subject: 'Dundas Charts ', date: 2009 },
    { subject: 'WCF', date: 2015 },
    { subject: 'MongoDB', date: 2016 },
    { subject: 'Node JS', date: 2016 },
    { subject: 'Entity Framework 6', date: 2016 },
    { subject: 'ESRI GIS', date: 2006 },
    { subject: 'Azure', date: 2019 },
    { subject: 'Oracle', date: 2020 },
    { subject: 'PrintPDF', date: 2020 },
    { subject: 'Google Analytics', date: 2016 },
    { subject: 'Microsoft Office', date: 2000 },
    { subject: 'Android Development', date: 2015 },
    { subject: 'Wordpress', date: 2020 },
    { subject: 'CMS', date: 2010 },
    { subject: 'DreamWeaver', date: 2004 },
    { subject: 'Sage 50 Accounting', date: 2011 },
    { subject: 'Crystal Reports', date: 2011 },
    { subject: 'FoxPro', date: 1992 },
    { subject: 'Wireframes', date: 1992 },
    { subject: 'DBase', date: 1992 }
  ]

  function compare (a, b) {
    const subjectA = a.subject.toUpperCase()
    const subjectB = b.subject.toUpperCase()
    let comparison = 0
    if (subjectA > subjectB) {
      comparison = 1
    } else if (subjectA < subjectB) {
      comparison = -1
    }
    return comparison
  }

  years.sort(compare)
  var today = new Date()
  var currentYear = today.getFullYear()

  return (
    <>
      <div className='displayPart'>
        <div className='title'>
          <h3> SKILLS </h3>
        </div>
        <div className='scrollPart'  style={{width:"800px"}}>
          <div className='jobSquare'>
            {years.map((item, index) => (
              <div>
                <h3 className='skillListing'>
                  {item.subject} ( {currentYear - item.date} years )
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
