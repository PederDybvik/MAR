import Styles from "./styles.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={Styles.footer}>
      <a target="_blank" href="https://radio.nrk.no/podkast/med_all_respekt">
        Podcast
      </a>{" "}
      |{" "}
      <a target="_blank" href="https://www.instagram.com/medallrespekt/">
        Instagram
      </a>{" "}
      |{" "}
      <a target="_blank" href="https://www.github.com/pederdybvik/mar">
        GitHub
      </a>{" "}
    </footer>
  );
};

export default Footer;

