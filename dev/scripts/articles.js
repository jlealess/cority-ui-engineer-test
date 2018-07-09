const today = () => {
    const date = new Date();
    const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = weekdays[date.getDay()];
    const monthDay = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const fullDate = `${day} ${month} ${monthDay} ${year}`;
    return fullDate;
}

const articleDate = today();

const articles = {
    article1: {
        date: articleDate,
        headline: 'Curabitur rutrum ut',
        imgLink: 'https://placeimg.com/150/150/nature',
        new: true,
        subhead: 'Vivamus quis enim vitae est',
        text: 'Proin maximus magna accumsan nulla lobortis, nec aliquet nibh pulvinar...',
    },
    article2: {
        date: articleDate,
        headline: 'Nunc nibh purus',
        imgLink: 'https://placeimg.com/150/150/tech',
        new: false,
        subhead: 'Vivamus quis enim vitae est',
        text: 'Nulla tincidunt libero quis egestas venenatis'
    },
    article3: {
        date: articleDate,
        headline: 'Phasellus eget elementum',
        imgLink: 'https://placeimg.com/150/150/animals',
        new: false,
        subhead: 'Vivamus quis enim vitae est',
        text: 'Vivamus maximus odio sit amet odio fermentum, at dignissim magna posuere...'
    }
}

export default articles;