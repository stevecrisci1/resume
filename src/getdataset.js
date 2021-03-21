import React from 'react'

export default function Getdataset(){

return(
       <div>
            <p>
                public static DataSet GetDataSet(string SelectCommand, string ConnString)
                <br/>
                &#123;
                <br/>
                <div style={{paddingLeft:"10px"}}>
                    // create DataSet that will hold your Tables/data<br/>
                    DataSet ds = new DataSet("dataset");<br/>
                    // create a connection object<br/>
                    SqlConnection conn = new SqlConnection(ConnString);<br/>
                    //Create SqlDataAdapter which acts as bridge to put the data in DataSet,(data is table available by executing your SQL query)<br/>
                    SqlDataAdapter myAdapter = new SqlDataAdapter(SelectCommand, conn);<br/>
                    //fill the dataset with the data by some name say "candidatesTable"<br/>
                    myAdapter.Fill(ds, "table");<br/>
                    return ds;
                </div>
                <br/>
                &#125;
                <br/>
            </p>
       </div> 
)

}