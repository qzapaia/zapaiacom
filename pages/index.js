import Head from "next/head";

export default () => (
  <div>
    <Head>
      <title>Marcelo Zapaia 😀</title>
      <meta content="123" />
    </Head>
    <div className="links">
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

    <style global jsx>{`
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        background-color: #77d9f0;
        color: #fafafa;
        font-size: 22px;
      }

      .links {
        display: flex;
        min-height: 100vh;
        align-items: center;
        justify-content: center;
        width: 100%;
      }

      a {
        color: #ddd;
        text-decoration: none;
        font-family: "Bungee", cursive;
        margin: 12px;
        transition: all 0.2s;
      }
      a.gh {
        margin-left: 10px;
        margin-right: 10px;
      }
      a:hover {
      }

      img {
        height: 50px;
      }
    `}</style>
  </div>
);
