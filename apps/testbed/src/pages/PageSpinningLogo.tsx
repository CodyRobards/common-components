import CodeBlock from "../components/CodeBlock/CodeBlock";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";
import Example from "../components/Example/Example";
import "../styles/spinning.css";

import { WavelengthFileDownloader, WavelengthSpinningLogo } from "@wavelengthusaf/components";

function PageSpinningLogo() {
  const imp = `import { WavelengthSpinningLogoComponent } from '@wavelengthusaf/components';`;
  const mySVG = (
    <svg width="24" height="24" viewBox="0 0 61 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M60.9828 2.08828C60.9759 1.97531 60.969 1.86234 60.969 1.74594V0L59.2177 0.0308107C51.8409 0.1609 51.1803 11.5403 50.4784 23.5873C50.1928 28.5649 49.8969 33.7103 49.0918 37.5137C48.6823 39.4445 47.7637 42.6831 46.1947 42.6831H46.1878C44.7015 42.6831 43.8378 39.5644 43.4559 37.7054C42.699 34.0253 42.4375 28.9894 42.1863 24.1179L42.176 23.9057C41.5498 12.1873 40.9064 0.0650448 33.1339 0.0650448C25.3613 0.0650448 24.3498 11.352 23.0974 23.2997V23.3374C22.2165 31.5022 21.0192 42.6865 17.3755 42.6865C13.7318 42.6865 12.5344 31.5022 11.6571 23.3374V23.3032C10.4012 11.4205 9.21761 0.195134 1.75131 0.0650448L0 0.0342341V4.2998L1.67562 4.34431C5.26426 4.44016 6.4513 15.4772 7.31835 23.5359L7.33899 23.7277C8.5914 35.6788 9.775 46.9658 17.3755 46.9658C24.976 46.9658 26.1596 35.6788 27.412 23.7311L27.4361 23.4983C28.3031 15.4156 29.4902 4.34431 33.1339 4.34431C36.7775 4.34431 37.4141 15.8333 37.851 24.2172C38.1194 29.5475 38.3981 35.0557 39.3443 39.1741C39.7881 41.1083 41.1438 47 46.2429 47C53.4752 47 54.1393 35.7404 54.8412 23.8235L54.8481 23.6832C55.3091 15.9908 56.0041 4.36485 59.2934 4.34431L61 4.33404V2.6326C61 2.44432 60.9897 2.2663 60.9794 2.08486L60.9828 2.08828Z"
        fill="url(#paint0_linear_167_3046)"
      ></path>
      <defs>
        <linearGradient id="paint0_linear_167_3046" x1="0" y1="23.5017" x2="61.0895" y2="23.5017" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EE2A7B"></stop>
          <stop offset="0.14" stopColor="#ED1C24"></stop>
          <stop offset="0.28" stopColor="#EFA13F"></stop>
          <stop offset="0.42" stopColor="#FFE62B"></stop>
          <stop offset="0.44" stopColor="#D8DE33"></stop>
          <stop offset="0.52" stopColor="#43BF54"></stop>
          <stop offset="0.56" stopColor="#07B261"></stop>
          <stop offset="0.63" stopColor="#03B0A8"></stop>
          <stop offset="0.7" stopColor="#00AEEF"></stop>
          <stop offset="0.71" stopColor="#05A7EA"></stop>
          <stop offset="0.77" stopColor="#3966BA"></stop>
          <stop offset="0.82" stopColor="#5A3D9C"></stop>
          <stop offset="0.84" stopColor="#662D91"></stop>
          <stop offset="1" stopColor="#213569"></stop>
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <div className="spinningLogoPage">
      <>
        <span className="page-name">Spinning Logo</span>
        <p>A Wavelength-themed spinning logo; typically used on a loading screen.</p>
        <br />
        <h2>Import Statement</h2>
        <CodeBlock code={imp} />
        <Example
          title="Wavelength Spinning Logo"
          description="The Wavelength Spinning Logo takes in 2 props a svg(Type ReactNode, see implementation below.), and a size prop. To render the animation, create a CSS file in your project directory. Copy the CSS code below and import it into your file. This will make the spinning logo functional."
        >
          {/* {loadingSymbol} */}
          <ComponentContainer>
            <WavelengthSpinningLogo svg={mySVG} size={200} />
          </ComponentContainer>
          <CodeBlock code={"<WavelengthSpinningLogo svg={mySVG} size={200} />"} />
          <h2>SVG</h2>
          <CodeBlock
            code='const mySVG = (
    <svg width="24" height="24" viewBox="0 0 61 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M60.9828 2.08828C60.9759 1.97531 60.969 1.86234 60.969 1.74594V0L59.2177 
        0.0308107C51.8409 0.1609 51.1803 11.5403 50.4784 23.5873C50.1928 28.5649 49.8969 
        33.7103 49.0918 37.5137C48.6823 39.4445 47.7637 42.6831 46.1947 42.6831H46.1878C44.7015
         42.6831 43.8378 39.5644 43.4559 37.7054C42.699 34.0253 42.4375 28.9894 42.1863 
         24.1179L42.176 23.9057C41.5498 12.1873 40.9064 0.0650448 33.1339 0.0650448C25.3613
         0.0650448 24.3498 11.352 23.0974 23.2997V23.3374C22.2165 31.5022 21.0192 42.6865
         17.3755 42.6865C13.7318 42.6865 12.5344 31.5022 11.6571 23.3374V23.3032C10.4012
         11.4205 9.21761 0.195134 1.75131 0.0650448L0 0.0342341V4.2998L1.67562 4.34431C5.26426
         4.44016 6.4513 15.4772 7.31835 23.5359L7.33899 23.7277C8.5914 35.6788 9.775 46.9658
         17.3755 46.9658C24.976 46.9658 26.1596 35.6788 27.412 23.7311L27.4361 23.4983C28.3031
         15.4156 29.4902 4.34431 33.1339 4.34431C36.7775 4.34431 37.4141 15.8333 37.851
         24.2172C38.1194 29.5475 38.3981 35.0557 39.3443 39.1741C39.7881 41.1083 41.1438 47
         46.2429 47C53.4752 47 54.1393 35.7404 54.8412 23.8235L54.8481 23.6832C55.3091 15.9908
         56.0041 4.36485 59.2934 4.34431L61 4.33404V2.6326C61 2.44432 60.9897 2.2663 60.9794
         2.08486L60.9828 2.08828Z"
        fill="url(#paint0_linear_167_3046)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_167_3046"
          x1="0"
          y1="23.5017"
          x2="61.0895"
          y2="23.5017"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EE2A7B"></stop>
          <stop offset="0.14" stopColor="#ED1C24"></stop>
          <stop offset="0.28" stopColor="#EFA13F"></stop>
          <stop offset="0.42" stopColor="#FFE62B"></stop>
          <stop offset="0.44" stopColor="#D8DE33"></stop>
          <stop offset="0.52" stopColor="#43BF54"></stop>
          <stop offset="0.56" stopColor="#07B261"></stop>
          <stop offset="0.63" stopColor="#03B0A8"></stop>
          <stop offset="0.7" stopColor="#00AEEF"></stop>
          <stop offset="0.71" stopColor="#05A7EA"></stop>
          <stop offset="0.77" stopColor="#3966BA"></stop>
          <stop offset="0.82" stopColor="#5A3D9C"></stop>
          <stop offset="0.84" stopColor="#662D91"></stop>
          <stop offset="1" stopColor="#213569"></stop>
        </linearGradient>
      </defs>
    </svg>
  );'
          />
          <h2>spinning.css</h2>
          <WavelengthFileDownloader fileLoc="local" fileURL="./files/spinning.txt" fileName="spinning.css" />
          <br />
          <CodeBlock
            code=":root {
    --animation-max-speed: 1500ms;
    --animation-inner-speed: calc(var(--animation-max-speed) - 1000ms);
    --animation-middle-speed: calc(var(--animation-max-speed) - 500ms);
    --animation-outer-speed: calc(var(--animation-max-speed) - 0ms);
  }
  
  #spinning {
    margin: 20px;
    width: 100px;
    height: 100px;
    -webkit-animation-name: spin;
    -webkit-animation-duration: 2000ms;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: spin;
    -moz-animation-duration: 2000ms;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    -ms-animation-name: spin;
    -ms-animation-duration: 2000ms;
    -ms-animation-iteration-count: infinite;
    -ms-animation-timing-function: linear;
    animation-name: spin;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  #inner-circle {
    -webkit-animation-name: spin;
    -webkit-animation-duration: var(--animation-inner-speed);
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: spin;
    -moz-animation-duration: var(--animation-inner-speed);
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    -ms-animation-name: spin;
    -ms-animation-duration: var(--animation-inner-speed);
    -ms-animation-iteration-count: infinite;
    -ms-animation-timing-function: linear;
    animation-name: spin;
    animation-duration: var(--animation-inner-speed);
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  #middle-circle {
    -webkit-animation-name: spin;
    -webkit-animation-duration: var(--animation-middle-speed);
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: spin;
    -moz-animation-duration: var(--animation-middle-speed);
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    -ms-animation-name: spin;
    -ms-animation-duration: var(--animation-middle-speed);
    -ms-animation-iteration-count: infinite;
    -ms-animation-timing-function: linear;
    animation-name: spin;
    animation-duration: var(--animation-middle-speed);
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  #outer-circle {
    -webkit-animation-name: spin;
    -webkit-animation-duration: var(--animation-outer-speed);
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: spin;
    -moz-animation-duration: var(--animation-outer-speed);
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    -ms-animation-name: spin;
    -ms-animation-duration: var(--animation-outer-speed);
    -ms-animation-iteration-count: infinite;
    -ms-animation-timing-function: linear;
    animation-name: spin;
    animation-duration: var(--animation-outer-speed);
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  
  @-ms-keyframes spin {
    from {
      -ms-transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
    }
  }
  
  @-moz-keyframes spin {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }
  
  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }"
          />
        </Example>
      </>
    </div>
  );
}

export default PageSpinningLogo;
