import React from 'react'

export default function MoreMovie(props){

    return(
    <div style={{margin:"30px"}} className="inline">
        



        <div className="row">
                <div className=" col-sm-4">
                    <img src={props.results.Poster} alt={props.results.Title} style={{width:"200px"}}/>
                </div>

                <div className="inline col-sm-5">
                    <h5>{props.results.Title} ({props.results.Year})</h5>
                    <span className="inline"> {props.results.Runtime}</span>
                    <br/>Rated: {props.results.Rated}
                    <hr/>{props.results.Production}
                    <br/>by {props.results.Writer}
                    <br/>{props.results.Genre}
                </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                        <hr/>{props.results.Plot}
                        <hr/>{props.results.Actors}
                        <br/><a href={props.results.Website}>Website</a>
                        <br/>Awards: {props.results.Awards}
                        <br/>Box Office: {props.results.BoxOffice}
                        <br/>Country: {props.results.Country}
                        <br/>DVD: {props.results.DVD}
                        <br/>Director: {props.results.Director}
                        <br/>Language: {props.results.Language}
                        <br/>Meta Score: {props.results.Metascore}
                        <br/>Released: {props.results.Released}
                        <br/>Response: {props.results.Response}
                        <br/>Type: {props.results.Type}
                        <br/>IMDB ID: {props.results.imdbID}
                        <br/>IMDB Rating:    {props.results.imdbRating}
                        <br/>IMBD Votes: {props.results.imdbVotes}
            </div>
        </div>





    </div>

    )
}