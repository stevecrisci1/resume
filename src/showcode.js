import React from 'react'

export default function Getdataset(){

return(
<div>


<div id="getdataset" name="getdataset" className="codeblock" style={{display:"none",paddingLeft:"30px"}}>

public static DataSet GetDataSet(string SelectCommand, string ConnString)
<br/>
&#123;
<br/>
<div style={{paddingLeft:"30px"}}>
&#47;&#47; create DataSet that will hold your Tables/data<br/>
DataSet ds = new DataSet("dataset");<br/>
&#47;&#47; create a connection object<br/>
SqlConnection conn = new SqlConnection(ConnString);<br/>
&#47;&#47;Create SqlDataAdapter which acts as bridge to put the data in DataSet,(data is table available by executing your SQL query)<br/>
SqlDataAdapter myAdapter = new SqlDataAdapter(SelectCommand, conn);<br/>
&#47;&#47;fill the dataset with the data by some name say "candidatesTable"<br/>
myAdapter.Fill(ds, "table");<br/>
return ds;
</div>
<br/>
&#125;
<br/>
</div> 

<div id="getdatareader" name="getdatareader" className="codeblock" style={{display:"none",paddingLeft:"30px"}}>
public static string GetStringValue(string SelectCommand, string connection)
<br/>
&#123;
<br/>
<div style={{paddingLeft:"30px"}}>
string retVal = "";<br/>
&#47;&#47;create connection<br/>
SqlConnection conn = new SqlConnection(connection);<br/>
conn.Open();<br/>
SqlCommand command = conn.CreateCommand();<br/>
command.CommandText = SelectCommand;<br/>
command.CommandType = CommandType.Text;<br/>
&#47;&#47;get query results into reader<br/>
SqlDataReader reader = command.ExecuteReader();<br/>

&#47;&#47;loop through reader<br/>
while (reader.Read())
<br/>

&#123;
<br/>

<div style={{paddingLeft:"30px"}}>
retVal = Convert.ToString(reader["retVal"]);
</div>

}<br/>
reader.Close();<br/>
conn.Close();<br/>
return retVal; 
<br/>
&#125;
</div>
&#125;
<br/>
</div> 




<div id="uppercasefirst" name="uppercasefirst" className="codeblock" style={{display:"none",paddingLeft:"30px"}}>
static string UppercaseFirst(string s)&#123;
<br/>

<div style={{paddingLeft:"30px"}}>


&#47;&#47; Check for empty string.<br/>
if (string.IsNullOrEmpty(s))
<br/>
&#123;
<div style={{paddingLeft:"30px"}}>
return string.Empty;
</div>
&#125;
<br/>
&#47;&#47; Return char and concat substring.<br/>
return char.ToUpper(s[0]) + s.Substring(1);<br/>
</div>
&#125;
<br/>
</div>





<div id="isvalidimage" name="isvalidimage" className="codeblock" style={{display:"none",paddingLeft:"30px"}}>
public static bool IsValidImage(string filename)&#123;
<br/>

<div style={{paddingLeft:"30px"}}>
try
&#123;
<div style={{paddingLeft:"30px"}}>
WebRequest Request1 = WebRequest.Create(filename);<br/>
WebResponse Responce1 = Request1.GetResponse();<br/>
System.Drawing.Image img1 = System.Drawing.Image.FromStream(Responce1.GetResponseStream());
</div>
&#125;<br/>
catch
&#123;
<div style={{paddingLeft:"30px"}}>
&#47;&#47; Image.FromFile will throw this if file is invalid.<br/>
return false;
</div>
&#125;<br/>
return true;


</div>
&#125;
<br/>
</div>








</div>
)

}