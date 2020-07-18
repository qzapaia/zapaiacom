import Head from "next/head";
import { useEffect, useState } from "react";

export default () => {
  const randomH = Math.floor(Math.random() * 360);

  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <div>
      <Head>
        <title>Marcelo Zapaia 😀</title>
        <meta content="123" />
      </Head>
      <div className="links">
        <div className="links-container">
          <a
            href="https://www.linkedin.com/in/marcelo-zapaia-a78a3832/"
            target="_blank"
            className="animated swing"
          >
            <img src="/static/logos/lnkd.png" />
          </a>
          <a
            href="https://github.com/zapaiamarce"
            target="_blank"
            className="animated swing gh"
          >
            <img src="/static/logos/gh.png" />
          </a>
          <a
            href="https://www.instagram.com/zapaia_"
            target="_blank"
            className="animated swing"
          >
            <img src="/static/logos/ig.png" />
          </a>
          <a
            href="https://medium.com/@zapaiamarce"
            target="_blank"
            className="animated swing"
          >
            <img src="/static/logos/medium.png" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC_0W-quK2KIAOOeTGU1NVBw"
            target="_blank"
            className="animated swing"
          >
            <img src="/static/logos/youtube.png" />
          </a>
        </div>
      </div>

      <style global jsx>{`
        * {
          box-sizing: border-box;
        }
        @keyframes change-bg {
          0% {
            background-color: hsla(${randomH}, 75%, 62%, 1);
          }
          50% {
            background-color: hsla(${randomH + 500}, 75%, 62%, 1);
          }
          100% {
            background-color: hsla(${randomH}, 75%, 62%, 1);
          }
        }
        body {
          margin: 0;
          animation: change-bg 30s infinite;
          color: #fafafa;
          font-size: 22px;
        }

        .links {
          display: flex;
          height: 100vh; /* Fallback for browsers that do not support Custom Properties */
          height: calc(var(--vh, 1vh) * 100);
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .links-container {
          // max-width: 375px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        @media (max-width: 768px) {
          .links-container {
            flex-direction: column;
          }
        }
        a {
          color: #ddd;
          text-decoration: none;
          font-family: "Bungee", cursive;
          margin: 16px;
          transition: all 0.2s;
        }

        @media (max-width: 768px) {
          a {
            margin: 24px;
          }
        }
        a.gh {
          margin-left: 10px;
          margin-right: 10px;
        }
        a:hover {
        }

        img {
          height: 40px;
        }
      `}</style>
    </div>
  );
};
