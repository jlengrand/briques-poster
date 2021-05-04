import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { speaker } from './speaker';

@customElement("briques-poster")
export class BriquesPoster extends LitElement {

  @property() episode = speaker.episode;

  @property() time = speaker.time;

  @property() date = speaker.date;

  @property() speaker = speaker;

  render() {
    return html`
      <main>
        <div class="left-side">
            <div class="logo">
              <img src="assets/logo_color_text_square.png">
            </div>
            <div class="whichwhen">
                <div class="which">
                  <h2>${this.speaker.episode}</h2>
                </div>
                <div class="when">
                    <h4 class="space">${this.speaker.date}</h4>
                    <h4>${this.speaker.time}</h4>
                </div>
            </div>

        </div>
        <div class="right-side">
          <div class="title">
            <h5>${this.speaker.title}</h5>
            <h6>${this.speaker.subtitle}</h6>
          </div>
          <div class="speaker">
            <div class="speakerface">
              <img src="assets/speakers/${this.speaker.image}">
            </div>
            <div class="speakerinfo">
              <h5>${this.speaker.name}</h5>
              <h5>${this.speaker.twitter}</h5>
            </div>
          </div>
          <div class="twitch">
            <h6>https://www.twitch.tv/rdvspeakers</h6>
          </div>

        </div>
      </main>
    `;
  }

  static styles = css`

    h2, h3, h4, h5, h6, h7{
      margin: 0;
      padding: 0;
    }

    :host {
      text-align: center;
      font-size : 6rem;
      // font-family: "Comic Sans MS", "Comic Sans", cursive;
      font-family : Snowy_Night;
      color: white;

      display: inline-block;
      width: 1920px;
      height: 1080px;
      background-image: url("assets/brick5.jpeg");
      background-repeat: repeat;
      background-size: auto;
      opacity:0.8;
      filter: grayscale(25%);
    }

    main {
      display: flex;
      width: 100%;
      height:100%;
    }

    .left-side{
      flex: 0 0 40%;
      display: flex;
      flex-direction: column;
    }

    .right-side{
      flex: 0 0 60%;
      display:flex;
      flex-direction: column;
    }

    .logo{
      flex: 0 0 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .logo img{
      width:80%;
      object-fit:contain;
    }

    .whichwhen{
      flex: 0 0 50%;
      display: flex;
      flex-direction: column;
    }

    .which{
      flex: 0 0 30%;
      display:flex;
      align-items: center;
      justify-content: center;
    }

    .when{
      flex: 0 0 70%;
    }

    .when .space{
      margin-top:5%;
    }

    .title{
      flex: 0 0 40%;

      display:flex;
      flex-direction:column;
      align-items: center;
      justify-content: center;
    }

    .speaker{
      flex: 0 0 30%;
      display:flex;
      flex-direction:row;
    }

    .speakerface{
      flex: 0 0 30%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .speakerface img{
      max-width:80%;
      max-height:80%;
      border-radius: 50%;
      border: 10px solid white;
      background-color: white;
    }

    .speakerinfo{
      flex: 0 0 70%;

      display:flex;
      flex-direction:column;
      align-items: center;
      justify-content: center;
    }

    .twitch{
      flex: 0 0 30%;
      display:flex;
      align-items: center;
      justify-content: center;
    }
  `;
}
