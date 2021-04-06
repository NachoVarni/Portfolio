import styles from "./Work.module.scss";

export default function work() {
  return (
    <div className={styles.work} id="projects">
      <div className={styles.title}>
        <span>Projects</span>
      </div>

      <div className={styles.projects}>
        <div className={styles.project}>
          <h3 className={styles.name}>Musikit</h3>
          <p className={styles.desc}>
            A spotify clone made with Next.js and using the API spotify
            provides.
          </p>
          <span className={styles.github}>
            <a href="https://github.com/NachoVarni/musikit-next">GitHub</a>
          </span>
          <span className={styles.vercel}>
            <a href="https://musikit-nachovarni.vercel.app">Vercel</a>
          </span>
        </div>
        <div className={styles.project}>
          <h3 className={styles.name}>Pokedex</h3>
          <p className={styles.desc}>
            A pokedex made with React.js and using Redux
          </p>
          <span className={styles.github}>
            <a href="https://github.com/NachoVarni/Pokedex-redux-react">
              GitHub
            </a>
          </span>
        </div>
        <div className={styles.project}>
          <h3 className={styles.name}>ML API</h3>
          <p className={styles.desc}>
            An input filtering result coming from MercadoLibre's API{" "}
          </p>
          <span className={styles.github}>
            <a href="https://github.com/NachoVarni/mercado-libre-api">GitHub</a>
          </span>
        </div>
        <div className={styles.project}>
          <h3 className={styles.name}>Toyota webpage</h3>
          <p className={styles.desc}>
            A car webpage which includes filtering and sorting options, API
            fetching, carousels. Next.js is the technology I chosed.
          </p>
          <span className={styles.github}>
            <a href="https://github.com/NachoVarni/ego-test-next">GitHub</a>
          </span>
          <span className={styles.vercel}>
            <a href="https://ego-test-next.vercel.app">Vercel</a>
          </span>
        </div>
      </div>
    </div>
  );
}

{
  /* <a href='https://musikit-next.nachovarni.vercel.app/'> <img src={'images/musikitLogo.png'} className={styles.image} /></a> */
}
