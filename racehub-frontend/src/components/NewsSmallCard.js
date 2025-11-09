import React from "react";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle } from "mdb-react-ui-kit";

export default function NewsSmallCard({ image, title }) {
  return (
    <MDBCard className=" border-0 text-light"  style={{ backgroundColor: "#111", color: "#fff" }} >
      <div className="row g-0 align-items-center">
        <div className="col-4">
          <MDBCardImage
            src={image}
            alt={title}
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-8 " >
          <MDBCardBody className="py-2 " >
            <MDBCardTitle className="fs-6 mb-0">{title}</MDBCardTitle>
          </MDBCardBody>
        </div>
      </div>
    </MDBCard>
  );
}
