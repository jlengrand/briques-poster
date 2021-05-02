import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement("briques-poster")
export class BriquesPoster extends LitElement {

  @property() title = 'Briques du Web';

  static styles = css`

    h2, h3, h4{
      margin: 0;
      padding: 0;
    }

    :host {
      font-size : 5rem;
      font-family: Chawp;
      color: white;

      display: inline-block;
      width: 1920px;
      height: 1080px;
      background-image: url("assets/brick5.jpeg");
      background-repeat: repeat;
      background-size: auto;
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

      background-color : green;
      opacity: 0.5;

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

    .when h3{
      text-align: center
    }

    .when .space{
      margin-top:5%;
    }

  `;

  render() {
    return html`
      <main>
        <div class="left-side">
            <div class="logo">
              <img src="assets/logo_color_text_square.png">
            </div>
            <div class="whichwhen">
                <div class="which">
                  <h2>S01E04</h2>
                </div>
                <div class="when">
                    <h3 class="space">Mardi 27/04</h3>
                    <h3>12h15</h3>
                </div>
            </div>

        </div>
        <div class="right-side">

        </div>
      </main>
    `;
  }
}
