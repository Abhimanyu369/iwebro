import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Hiring from "./pages/Hiring";
import LandingPage from "./pages/HireNow";

// old
import Add_benefit from './adminpanel/pages/Add_benefit';
import Add_access_project from './adminpanel/pages/Add_access_project';
import Add_service from './adminpanel/pages/Add_service';
import Add_remote_hiring from './adminpanel/pages/Add_remote_hiring';
import Add_blog from './adminpanel/pages/Add_blog';
import Add_client from './adminpanel/pages/Add_client';
import Add_company from './adminpanel/pages/Add_company';
import Add_dev from './adminpanel/pages/Add_dev';
import Add_developer from './adminpanel/pages/Add_developer';
import Add_event from './adminpanel/pages/Add_event';
import Add_job from './adminpanel/pages/Add_job';
import Add_marquee from './adminpanel/pages/Add_marquee';
import Add_review from './adminpanel/pages/Add_review';
import Add_skill from './adminpanel/pages/Add_skill';
import Add_project from './adminpanel/pages/Add_project';
import Add_testimonial from './adminpanel/pages/Add_testimonial';
import Add_process from './adminpanel/pages/Add_process';
import Add_team1 from './adminpanel/pages/Add_team1';
import Add_team2 from './adminpanel/pages/Add_team2';
import Add_team_content from './adminpanel/pages/Add_team_content';
import Admin_profile from './adminpanel/pages/Admin_profile';
import Blog from './client/pages/Blog';
import Company from './client/pages/CompnyDetail';
import Dashboard from './adminpanel/pages/Dashboard';
import Developer from './client/components/Talent/Developer';
import DeveloperDetail from './client/pages/DeveloperDetail';
import Error from './client/pages/Error';
import Event from './client/pages/Event';
import Login from './adminpanel/pages/Login';
import Requirements from './client/pages/Requirements';
import Reviews from './client/pages/Reviews';
import StartHire from './client/pages/StartHire';
import TalentPage from './client/pages/TalentPage';
import Update_benefit from './adminpanel/pages/Update_benefit';
import Update_access_project from './adminpanel/pages/Update_access_project';
import Update_remote_hiring from './adminpanel/pages/Update_remote_hiring';
import Update_service from './adminpanel/pages/Update_service';
import Update_blog from './adminpanel/pages/Update_blog';
import Update_client from './adminpanel/pages/Update_client';
import Update_company from './adminpanel/pages/Update_company';
import Update_dev from './adminpanel/pages/Update_dev';
import Update_developer from './adminpanel/pages/Update_developer';
import Update_event from './adminpanel/pages/Update_event';
import Update_job from './adminpanel/pages/Update_job';
import Update_marquee from './adminpanel/pages/Update_marquee';
import Update_review from './adminpanel/pages/Update_review';
import Update_skill from './adminpanel/pages/Update_skill';
import Update_testimonial from './adminpanel/pages/Update_testimonial';
import Update_project from './adminpanel/pages/Update_project';
import Update_process from './adminpanel/pages/Update_process';
import Update_team1 from './adminpanel/pages/Update_team1';
import Update_team2 from './adminpanel/pages/Update_team2';
import Update_team_content from './adminpanel/pages/Update_team_content';
import Update_apply_developer from './adminpanel/pages/Update_apply_developer';

import View_benefit from './adminpanel/pages/View_benefit';
import View_access_project from './adminpanel/pages/View_access_project';
import View_remote_hiring from './adminpanel/pages/View_remote_hiring';
import View_service from './adminpanel/pages/View_service';
import View_client from './adminpanel/pages/View_client';
import View_blog from './adminpanel/pages/View_blog';
import View_company from './adminpanel/pages/View_company';
import View_dev from './adminpanel/pages/View_dev';
import View_developer from './adminpanel/pages/View_developer';
import View_event from './adminpanel/pages/View_event';
import View_job from './adminpanel/pages/View_job';
import View_marquee from './adminpanel/pages/View_marquee';
import View_skill from './adminpanel/pages/View_skill';
import View_testimonial from './adminpanel/pages/View_testimonial';
import View_review from './adminpanel/pages/View_review';
import View_hire from './adminpanel/pages/View_hire';
import View_process from './adminpanel/pages/View_process';
import View_project from './adminpanel/pages/View_project';
import View_team1 from './adminpanel/pages/View_team1';
import View_team2 from './adminpanel/pages/View_team2';

import AddDeveloper from './talentpanel/pages/Add_developer';
import TalentDashboard from './talentpanel/pages/Dashboard';
import LoginTalent from './talentpanel/pages/Login_talent';
import EditDeveloper from './talentpanel/pages/Update_developer';
import ViewDeveloper from './talentpanel/pages/View_developer';
import AddRequirement from './talentpanel/pages/Add_requirement';
import UpdateRequirement from './talentpanel/pages/Update_requirement';
import ViewRequirement from './talentpanel/pages/View_requirement';
import Talent_profile from './talentpanel/pages/Talent_profile';
import Job_profile from './adminpanel/pages/Job_profile';
import Developer_profile from './adminpanel/pages/Developer_profile';
import View_team_content from './adminpanel/pages/View_team_content';
import View_apply_developer from './adminpanel/pages/View_apply_developer ';

