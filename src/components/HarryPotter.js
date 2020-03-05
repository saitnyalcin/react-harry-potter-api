import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import HarryPotterLogo from '../images/harryPotterLogo.jpeg';
// https://www.potterapi.com/v1/characters/?key=$2a$10$uW/huqiJSfRgNj9rrpdl8u4Ob1nhpJdQpA5PVt/aqDqi6S1YKU5Aa
//http://hp-api.herokuapp.com/api/characters

const HarryPotter = () => {
  const [data, setData] = useState([]);

  const harryPotterBookSeries = [
    { id: 1, name: "The Philospher's Stone" },
    { id: 2, name: 'The Chamber Of Secrets' },
    { id: 3, name: 'The Prisoner Of Askaban' },
    { id: 4, name: 'The Goblet Of Fire' },
    { id: 5, name: 'The Order Of The Phoenix' },
    { id: 6, name: 'The Half-Blood Prince' },
    { id: 7, name: 'The Deathly Hallows' }
  ];

  useEffect(() => {
    axios
      .get('http://hp-api.herokuapp.com/api/characters')
      .then(result => setData(result.data));
  }, []);

  return (
    <React.Fragment>
      <div id="logo">{/* <img src={HarryPotterLogo} /> */}</div>
      <div class="centered">
        Happiness can be found, even in the darkest of times, if one only
        remembers to turn on the light. <br />
        <p className="author">- Harry Potter and the Prisoner of Azkaban</p>
      </div>
      <img
        id="castle"
        src="http://getwallpapers.com/wallpaper/full/9/4/0/17379.jpg"
        alt=""
      />
      <img
        src="https://i0.wp.com/freepngimages.com/wp-content/uploads/2016/11/harry-potter.png?fit=895%2C895"
        class="harry-potter"
      ></img>
      <div class="container">
        <h1>Tribute To Harry Potter</h1>
        <h3>The Journey Of The Most Amazing Book-series Of The Millenium</h3>

        <p>
          Harry Potter is a series of fantasy novels written by British author
          <b> J. K. Rowling.</b> The novels chronicle the life of a young
          wizard, Harry Potter, and his friends Hermione Granger and Ron
          Weasley, all of whom are students at Hogwarts School of Witchcraft and
          Wizardry. The main story arc concerns Harry's struggle against Lord
          Voldemort, a dark wizard who intends to become immortal, overthrow the
          wizard governing body known as the Ministry of Magic, and subjugate
          all wizards and muggles, a reference term that means non-magical
          people.
          <br />
          Since the release of the first novel, Harry Potter and the
          Philosopher's Stone, on 26 June 1997, the books have found immense
          popularity, critical acclaim, and commercial success worldwide. They
          have attracted a wide adult audience as well as younger readers, and
          are often considered cornerstones of modern young adult literature.
          The series has also had its share of criticism, including concern
          about the increasingly dark tone as the series progressed, as well as
          the often gruesome and graphic violence it depicts. As of February
          2018, the books have sold more than 500 million copies worldwide,
          making them the best-selling book series in history, and have been
          translated into eighty languages. The last four books consecutively
          set records as the fastest-selling books in history, with the final
          instalment selling roughly eleven million copies in the United States
          within twenty-four hours of its release.
          <br />
          The series was originally published in English by two major
          publishers, Bloomsbury in the United Kingdom and Scholastic Press in
          the United States. A play, Harry Potter and the Cursed Child, based on
          a story co-written by Rowling, premiered in London on 30 July 2016 at
          the Palace Theatre, and its script was published by Little, Brown. The
          original seven books were adapted into an eight-part film series by
          Warner Bros. Pictures, which is the third highest-grossing film series
          of all time as of February 2018. In 2016, the total value of the Harry
          Potter franchise was estimated at $25 billion, making Harry Potter one
          of the highest-grossing media franchises of all time. A series of many
          genres, including fantasy, drama, coming of age, and the British
          school story (which includes elements of mystery, thriller, adventure,
          horror, and romance), the world of Harry Potter explores numerous
          themes and includes many cultural meanings and references. According
          to Rowling, the main theme is death. Other major themes in the series
          include prejudice, corruption, and madness. <br /> The success of the
          books and films has allowed the Harry Potter franchise to expand, with
          numerous derivative works, a travelling exhibition that premiered in
          Chicago in 2009, a studio tour in London that opened in 2012, a
          digital platform on which J.K. Rowling updates the series with new
          information and insight, and a pentalogy of spin-off films premiering
          in November 2016 with Fantastic Beasts and Where to Find Them, among
          many other developments. Most recently, themed attractions,
          collectively known as The Wizarding World of Harry Potter, have been
          built at several Universal Parks & Resorts amusement parks around the
          world.
        </p>

        <h3>The 7 Books</h3>
        <img
          id="booksImg"
          src="https://adoptingjames.files.wordpress.com/2014/11/wll8iikzcwcnx5gp6nh7.jpg"
          alt=""
        />
        <div>
          <ul>
            {harryPotterBookSeries.map(book => (
              <li key={book.id}>{book.name}</li>
            ))}
          </ul>
        </div>

        <h3>Characters</h3>
        {/* <img
          id="books"
          src="http://images5.fanpop.com/image/photos/26700000/Harry-Potter-characters-harry-potter-26761906-500-220.gif"
          alt=""
        /> */}
      </div>
      <div className="flex-container">
        {data
          // Shows only the humans and those who does not have a house name
          .filter(
            item =>
              item.species === 'human' &&
              item.house !== '' &&
              item.yearOfBirth !== ''
          )
          .map(item => (
            <div className="card" key={item.id}>
              <img
                className="avatarImg"
                src={item.image}
                alt="Avatar"
                style={{ width: '100%' }}
              />
              <div className="avatarDetails">
                <div>
                  <b>{item.name}</b>
                </div>
                <div>
                  {item.yearOfBirth}, {item.house}
                </div>
                <div>{item.actor}</div>
              </div>
            </div>
          ))}
      </div>

      <div className="footer">
        <p>
          To know more about Harry Potter click
          <a href="https://en.wikipedia.org/wiki/Harry_Potter"> here.</a>
        </p>
      </div>
    </React.Fragment>
  );
};

export default HarryPotter;
