<template>
    <section class="sect_f">
        <svg class="svgFooter" width="100%" height="100px" viewBox="0 0 100 20" preserveAspectRatio="none">
            <path d="M0 0 Q 50 30 100 0 L100 20 L0 20 Z" fill="#322626"></path>
        </svg>
        <div class="footer">
            <div class="container footer__container">
                <div class="footer__main-group">
                    <div class="footerImg">
                        <router-link class="header__logo footer__logo" to="/">
                            <img class="tretiypoverhIcon" src="../assets/img/logo_notext.svg" alt="tretiypoverh" />
                        </router-link>
                        <p class="lighthouse">
                            ТРЕТІЙ ПОВЕРХ <br /><span class="center_foot">ПСИХОЛОГІЧНИЙ ЦЕНТР</span>
                        </p>
                    </div>
                    <div class="foot">
                        <div class="footerNav">
                            <h5>Юридична інформація</h5>
                            <router-link class="a" to="/ДоговірОферти">Договір оферти</router-link>
                            <router-link class="a" to="/ПолітикаКонфіденційності">Політика
                                конфіденційності</router-link>
                            <router-link class="a" to="/ПолітикаПоверненняКоштів">Повернення коштів</router-link>
                            <div>
                                <img src="../assets/img/clock.svg" alt="clock" />
                                <p class="p">Графік роботи: з 10:00 до 21:00</p>
                            </div>
                            <div class="a">
                                <button @click="showModal = true">Вхід</button>

                                <div v-if="showModal" class="modal">
                                    <div class="modal-content1">
                                        <span @click="showModal = false" class="close">&times;</span>
                                        <form @submit.prevent="login">
                                            <label for="username">Логін:</label>
                                            <input v-model="username" type="text" id="username" required>

                                            <label class="pswd"for="password">Пароль:</label>
                                            <input class="password" v-model="password" type="password" id="password" required>

                                            <button class="su" type="submit">Вхід</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer__group">
                    <div class="messengerIcon">
                        <a class="marR" target="_blank" href="https://t.me/tretiypoverh"><img
                                src="../assets/img/telegram.png" alt="telegram" /></a>
                        <a class="marR" target="_blank"
                            href="https://www.instagram.com/tretiypoverh/?igsh=MXZremF1NDV0ZzFhaA%3D%3D"><img
                                src="../assets/img/instagram.png" alt="instagram" /></a>
                        <a class="marR" target="_blank"
                            href="https://www.tiktok.com/@tretiypoverh?_t=8nNYebRkgeD&_r=1"><img
                                src="../assets/img/tiktok.png" alt="tiktok" /></a>
                    </div>
                    <div class="icon">
                        <div class="iconBack">
                            <img src="../assets/img/visa.png" alt="visa" />
                        </div>
                        <div class="iconBack">
                            <img src="../assets/img/card.png" alt="master card" />
                        </div>
                        <div class="iconBack">
                            <img src="../assets/img/gpay.png" alt="google pay" />
                        </div>
                        <div class="iconBack">
                            <img src="../assets/img/applepay.png" alt="apple pay" />
                        </div>
                        <div class="iconBack">
                            <img src="../assets/img/paypal.png" alt="paypal" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
    name: 'Footer',
    data() {
        return {
            showModal: false,
            username: '',
            password: '',
            psychologists: [
                { id: '1', password: 'password1' },
                { id: '2', password: 'password2' },
                { id: '3', password: 'password3' }
            ],
        };
    },
    methods: {
        login() {
            const user = this.psychologists.find(psych => psych.id === this.username);
            if (user && user.password === this.password) {
                this.showModal = false;
                this.$router.push({ path: `/psychologist/${user.id}` });
            } else {
                alert('Невірний логін або пароль');
            }
        },
    },
})
</script>

<style lang="scss" scoped></style>
