import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Carousel() {
  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel"  data-bs-interval="3000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/img/bg-img/breadcumb1.jpg" className="d-block w-100" style={{height:"550px", objectFit:"cover"}} alt="" />
        </div>
        <div className="carousel-item">
          <img src="/img/bg-img/breadcumb2.jpg" className="d-block w-100" style={{height:"550px", objectFit:"cover"}} alt="" />
        </div>
        <div className="carousel-item">
          <img src="/img/bg-img/breadcumb3.jpg" className="d-block w-100" style={{height:"550px", objectFit:"cover"}} alt="salad" />
              </div>
               <div className="carousel-item">
          <img src="/img/bg-img/breadcumb4.jpg" className="d-block w-100" style={{height:"550px", objectFit:"cover"}} alt="salad" />
              </div>
               <div className="carousel-item">
          <img src="/img/bg-img/breadcumb5.jpg" className="d-block w-100" style={{height:"550px", objectFit:"cover"}} alt="salad" />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}
