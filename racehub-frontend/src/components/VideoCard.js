
import {
  MDBCard,

  MDBCardImage
} from 'mdb-react-ui-kit';
import NewsSmallCard from './NewsSmallCard';

export default function VideoCard() {
  return (
      <>
          <div className=' grid'>
              <div className='g-col-10'><MDBCard className='vdoCard'>
      <MDBCardImage src='https://images.ps-aws.com/c?url=https%3A%2F%2Fd3cm515ijfiu6w.cloudfront.net%2Fwp-content%2Fuploads%2F2022%2F11%2F20053227%2Fmax-verstappen-on-pole-ahead-of-sergio-perez-and-charles-leclerc-planetf1.jpg' alt='...' position='top' />
     
              </MDBCard></div>
              <div className='g-col-2 d-inline'>
                  <NewsSmallCard></NewsSmallCard>
                   <NewsSmallCard></NewsSmallCard>
              </div>
              
          </div>
      </>
  );
}