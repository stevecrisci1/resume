import React, { Component } from 'react'


export default class MSSQL extends Component {
  constructor() {
    super()
    this.state = {
      appData: [],
      isLoading: true,
      lastname: ""

    }
    this.handleChange = this.handleChange.bind(this)
  }

  //http://stevecrisci-003-site3.htempurl.com/person/2
  //{"recordsets":[[{"ID":2,"LastName":"Jones","FirstName":"Steve","HireDate":null,"EnrollmentDate":"2016-12-31T00:00:00.000Z","Discriminator":"Student"}]],"recordset":[{"ID":2,"LastName":"Jones","FirstName":"Steve","HireDate":null,"EnrollmentDate":"2016-12-31T00:00:00.000Z","Discriminator":"Student"}],"output":{},"rowsAffected":[1]}

  //appFunction() = {  //code here  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  componentDidMount() {
    this.getSQLData("characterNumber")
  }

  getSQLData(charNum) {
    const fetchParams = {
      method: 'GET',
      mode: 'no-cors',
      credentials: "same-origin", //include, same-origin
      headers: { Accept: 'application/json', 'Content-Type': 'application/json', },

    };
    let url = "http://stevecrisci-003-site3.htempurl.com/person/"


    /*{"recordsets":
    [
    [{
      "ID":2,
      "LastName":"Jones",
      "FirstName":"Steve",
      "HireDate":null,
      "EnrollmentDate":"2016-12-31T00:00:00.000Z",
      "Discriminator":"Student"
      }
    ]
    ],
    "recordset":[{"ID":2,"LastName":"Jones","FirstName":"Steve",
    "EnrollmentDate":"2016-12-31T00:00:00.000Z","Discriminator":"Student"}
    ],
    "output":{},
    "rowsAffected":[1]}
    */

   /* fetch(url, fetchParams)
      .then(response => response.json())
      .then(data => {
        this.setState({ appData: data.recordset }, () => {
          if (data.recordsets && data.recordsets.length === 0)
            this.setState({ appData: [{ "ID": 0, "LastName": "Missing Data" }] })
        })//end of setState
      })
      */
  }



  render() {
    return (
      <div className="row">
        <div className="col-sm-7" style={{padding:"40px"}}>
          <h2>What is this about?</h2>
             <p>
                A server exist that can be reached at url <a href="http://stevecrisci-003-site3.htempurl.com/person" target="_blank"  rel="noopener noreferrer" >
                  http://stevecrisci-003-site3.htempurl.com/person/
              </a>.
              </p>

              <p>All data from the person table is retrieved with the above url using the new Javascript <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" target="_blank"  rel="noopener noreferrer" >FETCH</a> command.</p>

              <p>If a number is included as a parameter the person with that ID number is retrieved. <a href="http://stevecrisci-003-site3.htempurl.com/person/1" target="_blank"  rel="noopener noreferrer" >
                http://stevecrisci-003-site3.htempurl.com/person/1
              </a>
              </p>

              <p>If you click on either link a new page will open with the JSON data.</p>

            </div>
            <div className="col-sm-4" style={{paddingTop:"50px"}}>
               Here I used the Javascript array MAP function to display each of the names retrieved.
               

                <div className="row">
                  <div className="col-sm-2">
                    {this.state.appData.map((person, index) => <div key={index}>{person.FirstName}</div>)}
                  </div>
                  <div className="col-sm-6">
                    {this.state.appData.map((person, index) => <div key={index}>{person.LastName}</div>)}
                  </div>
                </div>

            </div> 

          
        </div>
        
        )
      }
}
