<template>
  <main>
    <section class="hero">
      <div class="container hero__container">
        <div class="header_none">
          <a class="header__logo" href="#">
            <img class="imgHeader" src="../assets/img/Horizontal-ua.svg" alt="tretiypoverh" />
          </a>
        </div>
        <div class="hero-content">
          <img class="hero__imageMobile" src="../assets/img/hero-img1.svg" alt="psychology helps" />
          <h1 class="hero__title">Будуємо світле майбутнє</h1>
          <p class="hero__text">
            Центр психологічної допомоги та реабілітації
          </p>
          <router-link class="hero__button button__blue button" to="/ПідібратиПсихолога">Підібрати психолога</router-link>
        </div>
        <img class="hero__image" src="../assets/img/hero-img1.svg" alt="psychology helps" />
      </div>
    </section>
    <section>
      <div class="problem-solving">
        <div class="container">
          <div class="">
            <h3 class="section-title">Наші спеціалісти допоможуть вам</h3>
            <div class="problem-solving__box">
              <ul class="problem-solving__list">
                <li class="problem-solving__item">
                  <div class="problem-solving__images">
                    <img alt="" class="lazyloaded" data-src="/../assets/img/problem01.svg"
                      src="../assets/img/problem01.svg" />
                  </div>
                  <div class="problem-solving__text">
                    <p>
                      Позбутися тривожних думок та навчитися справлятися зі
                      стресом
                    </p>
                  </div>
                </li>
                <li class="problem-solving__item">
                  <div class="problem-solving__images">
                    <img alt="" class="lazyloaded" data-src="/../assets/img/problem02.svg"
                      src="../assets/img/problem02.svg" />
                  </div>
                  <div class="problem-solving__text">
                    <p>
                      Пропрацювати травматичні події і адаптуватися до нових
                      умов життя
                    </p>
                  </div>
                </li>
                <li class="problem-solving__item">
                  <div class="problem-solving__images">
                    <img alt="" class="lazyloaded" data-src="/../assets/img/problem03.svg"
                      src="../assets/img/problem03.svg" />
                  </div>
                  <div class="problem-solving__text">
                    <p>
                      Впоратись з втратою і горем, знайти сенс життя і
                      повернути радість
                    </p>
                  </div>
                </li>
                <li class="problem-solving__item">
                  <div class="problem-solving__images">
                    <img alt="" class="lazyloaded" data-src="/../assets/img/problem04.svg"
                      src="../assets/img/problem04.svg" />
                  </div>
                  <div class="problem-solving__text">
                    <p>
                      Налагодити стосунки з рідними та побудувати здорові
                      відносини
                    </p>
                  </div>
                </li>
                <li class="problem-solving__item">
                  <div class="problem-solving__images">
                    <img alt="" class="lazyloaded" data-src="/../assets/img/problem05.svg"
                      src="../assets/img/problem05.svg" />
                  </div>
                  <div class="problem-solving__text">
                    <p>Досягнути бажаних цілей і знайти своє призначення</p>
                  </div>
                </li>
                <li class="problem-solving__item">
                  <div class="problem-solving__images">
                    <img alt="" class="lazyloaded" data-src="/../assets/img/problem06.svg"
                      src="../assets/img/problem06.svg" />
                  </div>
                  <div class="problem-solving__text">
                    <p>
                      Та ще багато чого іншого. З любов'ю, команда Третьго
                      Поверху
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="wave-container">
        <svg class="wave1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
          <path fill="#fdf7f1" fill-opacity="1"
            d="M0,96L60,101.3C120,106.5,240,117.5,360,106.7C480,96,600,64,720,61.3C840,58.5,960,85.5,1080,93.3C1200,101.5,1320,90.5,1380,85.3L1440,80L1440,160L1380,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z">
          </path>
        </svg>
      </div>
      <section class="qualification">
        <div class="container qualification__container">
          <div class="qualification__text-group">
            <h2 class="qualification__title">
              З вами працюватимуть
              <p class="qualification__title--accent">лише кваліфіковані</p>
              психологи
            </h2>
          </div>
          <h3 class="qualification__subtitle">КритеріЇ відбору</h3>
          <ul class="qualification__criteria-list">
            <li class="qualification__criteria-item">
              <p class="qualification__criteria-item-number">1</p>
              <h4 class="qualification__criteria-item-title">
                Вища освіта та підвищення кваліфікації
              </h4>
              <p class="qualification__criteria-item-description">
                Усі спеціалісти мають вищу психологічну освіту, а також
                сертифіковані у провідних підходах терапії.
              </p>
            </li>
            <li class="qualification__criteria-item">
              <p class="qualification__criteria-item-number">2</p>
              <h4 class="qualification__criteria-item-title">
                Психологічна практика від 3-х років
              </h4>
              <p class="qualification__criteria-item-description">
                З Вами працюють досвічені психологи, що проходять обовʼязкову
                особисту терапію та супервізію.
              </p>
            </li>
            <li class="qualification__criteria-item">
              <p class="qualification__criteria-item-number">3</p>
              <h4 class="qualification__criteria-item-title">
                Успішне проходження співбесіди
              </h4>
              <p class="qualification__criteria-item-description">
                Ретельно перевіряємо професійні та особисті якості психологів.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <div class="banner-selection">
        <div class="container">
          <div class="banner-selection__banner">
            <div class="banner-selection__banner__text">
              <div class="span_banner">
                <span>Перша консультація безкоштовна</span>
              </div>
              <p class="banner_text1">
                Під час першої зустрічі ви можете як розповісти про те, що
                викликає найбільше занепокоєння в житті, та те, як це впливає
                на ваші почуття та поведінку, так і просто провести час у
                безпечному просторі де вас підтримають та зрозуміють.
              </p>
              <a href="#" class="btn-selection">Залишити заявку</a>
            </div>
            <div class="banner-selection__img">
              <img class="lazyload" src="../assets/img/banner2.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="wave-box">
        <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
          <path fill="#fdf7f1" fill-opacity="1"
            d="M0,96L60,101.3C120,106.5,240,117.5,360,106.7C480,96,600,64,720,61.3C840,58.5,960,85.5,1080,93.3C1200,101.5,1320,90.5,1380,85.3L1440,80L1440,160L1380,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z">
          </path>
        </svg>
      </div>
    </section>
    <section class="carousel-container">
      <div class="carousel">
        <div class="carousel-track">
          <div class="carousel-slide">
            <div class="per">
              <img class="psu-person" src="../assets/img/Andriy.jpg" alt="Психолог">
              <div class="psu_pos">
                <p class="psu_fin">Онлайн - 1000 грн</p>
              </div>
            </div>
            <div>
              <h6>Софія Шевчук</h6>
              <p>Практичний психолог</p>
              <p>Сексолог</p>
            </div>
          </div>
          <div class="carousel-slide">
            <div class="per">
              <img class="psu-person" src="../assets/img/Andriy.jpg" alt="Психолог">
              <div class="psu_pos">
                <p class="psu_fin">Онлайн - 1000 грн</p>
              </div>
            </div>
            <div>
              <h6>Софія Шевчук</h6>
              <p>Практичний психолог</p>
              <p>Сексолог</p>
            </div>
          </div>
          <div class="carousel-slide">
            <div class="per">
              <img class="psu-person" src="../assets/img/Andriy.jpg" alt="Психолог">
              <div class="psu_pos">
                <p class="psu_fin">Онлайн - 1000 грн</p>
              </div>
            </div>
            <div>
              <h6>Софія Шевчук</h6>
              <p>Практичний психолог</p>
              <p>Сексолог</p>
            </div>
          </div>
          <div class="carousel-slide">
            <div class="per">
              <img class="psu-person" src="../assets/img/Andriy.jpg" alt="Психолог">
              <div class="psu_pos">
                <p class="psu_fin">Онлайн - 1000 грн</p>
              </div>
            </div>
            <div>
              <h6>Софія Шевчук</h6>
              <p>Практичний психолог</p>
              <p>Сексолог</p>
            </div>
          </div>
          <div class="carousel-slide">
            <div class="per">
              <img class="psu-person" src="../assets/img/Andriy.jpg" alt="Психолог">
              <div class="psu_pos">
                <p class="psu_fin">Онлайн - 1000 грн</p>
              </div>
            </div>
            <div>
              <h6>Софія Шевчук</h6>
              <p>Практичний психолог</p>
              <p>Сексолог</p>
            </div>
          </div>
          <div class="carousel-slide">
            <div class="per">
              <img class="psu-person" src="../assets/img/Andriy.jpg" alt="Психолог">
              <div class="psu_pos">
                <p class="psu_fin">Онлайн - 1000 грн</p>
              </div>
            </div>
            <div>
              <h6>Софія Шевчук</h6>
              <p>Практичний психолог</p>
              <p>Сексолог</p>
            </div>
          </div>
          <div class="carousel-slide">
            <div class="per">
              <img class="psu-person" src="../assets/img/Andriy.jpg" alt="Психолог">
              <div class="psu_pos">
                <p class="psu_fin">Онлайн - 1000 грн</p>
              </div>
            </div>
            <div>
              <h6>Софія Шевчук</h6>
              <p>Практичний психолог</p>
              <p>Сексолог</p>
            </div>
          </div>
          <div class="carousel-slide">
            <div class="per">
              <img class="psu-person" src="../assets/img/Andriy.jpg" alt="Психолог">
              <div class="psu_pos">
                <p class="psu_fin">Онлайн - 1000 грн</p>
              </div>
            </div>
            <div>
              <h6>Софія Шевчук</h6>
              <p>Практичний психолог</p>
              <p>Сексолог</p>
            </div>
          </div>
          <div class="carousel-slide">
            <div class="per">
              <img class="psu-person" src="../assets/img/Andriy.jpg" alt="Психолог">
              <div class="psu_pos">
                <p class="psu_fin">Онлайн - 1000 грн</p>
              </div>
            </div>
            <div>
              <h6>Софія Шевчук</h6>
              <p>Практичний психолог</p>
              <p>Сексолог</p>
            </div>
          </div>
          <div class="carousel-slide">
            <div class="per">
              <img class="psu-person" src="../assets/img/Andriy.jpg" alt="Психолог">
              <div class="psu_pos">
                <p class="psu_fin">Онлайн - 1000 грн</p>
              </div>
            </div>
            <div>
              <h6>Софія Шевчук</h6>
              <p>Практичний психолог</p>
              <p>Сексолог</p>
            </div>
          </div>
          <div class="carousel-slide">
            <div class="per">
              <img class="psu-person" src="../assets/img/Andriy.jpg" alt="Психолог">
              <div class="psu_pos">
                <p class="psu_fin">Онлайн - 1000 грн</p>
              </div>
            </div>
            <div>
              <h6>Софія Шевчук</h6>
              <p>Практичний психолог</p>
              <p>Сексолог</p>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-button carousel-button-prev">←</button>
      <button class="carousel-button carousel-button-next">→</button>
    </section>
    <section class="onOff">
      <div class="onlin">
        <div class="onl">
          <h5>
            <a href="#">СПІЛКУВАТИСЯ<br />ОНЛАЙН</a>
          </h5>
          <img class="onl" src="../assets/img/online.png" alt="online" />
        </div>
        <div class="line"></div>
        <div class="onl">
          <h5>
            <a href="#">ЗУСТРІТИСЯ<br />ОСОБИСТО</a>
          </h5>
          <img class="onl" src="../assets/img/offline.png" alt="online" />
        </div>
      </div>
    </section>

    <section class="faq1">
      <div class="faq1">
        <div class="faqName">Відповіді на поширені питання</div>
        <div v-for="(faqGroup, groupIndex) in faqGroups" :key="groupIndex" class="faqGroup">
          <h2>{{ faqGroup.title }}</h2>
          <div class="faq" v-for="(faq, index) in faqGroup.items" :key="index">
            <div class="faq-item">
              <div class="question" @click="toggleAnswer(groupIndex, index)" :class="{ active: faq.open }">
                {{ faq.question }}
                <span class="arrow">&#9660;</span>
              </div>
              <div class="answer" :style="{ maxHeight: faq.open ? '500px' : '0' }">
                <p v-for="(paragraph, pIndex) in faq.answer" :key="pIndex">
                  <span v-if="paragraph.bold">{{ paragraph.bold }}</span>
                  {{ paragraph.text }}
                </p>
                <ul v-if="faq.list">
                  <li v-for="(item, liIndex) in faq.list" :key="liIndex">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="wave-container">
      <svg class="wave1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
        <path fill="#fdf7f1" fill-opacity="1"
          d="M0,96L60,101.3C120,106.5,240,117.5,360,106.7C480,96,600,64,720,61.3C840,58.5,960,85.5,1080,93.3C1200,101.5,1320,90.5,1380,85.3L1440,80L1440,160L1380,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z">
        </path>
      </svg>
    </div>
    <section class="">
      <h6 class="h6_inst">Слідкуйте за нами в Instagram</h6>
      <div class="inst">
        <div class="block burnout-syndrome">
          <a target="_blank" href="https://www.instagram.com/tretiypoverh/p/C9W20UUis8m/">
            <img src="../assets/img/inst_6.jpg" alt="instagram" />
          </a>
        </div>
        <div class="block high-expectations">
          <a target="_blank" href="https://www.instagram.com/tretiypoverh/p/C9U8uQHCgOW/">
            <img src="../assets/img/inst_3.jpg" alt="instagram" />
          </a>
        </div>
        <div class="block attention-signs large">
          <a target="_blank" href="https://www.instagram.com/tretiypoverh/?igsh=MXZremF1NDV0ZzFhaA%3D%3D">
            <img class="attention-signs_img" src="../assets/img/crocodil.svg" alt="instagram" />
            <p class="crocodile">
              Крокодил Андрій не може позбутися триивожних думок...
            </p>
          </a>
        </div>
        <div class="block say-no">
          <a target="_blank" href="https://www.instagram.com/tretiypoverh/p/C9UVNVWIEJL/">
            <img src="../assets/img/inst_4.jpg" alt="instagram'" />
          </a>
        </div>
        <div class="block jomo">
          <a target="_blank" href="https://www.instagram.com/tretiypoverh/p/C9UTsZZICyj/">
            <img src="../assets/img/inst_5.jpg" alt="instagram" />
          </a>
        </div>
        <div class="block summer-anxiety">
          <a target="_blank" href="https://www.instagram.com/p/C9U-madCJOl/">
            <img src="../assets/img/inst_2.jpg" alt="instagram" />
          </a>
        </div>
        <div class="block summer">
          <a target="_blank" href="https://www.instagram.com/p/C9W6p1RCB0u/">
            <img src="../assets/img/inst_7.jpg" alt="instagram" />
          </a>
        </div>
      </div>
    </section>
    <section class="maps">
      <iframe class="maps1"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14375.088046268993!2d30.50064844712558!3d50.43773738470025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cefc40d1abff%3A0x40083df6f95261ac!2z0YPQuy4g0JHQvtC70YzRiNCw0Y8g0JLQsNGB0LjQu9GM0LrQvtCy0YHQutCw0Y8sIDQ0LCDQmtC40LXQsiwgMDIwMDA!5e0!3m2!1sru!2sua!4v1718281394774!5m2!1sru!2sua"
        width="100%" height="450" style="border: 0" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>


  </main>
