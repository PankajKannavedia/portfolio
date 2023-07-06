import React, { useState } from "react";
import "../css/portfolio.css";

const Portfolio = () => {
  const [isThemeDark, setIsThemeDark] = useState(false);
  const [activeTab, setActiveTab] = useState("projects");

  const getThemeIcon = () => {
    if (isThemeDark) {
      return (
        <i
          class="ri-sun-line change-theme"
          id="theme-button"
          onClick={() => setIsThemeDark(!isThemeDark)}
        ></i>
      );
    } else {
      return (
        <i
          class="ri-moon-line change-theme"
          id="theme-button"
          onClick={() => setIsThemeDark(!isThemeDark)}
        ></i>
      );
    }
  };

  return (
    <section className={`wrapper ${isThemeDark ? "dark-theme" : ""}`}>
      {/* =============== HEADER =============== */}
      <header class="profile container">
        {/* Theme button  */}
        {getThemeIcon()}

        <div class="profile__container grid">
          <div class="profile__data">
            <div class="profile__border">
              <div class="profile__perfil">
                {/* <!-- Insert your image, according to the example size of the portfolio --> */}
                <img src="assets/img/profile.png" alt="" />
              </div>
            </div>

            <h2 class="profile__name">Pankaj Kannavedia</h2>
            <h3 class="profile__profession">
              Software Engineer | Web developer
            </h3>

            <ul class="profile__social">
              <a
                href="https://www.instagram.com/pankaj_kannavedia/"
                target="_blank"
                class="profile__social-link"
                rel="noreferrer"
              >
                <i class="ri-instagram-line"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/pankaj-kannavedia/"
                target="_blank"
                class="profile__social-link"
                rel="noreferrer"
              >
                <i class="ri-linkedin-box-line"></i>
              </a>
              <a
                href="https://github.com/PankajKannavedia/"
                target="_blank"
                class="profile__social-link"
                rel="noreferrer"
              >
                <i class="ri-github-line"></i>
              </a>
            </ul>
          </div>

          <div class="profile__info grid">
            <div class="profile__info-group">
              <h3 class="profile__info-number">0</h3>
              <p class="profile__info-description">
                Years of <br /> work
              </p>
            </div>
            <div class="profile__info-group">
              <h3 class="profile__info-number">3</h3>
              <p class="profile__info-description">
                Completed <br /> projects
              </p>
            </div>
            <div class="profile__info-group">
              <h3 class="profile__info-number">0</h3>
              <p class="profile__info-description">
                Satisfied <br /> customers
              </p>
            </div>
          </div>

          <div class="profile__buttons">
            {/* <!-- Insert your CV --> */}
            <a
              download=""
              href="assets/pdf/Resume-Pankaj-Kannavedia.pdf"
              class="button"
            >
              Download Resume <i class="ri-download-line"></i>
            </a>

            <div class="profile__buttons-small">
              {/* <!-- Insert a real number plus country code --> */}
              <a
                href="https://api.whatsapp.com/send?phone=+917566545206&text=Hello Sir, How are You?"
                target="_blank"
                class="button button__small button__gray"
                rel="noreferrer"
              >
                <i class="ri-whatsapp-line"></i>
              </a>
              {/* <!-- Insert your brand name or profile --> */}
              <a
                href="https://www.facebook.com/messages/t/100006848646511"
                target="_blank"
                class="button button__small button__gray"
                rel="noreferrer"
              >
                <i class="ri-messenger-line"></i>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* <!--=============== MAIN ===============--> */}
      <main class="main">
        <section class="filters container">
          {/* <!--=============== FILTERS TABS ===============--> */}
          <ul class="filters__content">
            <button
              class={`filters__button ${
                activeTab === "projects" ? "filter-tab-active" : ""
              }`}
              onClick={() => setActiveTab("projects")}
            >
              Projects
            </button>
            <button
              class={`filters__button ${
                activeTab === "skills" ? "filter-tab-active" : ""
              }`}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </button>
          </ul>

          <div class="filters__sections">
            {/* <!--=============== PROJECTS ===============--> */}
            {activeTab === "projects" && (
              <div class="projects__content grid filters__active">
                <article class="projects__card">
                  {/* <!-- Insert your image in a rectangular format (Ex: 600 x 400, 1000 x 800, 1200 x 1000, etc) --> */}
                  <img
                    src="assets/img/project1.jpg"
                    alt=""
                    class="projects__img"
                  />

                  <div class="projects__modal">
                    <div>
                      <span class="projects__subtitle">Website</span>
                      <h3 class="projects__title">Hospital</h3>
                      <a
                        href="https://carehospitalbykannavedia.000webhostapp.com/#"
                        class="projects__button button button__small"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <i class="ri-link"></i>
                      </a>
                    </div>
                  </div>
                </article>

                <article class="projects__card">
                  <img
                    src="assets/img/project2.jpg"
                    alt=""
                    class="projects__img"
                  />

                  <div class="projects__modal">
                    <div>
                      <span class="projects__subtitle">Website</span>
                      <h3 class="projects__title">Portfolio</h3>
                      <a href="#" class="projects__button button button__small">
                        <i class="ri-link"></i>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            )}

            {/* <!--=============== SKILLS ===============--> */}
            {activeTab === "skills" && (
              <div class="skills__content grid">
                <div class="skills__area">
                  <h3 class="skills__title">Frontend Developer</h3>

                  <div class="skills__box">
                    <div class="skills__group">
                      <div class="skills__data">
                        <i class="ri-checkbox-circle-line"></i>

                        <div>
                          <h3 class="skills__name">HTML</h3>
                          <span class="skills__level">Intermediate</span>
                        </div>
                      </div>

                      <div class="skills__data">
                        <i class="ri-checkbox-circle-line"></i>

                        <div>
                          <h3 class="skills__name">Bootstrap</h3>
                          <span class="skills__level">Intermediate</span>
                        </div>
                      </div>
                      <div class="skills__data">
                        <i class="ri-checkbox-circle-line"></i>

                        <div>
                          <h3 class="skills__name">Angular</h3>
                          <span class="skills__level">Intermediate</span>
                        </div>
                      </div>
                      <div class="skills__data">
                        <i class="ri-checkbox-circle-line"></i>

                        <div>
                          <h3 class="skills__name">Colyseus JS</h3>
                          <span class="skills__level">Intermediate</span>
                        </div>
                      </div>
                      <div class="skills__data">
                        <i class="ri-checkbox-circle-line"></i>

                        <div>
                          <h3 class="skills__name">Git / Gitlab</h3>
                          <span class="skills__level">Intermediate</span>
                        </div>
                      </div>
                    </div>

                    <div class="skills__group">
                      <div class="skills__data">
                        <i class="ri-checkbox-circle-line"></i>

                        <div>
                          <h3 class="skills__name">CSS</h3>
                          <span class="skills__level">Intermediate</span>
                        </div>
                      </div>

                      <div class="skills__data">
                        <i class="ri-checkbox-circle-line"></i>

                        <div>
                          <h3 class="skills__name">JavaScript</h3>
                          <span class="skills__level">Intermediate</span>
                        </div>
                      </div>

                      <div class="skills__data">
                        <i class="ri-checkbox-circle-line"></i>

                        <div>
                          <h3 class="skills__name">React JS</h3>
                          <span class="skills__level">Basic</span>
                        </div>
                      </div>

                      <div class="skills__data">
                        <i class="ri-checkbox-circle-line"></i>

                        <div>
                          <h3 class="skills__name">Babylon JS</h3>
                          <span class="skills__level">Basic</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="skills__area">
                  <h3 class="skills__title">Backend Developer</h3>

                  <div class="skills__box">
                    <div class="skills__group">
                      <div class="skills__data">
                        <i class="ri-checkbox-circle-line"></i>

                        <div>
                          <h3 class="skills__name">Node JS</h3>
                          <span class="skills__level">Intermediate</span>
                        </div>
                      </div>

                      <div class="skills__data">
                        <i class="ri-checkbox-circle-line"></i>

                        <div>
                          <h3 class="skills__name">MySQL</h3>
                          <span class="skills__level">Intermediate</span>
                        </div>
                      </div>
                    </div>

                    <div class="skills__group">
                      <div class="skills__data">
                        <i class="ri-checkbox-circle-line"></i>

                        <div>
                          <h3 class="skills__name">Core Java</h3>
                          <span class="skills__level">Intermediate</span>
                        </div>
                      </div>
                      <div class="skills__data">
                        <i class="ri-checkbox-circle-line"></i>

                        <div>
                          <h3 class="skills__name">Mongo DB</h3>
                          <span class="skills__level">Basic</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* <!--=============== FOOTER ===============--> */}
      <footer class="footer container">
        <span class="footer__copy">
          &#169;
          <a
            href="https://www.linkedin.com/in/pankaj-kannavedia/"
            target="blank"
          >
            {" "}
            Pankaj Kannavedia
          </a>{" "}
          . All Rights Reserved
        </span>
      </footer>
    </section>
  );
};
export default Portfolio;
