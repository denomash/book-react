import React from "react";
import wojtek from "../imgs/wojtek-fus-cityscape.jpg";
import big from "../imgs/big_thumb_02d381b7abdaa4e1a4c61b5b252201f8.jpg";

const Body = () => (
  <div>
    <div>
      <h2 className="ui center aligned icon header">
        <i className="circular users icon" />
        Friends
      </h2>
    </div>
    <div className="ui segment">
      <img
        className="ui centered medium image"
        src={big}
        alt="tuna"
        width="100%"
      />
      <p>
        Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
        facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
        referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
        electram, eos choro alterum definiebas in. Vim dolorum definiebas an.
        Mei ex natum rebum iisque.
      </p>
      <p>
        Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
        definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his
        te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo
        vide phaedrum, vim vivendum maiestatis in.
      </p>

      <img
        className="ui centered medium image"
        src={wojtek}
        width="100%"
        height="5%"
        alt="bacon"
      />
      <p>
        Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei
        ut facer dolores adolescens, no illum aperiri quo, usu odio brute at.
        Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam,
        wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire
        mnesarchum eu per, quas minimum postulant per id.
      </p>
    </div>
    <h4 className="ui horizontal divider header">
      <i className="tag icon" />
      Description
    </h4>
    <p>
      Doggie treats are good for all times of the year. Proven to be eaten by
      99.9% of all dogs worldwide.
    </p>
  </div>
);
export default Body;
