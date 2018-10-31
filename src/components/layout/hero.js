import React from 'react';
import Card from '../shared/articleCard';
import Header from '../shared/header';
import '../../styles/components/hero.scss';

const Hero = () => (
  <div>
    <section className="Hero-section">
      <Header />
      <h2>Write it out beautifully</h2>
      <p>
        Or type it, its just as fine. Here, we help get your articles accross to
        a pool of eager readers. We know there are no limits to your
        imagination. We can’t wait to meet you.
      </p>
      <button className="btn-link" type="submit">
        Create Account
      </button>
      <button type="submit">Read Articles</button>
    </section>
    <Card />
    <section>
      <div>
        <div>
          <h2>THE COMPLETE DIGITAL TOOL FOR AUTHORS WILLING TO SHARE</h2>
          <p>Image here though</p>
        </div>
        <p>
          Lorem ipsum anothere olor sit amet consectetur, adipisicing elit.
          Cupiditate just tosint fugiat nesciunt doloribus veniam, dolor ratione
          sunt marecusandae, molestiae fugit reicivero labore quibusdam
          longLorem ipsum dolor sit amet cons pisici elit. Cupiditatesint is the
          fugiat nesciunt doloribus veniam, dolor ratione sunt reclorem usandae,
          molestiae fugit reiciendis vero labe quibusdam world odit sequi
          aperiam sit ipsum ipsa! odit sequi ap sit ipsum ipsa!
        </p>
        <hr />
        <p>Writer? We can’t wait to meet you (arrow)</p>
      </div>
    </section>
    <section>
      <p>image here too</p>
      <h2>HERE’S OUR BEST PICK FOR AUGUST</h2>
      <p>
        We have buillt a community of talentrd authors who love to write lorem
        ips Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
        Lorem ipsum dolor sit amet consectetur, adipisicing Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Cupiditatelit. Cupiditate
      </p>
    </section>
    <section>
      <div>
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <Card />
        <Card />
        <Card />
      </div>
      <p>More Articles</p>
    </section>
  </div>
);

export default Hero;