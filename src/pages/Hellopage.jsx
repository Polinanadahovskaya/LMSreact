import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  BigPlayButton,
  PlaybackRateMenuButton,
} from 'video-react';
import './Hellopage/hello-page.scss';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React from 'react';
import { Link } from 'react-router-dom';

import 'video-react/styles/scss/video-react.scss';

import Test from './Test';

const Hellopage = () => {
  return (
    <>
      <div>
        <Player>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          <ControlBar autoHide={false}>
            <ReplayControl seconds={10} order={2.2} />
            <ForwardControl seconds={10} order={3.1} />
            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
          </ControlBar>
          <BigPlayButton position="center" />
        </Player>
      </div>
      <div className="buttons">
        <Popup
          trigger={
            <button type="button" className="btn btn-primary">
              Test
            </button>
          }
          position="botton left"
        >
          {() => <Test />}
        </Popup>
        <button type="button" className="btn btn-primary">
          Домашнее задание
        </button>
        <Link class="btn btn-primary btn-manual" to="./manual.html">
          Методические материалы
        </Link>
      </div>
    </>
  );
};

export default Hellopage;
