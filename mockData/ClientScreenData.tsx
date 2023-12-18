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
      name: 'Haider Ali',
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
      name: 'Usama ',
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
