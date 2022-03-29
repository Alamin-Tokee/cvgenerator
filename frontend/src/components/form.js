import {
    Container,
    Form,
    Col,
    Row,
    FormGroup,
    FormLabel,
    FormControl,
    Button,
  } from "react-bootstrap";
  import { useState } from "react";
  // import { Link } from "react-router-dom";
  import axios from "axios";
  
  const FormComponent = ({ history }) => {
    // first name of the person
    const [userFirstName, setUserFirstName] = useState("");
    const handleFirstName = (e) => {
      setUserFirstName(e.target.value);
    };
    // second name of the person
    const [userSecondName, setUserSecondName] = useState("");
    const handleUserSecondName = (e) => {
      setUserSecondName(e.target.value);
    };
    // // gender of user
    // const [userGender, setUserGender] = useState("Male");
    // const handleUserGender = (e) => {
    //   setUserGender(e.target.value);
    // };
    // age of the user
    // const [userAge, setUserAge] = useState("");
    // const handleUserAge = (e) => {
    //   setUserAge(e.target.value);
    // };
    // user profession
    const [userProfession, setUserProfession] = useState("");
    const handleUserProfession = (e) => {
      setUserProfession(e.target.value);
    };

    // user phone number
    const [userPhoneNumber, setUserPhoneNumber] = useState("");
    const handleUserPhoneNumber = (e) => {
      setUserPhoneNumber(e.target.value);
    };
    // user email address
    const [userEmail, setUserEmail] = useState("");
    const handleUserEmail = (e) => {
      setUserEmail(e.target.value);
    };
    // user location
    const [userLocation, setUserLocation] = useState("");
        const handleUserLocation = (e) => {
          setUserLocation(e.target.value);
    };
    // user house address
    // const [userHouseAddress, setUserHouseAddress] = useState("");
    // const handleUserHouseAddress = (e) => {
    //   setUserHouseAddress(e.target.value);
    // };
    // user description
    // const [userProfileDescription, setUserProfileDescription] = useState("");
    // const handleUserProfileDescription = (e) => {
    //   setUserProfileDescription(e.target.value);
    // };
    // user profile website
    const [userFirstProfileWebsite, SetUserFirstProfileWebsite] =
      useState("GitHub");
    const handleFirstUserProfileWebsite = (e) => {
      SetUserFirstProfileWebsite(e.target.value);
    };
    // user github profile
    const [userGitHubProfileName, SetUserGitHubProfileName] = useState("");
    const handleUserGitHubProfileName = (e) => {
      SetUserGitHubProfileName(e.target.value);
    };
    // user profile website
    const [userSecondProfileWebsite, SetUserSecondProfileWebsite] =
      useState("LinkedIn");
    const handleSecondUserProfileWebsite = (e) => {
      SetUserSecondProfileWebsite(e.target.value);
    };
    // user LinkedIn profile
    const [userLinkedInProfileName, SetUserLinkedInProfileName] = useState("");
    const handleUserLinkedInProfileName = (e) => {
      SetUserLinkedInProfileName(e.target.value);
    };
    // user profile website
    const [userThirdProfileWebsite, SetUserThirdProfileWebsite] =
      useState("Personal Website");
    const handleThirdUserProfileWebsite = (e) => {
      SetUserThirdProfileWebsite(e.target.value);
    };
    // user personal website link
    const [userPersonalWebsiteLink, setUserPersonalWebsiteLink] = useState("");
    const handleUserPersonalWebsiteLink = (e) => {
      setUserPersonalWebsiteLink(e.target.value);
    };
    // user high school degree name
    // const [userHighSchoolDegreeName, setUserHighSchoolDegreeName] = useState("");
    // const handleUserHighSchoolDegreeName = (e) => {
    //   setUserHighSchoolDegreeName(e.target.value);
    // };
    // // user high school name
    // const [userHighSchoolName, setUserHighSchoolName] = useState("");
    // const handleUserHighSchoolName = (e) => {
    //   setUserHighSchoolName(e.target.value);
    // };
    // // user high school degree starting date
    // const [userHighSchoolStartingDate, setUserHighSchoolStartingDate] =
    //   useState("");
    // const handleUserHighSchoolDegreeStartingDate = (e) => {
    //   setUserHighSchoolStartingDate(e.target.value);
    //   console.log(e.target.value);
    // };
    // // user high school degree ending date
    // const [userHighSchoolEndingDate, setUserHighSchoolEndingDate] = useState("");
    // const handleUserHighSchoolDegreeEndingDate = (e) => {
    //   setUserHighSchoolEndingDate(e.target.value);
    // };
    // // user high school experience
    // const [userHighSchoolExperience, setUserHighSchoolExperience] = useState("");
    // const handleUserHighSchoolExperience = (e) => {
    //   setUserHighSchoolExperience(e.target.value);
    // };
    // // user college degree name
    // const [userCollegeDegreeName, setUserCollegeDegreeName] = useState("");
    // const handleUserCollegeDegreeName = (e) => {
    //   setUserCollegeDegreeName(e.target.value);
    // };
    // // user college name
    // const [userCollegeName, setUserCollegeName] = useState("");
    // const handleUserCollegeName = (e) => {
    //   setUserCollegeName(e.target.value);
    // };
    // // user college degree starting date
    // const [userCollegeStartingDate, setUserCollegeStartingDate] = useState("");
    // const handleUserCollegeStartingDate = (e) => {
    //   setUserCollegeStartingDate(e.target.value);
    // };
    // // user college degree ending date
    // const [userCollegeEndingDate, setUserCollegeEndingDate] = useState("");
    // const handleUserCollegeDegreeEndingDate = (e) => {
    //   setUserCollegeEndingDate(e.target.value);
    // };
    // // user college experience
    // const [userCollegeExperience, setUserCollegeExperience] = useState("");
    // const handleUserCollegeExperience = (e) => {
    //   setUserCollegeExperience(e.target.value);
    // };
    // user bachelor degree name
    const [userBachelorDegreeName, setUserBachelorDegreeName] = useState("");
    const handleUserBachelorDegreeName = (e) => {
      setUserBachelorDegreeName(e.target.value);
    };
    // user university name
    const [userUniversityName, setUserUniversityName] = useState("");
    const handleUserUniversityName = (e) => {
      setUserUniversityName(e.target.value);
    };
    // user bachelor degree starting date
    const [userBachelorStartingDate, setUserBachelorStartingDate] = useState("");
    const handleUserBachelorStartingDate = (e) => {
      setUserBachelorStartingDate(e.target.value);
    };
    // user bachelor degree ending date
    const [userBachelorEndingDate, setUserBachelorEndingDate] = useState("");
    const handleUserBachelorDegreeEndingDate = (e) => {
      setUserBachelorEndingDate(e.target.value);
    };
    // user university experience
    const [userUniversityExperience, setUserUniversityExperience] = useState("");
    const handleUserUniversityExperience = (e) => {
      setUserUniversityExperience(e.target.value);
    };

    //User programmingskill
    const [userProgrammingSkill, setProgrammingSkill] = useState("");
    const handleUserProgrammingSkill = (e) => {
        setProgrammingSkill(e.target.value);
    }


    //User web skill 
    const [userWebSkill, setWebSkill] = useState("");
    const handleUserWebSkill = (e) => {
        setWebSkill(e.target.value);
    }

    //User machine skill
    const [userMachineSkill, setmachineSkill] = useState("");
    const handleUserMachineSkill = (e) => {
        setmachineSkill(e.target.value);
    }

    //User programmingskill name
    const [userToolsSkill, setToolsSkill] = useState("");
    const handleUserToolsSkill = (e) => {
        setToolsSkill(e.target.value);
    }

    // user 1st experience
    const [user1stExperience, setUser1stExperience] = useState("");
    const handleUser1stExperience = (e) => {
      setUser1stExperience(e.target.value);
    };
    // user 1st company name
    const [user1stCompanyName, setUser1stCompanyName] = useState("");
    const handleUser1stCompanyName = (e) => {
      setUser1stCompanyName(e.target.value);
    };
    // user 1st experience starting date
    const [user1stExperienceStartingDate, setUser1stExperienceStartingDate] =
      useState("");
    const handleUser1stExperienceStartingDate = (e) => {
      setUser1stExperienceStartingDate(e.target.value);
    };
    // user 1st experience ending date
    const [user1stExperienceEndingDate, setUser1stExperienceEndingDate] =
      useState("");
    const handleUser1stExperienceEndingDate = (e) => {
      setUser1stExperienceEndingDate(e.target.value);
    };
    // user 1st company experience
    const [user1stCompanyExperience, setUser1stCompanyExperience] = useState("");
    const handleUser1stCompanyExperience = (e) => {
      setUser1stCompanyExperience(e.target.value);
    };


    // user 1st achivement
    const [user1stAchievement, setUser1stAchievement] = useState("");
    const handleUser1stAchievement = (e) => {
        setUser1stAchievement(e.target.value);
    };
 
    // user 1st achivement name
    const [user1stAchievementName, setUser1stAchievementName] = useState();
    const handleUser1stAchievementName = (e) => {
        setUser1stAchievementName(e.target.value);
    };
    // user 1st acivement starting date
    const [user1stAchievementStartingDate, setUser1stAchievementStartingDate] =
      useState("");
    const handleUser1stAchievementStartingDate = (e) => {
        setUser1stAchievementStartingDate(e.target.value);
    };
    // user 1st achivement ending date
    const [user1stAchievementEndingDate, setUser1stAchievementEndingDate] =
      useState("");
    const handleUser1stAchievementEndingDate = (e) => {
        setUser1stAchievementEndingDate(e.target.value);
    };
    // user 1st achivement details
    const [user1stAchievementDetails, setUser1stAchievementDetails] = useState("");
    const handleUser1stAchievementDetails = (e) => {
        setUser1stAchievementDetails(e.target.value);
    };

     // user 2nd achivement
     const [user2ndAchievement, setUser2ndAchievement] = useState("");
     const handleUser2ndAchievement = (e) => {
        setUser2ndAchievement(e.target.value);
     };

     // user 2nd achivement name
     const [user2ndAchievementName, setUser2ndAchievementName] = useState();
     const handleUser2ndAchievementName = (e) => {
         setUser2ndAchievementName(e.target.value);
     };
     // user 1st acivement starting date
     const [user2ndAchievementStartingDate, setUser2ndAchievementStartingDate] =
       useState("");
     const handleUser2ndAchievementStartingDate = (e) => {
         setUser2ndAchievementStartingDate(e.target.value);
     };
     // user 1st achivement ending date
     const [user2ndAchievementEndingDate, setUser2ndAchievementEndingDate] =
       useState("");
     const handleUser2ndAchievementEndingDate = (e) => {
         setUser2ndAchievementEndingDate(e.target.value);
     };
     // user 1st achivement details
     const [user2ndAchievementDetails, setUser2ndAchievementDetails] = useState("");
     const handleUser2ndAchievementDetails = (e) => {
         setUser2ndAchievementDetails(e.target.value);
     };

    // user 1st project
    const [user1stProject, setUser1stProject] = useState("");
    const handleUser1stProject = (e) => {
        setUser1stProject(e.target.value);
    };
    // user 1st project techname
    const [user1stProjectTechName, setUser1stProjectTechName] = useState();
    const handleUser1stProjectTechName = (e) => {
        setUser1stProjectTechName(e.target.value);
    };
    // user 1stProject starting date
    const [user1stProjectStartingDate, setUser1stProjectStartingDate] =
      useState("");
    const handleUser1stProjectStartingDate = (e) => {
        setUser1stProjectStartingDate(e.target.value);
    };
    // user 1stproject ending date
    const [user1stProjectEndingDate, setUser1stProjectEndingDate] =
      useState("");
    const handleUser1stProjectEndingDate = (e) => {
        setUser1stProjectEndingDate(e.target.value);
    };
    // user 1stproject details
    const [user1stProjectDetails, setUser1stProjectDetails] = useState("");
    const handleUser1stProjectDetails = (e) => {
        setUser1stProjectDetails(e.target.value);
    };

    // user 2nd project
    const [user2ndProject, setUser2ndProject] = useState("");
    const handleUser2ndProject = (e) => {
        setUser2ndProject(e.target.value);
    };
    // user 2nd project techname
    const [user2ndProjectTechName, setUser2ndProjectTechName] = useState();
    const handleUser2ndProjectTechName = (e) => {
        setUser2ndProjectTechName(e.target.value);
    };
    // user 2ndProject starting date
    const [user2ndProjectStartingDate, setUser2ndProjectStartingDate] =
      useState("");
    const handleUser2ndProjectStartingDate = (e) => {
        setUser2ndProjectStartingDate(e.target.value);
    };
    // user 2ndproject ending date
    const [user2ndProjectEndingDate, setUser2ndProjectEndingDate] =
      useState("");
    const handleUser2ndProjectEndingDate = (e) => {
        setUser2ndProjectEndingDate(e.target.value);
    };
    // user 2ndproject details
    const [user2ndProjectDetails, setUser2ndProjectDetails] = useState("");
    const handleUser2ndProjectDetails = (e) => {
        setUser2ndProjectDetails(e.target.value);
    };

    

      // user 3rd project
      const [user3rdProject, setUser3rdProject] = useState("");
      const handleUser3rdProject = (e) => {
          setUser3rdProject(e.target.value);
      };
      // user 2nd project techname
      const [user3rdProjectTechName, setUser3rdProjectTechName] = useState();
      const handleUser3rdProjectTechName = (e) => {
          setUser3rdProjectTechName(e.target.value);
      };
      // user 3rdProject starting date
      const [user3rdProjectStartingDate, setUser3rdProjectStartingDate] =
        useState("");
      const handleUser3rdProjectStartingDate = (e) => {
        setUser3rdProjectStartingDate(e.target.value);
      };
      // user 3rdproject ending date
      const [user3rdProjectEndingDate, setUser3rdProjectEndingDate] =
        useState("");
      const handleUser3rdProjectEndingDate = (e) => {
          setUser3rdProjectEndingDate(e.target.value);
      };
      // user 3rdproject details
      const [user3rdProjectDetails, setUser3rdProjectDetails] = useState("");
      const handleUser3rdProjectDetails = (e) => {
        setUser3rdProjectDetails(e.target.value);
      };
  
      

    // sum up all the information into one object
    const handleUserResumeData = (e) => {
      e.preventDefault();
      // https://cv-generator-mern.herokuapp.com/api
      axios
        .post("http://localhost:5000/api", {
            userFirstName,
            userSecondName,
            userProfession,
            userPhoneNumber,
            userEmail,
            userLocation,
            userFirstProfileWebsite,
            userGitHubProfileName,
            userSecondProfileWebsite,
            userLinkedInProfileName,
            userThirdProfileWebsite,
            userPersonalWebsiteLink,
            userBachelorDegreeName,
            userUniversityName,
            userBachelorStartingDate,
            userBachelorEndingDate,
            userUniversityExperience,
            userProgrammingSkill,
            userWebSkill,
            userMachineSkill,
            userToolsSkill,
            user1stExperience,
            user1stCompanyName,
            user1stExperienceStartingDate,
            user1stExperienceEndingDate,
            user1stCompanyExperience,
            user1stAchievement,
            user1stAchievementName,
            user1stAchievementStartingDate,
            user1stAchievementEndingDate,
            user1stAchievementDetails,
            user2ndAchievement,
            user2ndAchievementName,
            user2ndAchievementStartingDate,
            user2ndAchievementEndingDate,
            user2ndAchievementDetails,
            user1stProject,
            user1stProjectTechName,
            user1stProjectStartingDate,
            user1stProjectEndingDate,
            user1stProjectDetails,
            user2ndProject,
            user2ndProjectTechName,
            user2ndProjectStartingDate,
            user2ndProjectEndingDate,
            user2ndProjectDetails,
            user3rdProject,
            user3rdProjectTechName,
            user3rdProjectStartingDate,
            user3rdProjectEndingDate,
            user3rdProjectDetails,         
        })
        .then((res) => {
          if (res.data.success) {
            history.push(`/view_resume/${res.data.resumeData._id}`);
          }
        });
    };
    return (
      <Container className="mt-5 mb-2">
        <Form className="form-section">
          <h1 className="text-dark font-weight-bold py-3">General Detail</h1>
          <Row>
            <Form.Group as={Col} sm={12} md={4}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                onChange={handleFirstName}
                value={userFirstName}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={4}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                onChange={handleUserSecondName}
                value={userSecondName}
                required
              />
            </Form.Group>

            <Form.Group as={Col} sm={12} md={4}>
              <Form.Label>Profession</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g Full stack developer"
                onChange={handleUserProfession}
                value={userProfession}
                required
              />
            </Form.Group>
          </Row>
          <Row>

            <Form.Group as={Col} sm={12} md={4}>
              <Form.Label> Mobile Phone </Form.Label>
              <Form.Control
                type="number"
                placeholder="+01 23 456 789"
                onChange={handleUserPhoneNumber}
                value={userPhoneNumber}
                required
              />
            </Form.Group>

            <Form.Group as={Col} sm={12} md={4}>
              <Form.Label> Email </Form.Label>
              <Form.Control
                type="email"
                placeholder="info@domain.com"
                onChange={handleUserEmail}
                value={userEmail}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={4}>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Dhaka, Bangladesh"
                onChange={handleUserLocation}
                value={userLocation}
                required
              />
            </Form.Group>
          </Row>

          <h1 className="text-dark font-weight-bold py-4">Social Detail</h1>
          <Row>
            <Form.Group as={Col} sm={12} md={4}>
              <Form.Label>Social Website</Form.Label>
              <Form.Control
                as="select"
                onChange={handleFirstUserProfileWebsite}
                value={userFirstProfileWebsite}
                required
              >
                <option value="GitHub">GitHub</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Personal Website">Portfolio Website</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} sm={12} md={4}>
              <Form.Label>Username</Form.Label>
              <FormControl
                type="text"
                placeholder="e.g johnDoe123"
                onChange={handleUserGitHubProfileName}
                value={userGitHubProfileName}
                required
              />
            </Form.Group>
          </Row>
          <Row>
            <FormGroup as={Col} sm={12} md={4}>
              <FormLabel>Social Website</FormLabel>
              <FormControl
                as="select"
                onChange={handleSecondUserProfileWebsite}
                value={userSecondProfileWebsite}
                required
              >
                <option value="LinkedIn">LinkedIn</option>
                <option value="GitHub">GitHub</option>
                <option value="Portfolio Website">Portfolio Website</option>
              </FormControl>
            </FormGroup>
            <FormGroup as={Col} sm={12} md={4}>
              <FormLabel>Username</FormLabel>
              <FormControl
                type="text"
                placeholder="e.g johnDoe123"
                onChange={handleUserLinkedInProfileName}
                value={userLinkedInProfileName}
                required
              />
            </FormGroup>
          </Row>
          <Row>
            <Form.Group as={Col} sm={12} md={4}>
              <Form.Label>Social Website</Form.Label>
              <Form.Control
                as="select"
                onChange={handleThirdUserProfileWebsite}
                value={userThirdProfileWebsite}
                required
              >
                <option value="Portfolio Website">Portfolio Website</option>
                <option value="GitHub">GitHub</option>
                <option value="LinkedIn">LinkedIn</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} sm={12} md={4}>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="johnDoe.com"
                onChange={handleUserPersonalWebsiteLink}
                value={userPersonalWebsiteLink}
                required
              />
            </Form.Group>
          </Row>

          <h1 className="text-dark font-weight-bold py-4">
            Add Skills
          </h1>
          <Row>
            <Form.Group as={Col} sm={12} md={6}>
              <Form.Label> Programming </Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g metric with computer sciences"
                onChange={handleUserProgrammingSkill}
                value={userProgrammingSkill}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={6}>
              <Form.Label> Web Technology </Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g govt school"
                onChange={handleUserWebSkill}
                value={userWebSkill}
                required
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} sm={12} md={6}>
              <Form.Label> Machine Learning </Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g metric with computer sciences"
                onChange={handleUserMachineSkill}
                value={userMachineSkill}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={6}>
              <Form.Label> Tools & Technology </Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g govt school"
                onChange={handleUserToolsSkill}
                value={userToolsSkill}
                required
              />
            </Form.Group>
          </Row>


           

          <h1 className="text-dark font-weight-bold py-4">
            Add last education
          </h1>
          <Row>
            <Form.Group as={Col} sm={12} md={6}>
              <Form.Label> University Degree </Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g metric with computer sciences"
                onChange={handleUserBachelorDegreeName}
                value={userBachelorDegreeName}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={6}>
              <Form.Label> University Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g govt school"
                onChange={handleUserUniversityName}
                value={userUniversityName}
                required
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} sm={12} md={4}>
              <Form.Label>Starting Date</Form.Label>
              <FormControl
                type="date"
                onChange={handleUserBachelorStartingDate}
                value={userBachelorStartingDate}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={4}>
              <Form.Label>Ending Date</Form.Label>
              <Form.Control
                type="date"
                onChange={handleUserBachelorDegreeEndingDate}
                value={userBachelorEndingDate}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12}>
              <FormLabel>List Your Course Work</FormLabel>
              <Form.Control
                as="textarea"
                rows={6}
                onChange={handleUserUniversityExperience}
                value={userUniversityExperience}
                required
              />
            </Form.Group>
          </Row>

           <h1 className="text-dark font-weight-bold py-5">
            {" "}
            Add experiences{" "}
          </h1>
          <Row>
            <Form.Group as={Col} sm={12} md={6}>
              <Form.Label> 1st Experience </Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g junior web developer"
                onChange={handleUser1stExperience}
                value={user1stExperience}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={6}>
              <Form.Label> Company Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="company name"
                onChange={handleUser1stCompanyName}
                value={user1stCompanyName}
                required
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} sm={12} md={4}>
              <Form.Label>Starting Date</Form.Label>
              <Form.Control
                type="date"
                onChange={handleUser1stExperienceStartingDate}
                value={user1stExperienceStartingDate}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={4}>
              <Form.Label>Ending Date</Form.Label>
              <Form.Control
                type="date"
                onChange={handleUser1stExperienceEndingDate}
                value={user1stExperienceEndingDate}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12}>
              <Form.Label>Describe your experience</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                onChange={handleUser1stCompanyExperience}
                value={user1stCompanyExperience}
                required
              />
            </Form.Group>
          </Row>


          
          <h1 className="text-dark font-weight-bold py-5">
            {" "}
            Add Achivement{" "}
          </h1>
          <Row>
            <Form.Group as={Col} sm={12} md={6}>
              <Form.Label> 1st Achivement </Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g junior web developer"
                onChange={handleUser1stAchievement}
                value={user1stAchievement}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={6}>
              <Form.Label> Company Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="company name"
                onChange={handleUser1stAchievementName}
                value={user1stAchievementName}
                required
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} sm={12} md={4}>
              <Form.Label>Starting Date</Form.Label>
              <Form.Control
                type="date"
                onChange={handleUser1stAchievementStartingDate}
                value={user1stAchievementStartingDate}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={4}>
              <Form.Label>Ending Date</Form.Label>
              <Form.Control
                type="date"
                onChange={handleUser1stAchievementEndingDate}
                value={user1stAchievementEndingDate}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12}>
              <Form.Label>Describe your experience</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                onChange={handleUser1stAchievementDetails}
                value={user1stAchievementDetails}
                required
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} sm={12} md={6}>
              <Form.Label> 2nd Achivement </Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g junior web developer"
                onChange={handleUser2ndAchievement}
                value={user2ndAchievement}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={6}>
              <Form.Label> Achivement Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="company name"
                onChange={handleUser2ndAchievementName}
                value={user2ndAchievementName}
                required
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} sm={12} md={4}>
              <Form.Label>Starting Date</Form.Label>
              <Form.Control
                type="date"
                onChange={handleUser2ndAchievementStartingDate}
                value={user2ndAchievementStartingDate}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={4}>
              <Form.Label>Ending Date</Form.Label>
              <Form.Control
                type="date"
                onChange={handleUser2ndAchievementEndingDate}
                value={user2ndAchievementEndingDate}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12}>
              <Form.Label>Describe your Achivement</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                onChange={handleUser2ndAchievementDetails}
                value={user2ndAchievementDetails}
                required
              />
            </Form.Group>
          </Row>




          <h1 className="text-dark font-weight-bold py-5">
            {" "}
            Add Projects {" "}
          </h1>
          <Row>
            <Form.Group as={Col} sm={12} md={6}>
              <Form.Label> 1st Project </Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g junior web developer"
                onChange={handleUser1stProject}
                value={user1stProject}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={6}>
              <Form.Label> Project Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="company name"
                onChange={handleUser1stProjectTechName}
                value={user1stProjectTechName}
                required
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} sm={12} md={4}>
              <Form.Label>Starting Date</Form.Label>
              <Form.Control
                type="date"
                onChange={handleUser1stProjectStartingDate}
                value={user1stProjectStartingDate}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={4}>
              <Form.Label>Ending Date</Form.Label>
              <Form.Control
                type="date"
                onChange={handleUser1stProjectEndingDate}
                value={user1stProjectEndingDate}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12}>
              <Form.Label>Describe your project</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                onChange={handleUser1stProjectDetails}
                value={user1stProjectDetails}
                required
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} sm={12} md={6}>
              <Form.Label> 2nd Project </Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g junior web developer"
                onChange={handleUser2ndProject}
                value={user2ndProject}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={6}>
              <Form.Label> Project Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="company name"
                onChange={handleUser2ndProjectTechName}
                value={user2ndProjectTechName}
                required
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} sm={12} md={4}>
              <Form.Label>Starting Date</Form.Label>
              <Form.Control
                type="date"
                onChange={handleUser2ndProjectStartingDate}
                value={user2ndProjectStartingDate}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={4}>
              <Form.Label>Ending Date</Form.Label>
              <Form.Control
                type="date"
                onChange={handleUser2ndProjectEndingDate}
                value={user2ndProjectEndingDate}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12}>
              <Form.Label>Describe your project</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                onChange={handleUser2ndProjectDetails}
                value={user2ndProjectDetails}
                required
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} sm={12} md={6}>
              <Form.Label> 3rd Project </Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g junior web developer"
                onChange={handleUser3rdProject}
                value={user3rdProject}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={6}>
              <Form.Label> Porject Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="company name"
                onChange={handleUser3rdProjectTechName}
                value={user3rdProjectTechName}
                required
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} sm={12} md={4}>
              <Form.Label>Starting Date</Form.Label>
              <Form.Control
                type="date"
                onChange={handleUser3rdProjectStartingDate}
                value={user3rdProjectStartingDate}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={4}>
              <Form.Label>Ending Date</Form.Label>
              <Form.Control
                type="date"
                onChange={handleUser3rdProjectEndingDate}
                value={user3rdProjectEndingDate}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12}>
              <Form.Label>Describe your Project</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                onChange={handleUser3rdProjectDetails}
                value={user3rdProjectDetails}
                required
              />
            </Form.Group>
          </Row>

          <Button
            variant="dark"
            type="button"
            as={Col}
            sm={12}
            className="py-3 my-3"
            onClick={handleUserResumeData}
          >
            Generate CV
          </Button>
        </Form>
      </Container>
    );
  };
  
  export default FormComponent;