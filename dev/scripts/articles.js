import { today, randomImg } from './helpers';

const articleDate = today();

const articles = {
  article3: {
    date: articleDate,
    headline: "Curabitur rutrum ut",
    imgLink: randomImg(),
    new: true,
    subhead: "Vivamus quis enim vitae est",
    text:
      "Proin maximus magna accumsan nulla lobortis, nec aliquet nibh pulvinar quis elit hendrerit, congue justo vel, viverra massa"
  },
  article2: {
    date: articleDate,
    headline: "Nunc nibh purus",
    imgLink: '',
    new: false,
    subhead: "Vivamus quis enim vitae est",
    text: "Nulla tincidunt libero quis egestas venenatis"
  },
  article1: {
    date: articleDate,
    headline: "Phasellus eget elementum",
    imgLink: randomImg(),
    new: false,
    subhead: "Vivamus quis enim vitae est",
    text:
      "Vivamus maximus odio sit amet odio fermentum, at dignissim magna posuere..."
  }
};

export default articles;