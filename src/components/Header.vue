<template>
    <header id="header">
        <div class="container header__container">
          <router-link to="/">
            <img class="imgHeader" src="../assets/img/Horizontal-ua.svg" alt="tretiypoverh" />
          </router-link>
          <nav class="header__nav">
            <ul class="header__nav-list">

              <li class="header__nav-el1">
                <router-link to="/ПроНас">О нас</router-link>
              </li>
              <li class="header__nav-el1">
                <router-link to="/ПрайсЛист">Прайс лист</router-link>
              </li>
              <li class="header__nav-el">
                <div class="dropdown">
                  <button class="more">Контакти</button>
                  <div class="dropdown-content">

                    <div class="contact-info">
                      <p>Вам потрібна порада?</p>
                      <p>
                        📞
                        <a class="header__nav-link" href="tel:+380937853397">+380937853397</a>
                      </p>
                      <p>
                        📧
                        <a class="header__nav-link" href="mailto:tretiypoverh@gmail.com">tretiypoverh@gmail.com</a>
                      </p>
                      <p>
                        <img class="tg" src="../assets/img/telegram.png" alt="telegram" />
                        <a class="tg_a" href="https://t.me/tretiypoverh">@tretiypoverh</a>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div class="mobile__header">
        <div class="burger-menu" id="burgerMenu"></div>
        <div class="menu-overlay" id="menuOverlay">
          <ul class="menu-links">
            <li><router-link to="/">
          </router-link></li>
            <li class="li-m">
              <router-link to="/ПроНас">О нас</router-link>
            </li>
            <li class="li-m">
              <router-link to="/ПрайсЛист">Прайс лист</router-link>
            </li>
          </ul>
          <div class="menu-subheader">Вам потрібна порада?</div>
          <div class="contact-links">
            <a class="header__nav-link" href="tel:+380937853397"><img class="ph_mob" src="../assets/img/phone.png"
                alt="phone" />+380937853397</a>
            <a class="header__nav-link" href="mailto:tretiypoverh@gmail.com"><img class="em_mob" src="../assets/img/mail.png"
                alt="email" />tretiypoverh@gmail.com</a>
            <p>
              <a class="tg_a" target="_blank" href="https://t.me/tretiypoverh"><img class="tg_mob" src="../assets/img/tgg.png" alt="telegram" />
                @tretiypoverh</a>
            </p>
          </div>
        </div>
      </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'Header',
  mounted() {
    let lastScrollY = window.scrollY;
    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        header.classList.add("hide");
        header.classList.remove("show");
      } else {
        // Scrolling up
        header.classList.add("show");
        header.classList.remove("hide");
      }
      lastScrollY = window.scrollY;
    });
  }
})
</script>

<style lang="scss" scoped>


</style>
