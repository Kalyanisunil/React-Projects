

import {
  MDBCard,
  MDBCardImage,
 
  MDBCardTitle,
} from "mdb-react-ui-kit";
import NewsSmallCard from "./NewsSmallCard";

export default function FeaturedSection() {
  return (
    <div className="container  text-light py-4">
      <div className="row g-3 align-items-stretch">
        {/* Left large card */}
        <div className="col-lg-8 col-md-12">
          <MDBCard className="border-0 text-light h-100 position-relative">
            <MDBCardImage
              src="/images/featured.avif"
              alt="Main Feature"
              position="top"
              className="img-fluid rounded h-100 w-100 object-fit-cover"
            />
            <div className="card-img-overlay d-flex flex-column justify-content-end p-3 bg-gradient">
              <small className="text-uppercase text-danger fw-bold">
                What to Watch For
              </small>
              <MDBCardTitle className="mt-2 fs-3 fw-bold">
                What To Watch For in the Sao Paulo Grand Prix
              </MDBCardTitle>
            </div>
          </MDBCard>
        </div>

        {/* Right small stacked cards */}
        <div className="col-lg-4 col-md-12 d-flex flex-column gap-3">
          <NewsSmallCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyD0y7GDTmtFY2X3MbNKihUznJqAzV6r__Sg&s"
            title="Verstappen’s Qualifying exit ‘painful’ – Mekies"
          />
          <NewsSmallCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyD0y7GDTmtFY2X3MbNKihUznJqAzV6r__Sg&s"
            title="Perez confident for podium challenge"
          />
          <NewsSmallCard
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyD0y7GDTmtFY2X3MbNKihUznJqAzV6r__Sg&s"
            title="Ferrari focusing on race pace"
          />
            <NewsSmallCard
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyD0y7GDTmtFY2X3MbNKihUznJqAzV6r__Sg&s"
            title="Ferrari focusing on race pace"
          />
            <NewsSmallCard
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyD0y7GDTmtFY2X3MbNKihUznJqAzV6r__Sg&s"
            title="Ferrari focusing on race pace"
          />
            <NewsSmallCard
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyD0y7GDTmtFY2X3MbNKihUznJqAzV6r__Sg&s"
            title="Ferrari focusing on race pace"
          />
        </div>
      </div>
    </div>
  );
}
