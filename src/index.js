import "./style.scss";
//import { createApp ,h, ref } from 'vue';
//import application from './components/App.vue';

const storesData = {
    0 : {
        name: 'ТЦ "Фиеста"',
        picture: '',
        number: '+79086793413',
        email: [
            'mailto@mail.ru',
            'gmail@gmail.com',
        ],
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    1 : {
        name: 'ТЦ "Горки"',
        picture: '',
        number: '+79517932902',
        email: [
            'mailto@mail.ru',
            'gmail@gmail.com',
            'yahoo@mail.ru',
        ],
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    2 : {
        name: 'ТЦ "Куба"',
        picture: '',
        number: '+79517932902',
        email: [
            'mailto@mail.ru',
            'gmail010@gmail.com',
            'yahoo54@mail.ru',
            'rambler23@mail.ru',
        ],
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    }
}

//const app = createApp(application);
//app.mount('#application')

/*
class StoresBlock {
    components = {
        desktop: './components/desktop.html'
    }
    constructor(id = '') {
        this.register(id, this.components);
    }

    register(id, components) {
        this.registerDesktop(id, components.desktop);
    }

    registerDesktop(areaId, path) {
        createApp({
            template: path.desktop,
            props: {
                text: 'text'
            },
            components: {
                'component-map' : {
                    template: '#map',
                    props: {
                        text: 'text'
                    },
                    mounted() {
                        // Установить скрипты для использования яндекс карты
                        let scriptYandexMap = document.createElement('script');
                        scriptYandexMap.setAttribute('src', 'https://api-maps.yandex.ru/v3/?lang=ru_RU');
                        document.head.appendChild(scriptYandexMap);
                        console.log('create?');
                        // Инициализировать яндекс карту
                        scriptYandexMap.addEventListener("load", this.initializeYandexMap);
                    },
                    methods: {
                        initializeYandexMap() {
                            console.log('loaded');
                            ymaps3.ready.then(() => {
                                console.log('ready');
                            });
                        }
                    },
                }
            }
        }).mount(areaId);
    }
}
*/
