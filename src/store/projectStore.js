import { create } from 'zustand'
import axios from 'axios'

export const useProjectStore = create((set) => ({
  profile: null,
  projects: [],
  loading: false,
  error: null,

  fetchProfile: async () => {
    try {
      const response = await axios.get('https://api.github.com/users/VeejayAdolf-Lemita')
      set({ profile: response.data })
    } catch (error) {
      console.error('Error fetching profile:', error)
      // Fallback data
      set({
        profile: {
          avatar_url: 'https://github.com/VeejayAdolf-Lemita.png',
          login: 'VeejayAdolf-Lemita',
          name: 'Veejay Adolf M. Lemita',
          bio: 'Frontend Developer | React Enthusiast',
          public_repos: 25,
          followers: 10,
          following: 5,
          html_url: 'https://github.com/VeejayAdolf-Lemita'
        }
      })
    }
  },

  fetchProjects: async () => {
    set({ loading: true, error: null })

    // MANUAL PROJECTS LIST
    // Since your repos are private, you can edit the details below directly.
    const manualProjects = [
      {
        id: 1,
        title: 'Strateji',
        year: '2025',
        description: 'A strategic planning and compliance platform enabling organizations to manage roadmaps, policies, and governance tools efficiently.',
        image: '/strateji-dashboard.png',
        technologies: ['React', 'Tailwind CSS', 'Zustand', 'Axios', 'Hero React UI', 'Tanstack', 'API Integration'],
        liveUrl: 'https://app.strateji.co/',
        featured: true
      },
      {
        id: 2,
        title: 'Strateji Admin',
        year: '2025',
        description: 'A centralized admin panel for managing companies, users, and platform-wide settings with comprehensive analytics and activity logging.',
        image: '/strateji-admin-dashboard.png',
        technologies: ['React', 'Tailwind CSS', 'Zustand', 'Admin UI', 'API Integration'],
        liveUrl: 'https://admin.strateji.co/',
        featured: true
      },
      {
        id: 3,
        title: 'OMG Dashboard',
        year: '2024',
        description: 'A comprehensive marketing analytics dashboard featuring real-time insights, campaign performance tracking, meeting management, and multi-channel KPI monitoring.',
        image: '/omg-dashboard.png',
        technologies: ['React', 'Tailwind CSS', 'Recharts', 'Real-time Data', 'Zustand', 'Axios', 'Tanstack Table', 'Tremor', 'API Integration'],
        liveUrl: 'https://gurulytics.app/',
        featured: true
      },
      {
        id: 4,
        title: 'Portfolio (OLD)',
        year: '2023',
        description: 'My previous portfolio website showcasing early projects and design evolution, featuring a clean dark theme and responsive layout.',
        image: '/portfolio-2023.png',
        technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
        liveUrl: 'https://vaml2023.vercel.app/',
        featured: false
      },
      {
        id: 5,
        title: 'Luks Lofts Hotel',
        year: '2023',
        description: 'A luxury hotel website featuring a modern booking interface, immersive room showcases, and responsive design for a premium user experience.',
        image: '/luks-lofts.jpg',
        technologies: ['Web Design', 'Responsive UI', 'HTML/CSS', 'JavaScript', 'JQuery', 'Bootstrap'],
        liveUrl: 'https://lukslofts.com/',
        featured: false
      },
      {
        id: 6,
        title: 'ZUMUMU',
        year: '2023',
        description: 'A promotional website for an order management system tailored for hotel and restaurant businesses.',
        image: '/zumumu.png',
        technologies: ['Web Design', 'Responsive UI', 'HTML/CSS', 'JavaScript', 'JQuery', 'Bootstrap'],
        liveUrl: 'https://zumumu.com/?language=en',
        featured: false
      },
      {
        id: 7,
        title: 'Share Cafe Events',
        year: '2023',
        description: 'A web application for showcasing event halls and enabling users to reserve venues for their events.',
        image: '/share-cafe.jpg',
        technologies: ['Web Design', 'Responsive UI', 'HTML/CSS', 'JavaScript', 'JQuery', 'Bootstrap'],
        featured: false
      },
    ]

    // Simulate a small delay to feel like an API call
    setTimeout(() => {
      set({ projects: manualProjects, loading: false })
    }, 500)
  }
}))
