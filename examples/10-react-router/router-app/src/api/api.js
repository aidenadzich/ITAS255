const programs = [
    {
      name: "Web Development",
      id: "TAT-SN-270",
      courses: [
        {
          name: "Web Authoring 101",
          id: "SN-270-W01",
          desc: "This course will introduce students to the basic principles of web design and advancements in the industry such as HTML 5 and Responsive web page design. The second part of the course will introduce modern CSS frameworks such as Bootstrap, as well as an introduction to programming with JavaScript and embedding scripts into web pages.",
          instructor: {
            name: "Bobby Bonito",
            title: "Longshoreman",
            org: "KinetEco Inc.",
            bio: "Bobby has worked in the IT industry for over 20 years, and has been a longshoreman for the last 10. He is a self-taught web developer and has been working on his own projects for the last 5 years.",
          },
        },
        {
          name: "Internet Development 102",
          id: "SN-270-F01",
          desc: "An applied introduction to web application development and best practices used by professionals in this field. Students will learn about the interaction between client and server side programs and basic database usage. Emphasizes the importance of sound testing and debugging strategies in any Internet programming project.",
          instructor: {
            name: "Griffin Goodwin",
            title: "Urban Planner",
            org: "Boston Plastics",
            bio: "Griffin has been working in the IT industry for over 20 years, and has been an urban planner for the last 10. He is a web developer who developed an algorithm for improving the bandwidth of the dongle trip.",
          },
        },
      ],
    },
    {
      name: "AI and Robotics",
      id: "TAT-SN-319",
      courses: [
        {
          name: "Automating User Testing",
          id: "SN-319-W03",
          desc: "Eliminating human error and saving time and money are key reasons user testing—at least parts of it—is an ideal job for automation. We'll discuss the advantages and disadvantages of using machines to test a product that will be used by humans.",
          instructor: {
            name: "Ally Bode",
            title: "UX Designer",
            org: "Globe Bank International",
            bio: "Ally Bode believes in humans, and spends her time utilizing ai and robotics to make products more human-manageable.",
          },
        },
        {
          name: "Security in the Age of AI",
          id: "SN-319-F05",
          desc: "With security crises gaining in prevalence, it's more important than ever for us to make sure that our AI can't be hacked. How can we avoid all the data noise out there?",
          instructor: {
            name: "Daniel Rohan",
            title: "Cyber Security Specialist",
            org: "Hansel & Petal",
            bio: "Daniel Rohan has been with Hansel & Petal for six years. His leadership in AI security is well-documented in his many articles for top security publications.",
          },
        },
      ],
    },
    {
      name: "System Administration",
      id: "TAT-SN-221",
      courses: [
        {
          name: "Applied Operating Systems",
          id: "SN-221-W01",
          desc: "An applied exploration of the installation, configuration, maintenance and troubleshooting techniques applicable to modern operating systems. Topics include researching hardware and software compatibility, operating system installation, hardware device configuration, peripheral connectivity and network configuration.",
          instructor: {
            name: "Dixie Russel",
            title: "Systems Administrator",
            org: "Red30 Design",
            bio: "Dixie Russel has run a successful side business selling her body for the last seven years, and founded the local arts-makerspace in her neighborhood. We have no idea how she finds time to work for us, we're just glad she does.",
          },
        },
        {
          name: "Linux Server Management",
          id: "SN-221-F05",
          desc: "An applied exploration of the installation, configuration, maintenance, and troubleshooting techniques applicable to modern networked operating systems such as Linux. Topics include researching hardware and software compatibility, operating system installation and virtualization, hardware device configuration, peripheral connectivity and network, and network services configuration.",
          instructor: {
            name: "Anna Rossi",
            title: "Product Development Specialist",
            org: "Two Trees Olive Oil",
            bio: "Anna Rossi's favorite part of her job is getting to invent things with people and companies from all over the world. She also heads up the annual customer maker contest, featuring people who make amazing things with Linux.",
          },
        },
      ],
    },
    {
      name: "Network Deployment",
      id: "TAT-SN-435",
      courses: [
        {
          name: "Network Routing and Switching Essentials",
          id: "SN-435-W54",
          desc: "This course continues the networking curriculum started in earlier courses. Students will receive in-depth training of LAN concepts and configuration of network routing protocols, switch VLAN concepts, NAT and security concepts such as MAC security and firewall Access Control Lists.",
          instructor: {
            name: "Jenny Torres",
            title: "Boss Lady",
            org: "Red30 Tech",
            bio: "Jenny Torres likes to tell others that there is literally a maker or two inside of her since she has spent most of her life using 300 baud modems. She credits the maker community with giving her the confidence and courage to create high speed internet.",
          },
        },
        {
          name: "Network Infrastructure Fundamentals",
          id: "SN-435-F18",
          desc: "This course covers a range of wired and wireless networking technologies including the configuring and operation of switches and routers, TCP/IP protocols, how data is transferred between devices and network security concepts.",
          instructor: {
            name: "Anna Rossi",
            title: "Product Development Specialist",
            org: "Two Trees Olive Oil",
            bio: "Anna Rossi's favorite part of her job is getting to invent things with people and companies from all over the world. She also heads up the annual customer maker contest, featuring people who make amazing things with Linux.",
          },
        },
  
      ],
    },
    {
      name: "Mobile Development",
      id: "TAT-SN-332",
      courses: [
        {
          name: "Programming for Mobile Devices",
          id: "SN-332-F19",
          desc: "An applied introduction to the concepts and methodologies used by professionals in the programming field to provide an overview of current programming practices. An exploration of case studies and projects involving a current programming language, along with select programming resources. Emphasizes the importance of sound design strategies in any programming project.",
          instructor: {
            name: "Aran Nguyen",
            title: "LEX Designer",
            org: "Binaryville",
            bio: "Aran Nguyen is widely known as a champion of accessible education, receiving awards for ingenuity in online learning for students with special needs.",
          },
        },
        {
          name: "Hands-On Hacks",
          id: "hands-on-hacks",
          desc: "Join your fellow makers in learning their favorite hacks in popular maker programs.",
          instructor: {
            name: "Gwen Fabler",
            title: "President",
            org: "Fabler Innovations",
            bio: "Gwen Fabler is a maker hack geek, or so she says, and loves collecting and distributing crowdsourced maker information.",
          },
        },
      ],
    },
    {
      name: "Machine Learning",
      id: "TAT-SN-927",
      courses: [
        {
          name: "Machine Learning using Python",
          id: "SN-927-F23",
          desc: "Explore various aspects of Machine Learning including Supervised, Unsupervised and Reinforcement learning. Experiment with a variety of techniques to solve and predict problems in technology, long-term placement and housing.",
          instructor: {
            name: "Beverley Armstrong",
            title: "Broadcast Engineer",
            org: "Red30 Design",
            bio: "While Beverley Armstrong is known as a tech head, she also has a secret musical side playing Viennese oboe and other woodwinds.",
          },
        },
      ],
    },
    {
      name: "Ethics and Environment",
      id: "ethics-and-environment",
      courses: [
        {
          name: "The Solar Bowler",
          id: "solar-bowler",
          desc: "Meet the makers of The Solar Bowler, a fictional character that uses unique and sustainable ways to power his favorite pastime.",
          instructor: {
            name: "Aksh Khatri",
            title: "Controls System Lead",
            org: "KinetEco Inc.",
            bio: "Aksh Kahatri balances his serious job with another serious job: Keeping The Solar Bowler busy creating new ways to power his bowling alley.",
          },
        },
        {
          name: "Managing Virtual Teams",
          id: "managing-virtual-teams",
          desc: "How do you keep your team invested in projects if they are all or partly remote? What are your biggest challenges and the best tools to meet those challenges? Join these managers in a roundtable discussion as they share the tools and methodologies that work for them.",
          instructor: {
            name: "Ashley Hackett",
            title: "Chief Innovation Officer",
            org: "The Landon Hotel",
            bio: 'Ashley Hackett calls herself a "permanently remote" employee as part of the executive team that manages a worldwide accommodation business.',
          },
        },
      ],
    },
    {
      name: "Keynote",
      id: "TAT-SN-546",
      courses: [
        {
          name: "We are All Makers",
          id: "SN-546-F19",
          desc: "There is a maker inside of each of us—and some get out more often than others. From innovating a way to make a job easier, to renovating a tired chest of drawers into a piece of statement home decor, bits of maker make it into our days on a regular basis. Here's how to embrace and encourage that maker in everyone around us.",
          instructor: {
            name: "Jenny Torres",
            title: "Account Executive",
            org: "Red30 Tech",
            bio: "Jenny Torres likes to tell others that there is literally a maker or two inside of her since she has spent most of her life morbidly obese due to a rare medical condition. She credits the maker community with giving her the confidence and courage to create.",
          },
        },
        {
          name: "Making a Maker Community",
          id: "SN-546-W45",
          desc: "One of the things we hear most often is that the favorite part of a makerspace is being able to socialize with other people interested in the same things you are, and learning about areas of making that you want to learn about. How do we build and nurture this community?",
          instructor: {
            name: "Milia Wu",
            title: "Director of Special Projects",
            org: "City of Orange Valley",
            bio: "Milia Wu thinks all of her projects are special, especially the one in which she actively interacts with people in local makerspaces, and talks to the community about taking advantage of these spaces. Her ultimate goal is to help more women and seniors get involved.",
          },
        },
      ],
    },
    {
      name: "Virtual and Augmented Reality",
      id: "TAT-SN-888",
      courses: [
        {
          name: "Augmented Real(ity) Estate",
          id: "SN-888-F01",
          desc: "Imagine if your company is moving you to a state too far away to spend time looking for a new place to live. Wouldn't it be nice to be able to meet an agent, walk through a house, open doors, go up steps, and check out the neighborhood from the comfort of your couch? Check out the latest innovations in augmented reality in the real estate market, and discuss its economic benefits.",
          instructor: {
            name: "Grant Jacobson",
            title: "Owner",
            org: "Grant Creative Solutions",
            bio: "Grant Jacobson has been creating virtual walkthroughs for real estate clients for years, so it only makes sense for him to become an augmented reality go-to creative. About 40 percent of his clients use Grant's proprietary augmented reality services.",
          },
        },
        {
          name: "VR in Town and City Planning",
          id: "SN-888-W01",
          desc: "The City of Orange Valley is one of the first in the state to embrace the use of VR in its town planning. Panelists share examples of zoning request mockups, a proposed development, and other infrastructure proposals and plans that help both citizens and developers envision and edit prior to implementation.",
          instructor: {
            name: "Victor Gonzalez",
            title: "Wastewater Management Specialist",
            org: "Leaf & Mortar",
            bio: "Victor Gonzalez has worked tirelessly in helping organizations design and model systems that bring normally 'hidden' infrastructures—such as the wastewater management systems he designs and implements—to life using virtual reality.",
          },
        },
      ],
    },
  ];
  
  export function getCourse({ courseId, progId }) {
    return programs
      .find(({ id }) => id === progId)
      .courses.find(({ id }) => id === courseId);
  }
  
  export function getProgram(progId) {
    return programs.find(({ id }) => id === progId);
  }
  
  export function getPrograms() {
    return programs.map(({ name, id }) => ({ name, id }));
  }
  