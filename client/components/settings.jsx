import React from 'react';
// import Header from './header';
// import Footer from './footer';

function CurrentSettings(props) {
  return (
  // <div className="twoThirdsScreenSectionContainer p-0 col-12">
  //   <div className="d-flex justify-content-center font-weight-bold"><h2>Settings</h2></div>
  // <div className="twoThirdsScreenBottomBanner">Schedule</div>
  // <div className="twoThirdsScreenBottomBanner">Location</div>

    <div className="twoThirdsScreenSectionContainer p-0 col-12">
      <div id="accordion">
        <div className="card text-center">
          <div className="card-header">
            Settings
            <div className="card twoThirdsScreenBottomBanner">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Schedule
                  </button>
                </h5>
              </div>
              <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably have not heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>

            <div className="card twoThirdsScreenBottomBanner">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Location
                  </button>
                </h5>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably have not heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}

export default CurrentSettings;
