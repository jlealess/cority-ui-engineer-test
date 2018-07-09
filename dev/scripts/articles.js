import { today } from './helpers';

const articleDate = today();

const articles = {
  article1: {
    date: articleDate,
    headline: "Curabitur rutrum ut",
    imgLink: "https://placeimg.com/150/150/nature",
    new: false,
    subhead: "Vivamus quis enim vitae est",
    text:
      "Proin maximus magna accumsan nulla lobortis, nec aliquet nibh pulvinar quis elit hendrerit, congue justo vel, viverra massa"
  },
  article2: {
    date: articleDate,
    headline: "Nunc nibh purus",
    imgLink: "https://placeimg.com/150/150/tech",
    new: false,
    subhead: "Vivamus quis enim vitae est",
    text: "Nulla tincidunt libero quis egestas venenatis"
  },
  article3: {
    date: articleDate,
    headline: "Phasellus eget elementum",
    imgLink: "https://placeimg.com/150/150/animals",
    new: true,
    subhead: "Vivamus quis enim vitae est",
    text:
      "Vivamus maximus odio sit amet odio fermentum, at dignissim magna posuere..."
  }
};

export default articles;