<div
    className="tab-pane fade show active"
    id={"v-pills-BHDStar", "v-pills-" + maCumRap}
    role="tabpanel"
    aria-labelledby={"BHDStar", maCumRap}
>
    <div className="row">
        <div className="col-3">
            <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
            >
                {/* layout Tabpane-section */}
                {/* <a className="nav-link active" id="BHDSection-tab" data-toggle="pill" href="#BHDSection" role="tab" aria-controls="BHDSection" aria-selected="true">Chi nhanh 1</a> */}
                {hanleRenderCinemaUnit()}
            </div>
        </div>
        {/* BHD section-unit */}
        <div className="col-9">
            <div className="tab-content" id="v-pills-tabContent">
                {/* layout Tabpane Section-unit */}
                {/* <div className="tab-pane fade show active" id="BHDSection" role="tabpanel" aria-labelledby="BHDSection-tab">Phim abc</div>*/}
                {handleRenderCinemaUnitMovies()}
            </div>
        </div>
    </div>
</div>;

onClick={() => (handleMaHeThongRap("CGV"))}

<div class="row">
  <div class="col-3">
    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
      <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
    </div>
  </div>
  <div class="col-9">
    <div class="tab-content" id="v-pills-tabContent">
      <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
      
    </div>
  </div>
</div>

import React from 'react'

export default function demo() {
  return (
    <div>
      
    </div>
  )
}
