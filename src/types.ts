// Used https://jvilk.com/MakeTypes/ to make easy types

export interface Content {
  homepage: Homepage;
  menu: Menu;
  footer: Footer;
}

interface Homepage {
  landingSectionTitle: string;
  landingSectionText: string;
  landingSectionImage1: string;
  landingSectionImage2: string;
  welcomeSectionTitle: string;
  welcomeSectionText: string;
  welcomeSectionImage1: string;
  welcomeSectionImage2: string;
  welcomeSectionImage3: string;
  welcomeSectionImage4: string;
  aboutSectionTitle: string;
  aboutSectionText: string;
  aboutSectionImage: string;
  findUsSectionTitle: string;
  findUsSectionCard1Image: string;
  findUsSectionCard1Title: string;
  findUsSectionCard1Text: string;
  findUsSectionCard2Image: string;
  findUsSectionCard2Title: string;
  findUsSectionCard2Text: string;
  findUsSectionCard3Image: string;
  findUsSectionCard3Title: string;
  findUsSectionCard3Text: string;
  eventsSectionTitle: string;
  eventsSectionCard1Image: string;
  eventsSectionCard1Title: string;
  eventsSectionCard1Text: string;
  eventsSectionCard2Image: string;
  eventsSectionCard2Title: string;
  eventsSectionCard2Text: string;
  eventsSectionText: string;
  chooseUsSectionTitle: string;
  chooseUsSectionText: string;
  chooseUsSectionCard1Image: string;
  chooseUsSectionCard1Title: string;
  chooseUsSectionCard2Image: string;
  chooseUsSectionCard2Title: string;
  chooseUsSectionCard3Image: string;
  chooseUsSectionCard3Title: string;
  chooseUsSectionCard4Image: string;
  chooseUsSectionCard4Title: string;
  newsletterSectionTitle: string;
  newsletterSectionSubtitle: string;
  newsletterSectionText: string;
  logo: string;
}

interface Menu {
  title: string;
  card1Image: string;
  card1Title: string;
  card1Text: string;
  card1Price: string;
  card2Image: string;
  card2Title: string;
  card2Text: string;
  card2Price: string;
}

interface Footer {
  text: string;
  phoneNumber: string;
  emailAddress: string;
  facebookLink: string;
  twitterLink: string;
  instagramLink: string;
  logo: string;
}