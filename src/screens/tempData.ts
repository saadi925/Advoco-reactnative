export const LawyerScreenTempData = [
  {
    id: '1',
    case: {
      id: '1',
      location: 'Islamabad',
      category: 'Criminal Law',
      title: 'I Want to hire a lawyer who has experience in criminal law',
      description:
        'I Want to hire a lawyer who has practice in criminal law and can help me in my case. I am a student and I am not able to pay much.   ',
      status: 'Urgent',
      date: Date.now(),
    },
    user: {
      name: 'John Doe',
      profileImg: '',
    },
  },
  {
    id: '2',
    case: {
      id: '2',
      location: 'Lahore',
      category: 'Civil Law',
      title: 'Looking for a lawyer with expertise in civil law',
      description:
        'I am in need of a lawyer who specializes in civil law to assist me with a property dispute. As a retiree, my budget is limited.',
      status: 'Normal',
      date: Date.now(),
    },
    user: {
      name: 'Jane Doe',
      profileImg: '',
    },
  },
  {
    id: '3',
    case: {
      id: '3',
      location: 'Karachi',
      category: 'Family Law',
      title: 'Need a lawyer for a family law matter',
      description:
        'I am seeking a lawyer who can help me navigate a complex family law issue. I am a single parent and have limited funds.',
      status: 'Urgent',
      date: Date.now(),
    },
    user: {
      name: 'Richard Roe',
      profileImg: '',
    },
  },
  {
    id: '4',
    case: {
      id: '4',
      location: 'Multan',
      category: 'Employment Law',
      title: 'Seeking a lawyer for an employment law issue',
      description:
        'I need a lawyer who is well-versed in employment law to help me with a workplace dispute. I am a full-time employee and have a moderate budget.',
      status: 'Normal',
      date: Date.now(),
    },
    user: {
      name: 'Alice Johnson',
      profileImg: '',
    },
  },
  {
    id: '5',
    case: {
      id: '5',
      location: 'Faisalabad',
      category: 'Immigration Law',
      title: 'Need a lawyer for an immigration matter',
      description:
        'I am looking for a lawyer who specializes in immigration law to assist me with a visa issue. I am a foreign worker and have a limited budget.',
      status: 'Urgent',
      date: Date.now(),
    },
    user: {
      name: 'Bob Smith',
      profileImg: '',
    },
  },
];
type LawyerCard = {
  user: {
    id: string;
    name: string;
    isOnline: boolean;
    profileImg: string;
    category: string;
    location: string;
    rating: number;
    reviews: number;
    experience: number;
    description: string;
    status: string;
  };
};

export const ClientScreenTempData: LawyerCard[] = [
  {
    user: {
      id: '1',
      isOnline: true,
      name: 'John Doe',
      profileImg: '',
      category: 'Criminal Law',
      location: 'Islamabad',
      rating: 2.5,
      reviews: 12,
      experience: 4,
      description:
        'Experience lawyer with 4 years of experience i can help you with your case.',
      status: 'Unavailable',
    },
  },
  {
    user: {
      id: '2',
      isOnline: true,
      name: 'Jane Doe',
      profileImg: '',
      category: 'Civil Law',
      location: 'Lahore',
      rating: 4.5,
      reviews: 12,
      experience: 5,
      description:
        "As an experienced lawyer, I can help you with your case. I'm available to take on new clients.",
      status: 'Available',
    },
  },
  {
    user: {
      id: '3',
      isOnline: false,
      name: 'Alice Smith',
      profileImg: '',
      category: 'Family Law',
      location: 'Karachi',
      rating: 3.5,
      reviews: 20,
      experience: 6,
      description:
        'Specializing in family law, I have 6 years of experience and can assist you with your case.',
      status: 'Available',
    },
  },
  {
    user: {
      id: '4',
      isOnline: true,
      name: 'Bob Johnson',
      profileImg: '',
      category: 'Corporate Law',
      location: 'Peshawar',
      rating: 4.0,
      reviews: 15,
      experience: 7,
      description:
        'With 7 years of experience in corporate law, I am ready to take on your case.',
      status: 'Unavailable',
    },
  },
  {
    user: {
      id: '5',
      isOnline: false,
      name: 'Charlie Brown',
      profileImg: '',
      category: 'Immigration Law',
      location: 'Multan',
      rating: 5.0,
      reviews: 25,
      experience: 8,
      description:
        'As an immigration lawyer with 8 years of experience, I can help you navigate your case.',
      status: 'Available',
    },
  },
  {
    user: {
      id: '6',
      isOnline: true,
      name: 'Diana Prince',
      profileImg: '',
      category: 'Environmental Law',
      location: 'Quetta',
      rating: 3.0,
      reviews: 10,
      experience: 5,
      description:
        'I am an environmental lawyer with 5 years of experience. I am ready to assist you with your case.',
      status: 'Unavailable',
    },
  },
];
