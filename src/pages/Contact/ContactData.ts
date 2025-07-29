import taufik from "@/assets/taufik.jpg";
import andrew from "@/assets/andrew.jpg";

type ContactType = {
  image: string;
  name: string;
  title: string;
  phoneNum: string;
};

type SocialType = {
  iconName: "email" | "facebook" | "instagram";
  label: string;
};

export const contactData: ContactType[] = [
  {
    image: taufik,
    name: "Taufik Tenggara",
    title: "Founder and Owner",
    phoneNum: "+61 401 170 136",
  },
  {
    image: andrew,
    name: "Andrew Kusnadi",
    title: "Key Partner",
    phoneNum: "+61 426 878 005",
  },
];

export const socialData: SocialType[] = [
  {
    iconName: "email",
    label: "southeastpointgroup@gmail.com",
  },
  {
    iconName: "facebook",
    label: "Southeast Point Group",
  },
  {
    iconName: "instagram",
    label: "southeastpointgroup",
  },
];
