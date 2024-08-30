<template>
    <div class="sign__up">
        <div class="container_signUp mt-5">
            <!-- Block 1 -->
            <div v-if="currentBlock === 1" class="card">
                <div class="card-header">
                    <h3>Оберіть для кого ви шукаєте психолога</h3>
                </div>
                <div class="card-body">
                    <div class="d-flex flex-column">
                        <button type="button" class="btn mb-2" @click="selectPersonType('Для себе')">для себе</button>
                        <button type="button" class="btn mb-2" @click="selectPersonType('Для пари/сім\'ї')">для
                            пари/сім'ї</button>
                        <button type="button" class="btn mb-2" @click="selectPersonType('Для дитини')">для
                            дитини</button>
                    </div>
                </div>
            </div>

            <!-- Block 2 -->
            <div v-if="currentBlock === 2" class="card">
                <div class="card-header">
                    <h3>Чи перебуваєте ви останнім часом в якихось із цих станів?</h3>
                </div>
                <div class="card-body">
                    <form id="form2">
                        <div class="list-group">
                            <div class="form-check" v-for="(state, index) in states" :key="index">
                                <input class="form-check-input" type="checkbox" :id="'state' + index"
                                    v-model="state.checked" />
                                <label class="form-check-label" :for="'state' + index">{{ state.label }}</label>
                            </div>
                        </div>
                    </form>
                    <div class="sign__up-button">
                        <button type="button" class="btn mt-3" @click="showBlock(1)">Назад</button>
                        <button type="button" class="btn mt-3" @click="showBlock(3)"
                            :disabled="!isBlock2Valid">Вперед</button>
                    </div>
                </div>
            </div>

            <!-- Block 3 -->
            <div v-if="currentBlock === 3" class="card">
                <div class="card-header">
                    <h3>Оберіть теми, з якими ви б хотіли попрацювати</h3>
                </div>
                <div class="card-body">
                    <div id="block3">
                        <div class="list-group">
                            <div class="form-check" v-for="(topic, index) in topics" :key="index">
                                <input class="form-check-input" type="checkbox" :id="'topic' + index"
                                    v-model="topic.checked" />
                                <label class="form-check-label" :for="'topic' + index">{{ topic.label }}</label>
                            </div>
                        </div>
                    </div>
                    <div class="sign__up-button">
                        <button type="button" class="btn mt-3" @click="showBlock(2)">Назад</button>
                        <button type="button" class="btn mt-3" @click="handleNextBlock3"
                            :disabled="!isBlock3Valid">Вперед</button>
                    </div>
                </div>
            </div>
            <!-- modal -->
            <div v-if="showModal" class="modal" @click.self="closeModal">
                <div class="modal-content">
                    <span class="close" @click="closeModal">&times;</span>
                    <h2>Перевірте ваші дані</h2>

                    <form @submit.prevent="submitForm">
                        <div class="form-group">
                            <label for="name">Ім'я</label>
                            <input type="text" id="name" v-model="name" required />
                        </div>
                        <div class="form-group">
                            <label for="surname">Прізвище</label>
                            <input type="text" id="surname" v-model="surname" required />
                        </div>
                        <div class="form-group">
                            <label for="phone">Номер телефону</label>
                            <input type="tel" id="phone" v-model="phone" required />
                        </div>
                        <div class="form-group">
                            <label for="format">Формат консультації</label>
                            <select id="format" v-model="selectedFormat" required>
                                <option value="" disabled selected>Оберіть формат</option>
                                <option value="онлайн">Онлайн</option>
                                <option value="оффлайн">Оффлайн</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="contact">Зв'язок</label>
                            <select id="contact" v-model="selectedContact" required>
                                <option value="" disabled selected>Оберіть спосіб зв'язку</option>
                                <option value="телефон">Дзвінок</option>
                                <option value="vider">Viber</option>
                                <option value="telegram">Telegram</option>
                                <option value="whatsapp">WhatsApp</option>
                            </select>
                        </div>
                        <div class="btn1">
                            <button type="submit" class="btn">Відправити</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentBlock: 1,
            personType: '',
            states: [
                { label: 'мій настрій різко змінюється', checked: false },
                { label: 'мені важко зосередитися', checked: false },
                { label: 'я не задоволений(на) собою', checked: false },
                { label: 'я не можу/не хочу нічого робити', checked: false },
                { label: 'мені складно спілкуватися з іншими людьми', checked: false },
                { label: 'мене нічого не радує', checked: false }
            ],
            topics: [
                { label: 'відносини з близькими людьми', checked: false },
                { label: 'відносини із собою', checked: false },
                { label: 'повсякденне життя', checked: false },
                { label: 'здоров’я (фізичне та емоційне)', checked: false },
                { label: 'наслідки війни', checked: false }
            ],
            showModal: false,
            selectedFormat: '',
            selectedContact: '',
            name: '',
            surname: '',
            phone: '',
            telegramToken: '7422150513:AAF54MNA-R81ID9TIXf9C0QIWj8cFmFWwNo',
            chatId: '7407341685'
        };
    },
    computed: {
        isBlock2Valid() {
            return this.states.some(state => state.checked);
        },
        isBlock3Valid() {
            return this.topics.some(topic => topic.checked);
        }
    },
    methods: {
        selectPersonType(type) {
            this.personType = type;
            this.showBlock(2);
        },
        showBlock(blockNumber) {
            this.currentBlock = blockNumber;
        },
        handleNextBlock3() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        submitForm() {
            const collectedData = [
                { "Ім'я": this.name, "Прізвище": this.surname, "Номер телефону": this.phone, "Формат": this.selectedFormat, "Зв'язок": this.selectedContact, "Оберіть для кого ви шукаєте психолога": this.personType },
                ...this.collectBlockData()
            ];

            const message = this.formatMessageForTelegram(collectedData);
            this.sendToTelegram(message);

            alert('Дані відправлені. Дякуємо');
            this.showModal = false;
        },
        collectBlockData() {
            let blockData = [];
            this.states.forEach(state => {
                if (state.checked) {
                    blockData.push({ "Чи перебуваєте ви останнім часом в якихось із цих станів?": state.label });
                }
            });
            this.topics.forEach(topic => {
                if (topic.checked) {
                    blockData.push({ "Оберіть теми, з якими ви б хотіли попрацювати": topic.label });
                }
            });
            return blockData;
        },
        formatMessageForTelegram(data) {
            let message = '';
            data.forEach(entry => {
                for (const key in entry) {
                    message += `<b>${key}</b>: ${entry[key]}\n`;
                }
            });
            return message;
        },
        sendToTelegram(message) {
            const url = `https://api.telegram.org/bot${this.telegramToken}/sendMessage`;

            const data = {
                chat_id: this.chatId,
                text: message,
                parse_mode: 'HTML'
            };

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        console.log('Message sent successfully');
                    } else {
                        console.error('Error sending message:', data);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }
};
</script>


<style scoped></style>
