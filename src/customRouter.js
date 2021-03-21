import React from 'react'

export default function CustomRouter(){

return(
		<div id="customrouter"  name="customrouter" className="codeblock" style={{display:"none", backgroundColor:"white",margin:"30px", border:"1px solid black"}}>
          

				
				
				routes.MapRoute(<br/>
					<span style={{margin:"30px"}}></span>"MoviesByReleaseDate",<br/>
					<span style={{margin:"30px"}}></span>"movies/released/&#123;year&#125;/&#123;month&#125;",<br/>
					<span style={{margin:"30px"}}></span>new &#123; controller = "Movies", action = "ByReleaseDate" &#125;,<br/>
					<span style={{margin:"30px"}}></span>&#47;&#47;Additional Constraints <br/>
				<span style={{margin:"30px"}}></span>new &#123; year = @"\d&#123;4&#125;", month = @"\d&#123;2&#125;" &#125;<br/>
				
				<span style={{margin:"30px"}}></span>&#47;&#47;Just 2 years<br/>
				<span style={{margin:"30px"}}></span>&#47;&#47;new &#123; year = @"2015|2016", month = @"\d&#123;2&#125;" &#125;<br/>
				
				);<br/>
				
			
			<br/><br/>
			<h4>URL will show https://localhost:44364/movies/released/2012/12 </h4>
			<br/>
			and will use action in MovieController.cs: <br/>
			<br/>
			<hr/>
			
			
			
			&#47;&#47;MVC4 method<br/>
			 public ActionResult ByReleaseDate(int? year, int? month)<br/>
        &#123;<br/>
            <span style={{margin:"30px"}}></span>return Content("year = " + year + " month = " + month);<br/>
        &#125;<br/>

            <br/>
			<hr/>
			


			&#47;&#47;MVC5 method uses Attribute Routing... so enable it first.<br/>
				Add routes.MapMvcAttributeRoutes() to the routing code.<br/>
				<br/>
				<br/>
				[	Route("movies/released/&#123;year&#125;/&#123;month:regex(\\d&#123;2&#125;):range(1,12)&#125;") 	]<br/>
				public ActionResult ByReleaseYear(int year, int month)<br/>
				&#123; <br/>
				<span style={{margin:"30px"}}></span>return Content(year + "/" + month) <br/>
				&#125; <br/>	
				<hr/>

<h4>What is happening behind the scenes</h4>
<span style={{margin:"20px"}}></span>public class MoviesController : Controller <br/>
<span style={{margin:"20px"}}></span>&#123; <br/>
<span style={{margin:"30px"}}></span>&#47;&#47;GET: Movies/Random<br/>
<span style={{margin:"30px"}}></span>public ActionResult Random()<br/>
<span style={{margin:"30px"}}></span>&#123; <br/>
<span style={{margin:"40px"}}></span>var movie = new Movie() &#123;Name = "Shrek"&#125;<br/>
<span style={{margin:"40px"}}></span>&#47;&#47;var viewResult = new ViewResult()<br/>
<span style={{margin:"40px"}}></span>&#47;&#47;ViewResult.ViewData.Model<br/>
<span style={{margin:"40px"}}></span><br/>
<span style={{margin:"40px"}}></span>return view(movie);<br/>
<span style={{margin:"30px"}}></span>&#125; <br/>
<span style={{margin:"20px"}}></span>&#125; <br/>


<hr/>
View Model
<h5>For more than one table</h5>
<br/>
Add class ViewModels in the VIEWMODELS folder<br/><br/>
<br/>
<br/>
<span style={{margin:"20px"}}/>public class RandomMovieViewModel<br/>
<span style={{margin:"20px"}}/>&#123;<br/>
<span style={{margin:"30px"}}/>var movie = new Movie() &#123; Name = "Shrek" &#125;<br/>
<span style={{margin:"30px"}}/>var customers = new List&lt;Customer&gt;<br/>
<span style={{margin:"30px"}}/>&#123;<br/>
<span style={{margin:"40px"}}/>new Customer &#123; Name = "Customer 1" &#125;,<br/> 
<span style={{margin:"40px"}}/>new Customer &#123; Name = "Customer 2" &#125;,<br/>
<span style={{margin:"40px"}}/>new Customer &#123; Name = "Customer 3" &#125;,<br/>
<span style={{margin:"30px"}}/>&#125;<br/>
<span style={{margin:"30px"}}/><br/>
<span style={{margin:"30px"}}/>var viewModel = new RandomMovieViewModel<br/>
<span style={{margin:"30px"}}/>&#123;<br/>
<span style={{margin:"40px"}}/>Movie = movie,<br/>
<span style={{margin:"40px"}}/>Customers = customers<br/>
<span style={{margin:"30px"}}/>&#125;<br/>
<span style={{margin:"30px"}}/>return View(viewModel);<br/>
<span style={{margin:"20px"}}/>&#125;<br/>

<br/>
 Use it in view like:
 <span style={{margin:"20px"}}/>&lt;h4&gt; @Model.Movie.Name &lt; /h4&gt;



       </div> 
	)

}