const people = [
  {
    name: "Lawrence Rice",
    street: "332 Leonora Plaza",
    city: "Lake Alvis",
    state: "South Dakota",
    country: "Sudan",
    telephone: "290.574.3780 x06669",
    birthday: "2020-06-21T04:08:11.360Z",
  },
  {
    name: "Jonathon Brekke",
    street: "3188 Heathcote Manors",
    city: "West Garrickstad",
    state: "Maryland",
    country: "Guinea",
    telephone: "892.384.6017",
    birthday: "2020-02-07T03:25:04.091Z",
  },
  {
    name: "Cameron Schumm",
    street: "8577 Brandt Loop",
    city: "Jaskolskiview",
    state: "West Virginia",
    country: "Chad",
    telephone: "1-206-634-4383",
    birthday: "2020-07-28T06:23:36.490Z",
  },
  {
    name: "Ray Nikolaus",
    street: "3536 Graham Trail",
    city: "Jenniferburgh",
    state: "Illinois",
    country: "Colombia",
    telephone: "853.423.9326 x57491",
    birthday: "2020-08-19T01:47:05.430Z",
  },
  {
    name: "Terrell Pagac II",
    street: "2887 Eddie Pike",
    city: "Eliseland",
    state: "Tennessee",
    country: "United States Minor Outlying Islands",
    telephone: "660-424-5222 x2152",
    birthday: "2020-07-27T16:44:24.262Z",
  },
  {
    name: "Inez Homenick",
    street: "04692 Ludwig Manor",
    city: "Araceliton",
    state: "Mississippi",
    country: "Sweden",
    telephone: "(586) 274-8736",
    birthday: "2020-06-27T06:35:37.484Z",
  },
  {
    name: "Yolanda Brekke",
    street: "2534 MacGyver Islands",
    city: "Fletchermouth",
    state: "Nevada",
    country: "Armenia",
    telephone: "1-475-390-9862 x944",
    birthday: "2020-05-11T02:41:03.612Z",
  },
  {
    name: "Frank Wunsch",
    street: "623 Hahn Ferry",
    city: "Bartolettiport",
    state: "Kansas",
    country: "Tunisia",
    telephone: "706-329-8774",
    birthday: "2020-11-23T10:19:32.803Z",
  },
  {
    name: "Antoinette Welch",
    street: "817 Cartwright Hills",
    city: "New Ashlee",
    state: "Vermont",
    country: "New Zealand",
    telephone: "837-474-3660 x702",
    birthday: "2020-01-07T01:53:14.971Z",
  },
  {
    name: "Angel Kihn",
    street: "37027 Einar Hollow",
    city: "West Reynold",
    state: "New Jersey",
    country: "Lebanon",
    telephone: "760-359-1529 x90904",
    birthday: "2020-01-09T18:19:42.793Z",
  },
  {
    name: "Lucia Orn",
    street: "916 Claire Expressway",
    city: "Lake Julian",
    state: "Arkansas",
    country: "Lesotho",
    telephone: "1-245-523-3167 x61165",
    birthday: "2020-01-13T16:58:19.610Z",
  },
  {
    name: "Frankie Kuhlman",
    street: "795 Johnston Island",
    city: "East Lorenzoland",
    state: "Arkansas",
    country: "United Kingdom",
    telephone: "927.280.8170 x04900",
    birthday: "2020-06-28T20:57:02.781Z",
  },
  {
    name: "Belinda Hilll",
    street: "93229 Nathanael Corners",
    city: "South Wilfredborough",
    state: "Florida",
    country: "Macao",
    telephone: "801.302.8482 x4631",
    birthday: "2019-12-30T05:05:49.457Z",
  },
  {
    name: "Tonya Kilback",
    street: "8742 Gillian Viaduct",
    city: "Ziememouth",
    state: "Kansas",
    country: "Indonesia",
    telephone: "533-566-3349 x5585",
    birthday: "2020-07-16T01:14:03.033Z",
  },
  {
    name: "Carmen Swift",
    street: "5318 Paucek Hollow",
    city: "West Friedafort",
    state: "Louisiana",
    country: "French Guiana",
    telephone: "252-226-0141 x7417",
    birthday: "2020-06-16T23:25:41.162Z",
  },
  {
    name: "Gabriel Kemmer",
    street: "1270 Kub Mission",
    city: "Botsfordchester",
    state: "Arizona",
    country: "Gabon",
    telephone: "632-598-7661 x753",
    birthday: "2020-05-10T20:31:07.542Z",
  },
  {
    name: "Mrs. Alma Herzog",
    street: "85435 Waino Keys",
    city: "East Dario",
    state: "Rhode Island",
    country: "Eritrea",
    telephone: "678.535.2247 x136",
    birthday: "2020-06-27T12:57:55.324Z",
  },
  {
    name: "Dolores Hand",
    street: "309 Lebsack Ways",
    city: "Cruickshankchester",
    state: "Florida",
    country: "Slovenia",
    telephone: "1-918-294-1159 x66424",
    birthday: "2020-02-09T03:24:53.160Z",
  },
  {
    name: "Travis Kuhic",
    street: "5775 Nyah Port",
    city: "East Roma",
    state: "Wisconsin",
    country: "Venezuela",
    telephone: "(339) 703-1837",
    birthday: "2020-02-28T16:24:06.195Z",
  },
  {
    name: "Angie Kshlerin",
    street: "59707 Margie Estate",
    city: "West Ora",
    state: "Colorado",
    country: "Palau",
    telephone: "814-767-3533",
    birthday: "2020-04-11T05:14:18.465Z",
  },
];

const personList = document.querySelector(".persons");
const name = document.querySelector("#name");
const address = document.querySelector("#address");
const phone = document.querySelector("#phone");
const birth = document.querySelector("#birth");

name.textContent = people[0].name;
address.textContent =
  people[0].city + people[0].country + people[0].state + people[0].street;
phone.textContent = people[0].telephone;
birth.textContent = people[0].birthday;

let selectedUser;

for (let i = 0; i < people.length; i++) {
  const personItem = document.createElement("li");
  personItem.className = "person__item";
  personItem.textContent = people[i].name;
  personList.appendChild(personItem);
  if (i === 0) {
    selectedUser = personItem;
    selectedUser.classList.add("active");
  }
}

personList.addEventListener("click", (e) => {
  selectedUser.classList.remove("active");
  selectedUser = e.target;
  selectedUser.classList.add("active");
  const userName = e.target.textContent;
  const findUser = people.find((p) => p.name === userName);
  name.textContent = findUser.name;
  address.textContent =
    findUser.city + findUser.country + findUser.state + findUser.street;
  phone.textContent = findUser.telephone;
  birth.textContent = findUser.birthday;
});
