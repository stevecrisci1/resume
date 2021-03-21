import React from 'react'
import Job from './job.js'

export default function ExperienceList (props) {
  return (
    <div>
      <Job
        name='td'
        fullname='Talent Digital'
        position='Lead Developer'
        start='DEC 2020'
        end='MAR 2021'
        description={
          <div>
            <div>
              Digest complex Oracle data structure and created stored procedures
              to populate dynamic reports for Virginia State pesticide
              applicators and business data. Added UI functionality applying
              consistent design with department associated modules in client web
              projects. Increased reporting time by 75% implementing indexes.
              Created wireframes, integrated SelectPDF, documented project
              customization.
            </div>
            <div>
              <ul class='jobSkills'>
                <li>C#</li>
                <li>Javascript</li>
                <li>ASP.NET</li>
                <li>Oracle</li>
                <li>SelectPDF</li>
                <li>Visual Studio 2019</li>
                <li>Entity Framework 6.0</li>
                <li>Razor</li>
              </ul>
            </div>
          </div>
        }
      />

      <Job
        name='bg'
        fullname='BrownGreer, PLC'
        position='Full Stack Developer'
        start='NOV 2019'
        end='JUN 2020'
        description={
          <div>
            <div>
              Designed a consumer-facing web site drag-and-drop feature which
              allowed claimants to submit court documents easier. Developed a
              dynamic data-driven blog for www.browngreer.com. Developed an
              Excel integrated Email Blaster application integrated with
              SendGrid email service. Mentored on unit testing with Selenium as
              an automation tool for cross-browser testing existing BG sites.
            </div>
            <ul class='jobSkills'>
              <li>C#</li>
              <li>Javascript</li>
              <li>SQL 2019</li>
              <li>MVC</li>
              <li>ASP.NET</li>
              <li>Selenium</li>
              <li>Visual Studio 2019</li>
              <li>Azure DevOps</li>
              <li>SendGrid</li>
              <li>Razor</li>
            </ul>
          </div>
        }
      />

      <Job
        name='core'
        fullname='Core Consulting, Inc'
        position='React Front End Developer'
        start='JULY 2019'
        end='AUG 2019'
        description={
          <div>
            <div>
              Creating a blog application for VA Senators to review department
              regulations within the Virginia ​Division of Legislative Automated
              Systems​. ​ Integrated TinyMCE which enhanced form textareas with
              RTF. Integrated React-Select adding a dropdown multi-select
              element.
            </div>
            <div>
              <ul class='jobSkills'>
                <li>C#</li>
                <li>React JS</li>
                <li>SQL 2017</li>
                <li>TinyMCE</li>
              </ul>
            </div>
          </div>
        }
      />

      <Job
        name='data'
        fullname='Data Concepts'
        position='Senior Web Developer'
        start='OCT 2017'
        end='JUN 2019'
        description={
          <div>
            <div>
              Joined Agile-based team to design and develop the 2019 Virginia
              State Department of Human Resources Online Open Enrollment
              System.This involved integration with legacy mainframe
              data.Applied bootstrap and responsive-web design to achieve
              desired UI results.Identified and corrected Americans with
              Disabilities Act(ADA) website discrepancies. Provided programming
              documentation and developed user-guide.Lead developer on public
              2017 & 2018 ACA Certification data form.
              <ul>
                <li>Modified and created Single-Page Applications</li>
                <li>Agile-based environment using Team Foundation Server </li>
                <li>
                  Performed MS SQL data mining and ad-hoc queries to create
                  statistical reports.
                </li>
                <li>Unit Testing</li>
                <li>
                  VA State Commonwealth Cyber Security Awareness Training{' '}
                </li>
              </ul>
            </div>
            <div>
              <ul class='jobSkills'>
                <li>Angular JS</li>
                <li>C#</li>
                <li>MVC</li>
                <li>Javascript</li>
                <li>SQL 2017</li>
                <li>Entity Framework</li>
                <li>Selenium</li>
              </ul>
            </div>
            <div className='imageLink'>
              <a
                href='http://www.stevecrisci.com/images/acacert.jpg'
                target="_blank" rel="noreferrer"
              >
                Example
              </a>
            </div>

            <div className='imageLink'>
              <a
                href='http://www.stevecrisci.com/images/melanie_kuftic.jpg'
                target="_blank" rel="noreferrer" 
              >
                Reference
              </a>
            </div>
          </div>
        }
      />

      <Job
        name='Tahzoo'
        fullname='Tahzoo'
        position='Senior Front End Developer'
        start='DEC 2016'
        end='JUL 2017 '
        description={
          <div>
            <div>
              Trained in MarkLogic, NODE & XQuery to fulfill the needs required
              within a Tesla contract. Assisted with POC modifications and an
              internal employee mapping web site within an Agile
              environment.Trained with MarkLogic Data Hub and Cloud Service.
              <ul>
                <li>Achieving MarkLogic certification. </li>
                <li>Entity Framework 6(Model First). </li>
                <li>Javascript/RAZOR modifications. </li>
              </ul>
            </div>
            <div>
              <ul class='jobSkills'>
                <li>C#</li>
                <li>Marklogic</li>
                <li>Flexbox</li>
                <li>Razor</li>
                <li>Entity Framework</li>
              </ul>
            </div>
          </div>
        }
      />

      <Job
        name='KnifeCenter'
        fullname='KnifeCenter'
        position='.NET Web Developer'
        start='NOV 2015'
        end=' MAY 2016'
        description={
          <div>
            <div>
              Hired to improve customer service and purchasing response
              time.Interviewed and worked with staff to gather information
              involving both customer and order processing difficulties.Enhanced
              the in -house customer service application(StoneEdge).Extended
              existing WebDNA web pages.Developed accounting web APIs.
              <ul>
                <li>
                  Added data validation to web forms and fixed invalid XML data
                  exports.
                </li>
                <li>
                  Extended shopping menu with external web modal window for
                  customer UI.
                </li>
              </ul>
            </div>

            <div>
              <ul class='jobSkills'>
                <li>C#</li>
                <li>Javascript</li>
                <li>MS ACCESS</li>
                <li>StoneEdge Accounting</li>
                <li>WebDNA</li>
                <li>Bootstrap</li>
                <li>Visual Studio 2015</li>
              </ul>
            </div>

            <div className='imageLink'>
              <a
                href='http://www.stevecrisci.com/images/tom_song.jpg'
                target="_blank" rel="noreferrer"
              >
                Reference
              </a>
            </div>
          </div>
        }
      />

      <Job
        name='shockoe'
        fullname='Shockoe, LLC'
        position='AngularJS Front End Developer'
        start='JUL 2016'
        end='AUG 2016'
        description={
          <div>
            <ul class='jobSkills'>
              <li>AngularJS</li>
              <li>C#</li>
              <li>Javascript</li>
              <li>JQuery</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Bootstrap</li>
              <li>ASP.NET</li>
              <li>MVC</li>
              <li>MongoDB</li>
              <li>Postman</li>
              <li>Sketch</li>
              <li>NODE.JS</li>
            </ul>
            <div>
              Team member in training to develop a responsive web application
              for Capital One utilizing the AngularJS framework.Development
              accomplished on Macintosh environment using Git, BitBucket,
              Sourcetree and JIRA in an Agile environment.Created AngularJS
              based mobile applications.
            </div>
          </div>
        }
      />

      <Job
        name='parallon'
        fullname='Consult2Hire @ HCA-Parallon'
        position='.NET Application Developer'
        start='JUL 2015'
        end='SEP 2015'
        description={
          <div>
            <div>
              Successfully created a Windows service application to monitor
              incoming emails. Application extracted, stored relevant data and
              redirect any received emails to each appropriate Billing
              department.
              <ul>
                <li>
                  Created Windows Service scheduling daily or monthly FTP
                  transfer of files.
                </li>
                <li>Automated component of accounting billing procedure. </li>
              </ul>
            </div>
            <div>
              <ul class='jobSkills'>
                <li>C#</li>
                <li>Javascript</li>
                <li>SQL 2013</li>
                <li>ASP.NET</li>
              </ul>
            </div>
          </div>
        }
      />

      <Job
        name='smart'
        fullname='Smart Resources @ Interactive Financial Marketing Group'
        position='API Consultant'
        start='JUL 2015'
        end='SEP 2015'
        description={
          <div>
            <div>
              Requested to enhance the www.carloan.com site to display customer
              credit rating scores.Created WCF Application using SOAP to
              retrieve data from TransUnion web service host.
              <ul>
                <li>
                  Created WCF code to acquire TransUnion consumer credit score.
                </li>
              </ul>
            </div>
            <div>
              <ul class='jobSkills'>
                <li>C#</li>
                <li>Visual Basic.NET</li>
                <li>SQL 2013</li>
                <li>DLL</li>
                <li>WCF</li>
                <li>VSS</li>
                <li>TFS</li>
                <li>ASP.NET</li>
                <li>XML</li>
              </ul>
            </div>
          </div>
        }
      />

      <Job
        name='vita'
        fullname=" VA Information Technologies Agency-Governor's Office"
        position='Senior .NET Developer'
        start='OCT 2014'
        end='DEC 2014'
        description={
          <div>
            <div>
              Developing and enhancing VA State web sites utilizing MVC,
              ASP.NET, C# and Microsoft CRM.Followed technical specifications to
              create a web page allowing public searching for certified notaries
              throughout Virginia State.
              <a
                href='https://solutions.virginia.gov/Notary/Search/Search'
                _target="_blank" rel="noreferrer" 
              >
                https: //solutions.virginia.gov/Notary/Search/Search
              </a>
              <ul>
                <li>
                  Create, test and deploy the Commonwealth of VA Public Notary
                  Search web page.
                </li>
                <li>
                  Authorize and Authenticate user logins and implement a single
                  sign on(SSO) web site.
                </li>
              </ul>
            </div>
            <div>
              <ul class='jobSkills'>
                <li>C#</li>
                <li>MVC5</li>
                <li>Bootstrap</li>
                <li>MS CRM</li>
                <li>TFS</li>
                <li>ASP.NET</li>
                <li>Reactive Web Development</li>
                <li>Bootstrap</li>
                <li>RAZOR</li>
                <li>Agile</li>
              </ul>
            </div>
          </div>
        }
      />

      <Job
        name='ukrops'
        fullname="Ukrop's Dress Express"
        position='Information Systems Manager'
        start='JUN 2011'
        end='FEB 2014'
        description={
          <div>
            <div>
              Fast paced environment where I was always achieving concept to
              production deadlines.Production support routing incoming
              application issues to appropriate support team members.Provided
              day-to-day operational support in many departments.Developing and
              debugging.NET applications, writing/executing SQL queries and
              implementing web site enhancements.Web design, maintenance and
              integration of eCommerce apparel sales site.Upgrade web sites from
              ASP classic/VBScript to ASP.NET/C#.Company personnel computer
              assistance and training.Developed intranet system flow application
              integrating all departments with web products.SQL Server 2008
              database maintenance and table updates.Developed internal Contact
              Management System for sales department.Produced sales and web user
              -based reports for management.Internal web-based application
              development to review sales, inventory, and reports.Introduced
              advanced integrating of nopCommerce web sales software.
              <ul>
                <li>
                  Data migration(ETL) from MS Access/Excel/XML to SQL Server
                  2005/2008.
                </li>
                <li>Manage 40 + eCommerce websites. </li>
                <li>
                  Develop, test and deploy new ASP.NET/C#/JavaScript
                  enhancements.
                </li>
                <li>
                  Integrate orders with Sage AccPac ERP system via SQL Server
                  Integration Service(SSIS).
                </li>
              </ul>
            </div>
            <div>
              <ul class='jobSkills'>
                <li>C#</li>
                <li>JavaScript</li>
                <li>SQL 2008</li>
                <li>ASP.NET</li>
                <li>SSRS</li>
                <li>SSIS</li>
                <li>VB Script</li>
                <li>MVC3</li>
                <li>Magellan CMS</li>
                <li>NopCommerce</li>
                <li>SAGE Account</li>
              </ul>
            </div>

            <div className='imageLink'>
              <a
                href='http://www.stevecrisci.com/images/dan_sagan.jpg'
                target="_blank" rel="noreferrer"
              >
                Reference
              </a>
            </div>
          </div>
        }
      />

      <Job
        name='smart2'
        fullname='Smart Resources @ Daily Planet'
        position='.NET Developer'
        start='NOV 2010'
        end='APR 2011'
        description={
          <div>
            <div>
              Discussions with client(The Daily Planet) to gather requirements,
              coordinate functional design and layout, project scope, identify
              and deploy the appropriate resources to support systems
              development. Created home-made CMS to make site uploads and
              trained end-users. Developed user-guide documentation.
            </div>
            <div>
              <ul class='jobSkills'>
                <li>C#</li>
                <li>Javascript</li>
                <li>ASP.NET 3.5 SP1</li>
                <li>Visual Studio 2008</li>
              </ul>
            </div>

            <div className='imageLink'>
              <a
                href='http://www.stevecrisci.com/images/dp1.jpg'
                target="_blank" rel="noreferrer"
              >
                Reference
              </a>
            </div>
          </div>
        }
      />

      <Job
        name='precision'
        fullname='Signature Consultants @ Precision IR'
        position='.NET Developer'
        start='DEC 2009'
        end='SEP 2010'
        description={
          <div>
            <div>
              Maintained and upgraded existing web pages. Integrated stock data
              into financial trend charts and user-friendly web page wireframes
              provided by marketing department. Introduced translation
              dictionary for displaying text in multiple languages. Created
              monthly analytical customer report reflecting company's
              performance and interaction with potential investment firms.
            </div>
            <div>
              <ul class='jobSkills'>
                <li>C#</li>
                <li>Javascript</li>
                <li>SQL 2005</li>
                <li>ASP.NET 2.0</li>
                <li>AJAX</li>
                <li>Dundas Charts</li>
                <li>Visual Studio 2008</li>
                <li>Telerik UI</li>
              </ul>
            </div>
            <div className='imageLink'>
              <a
                href='http://www.stevecrisci.com/images/precisionir2.jpg'
                target="_blank" rel="noreferrer"
              >
                Reference
              </a>
            </div>

            <div className='imageLink'>
              <a
                href='http://www.stevecrisci.com/images/chris_fetty.jpg'
                target="_blank" rel="noreferrer"
              >
                Reference
              </a>
            </div>

            <div className='imageLink'>
              <a
                href='http://www.stevecrisci.com/images/arsmonthly.jpg'
                target="_blank" rel="noreferrer"
              >
                Example
              </a>
            </div>

            <div className='imageLink'>
              <a
                href='http://www.stevecrisci.com/images/arsmonthly2.jpg'
                target="_blank" rel="noreferrer"
              >
                Example
              </a>
            </div>
          </div>
        }
      />

      <Job
        name='vml'
        fullname='Virginia Municipal League'
        position='.NET Developer'
        start='JUL 2008'
        end='NOV 2009'
        description={
          <div>
            <div>
              Manage software project implementation from conception through
              deployment;including transforming business requirements into
              system specifications, database schema, GUI design and code.
              Design applications and web sites while adhering to specified
              timelines.Interacted with end-users throughout development and
              testing. Import member emails into local SQL-based NavRisk
              Insurance application. Automate import of Excel data into building
              assessment tables saving hundreds of man-hours data entry with
              zero percent error margins. Create many-to-many SQL database and
              create user interface to maintain lists for medical facilities and
              doctors. Imported GenSource insurance claims data to accurately
              create invoices and eliminate overlooked manual billing
              errors.Update and debug both intranet and public web pages.
            </div>
            <div>
              <ul class='jobSkills'>
                <li>C#</li>
                <li>SQL 2005</li>
                <li>ASP.NET 3.5 SP1</li>
                <li>XML</li>
                <li>AJAX</li>
                <li>Web Parts</li>
                <li>LINQ</li>
              </ul>
            </div>
          </div>
        }
      />

      <Job
        name='vedp'
        fullname='Virginia Economic Development'
        position='.NET Developer'
        start='NOV 2007'
        end='MAY 2008'
        description={
          <div>
            <div>
              Upgrade internal, web-based contact management system using ASP
              2.0, VB.NET, and C# with a SQL Server back-end.Outdated code
              translation/analysis was performed utilizing Visual Studio 2008
              debug tools.Upgrade web site using AJAX to provide users with
              methods to access data more conveniently.Update web
              contents.Translate application users request to code, providing ad
              - hoc modifications for both access web pages and reports.Observe
              on - line user data handling with SQL SERVER 2005/2008 and SQL
              TOOLS.
            </div>
            <div>
              <ul class='jobSkills'>
                <li>C#</li>
                <li>VB.NET</li>
                <li>ASP 2.0</li>
                <li>Visual Studio 2008</li>
                <li>AJAX</li>
                <li>SQL 2005</li>
              </ul>
            </div>
          </div>
        }
      />

      <Job
        name=''
        fullname='Meta Pharmacy Systems, Floral Park'
        position='Senior Analyst'
        start='AUG 2006'
        end='NOV 2007'
        description={
          <div>
            <div>
              Provide debug support on medical software to improve patient
              medication safety for small to medium-sized hospital facilities.
              Manage handling of pharmacy/patient clinical data using HL7
              message communication codes between hospital equipment. Maintain
              and update MS SQL server. Provide online remote customer service.
            </div>
            <div>
              <ul class='jobSkills'>
                <li>FoxPro</li>
                <li>SQL</li>
                <li>HL7</li>
              </ul>
            </div>
          </div>
        }
      />

      <Job
        name='vcu'
        fullname='VCU-Transportation Safety Training Center'
        position='Senior Analyst'
        start='JUN 2003'
        end='MAR 2006'
        description={
          <div>
            <div>
              Developed DMV approved application for Virginia State police to
              report and analyze traffic accidents to identify "high accident"
              locations. Responsibilities included database design, creating
              stored procedures, data integrity and extensive SQL report design.
              Performed on-site installations and training, coordinated Virginia
              Traffic Records conferences.Designed and routinely updated
              division website. Position required statistical data mining and
              customer relations.
            </div>
            <div>
              <ul class='jobSkills'>
                <li>FoxPro</li>
                <li>C#</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
        }
      />

      <Job
        name='vdot'
        fullname='VA. Department of Transportation'
        position='Senior Analyst'
        start='MAR 2001'
        end='JUL 2002'
        description={
          <div>
            <div>
              Assist Virginia State Pavement Engineers with data extraction,
              transfer and loading. Developed SQL queries involving road and
              highway pavement conditions. Developed field data integrity
              application for VDOT Central Office ' s highway preventive
              maintenance program to eliminating overlooked data entry errors.
              Design dynamic statistic application for pavement engineers.
              Create ad hoc Federal Highway and VA State Pavement Conditions
              road severity reports.
            </div>
            <div>
              <ul class='jobSkills'>
                <li>FoxPro</li>
                <li>MS SQL</li>
              </ul>
            </div>

            <div className='imageLink'>
              <a
                href='http://www.stevecrisci.com/images/affan_habib.jpg'
                target="_blank" rel="noreferrer"
              >
                Reference
              </a>
            </div>
          </div>
        }
      />

      <Job
        name='xperts`'
        fullname='Xperts Consulting, Inc.'
        position='Software Programmer'
        start='AUG 2000'
        end='OCT 2000'
        description={
          <div>
            <div>
              Query customer database files to locate incompatible U.S.Postal
              Office mailing addresses for specialized customer orders and
              mailing lists. Assist with modifications to BCC Mail-Manager
              application for managing mail lists.Create SQL queries extracting
              data for specialized customer orders and mailings. Generate ad-hoc
              statistical reports analyzing postal costs, delivery areas, and
              customer targets.
            </div>
            <div>
              <ul class='jobSkills'>
                <li>FoxPro</li>
                <li>MS SQL</li>
              </ul>
            </div>
          </div>
        }
      />

      <Job
        name='dsd'
        fullname='DataBase Software Designs'
        position='C.E.O.'
        start='JUN 1992'
        end='JAN 2002'
        description={
          <div>
            <div>
              Managed company advertising, sales, accounting, project scopes,
              team management. Analyze business needs to design custom RDBMS
              data applications.Investigate and resolve user computer
              software/hardware problems.Conducted training and supervised five
              employees as well as VCU interns. Customers included Hollywood
              Cemetery, Henrico Couny PD, IRS, and Quebecor Printing.
            </div>
            <div>
              <ul class='jobSkills'>
                <li>FoxPro</li>
                <li>MS SQL</li>
                <li>QuickBooks</li>
                <li>Crystal Reports</li>
              </ul>
            </div>
          </div>
        }
      />
    </div>
  )
}
