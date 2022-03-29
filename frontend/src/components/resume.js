import { useState, useEffect, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

const ResumeComponent = ({ match }) => {
  const [userResumeData, setUserResumeData] = useState({});
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const fetchedData = async () => {

      await axios
        .get(`http://localhost:5000/api/${match.params.id}`)
        .then((res) => {
          if (res.data.success) {
            setMounted(true);
            setUserResumeData(res.data.resumeData);
          }
        });
    };
    fetchedData();
  }, [match.params.id]);

  return (
    <Fragment>
      {mounted ? (
        <Container className="mt-4 mb-2">
          <main className="resume-section pl-4">
            <header className="header">
              <Row className="border-bottom border-dark w-100">
                <Col sm={12} md={12} className="py-4 px-4">
                  <h1 className="text-dark font-weight-bold">
                    {userResumeData.userFirstName}&nbsp;
                    {userResumeData.userSecondName}
                  </h1>
                  <h6 className="h5 text-dark">
                    {userResumeData.userProfession}
                  </h6>
                  <div className="d-flex justify-content-between user-social-icons">
                    <p>{userResumeData.userPhoneNumber}</p> <span>*</span>
                    <a
                      href={`https://www.linkedin.com/in/${userResumeData.userLinkedInProfileName}/`}
                      className="text-dark"
                    >
                      linkedin/alamin
                    </a>
                    <span>*</span>
                    <a
                      href={userResumeData.userPersonalWebsiteLink}
                      className="text-dark"
                    >
                      alamin@gmail.com
                    </a>
                    <span>*</span>
                    <a
                      href={userResumeData.userPersonalWebsiteLink}
                      className="text-dark"
                    >
                      alamintokee.com
                    </a>
                    <span>*</span>
                    <a
                      href={`https://github.com/${userResumeData.userGitHubProfileName}`}
                      className="text-dark"
                    >
                        github.com/alamin
                    </a>
                  </div>
                </Col>
              </Row>
            </header>

            <Row className="border-bottom border-dark w-100">
              <h4 className="text-center text-dark w-100 pt-4 font-weight-bold">
                Educational
              </h4>
              <Col className="py-4">
                <ul>
                  <li>
                    <h5 className="text-dark font-weight-bold">
                      1.
                      {userResumeData.userBachelorDegreeName}
                    </h5>
                    <h6 className="text-dark font-weight-bold">
                      {userResumeData.userUniversityName}
                    </h6>
                    <p className="text-dark font-weight-bold">
                      
                      {userResumeData.userBachelorStartingDate}/
                      {userResumeData.userBachelorEndingDate}
                    </p>
                    <p className="text-dark font-weight-normal">
                      {userResumeData.userUniversityExperience}
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>


            <Row className="border-bottom border-dark w-100">
              <h4 className="text-center text-dark w-100 pt-4 font-weight-bold">
                Skills
              </h4>
              <Col sm={12} md={12} className="my-4">
                <ul>
                  <li className="d-flex align-items justify-content-start">
                    <h6 className="font-weight-bold text-dark">
                      Prgramming Language:
                    </h6>
                    <p className="px-2">{userResumeData.userProgrammingSkill}</p>
                  </li>
                  <li className="d-flex align-items justify-content-start">
                    <h6 className="font-weight-bold text-dark">Web Technology:</h6>
                    <p className="px-2">{userResumeData.userWebSkill}</p>
                  </li>
                  <li className="d-flex align-items justify-content-start">
                    <h6 className="font-weight-bold text-dark">
                      Machine Learning:
                    </h6>
                    <p className="px-2">{userResumeData.userMachineSkill}</p>
                  </li>
                  <li className="d-flex align-items justify-content-start">
                    <h6 className="font-weight-bold text-dark">
                      Tools & Technology:
                    </h6>
                    <p className="px-2">{userResumeData.userToolsSkill}</p>
                  </li>
                </ul>
              </Col>
            </Row>



            <Row className="border-bottom border-dark w-100">
              <h4 className="text-center text-dark w-100 pt-4 font-weight-bold">
                Technical Experience
              </h4>
              <Col className="py-4">
                <ul>
                
                  <li>
                    <h5 className="text-dark font-weight-bold">
                      2.
                      {userResumeData.user1stExperience}
                    </h5>
                    <h6 className="text-dark font-weight-bold">
                      {userResumeData.user1stCompanyName}
                    </h6>
                    <p className="text-dark font-weight-bold">
                      
                      {userResumeData.user1stExperienceStartingDate}/
                      {userResumeData.user1stExperienceEndingDate}
                    </p>
                    <p className="text-dark font-weight-normal">
                      {userResumeData.user1stCompanyExperience}
                    </p>
                  </li>
                  
                </ul>
              </Col>
            </Row>


            <Row className="border-bottom border-dark w-100">
              <h4 className="text-center text-dark w-100 pt-4 font-weight-bold">
                Achivement
              </h4>
              <Col className="py-4">
                <ul>
                  
                  <li>
                    <h5 className="text-dark font-weight-bold">
                      2.
                      {userResumeData.user1stAchievement}
                    </h5>
                    <h6 className="text-dark font-weight-bold">
                      {userResumeData.user1stAchievementName}
                    </h6>
                    <p className="text-dark font-weight-bold">
                      
                      {userResumeData.user1stAchievementStartingDate}/
                      {userResumeData.user1stAchievementEndingDate}
                    </p>
                    <p className="text-dark font-weight-normal">
                      {userResumeData.user1stAchievementDetails}
                    </p>
                  </li>
                  <li>
                    <h5 className="text-dark font-weight-bold">
                      3.
                      {userResumeData.user2ndAchievement}
                    </h5>
                    <h6 className="text-dark font-weight-bold">
                      {userResumeData.user2ndAchievementName}
                    </h6>
                    <p className="text-dark font-weight-bold">
                      
                      {userResumeData.user2ndAchievementStartingDate}/
                      {userResumeData.user2ndAchievementEndingDate}
                    </p>
                    <p className="text-dark font-weight-normal">
                      {userResumeData.user2ndAchievementDetails}
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>


            <Row className="w-100">
              <h4 className="text-center text-dark w-100 pt-4 font-weight-bold">
                Projects
              </h4>
              <Col className="py-4">
                <ul>
                  <li>
                    <h5 className="text-dark font-weight-bold">
                      1.
                      {userResumeData.user1stProject}
                    </h5>
                    <h6 className="text-dark font-weight-bold">
                      {userResumeData.user1stProjectTechName}
                    </h6>
                    <p className="text-dark font-weight-bold">
                      
                      {userResumeData.user1stProjectStartingDate}/
                      {userResumeData.user1stProjectEndingDate}
                    </p>
                    <p className="text-dark font-weight-normal">
                      {userResumeData.user1stProjectDetails}
                    </p>
                  </li>
                  <li>
                    <h5 className="text-dark font-weight-bold">
                      2.
                      {userResumeData.user2ndProject}
                    </h5>
                    <h6 className="text-dark font-weight-bold">
                      {userResumeData.user2ndProjectTechName}
                    </h6>
                    <p className="text-dark font-weight-bold">
                      
                      {userResumeData.user2ndProjectStartingDate}/
                      {userResumeData.user2ndProjectEndingDate}
                    </p>
                    <p className="text-dark font-weight-normal">
                      {userResumeData.user2ndProjectDetails}
                    </p>
                  </li>
                  <li>
                    <h5 className="text-dark font-weight-bold">
                      3.
                      {userResumeData.user3rdProject}
                    </h5>
                    <h6 className="text-dark font-weight-bold">
                      {userResumeData.user3rdProjectTechName}
                    </h6>
                    <p className="text-dark font-weight-bold">
                      
                      {userResumeData.user3rdProjectStartingDate}/
                      {userResumeData.user3rdProjectEndingDate}
                    </p>
                    <p className="text-dark font-weight-normal">
                      {userResumeData.user3rdProjectDetails}
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>

          </main>
          <Button
            variant="dark"
            as={Col}
            sm={12}
            className="py-2 my-3 text-white font-weight-bold"
          >
            Download
          </Button>
        </Container>
      ) : (
        "Loading....."
      )}
    </Fragment>
  );
};

export default ResumeComponent;