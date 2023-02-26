import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const FrameFourteen = React.lazy(() => import("pages/FrameFourteen"));
const Frame103 = React.lazy(() => import("pages/Frame103"));
const FrameSixteen = React.lazy(() => import("pages/FrameSixteen"));
const Frame102 = React.lazy(() => import("pages/Frame102"));
const FrameNinetyEight = React.lazy(() => import("pages/FrameNinetyEight"));
const FrameFifteen = React.lazy(() => import("pages/FrameFifteen"));
const Frame104 = React.lazy(() => import("pages/Frame104"));
const Frame101 = React.lazy(() => import("pages/Frame101"));
const FrameNinetySeven = React.lazy(() => import("pages/FrameNinetySeven"));
const FrameThirteen = React.lazy(() => import("pages/FrameThirteen"));
const FrameNine = React.lazy(() => import("pages/FrameNine"));
const Frame106 = React.lazy(() => import("pages/Frame106"));
const Frame100 = React.lazy(() => import("pages/Frame100"));
const FrameSeventeen = React.lazy(() => import("pages/FrameSeventeen"));
const FrameEleven = React.lazy(() => import("pages/FrameEleven"));
const FrameOne = React.lazy(() => import("pages/FrameOne"));
const FrameTwo = React.lazy(() => import("pages/FrameTwo"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/frametwo" element={<FrameTwo />} />
          <Route path="/frameone" element={<FrameOne />} />
          <Route path="/frameeleven" element={<FrameEleven />} />
          <Route path="/frameseventeen" element={<FrameSeventeen />} />
          <Route path="/frame100" element={<Frame100 />} />
          <Route path="/frame106" element={<Frame106 />} />
          <Route path="/framenine" element={<FrameNine />} />
          <Route path="/framethirteen" element={<FrameThirteen />} />
          <Route path="/frameninetyseven" element={<FrameNinetySeven />} />
          <Route path="/frame101" element={<Frame101 />} />
          <Route path="/frame104" element={<Frame104 />} />
          <Route path="/framefifteen" element={<FrameFifteen />} />
          <Route path="/frameninetyeight" element={<FrameNinetyEight />} />
          <Route path="/frame102" element={<Frame102 />} />
          <Route path="/framesixteen" element={<FrameSixteen />} />
          <Route path="/frame103" element={<Frame103 />} />
          <Route path="/framefourteen" element={<FrameFourteen />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
