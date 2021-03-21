import React from 'react'
import Hr from './hr.js'

export default function Bootdemo() {
    return (
        <div id="title" name="title" style={{ margin: "30px", border: "1px solid black" }}>
            <Hr />
            <h1>Bootstrap 4 Demo</h1>
            
            <div className="inline">
                <div className="container">
                    <div className="my-3">
                        <h5>Screen Size Checker</h5>
                        <p className="inline">Resize screen to change your current Bootstrap setting:</p>
                        <div className="row">
                            <div className="col-xs-12 col-md-3" style={{ border: "1px solid black" }} >
                                <h1>
                                    <span className="badge badge-primary d-inline d-sm-none">xs</span>
                                    <span className="badge badge-primary d-none d-sm-inline d-md-none">sm</span>
                                    <span className="badge badge-primary d-none d-md-inline d-lg-none">md</span>
                                    <span className="badge badge-primary d-none d-lg-inline d-xl-none">lg</span>
                                    <span className="badge badge-primary d-none d-xl-inline">xl</span>
                                </h1>
                            </div>
                            <div className="col-xs-12 col-md-8" style={{ border: "1px solid black" }} >
                                <span className="d-inline d-sm-none"> Phones Less than 768px</span>
                                <span className="d-none d-sm-inline d-md-none">Small devices (landscape phones, 576px and up)</span>
                                <span className="d-none d-md-inline d-lg-none">Medium devices (tablets, 768px and up)</span>
                                <span className="d-none d-lg-inline d-xl-none">Large devices (desktops, 992px and up)</span>
                                <span className="d-none d-xl-inline">Extra large devices (large desktops, 1200px and up)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <h5>Bootstrap Carousel</h5>
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <ul className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ul>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg"
                                    alt="Los Angeles" width="100%" height="300" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://cdn.vox-cdn.com/thumbor/wRpp4cfB-45hqkcqImY580_3VIA=/0x0:1560x984/1200x800/filters:focal(649x386:897x634)/cdn.vox-cdn.com/uploads/chorus_image/image/59054807/chicago_future_skyline.1530213344.png"
                                    alt="Chicago" width="100%" height="300" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg"
                                    alt="New York" width="100%" height="300" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}