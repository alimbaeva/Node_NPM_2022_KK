import style from './style.css';

const body = document.querySelector('body');
const container = document.createElement('div');
const block = document.createElement('div');
const blockIMG = document.createElement('div');
const blockTab = document.createElement('div');
const blockBTN = document.createElement('div');
const h1 = document.createElement('h1');
const img = document.createElement('img');
block.setAttribute('class', 'blockbox')
blockTab.setAttribute('class', 'blockTab')
container.setAttribute('class', 'container')

h1.textContent = 'ABOUT';
container.append(h1);

const text =

{
    "About-Us": 'About-Us About-Us   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem optio dolor consectetur praesentium accusamus, isi officia deserunt porro ullam aliquam corporis, dolores temporibus consequatur id eos modi tempore quae eveniet?',
    "Our-Misson": 'Our-Misson Our-Misson Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem optio dolor consectetur praesentium accusamus, isi officia deserunt porro ullam aliquam corporis, dolores temporibus consequatur id eos modi tempore quae eveniet?',
    "Our-Goals": 'Our-Goals Our-Goals Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem optio dolor consectetur praesentium accusamus, isi officia deserunt porro ullam aliquam corporis, dolores temporibus consequatur id eos modi tempore quae eveniet?'
}

const keyText = Object.keys(text);

function tabButtons() {
    for (let i = 0; i < keyText.length; i++) {
        const tabButtons1 = document.createElement('button');
        tabButtons1.setAttribute(`data`, keyText[i]);
        tabButtons1.textContent = keyText[i];

        const tabText = document.createElement('div');
        const tabTextp = document.createElement('p');
        tabTextp.setAttribute('class', `none ${keyText[i]}`)
        tabTextp.textContent = text[keyText[i]];

        tabText.appendChild(tabTextp)
        blockBTN.appendChild(tabButtons1)
        blockTab.append(tabText)

    }

    let aboutUs = document.querySelector('.About-Us')
    aboutUs.classList.add('block')

    let buttons = document.querySelectorAll('[data]')
    let texts = document.querySelectorAll('p')
    buttons.forEach((buton) => {
        const classBtn = buton.getAttribute('data');
        console.log(classBtn)
        buton.addEventListener('click', () => {
            texts.forEach((p) => {
                p.classList.remove('block');
                p.classList.add('none');
                if (p.classList.contains(classBtn)) {
                    p.classList.remove('none');
                    p.classList.add('block');
                }
            })
        })
    })
    console.log(buttons)




}


img.setAttribute('src', 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')

blockTab.append(blockBTN)
blockIMG.appendChild(img)
block.appendChild(blockIMG)
block.appendChild(blockTab);
container.append(block);

body.appendChild(container);
tabButtons()