</template>

<script>

import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'Index',

  data() {
    return {
      isOpen: false,
      faqGroups: [
        {
          items: [
            {
              question: "У чому різниця між психологом, психотерапевтом та психіатром?",
              answer: [
                {
                  text: "Різниця між психологом, психотерапевтом та психіатром полягає у напрямі освіти, методах та підходах у роботі.",
                },
                {
                  bold: "Психолог - ",
                  text: "це спеціаліст з вищою освітою у галузі психології, що спеціалізується на вивченні поведінкових та розумових процесів, та тому, як люди взаємодіють з навколишнім середовищем або іншими людьми. Психолог допомагає справлятися з широким спектром психолочіних проблем, розвивати емоційний інтелект та підтримувати психоемоційне здоров'я.",
                },
                {
                  bold: "Психотерапевт - ",
                  text: "це психолог або лікар, який пройшов додаткове навчання і отримав сертифікацію у новій галузі.",
                },
                {
                  bold: "Психіатр - ",
                  text: "це лікар з медичною освітою, який спеціалізується на психіатрії. Психіатри діагностують та лікують психічні розлади, використовуючи як психотерапевтичні методи, так і медикаментозне лікування. Вони є єдиними серед цих трьох фахівців, хто має право призначати та контролювати прийом психотропних ліків.",
                },
                {
                  text: "Кожен з цих фахівців відіграє важливу роль у підтримці психічного здоров’я, і вибір спеціаліста залежить від конкретних потреб клієнта.",
                },
              ],
              open: false,
            },
          ],
        },
        {
          items: [
            {
              question: "Усе сказане мною на сесії - конфіденційно?",
              answer: [
                {
                  text: "Конфіденційніть - це один із пріорітетів у психології. Ви можете бути впевнені, що усе, що обговорюється під час сесії, залишиться між вами та вашим спеціалістом.",
                },
              ],
              open: false,
            },
          ],
        },
        {
          items: [
            {
              question: "Як підібрати психолога?",
              answer: [
                {
                  text: "Пошук психолога може бути складним завданням, але ці поради допоможуть вам швидше впоратися:",
                },
              ],
              list: ["Визначте свої потреби.", "Пройдіть швидке опитутування, що ми створили для підбору спеціаліста або задавайте питання у нашому чаті.", "Зверніть увагу на комфорт та довіру під час першої зустрічі.", "Не соромтеся запитувати у психолога про все, що вас турбує.", "Проаналізуйте свої враження пілся першої консультації."],
              open: false,
            },
          ],
        },
        {
          items: [
            {
              question: "Чи можу я скасувати або перенести зустріч?",
              answer: [
                {
                  text: "Так, ви маєте можливість скасувати або перенести зустріч не пізніше ніж за 24 години до її початку. Якщо ви робите це пізніше, оплата за сесію не підлягає поверненню. Перша консультація безкоштовна.",
                },
              ],
              open: false,
            },
          ],
        },
        {
          items: [
            {
              question: "Які методи психотерапії існують?",
              answer: [
                {
                  text: "У психології є стільки різних напрямків, скільки існує потреб і запитів у її клієнтів. Кожен з них має свої унікальні особливості та методи роботи. Ось деякі з найпоширеніших типів:",
                },
              ],
              list: ["Когнітивно-поведінкова терапія (КПТ)", "Психоаналіз", "Гештальт-терапія", "Арт-терапія", "Тілесно-орієнтована психотерапія", "Екзистенційна терапія"],
              open: false,
            },
          ],
        },
        {
          items: [
            {
              question: "Чому варто звернутися до психолога?",
              answer: [
                {
                  text: "Обговорення проблем з психологом може мати багато переваг для підтримки психічного здоров'я та підвищення загального добробуту. Ось кілька причин, чому це може бути корисно:",
                },
              ],
              list: ["Покращення емоційного благополуччя: психолог допоможе впоратися з депресією, тривогою, стресом та іншими емоційними труднощами.",
                "Подолання складнощів: з психологом ви можете навчитися ефективно справлятися з життєвими викликами, зміцнити стресостійкість та самоконтроль.",
                "Покращення стосунків: психолог може допомогти вирішити конфлікти, налагодити комунікацію та зміцнити стосунки з партнерами, друзями або родиною.",
                "Підтримка під час змін: якщо ви переживаєте життєві зміни, такі як розлучення, втрата близької людини або зміна роботи, психолог надасть підтримку та допоможе адаптуватися.",
                "Поглиблення самопізнання: психотерапія дозволяє краще зрозуміти свої почуття, мотиви та поведінку, що сприяє особистісному зростанню та саморозвитку.",
              ],
              open: false,
            },
          ],
        },
        {
          items: [
            {
              question: "Як підготуватися до першої консультації?",
              answer: [
                {
                  text: "Перша консультація з психологом може бути хвилюючою, але правильна підготовка допоможе вам отримати максимальний резутьтат:",
                },
              ],
              list: [
                "Зберіть інформацію про свої симптоми та переживання",
                "Визначте свої очікування",
                "Підготуйте запитання",
                "Будьте відкритими та чесними",
                "Залиште собі час для роздумів",
              ],
              open: false,
            },
          ],
        },
        {
          items: [
            {
              question: "У мене залишилися запитання - що мені робити?",
              answer: [
                {
                  text: "Якщо у вас залишилися запитання, будь ласка, зв'яжіться з нашою службою підтримки, у чаті, телеграмі або за номером телефону, і ми допоможемо вам з усіма вашими питаннями.",
                },
              ],
              open: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggleAnswer(groupIndex, faqIndex) {
      this.faqGroups[groupIndex].items[faqIndex].open = !this.faqGroups[groupIndex].items[faqIndex].open;
    },
  },
  mounted() {
    const burgerMenu = document.getElementById('burgerMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    const toggleMenu = () => {
      menuOverlay.classList.toggle('open');
      burgerMenu.classList.toggle('open');
    };

    burgerMenu.addEventListener('click', toggleMenu);

    function checkTimeAndHideMessages() {
      const now = new Date();
      const currentHour = now.getHours();

      const elements = document.querySelectorAll('.message.operator');

      if (currentHour >= 20 || currentHour < 9) {
        elements.forEach((element) => {
          element.style.display = 'none';
        });
      } else {
        elements.forEach((element) => {
          element.style.display = '';
        });
      }
    }


    checkTimeAndHideMessages();
    setInterval(checkTimeAndHideMessages, 60000);



    // Scroll
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button-next');
    const prevButton = document.querySelector('.carousel-button-prev');
    const slideWidth = slides[0].getBoundingClientRect().width;
    const visibleSlides = 3;
    const maxIndex = slides.length - visibleSlides;
    let currentIndex = 0;

    // Переменные для перетаскивания
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;

    // Инициализация состояния кнопок
    updateButtonState();

    nextButton.addEventListener('click', () => {
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateTrackPosition();
      }
    });

    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateTrackPosition();
      }
    });

    function updateTrackPosition() {
      currentTranslate = -currentIndex * slideWidth;
      track.style.transform = `translateX(${currentTranslate}px)`;
      updateButtonState();
    }

    function updateButtonState() {
      if (currentIndex === 0) {
        prevButton.disabled = true;
        prevButton.style.opacity = '0.5'; // Полупрозрачная кнопка
      } else {
        prevButton.disabled = false;
        prevButton.style.opacity = '1';
      }

      if (currentIndex === maxIndex) {
        nextButton.disabled = true;
        nextButton.style.opacity = '0.5'; // Полупрозрачная кнопка
      } else {
        nextButton.disabled = false;
        nextButton.style.opacity = '1';
      }
    }

    // Отключение выделения текста при перетаскивании
    track.addEventListener('mousedown', (event) => {
      event.preventDefault();
      isDragging = true;
      startPos = event.pageX - track.offsetLeft;
      prevTranslate = currentTranslate;
      animationID = requestAnimationFrame(animation);
    });

    track.addEventListener('mouseup', () => {
      isDragging = false;
      cancelAnimationFrame(animationID);
      const movedBy = currentTranslate - prevTranslate;

      // Обновляем текущий индекс в зависимости от смещения
      if (movedBy < -100 && currentIndex < maxIndex) currentIndex++;
      if (movedBy > 100 && currentIndex > 0) currentIndex--;

      updateTrackPosition();
    });

    track.addEventListener('mousemove', (event) => {
      if (isDragging) {
        const currentPosition = event.pageX - track.offsetLeft;
        currentTranslate = prevTranslate + currentPosition - startPos;
        setSliderPosition();
      }
    });

    track.addEventListener('mouseleave', () => {
      if (isDragging) {
        isDragging = false;
        cancelAnimationFrame(animationID);
        updateTrackPosition();
      }
    });

    track.addEventListener('touchstart', (event) => {
      event.preventDefault();
      isDragging = true;
      startPos = event.touches[0].clientX - track.offsetLeft;
      prevTranslate = currentTranslate;
      animationID = requestAnimationFrame(animation);
    });

    track.addEventListener('touchend', () => {
      isDragging = false;
      cancelAnimationFrame(animationID);
      const movedBy = currentTranslate - prevTranslate;

      // Обновляем текущий индекс в зависимости от смещения
      if (movedBy < -100 && currentIndex < maxIndex) currentIndex++;
      if (movedBy > 100 && currentIndex > 0) currentIndex--;

      updateTrackPosition();
    });

    track.addEventListener('touchmove', (event) => {
      if (isDragging) {
        const currentPosition = event.touches[0].clientX - track.offsetLeft;
        currentTranslate = prevTranslate + currentPosition - startPos;
        setSliderPosition();
      }
    });

    function animation() {
      setSliderPosition();
      if (isDragging) requestAnimationFrame(animation);
    }

    function setSliderPosition() {
      track.style.transform = `translateX(${currentTranslate}px)`;
    }

  }

});
</script>

<style lang="scss" scoped></style>
