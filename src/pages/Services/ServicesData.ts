import airportTransfer from "@/assets/airport-transfer.avif";
import group from "@/assets/group.avif";
import privateTour from "@/assets/private-tour.avif";

type ServicesType = {
  image: string;
  heading: string;
  body: string;
  buttonText: string;
};

export const servicesData: ServicesType[] = [
  {
    image: airportTransfer,
    heading: "Airport Transfer",
    body: "Reliable and comfortable rides to and from the airport, on time, every time.",
    buttonText: "Learn More",
  },
  {
    image: group,
    heading: "Private Tour",
    body: "Explore at your own pace with personalised routes and a dedicated driver.",
    buttonText: "Learn More",
  },
  {
    image: privateTour,
    heading: "Group Transport",
    body: "Travel together in comfort, perfect for events, outings, and group adventures.",
    buttonText: "Learn More",
  },
];
