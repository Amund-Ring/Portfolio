import React from 'react';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Skills from './Skills';
// import { Link } from 'react-scroll';

function Main({ darkMode }) {
  console.log(darkMode);
  return (
    <main className={`${darkMode ? 'darkMode' : ''}`}>
      <h1>This is My Webpage 💫</h1>
      <p>
        Cupcake ipsum dolor sit amet biscuit fruitcake. Tart chocolate cake
        jujubes jelly-o candy. I love biscuit pudding. Chocolate cake sugar plum
        chocolate bar caramels pie cake. Caramels cookie lollipop halvah
        jelly-o. Dessert I love cake gummi bears chocolate jelly-o. Ice cream
        cotton candy candy canes carrot cake sweet I love powder chocolate.
      </p>
      <p>
        Dragée carrot cake chocolate cake dessert muffin lemon drops sesame
        snaps bear claw candy. Cake I love halvah cheesecake chocolate cake
        chupa chups. Caramels dragée sweet roll ice cream muffin brownie carrot
        cake brownie powder. Liquorice I love bear claw jelly beans. Chupa chups
        cheesecake donut pie gummi bears cake macaroon lollipop chocolate. Sweet
        muffin biscuit caramels brownie I love I love fruitcake. Dessert cake
        bonbon tiramisu sesame snaps caramels. Dessert bonbon danish pie. Jelly
        I love lollipop croissant.
      </p>
      <p>
        Liquorice wafer sesame snaps croissant apple pie powder bonbon pudding.
        Cake biscuit chupa chups tootsie roll I love caramels. Sesame snaps
        donut gummies dessert bonbon I love dessert topping tootsie roll. Dragée
        powder sesame snaps pie. Powder candy canes lemon drops jelly beans
        gummi bears. Gingerbread lollipop gummi bears oat cake chocolate cake.
        Gummi bears tootsie roll marzipan bonbon candy chocolate bar chupa chups
        candy carrot cake. Wafer sweet roll tiramisu jelly beans. Soufflé muffin
        I love cake marshmallow sesame snaps cupcake I love pie. Tart I love
        chocolate cake.
      </p>

      <Portfolio />
      <Skills />
      <Contact />
    </main>
  );
}

export default Main;
