import trekImg01 from "../images/trek-img01.jpg";
import trekImg02 from "../images/trek-img02.jpg";
import trekImg03 from "../images/trek-img03.jpg";
import trekImg04 from "../images/trek-img04.jpg";
import trekImg05 from "../images/trek-img05.jpg";
import trekImg06 from "../images/trek-img06.jpg";
import trekImg07 from "../images/trek-img07.jpg";
import trekImg08 from "../images/trek-img08.jpg";
import trekImg09 from "../images/trek-img09.jpg";
import trekImg10 from "../images/trek-img10.jpg";
import trekImg11 from "../images/trek-img11.jpg";
import trekImg12 from "../images/trek-img12.jpg";

const treks = [
  {
    id: "01",
    title: "Everest Three Passes Trek",
    district:"Solukhumbu",
    Difficulty: "challenging",
    distance: 6,
    price: 120,
    maxGroupSize: 10,
    desc: " The Three Passes Trek takes you over three 5,000m+ passes and is the best way to truly experience the Everest Region for those who have the time to spend 3 weeks on the trail. The trek includes sections of the Everest Base Camp Trek, but offers even more spectacular views of the giants in the heart of the Himalaya as you cross the Renjo La, Cho La and Kongma La passes. The Three Passes trek can be combined with other variations of the Everest Base Camp Trek.       Getting to the trailhead: a 30-minute flight from Kathmandu to Lukla.",
    reviews: [
      {
        name: "Nikesh Shrestha",
        rating: 4.7,
      },
      
    ],
    avgRating: 4.7,
    photo: trekImg01,
    featured: true,
    
  },
  {
    id: "02",
    title: "Manaslu Circuit Trek",
    distance: 5,
    Difficulty: "challenging",
    price: 110,
    district:"Gorkha",
    maxGroupSize: 8,
    desc: "The Manaslu Circuit Trek has become more accessible since new lodges were built in 2010. The trek has all the great features you’d expect from a classic Himalayan trek—deep lush valleys at lower elevations, amazing views of 8,000m peaks, and a 5,000m+ pass crossing—all the while remaining largely unspoiled by visitors.Despite its rising popularity and recent road construction, the Manaslu Circuit still feels very remote, and has fewer trekkers than the more established classic treks of Nepal.Getting to the trailhead: an 8-hour drive from Kathmandu.",
   
    reviews: [
      {
        name: "Prabin Khadka",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: trekImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Langtang Trek",
    distance: 4,
    Difficulty: "moderate",
    price: 99,
    district:"Rasuwa",
    maxGroupSize: 10,
    desc: "The Langtang trek is a trek with real heart. After having been devoid of travelers for a couple of years after the 2015 earthquake, the trails and guesthouses have been rebuilt, and trekkers are back.  The trek takes you through magnificent forests to the high alpine meadows and yak pastures around Kyangjin Gompa (a Buddhist monastery), with an optional day hike up to the top of Kyangjin Ri (peak). Getting to the trailhead: a 7-hour drive from Kathmandu",
    reviews: [
      {
        name: "John Adam",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: trekImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Annapurna Base Camp Trek",
    distance: 4,
    Difficulty: "moderate",
    price: 99,
    district:"Kaski", 
    maxGroupSize: 8,
    desc: "The Annapurna Base Camp Trek takes you deep into the Annapurna Massif to the foot of Annapurna South. The scenery is quite different from most other classic treks because the views are less expansive and more vertical: you find yourself looking almost straight up to see the mountains towering above you. Getting to the trailhead: a 25-minute flight from Kathmandu to Pokhara, followed by a 2-hour drive; or an 8-hour drive from Kathmandu.",
    reviews: [
      {
        name: "Lily Thapa",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: trekImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Upper Mustang Trek",
    distance: 4,
    Difficulty: "challenging",
    price: 180,
    district:"Mustang",  
    maxGroupSize: 6,
    desc: "The arid valley of the Upper Mustang Trek features a distinct landscape compared to almost all other treks in Nepal. With its many shades of brown and crumbling sandstone cliffs, this region lies in the desert rain shadow of the Himalaya. Mustang used to be its own kingdom, and its strong Tibetan-influenced traditions make this a culturally very interesting trek. Getting to the trailhead: you'll need to take two connecting flights: Kathmandu to Pokhara (25 minutes), and Pokhara to Jomsom (20 minutes).",
    reviews: [
      {
        name: "Bhabish Karki",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: trekImg05,
    featured: true,
  },
  {
    id: "06",
    title: "Gokyo Lakes Trek",
    distance: 5,
    Difficulty: "challenging",
    price: 99,
    district:"Solukhumbu",
    maxGroupSize: 8,
    desc: "Like the Three Passes Trek, the Gokyo Lakes Trek shares significant sections with the classic Everest Base Camp Trek but takes you into a valley west of Everest. Its main attraction are the beautiful lakes at Gokyo, at around 5,000 meters. From there, trekkers can climb Gokyo Ri (5,357m /17,575 ft), a rocky peak with one of the best expansive views on Mt Everest.Getting to the trailhead: a 30-minute flight Kathmandu to Lukla.",
    reviews: [
      {
        name: "Sagar Thapa",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: trekImg06,
    featured: true,
  },
  {
    id: "07",
    title: "Dhaulagiri Circuit Trek",
    distance: 6,
    price: 120,
    Difficulty: "challenging",
    district:"Myagdi",
    maxGroupSize: 8,
    desc: "The Dhaulagiri Circuit Trek is one of the most challenging treks in Nepal because of its sustained elevation, spending 3 days in a row trekking over snow above 5,000m without an easy way down. That said, if you have experience and are up for the challenge, this trek is an unforgettable adventure that takes you into the heart of some the highest mountains in the world. Getting to the trailhead: a 25-minute flight Kathmandu to Pokhara followed by a 2 hour drive; or an 8-hour drive from Kathmandu.",
    reviews: [
    
    ],
    avgRating: 4.5,
    photo: trekImg07,
    featured: true,
  },
  {
    id: "08",
    title: "Nar Phu Valley Trek",
    distance: 5,
    price: 99,
    Difficulty: "challenging",
    district:"Manang",
    maxGroupSize: 6,
    desc: "The Nar Phu Valley Trek is a real Himalayan wilderness experience that is as unforgettable as it is spectacular. The area  opened to visitors relatively recently, in 2002. Tucked between the more visited Annapurna and Manaslu regions, Nar Phu is a true hidden gem that offers trekkers a rare opportunity to explore unspoiled valleys that feature a mix of raw Himalayan nature and ancient Buddhist culture.  Getting to the trailhead: a day-long drive from Kathmandu via Besisahar to Koto.",
    reviews: [
      {
        name: "Ram Karki",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: trekImg08,
    featured: false,
  },

  {
    id: "09",
    title: " Everest Base Camp Trek",
    distance: 5,
    price: 99,
    Difficulty: "challenging",
    district:"Solukhumbu",
    maxGroupSize: 8,
    desc: "The Everest Base Camp Trek is among the most famous treks in the world. It certainly deserves its reputation thanks to its history, its great views and the Sherpa culture you experience during the trek. However, since the trek is so popular, its main trails tend to be quite crowded. This is why we list other treks in the Everest region (Three Passes Trek and Gokyo Lakes) higher on our list. Yet despite the crowds, Everest Base Camp continues to be a great trek that deserves to be listed among Nepal’s best treks. Getting to the trailhead: a 30-minute flight Kathmandu to Lukla..",
    reviews: [
      {
        name: "Kumar Shah",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: trekImg09,
    featured: false,
  },


  {
    id: "10",
    title: "Annapurna Circuit Trek",
    distance: 10,
    price: 99,
    Difficulty: "moderate",
    district:"Kaski",
    maxGroupSize: 8,
    desc: "The Annapurna Circuit trek is another quintessential Himalayan trek that has lost a bit of its character due to the crowds, and, in this particular case, recently constructed roads. The roads that have reduced the “unspoiled” part of this trek to about 12 days of hiking. Despite all that, the trek remains a great adventure with the crossing of the 5,416m Thorong La pass. Consider a side trip to Tilicho Lake, one of the highest lakes in the world at over 16,000 ft. Getting to the trailhead: a 25-minute flight from Kathmandu to Pokhara, followed by a 2-hour drive; or an 8-hour drive from Kathmandu.",
    reviews: [
      {
        name: "Chrish Ben",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: trekImg10,
    featured: false,
  },

  {
    id: "11",
    title: "Mardi Himal Trek",
    distance: 4,
    Difficulty: "moderate",
    price: 99,
    district:"Kaski",
    maxGroupSize: 10,
    desc: "Mardi Himal Trek is a less strenuous trek. It is one of the shorter Treks in Nepal. It is suitable for those who wish to enjoy nature up close at a comfortable pace. Depending on your choice, it offers a multi-day or multi-week hiking experience and is perfect for anyone seeking a more moderate hike.",
    reviews: [
      {
        name: "Kim Jung Won",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: trekImg11,
    featured: false,
  },


  {
    id: "12",
    title: "Langtang Gosaikunda Trek",
    distance: 5,
    Difficulty: "challenging",
    price: 99,
    district:"Rasuwa",
    maxGroupSize: 10,
    desc: "Langtang Gosaikunda Helambu Trek places among Nepal's most spectacular treks. As for the difficulty level of the tour, it ranges from easy to moderate. The scenic landscape along the Langtang River valley and the mesmerizing view of the Gosaikunda Lake will put your mind at ease and offer a much-needed break from city life.",
    reviews: [
     
    ],
    avgRating: 4.5,
    photo: trekImg12,
    featured: false,
  },



];

export default treks;
