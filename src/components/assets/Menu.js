import React from "react";

const Menu = () => (
  <div>
    {/* <div className="ui large top fixed hidden menu">
      <div className="ui container">
        <a className="active item">Home</a>
        <a className="item">Work</a>
        <a className="item">Company</a>
        <a className="item">Careers</a>
        <div className="right menu">
          <div className="item">
            <a className="ui button">Log in</a>
          </div>
          <div className="item">
            <a className="ui primary button">Sign Up</a>
          </div>
        </div>
      </div>
    </div> */}

    <div className="ui black inverted vertical footer segment">
      <div className="ui center aligned container">
        <div className="ui stackable inverted grid">
          <div className="three wide column">
            <h4 className="ui inverted header">Community</h4>
            <div className="ui inverted link list">
              <a
                className="item"
                href="https://www.transifex.com/organization/semantic-org/"
              >
                Help Translate
              </a>
              <a
                className="item"
                href="https://github.com/Semantic-Org/Semantic-UI/issues"
              >
                Submit an Issue
              </a>
              <a
                className="item"
                href="https://gitter.im/Semantic-Org/Semantic-UI"
              >
                Join our Chat
              </a>
              <a className="item" href="/cla.html" target="_blank">
                CLA
              </a>
            </div>
          </div>
          <div className="three wide column">
            <h4 className="ui inverted header">Network</h4>
            <div className="ui inverted link list">
              <a
                className="item"
                href="https://github.com/Semantic-Org/Semantic-UI"
              >
                GitHub Repo
              </a>
              <a className="item" href="http://forums.semantic-ui.com">
                User Forums
              </a>
              <a className="item" href="http://1.semantic-ui.com">
                1.x Docs
              </a>
              <a className="item" href="http://legacy.semantic-ui.com">
                0.x Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Menu;
