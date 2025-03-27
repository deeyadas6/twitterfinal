export const users = [
  { id: 1, fullName: "John Doe", username: "johndoe", profilePicture: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, fullName: "Jane Smith", username: "janesmith", profilePicture: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, fullName: "Alice Johnson", username: "alicej", profilePicture: "https://randomuser.me/api/portraits/women/3.jpg" },
  { id: 4, fullName: "Bob Brown", username: "bobbrown", profilePicture: "https://randomuser.me/api/portraits/men/4.jpg" },
  { id: 5, fullName: "Michael Scott", username: "michaels", profilePicture: "https://randomuser.me/api/portraits/men/5.jpg" },
  { id: 6, fullName: "Sarah Connor", username: "sarahc", profilePicture: "https://randomuser.me/api/portraits/women/6.jpg" },
  { id: 7, fullName: "David Beckham", username: "davidb", profilePicture: "https://randomuser.me/api/portraits/men/7.jpg" },
  { id: 8, fullName: "Emma Watson", username: "emmaw", profilePicture: "https://randomuser.me/api/portraits/women/8.jpg" },
];

export const getEvenNumber = (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num % 2 === 0 ? num : num + 1;
};


const getRandomTimestamp = () => {
  const timeOptions = [
    { unit: "m", value: getEvenNumber(10, 59) }, 
    { unit: "h", value: getEvenNumber(1, 12) },  
    { unit: "d", value: getEvenNumber(1, 6) },   
    { unit: "w", value: getEvenNumber(1, 4) }    
  ];
  return timeOptions[Math.floor(Math.random() * timeOptions.length)];
};

export const tweets = [
  { id: 101, userId: 1, text: "Excited to start this new journey! 🚀", image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 102, userId: 2, text: "Beautiful sunset today! 🌅", image: "https://images.pexels.com/photos/2070485/pexels-photo-2070485.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 103, userId: 3, text: "Just finished reading an amazing book. Highly recommend it! 📖", image: "https://images.pexels.com/photos/5490059/pexels-photo-5490059.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 104, userId: 4, text: "Working on an exciting new project. Stay tuned! 🔥", image: "https://images.pexels.com/photos/5614135/pexels-photo-5614135.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 105, userId: 2, text: "Coffee is life. ☕", image: "https://images.pexels.com/photos/1024359/pexels-photo-1024359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { id: 106, userId: 5, text: "The weekend is finally here! 🎉", image: "https://images.pexels.com/photos/134991/pexels-photo-134991.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 107, userId: 6, text: "Just finished a great workout! 💪", image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { id: 108, userId: 7, text: "Nature is so beautiful! 🌿", image: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 109, userId: 8, text: "Trying out a new recipe today! 🍲", image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 120, userId: 2, text: "New blog post coming soon! 📝", image: "https://images.pexels.com/photos/13128083/pexels-photo-13128083.jpeg?auto=compress&cs=tinysrgb&w=600" }
].map(tweet => {
  const { unit, value } = getRandomTimestamp();
  return {
    ...tweet,
    likes: getEvenNumber(10, 500),
    retweets: getEvenNumber(5, 200),
    comments: getEvenNumber(5, 100),
    timestamp: `${value}${unit}`
  };
});
