interface Project {
  id: number;
  project_name: string;
  project_desc: string;
  tech_stack: string[];
  project_img: string; 
  project_url: string;
  project_page: string;
}

export const projectDetails: Project[] = [
  {
    id: 0,
    project_name: 'Weather Desktop Application',
    project_desc: 'This is a weather API utilizer that transforms API data from open-metio.com into readable responsive webpage.',
    tech_stack: ['Vite', 'JavaScript', 'Tailwind' ],
    project_img: '/desktop2.png', 
    project_url: 'https://magical-concha-6ccb16.netlify.app',
    project_page:'https://github.com/Hvitrevs/Weather-app-',
  },
  {
    id: 1,
    project_name: 'Admin Dashboard Application',
    project_desc: 'Front-End sales dashboard utilizing recharts into responsive webpage. No server side, demo version only.',
    tech_stack: ['Vite', 'TypeScript', 'SASS', 'React' ],
    project_img: '/desktop.png', 
    project_url: 'https://incandescent-vacherin-43b64e.netlify.app',
    project_page:'https://github.com/Hvitrevs/Sales-dashboard',
  },
];