function App() {
  return (
    <>
      {/* Developers */}
      {/* Benefits */}
      {/* Flow */}

      {/* <BuildTeam /> */}
      {/* <Requirements /> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hiring" element={<Hiring />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/hire-now" element={<LandingPage />} />

          {/* old */}
          <Route path="/active-requirements" Component={Requirements} />
          <Route path="/talent-partner" Component={TalentPage} />
          <Route path="/reviews" Component={Reviews} />
          <Route path="/company" Component={Company} />
          <Route path="/start-hire" Component={StartHire} />
          <Route path="/event" Component={Event} />
          <Route path="/blog" Component={Blog} />
          <Route path="/deve-detail" Component={DeveloperDetail} />
          <Route path="/developer" Component={Developer} />

          <Route path="/admin" Component={Dashboard} />
          <Route path="/login" Component={Login} />
          {/* <Route path='/Register' Component={Register} /> */}
          <Route path="/admin_profile" Component={Admin_profile} />
          <Route path="/Add_benefit" Component={Add_benefit} />
          <Route path="/Add_service" Component={Add_service} />
          <Route path="/Add_access_project" Component={Add_access_project} />
          <Route path="/Add_remote_hiring" Component={Add_remote_hiring} />
          <Route path="/Add_client" Component={Add_client} />
          <Route path="/Add_blog" Component={Add_blog} />
          <Route path="/Add_talent" Component={Add_company} />
          <Route path="/Add_dev" Component={Add_dev} />
          <Route path="/Add_developer" Component={Add_developer} />
          <Route path="/Add_event" Component={Add_event} />
          <Route path="/Add_job" Component={Add_job} />
          <Route path="/Add_marquee" Component={Add_marquee} />
          <Route path="/Add_skill" Component={Add_skill} />
          <Route path="/Add_process" Component={Add_process} />
          <Route path="/Add_project" Component={Add_project} />
          <Route path="/Add_testimonial" Component={Add_testimonial} />
          <Route path="/Add_team1" Component={Add_team1} />
          <Route path="/Add_team2" Component={Add_team2} />
          <Route path="/Add_team_content" Component={Add_team_content} />
          <Route path="/Add_review" Component={Add_review} />
          <Route path="/Update_benefit" Component={Update_benefit} />
          <Route
            path="/Update_access_project"
            Component={Update_access_project}
          />
          <Route
            path="/Update_remote_hiring"
            Component={Update_remote_hiring}
          />
          <Route path="/Update_service" Component={Update_service} />
          <Route path="/Update_client" Component={Update_client} />
          <Route path="/Update_blog" Component={Update_blog} />
          <Route path="/Update_talent" Component={Update_company} />
          <Route path="/Update_dev" Component={Update_dev} />
          <Route path="/Update_developer" Component={Update_developer} />
          <Route
            path="/Update_apply_developer"
            Component={Update_apply_developer}
          />
          <Route path="/Update_event" Component={Update_event} />
          <Route path="/Update_job" Component={Update_job} />
          <Route path="/Update_marquee" Component={Update_marquee} />
          <Route path="/Update_skill" Component={Update_skill} />
          <Route path="/Update_project" Component={Update_project} />
          <Route path="/Update_process" Component={Update_process} />
          <Route path="/Update_testimonial" Component={Update_testimonial} />
          <Route path="/Update_review" Component={Update_review} />
          <Route path="/Update_team1" Component={Update_team1} />
          <Route path="/Update_team2" Component={Update_team2} />
          <Route path="/Update_team_content" Component={Update_team_content} />
          <Route path="/View_benefit" Component={View_benefit} />
          <Route path="/View_access_project" Component={View_access_project} />
          <Route path="/View_remote_hiring" Component={View_remote_hiring} />
          <Route path="/View_service" Component={View_service} />
          <Route path="/View_client" Component={View_client} />
          <Route path="/View_blog" Component={View_blog} />
          <Route path="/View_talent" Component={View_company} />
          <Route path="/View_dev" Component={View_dev} />
          <Route path="/View_developer" Component={View_developer} />
          <Route path="/View_event" Component={View_event} />
          <Route path="/View_job" Component={View_job} />
          <Route path="/View_marquee" Component={View_marquee} />
          <Route path="/View_skill" Component={View_skill} />
          <Route path="/View_process" Component={View_process} />
          <Route path="/View_testimonial" Component={View_testimonial} />
          <Route path="/View_project" Component={View_project} />
          <Route path="/View_review" Component={View_review} />
          <Route path="/View_team1" Component={View_team1} />
          <Route path="/View_team2" Component={View_team2} />
          <Route path="/View_team_content" Component={View_team_content} />
          <Route
            path="/View_apply_developer"
            Component={View_apply_developer}
          />
          <Route path="/View_hire" Component={View_hire} />
          <Route path="/job_profile" Component={Job_profile} />
          <Route path="/developer_profile" Component={Developer_profile} />

          <Route path="/talent" Component={LoginTalent} />
          <Route path="/talent_dashboard" Component={TalentDashboard} />
          <Route path="/talent_add_developer" Component={AddDeveloper} />
          <Route path="/talent_edit_developer" Component={EditDeveloper} />
          <Route path="/talent_view_developer" Component={ViewDeveloper} />
          <Route path="/talent_add_requirement" Component={AddRequirement} />
          <Route
            path="/talent_edit_requirement"
            Component={UpdateRequirement}
          />
          <Route path="/talent_view_requirement" Component={ViewRequirement} />
          <Route path="/talent_profile" Component={Talent_profile} />

          <Route path="*" Component={Error} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
