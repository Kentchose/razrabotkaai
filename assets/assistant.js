(function(){
'use strict';
var me=document.currentScript;var BASE=new URL('../',me.src);
function U(p){return new URL(p,BASE).href}
var KB=[
{k:'привет здравствуйте добрый день хай кто вы что умеете чем занимаетесь компания',a:'Мы внедряем ИИ-помощников в рабочие процессы компаний: ассистентов для заявок, чат-ботов, ассистентов по базе знаний, разбор документов и другие решения. Начинаем с пилота на одном процессе и считаем результат вместе с вами.',l:['Все услуги','uslugi/index.html']},
{k:'услуги решения направления список какие есть',a:'У нас 12 направлений: ассистент для заявок, по базе знаний, разбор документов, чат-боты, аналитика, контент, HR, внутренний helpdesk, проверка договоров, работа с отзывами, голосовой помощник и помощник для продаж.',l:['Смотреть услуги','uslugi/index.html']},
{k:'заявки обращения заявка карточка crm входящие первичный ответ',a:'Ассистент принимает обращения, задаёт уточняющие вопросы и заносит карточку в вашу CRM. Сложные случаи он передаёт менеджеру.',l:['ИИ-ассистент для заявок','uslugi/assistent-zayavok.html']},
{k:'база знаний регламенты инструкции документы ответы сотрудникам',a:'Ассистент отвечает сотрудникам и клиентам по вашим документам и показывает, откуда взят ответ. Если ответа нет, он честно говорит об этом.',l:['Ассистент по базе знаний','uslugi/baza-znanij.html']},
{k:'документы счета акты накладные распознавание разбор договоры данные учёт',a:'Ассистент достаёт из счетов, актов и накладных нужные данные и готовит их для учётной системы. Нестандартные и плохие сканы проверяет сотрудник.',l:['Разбор документов','uslugi/obrabotka-dokumentov.html']},
{k:'чат-бот чатбот бот сайт мессенджер телеграм telegram',a:'Бот отвечает клиентам на сайте и в мессенджерах, принимает заявки и записи, а сложные вопросы передаёт оператору с кратким описанием.',l:['Чат-боты','uslugi/chat-boty.html']},
{k:'аналитика отчёты цифры данные сводка',a:'Аналитический ассистент собирает отчёты из CRM и таблиц и отвечает на вопросы по цифрам простым языком, показывая источник.',l:['Аналитический ассистент','uslugi/analitika.html']},
{k:'контент тексты описания товаров статьи рассылки предложения',a:'Инструменты для контента готовят черновики описаний, статей и коммерческих предложений. Факты и итоговый текст проверяет специалист.',l:['Инструменты для контента','uslugi/kontent.html']},
{k:'hr кадры резюме кандидаты найм вакансии адаптация',a:'HR-ассистент отвечает кандидатам, готовит сводку по резюме по вашим критериям и помогает новичкам. Решения о найме остаются за HR.',l:['HR-ассистент','uslugi/hr-assistent.html']},
{k:'helpdesk хелпдеск поддержка сотрудников it бухгалтерия внутренний',a:'Внутренний helpdesk отвечает сотрудникам по IT, бухгалтерии и другим вопросам по инструкциям и создаёт заявку, если нужен специалист.',l:['Внутренний helpdesk','uslugi/helpdesk.html']},
{k:'договоры проверка юрист шаблон риски условия',a:'Ассистент сравнивает договор с вашим шаблоном и показывает отличия. Решение и оценку рисков принимает юрист.',l:['Проверка договоров','uslugi/proverka-dogovorov.html']},
{k:'отзывы маркетплейсы вайлдберриз озон ответы рейтинг',a:'Ассистент собирает отзывы, готовит черновики ответов в вашем тоне и группирует замечания. Публикует ответ сотрудник.',l:['Работа с отзывами','uslugi/otzyvy-marketplejsy.html']},
{k:'голос голосовой звонки телефон звонок помощник',a:'Голосовой помощник отвечает на типовые вопросы по звонку и переводит сложные случаи на человека. Это самое сложное направление, поэтому начинаем с одного сценария.',l:['Голосовой помощник','uslugi/golosovoj-pomoshnik.html']},
{k:'продажи менеджер коммерческое предложение кп сделки воронка',a:'Ассистент для продаж готовит черновик предложения по шаблону и напоминает менеджерам о зависших сделках. Цену и общение с клиентом ведёт менеджер.',l:['Ассистент для продаж','uslugi/prodazhi-kp.html']},
{k:'цена стоимость сколько стоит тариф бюджет оплата пилот внедрение',a:'Пилот на одном процессе стоит от 120 000 ₽, внедрение — от 370 000 ₽. Индивидуальный формат — по запросу. Итог зависит от задачи и числа подключаемых систем.',l:['Стоимость','ceny.html']},
{k:'срок сроки быстро долго время недели запуск',a:'Пилот на одном процессе занимает от одной до трёх недель. Сроки внедрения зависят от интеграций и подготовки материалов.',l:['Как мы работаем','process.html']},
{k:'этапы процесс как проходит работа начинаем знакомство',a:'Знакомство и разбор задачи, пилот на одном процессе, внедрение и сопровождение. Критерии успеха согласуем до старта.',l:['Как мы работаем','process.html']},
{k:'безопасность данные конфиденциальность защита доступ журнал персональные',a:'Данные остаются под вашим контролем: доступы разграничиваются, действия ассистента записываются в журнал, а важные решения подтверждает человек. Порядок работы с данными согласуем до запуска.',l:['Безопасность','bezopasnost.html']},
{k:'заменит сотрудников увольнение работу людей',a:'Нет, ассистент берёт на себя рутину, а решения остаются за людьми. Сложные случаи он передаёт сотруднику.',l:['Как мы работаем','process.html']},
{k:'ошибки ошибается неправду галлюцинации точность надёжность',a:'ИИ может ошибаться, поэтому мы строим работу с контролем: ответы по вашим источникам, право сказать «не знаю», проверка важного человеком и проверка качества на реальных примерах до запуска.',l:['Почему ИИ ошибается','blog/pochemu-oshibaet-ii.html']},
{k:'интеграция интеграции crm 1с амо битрикс почта подключение системы',a:'Подключаем ассистентов к CRM, почте, мессенджерам и учётным системам. Возможность подключения зависит от того, есть ли у системы открытый интерфейс, это выясняем на знакомстве.',l:['Интеграция с CRM','blog/integraciya-s-crm.html']},
{k:'отрасли отрасль сфера розница логистика недвижимость медицина финансы образование производство строительство',a:'Мы работаем с розницей, консалтингом, производством, логистикой, недвижимостью, медициной, финансами, образованием, строительством, автобизнесом, туризмом, страхованием, фитнесом и закупками.',l:['Отрасли','otrasli/index.html']},
{k:'контакты телефон адрес почта связаться email позвонить мессенджер где находитесь',a:'Телефон: +7 (963) 778-30-43 (доступен в мессенджерах), почта: zakaz@razrabotka-ii.ru, адрес: г. Москва, Нащокинский пер., д. 10.',l:['Контакты','kontakty.html']},
{k:'вакансии работа резюме устроиться разработчик',a:'У нас открыты вакансии: Python-разработчик, менеджер проектов внедрения ИИ и специалист по базам знаний и данным.',l:['Вакансии','vakansii.html']},
{k:'кейсы примеры отзывы клиенты результаты опыт лаборатория',a:'Опубликованных кейсов с цифрами у нас пока нет, и мы не выдумываем их. В «Лаборатории» собраны сценарии: что ИИ умеет, где нужен человек и что мы измеряем в пилоте.',l:['Лаборатория','laboratoriya.html']},
{k:'консультация встреча бесплатно разбор задачи заявка оставить',a:'Бесплатный разбор задачи занимает 30 минут: разберём процесс, предложим сценарии и обсудим бюджет и сроки пилота. Оставить заявку можно в форме внизу главной страницы.',l:['Оставить заявку','index.html#zayavka']},
{k:'начать подходит ли готов процесс оценка проверить автоматизировать',a:'Начать лучше с одного повторяющегося процесса. Проверить, подходит ли он для ИИ, можно в экспресс-оценке готовности.',l:['Оценка готовности','ocenka.html']},
{k:'малый бизнес маленькая компания небольшая начать бюджет',a:'Малому бизнесу не нужна сложная система: достаточно решить одну задачу, которая отнимает больше всего времени, и начать с пилота.',l:['С чего начать малому бизнесу','blog/malomu-biznesu.html']},
{k:'спасибо благодарю пока до свидания',a:'Пожалуйста! Если появятся вопросы, пишите. Для обсуждения задачи можно оставить заявку или позвонить.',l:['Контакты','kontakty.html']}
];
var CHIPS=['Что вы делаете?','Сколько стоит?','Как быстро запуск?','Как с данными?','Контакты'];
function norm(s){return s.toLowerCase().replace(/ё/g,'е')}
function stem(w){return w.length>5?w.slice(0,5):w}
function toks(s){return norm(s).split(/[^a-zа-я0-9]+/).filter(function(x){return x.length>1}).map(stem)}
KB.forEach(function(e){e.t=toks(e.k)});
function find(q){var qt=toks(q);var best=null,bs=0;
KB.forEach(function(e){var s=0,seen={};qt.forEach(function(w){if(!seen[w]&&e.t.indexOf(w)>-1){s++;seen[w]=1}});if(s>bs){bs=s;best=e}});
return bs>0?best:null}
var css=document.createElement('link');css.rel='stylesheet';css.href=U('assets/assistant.css?v=2');document.head.appendChild(css);
var btn=document.createElement('button');btn.className='as-btn';btn.type='button';btn.setAttribute('aria-label','Открыть ИИ-ассистента');btn.innerHTML='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.4A8 8 0 1 1 21 12z"/></svg><span>Спросить ИИ</span>';
var box=document.createElement('div');box.className='as-box';box.hidden=true;box.setAttribute('role','dialog');box.setAttribute('aria-label','ИИ-ассистент');
box.innerHTML='<div class="as-head"><div><b>ИИ-ассистент</b><small>Отвечает по материалам сайта</small></div><button type="button" class="as-x" aria-label="Закрыть">×</button></div><div class="as-log" aria-live="polite"></div><div class="as-chips"></div><form class="as-form"><input type="text" name="q" placeholder="Ваш вопрос" autocomplete="off" aria-label="Ваш вопрос"><button type="submit" aria-label="Отправить">→</button></form><div class="as-note">Ответы формирует ИИ и они могут быть неточными. Не пишите в чат персональные данные: для заявки используйте форму. Подробнее: <a href="'+U('privacy.html')+'">политика</a>, <a href="'+U('kontakty.html')+'">контакты</a>.</div>';
document.body.appendChild(btn);document.body.appendChild(box);
var log=box.querySelector('.as-log'),chips=box.querySelector('.as-chips'),form=box.querySelector('form'),inp=form.q;
function add(cls,html){var d=document.createElement('div');d.className='as-m '+cls;d.innerHTML=html;log.appendChild(d);log.scrollTop=log.scrollHeight;return d}
function esc(s){return s.replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
var LINKS={'uslugi/index.html':'Все услуги','ceny.html':'Стоимость','process.html':'Как мы работаем','bezopasnost.html':'Безопасность','laboratoriya.html':'Лаборатория','keisy.html':'Кейсы','kontakty.html':'Контакты','faq.html':'Вопросы и ответы','ocenka.html':'Оценить процесс'};
var hist=[],aiOk=true,busy=false;
function localAnswer(q){var e=find(q);
if(e){add('bot',esc(e.a)+(e.l?'<a class="as-l" href="'+U(e.l[1])+'">'+esc(e.l[0])+' →</a>':''))}
else{add('bot','Не нашёл точного ответа в материалах сайта. Лучше задать вопрос специалисту: <a class="as-l" href="'+U('kontakty.html')+'">написать или позвонить →</a>')}}
function leadForm(ctx){var d=add('bot','<b>Оставить заявку</b><form class="as-lead"><input name="name" placeholder="Имя" required maxlength="100"><input name="contact" placeholder="Телефон или e-mail" required maxlength="120"><textarea name="message" placeholder="Коротко о задаче" required maxlength="1000" rows="3"></textarea><input class="as-hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true"><label class="as-ag"><input type="checkbox" name="agree" value="1" required><span>Даю <a href="'+U('soglasie.html')+'">согласие на обработку персональных данных</a>, ознакомлен(а) с <a href="'+U('privacy.html')+'">политикой</a></span></label><button type="submit">Отправить заявку</button><div class="as-st" aria-live="polite"></div></form>');
var f=d.querySelector('form');f.message.value=ctx||'';
f.addEventListener('submit',function(ev){ev.preventDefault();var st=f.querySelector('.as-st'),bt=f.querySelector('button');bt.disabled=true;st.textContent='Отправляем…';
var fd=new FormData(f);fd.set('message','Заявка из чата ИИ-ассистента: '+f.message.value);
fetch(U('send.php'),{method:'POST',body:fd}).then(function(r){return r.text().then(function(x){return r.ok&&x.indexOf('Спасибо')>-1})}).then(function(ok){if(ok){f.innerHTML='<b>Спасибо! Заявка отправлена.</b> Мы свяжемся с вами в рабочее время.'}else{throw 0}}).catch(function(){bt.disabled=false;st.innerHTML='Не удалось отправить. Позвоните +7 (963) 778-30-43 или напишите на <a href="mailto:zakaz@razrabotka-ii.ru">zakaz@razrabotka-ii.ru</a>.'})});log.scrollTop=log.scrollHeight}
function render(text){var lead=/\[\[LEAD\]\]/.test(text),link=(text.match(/\[\[LINK:([^\]]+)\]\]/)||[])[1];
var clean=text.replace(/\[\[[^\]]*\]\]/g,'').trim();
var h=esc(clean).replace(/\n/g,'<br>');
if(link&&LINKS[link])h+='<a class="as-l" href="'+U(link)+'">'+esc(LINKS[link])+' →</a>';
add('bot',h);if(lead)leadForm('')}
function answer(q){
if(!aiOk){localAnswer(q);return}
busy=true;var typing=add('bot','<span class="as-dots"><i></i><i></i><i></i></span>');
var ctl=window.AbortController?new AbortController():null,tm=setTimeout(function(){ctl&&ctl.abort()},28000);
hist.push({role:'user',content:q});
fetch(U('assistant.php'),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:hist.slice(-8)}),signal:ctl?ctl.signal:undefined})
.then(function(r){if(r.status===429){return {limit:1}}if(!r.ok)throw new Error(r.status);return r.json()})
.then(function(j){clearTimeout(tm);typing.remove();busy=false;
if(j.limit){add('bot','Сейчас много обращений. Позвоните нам или оставьте заявку, мы ответим лично.<a class="as-l" href="'+U('kontakty.html')+'">Контакты →</a>');return}
hist.push({role:'assistant',content:(j.reply||'').replace(/\[\[[^\]]*\]\]/g,'').trim()});render(j.reply)})
.catch(function(){clearTimeout(tm);typing.remove();busy=false;aiOk=false;hist.pop();localAnswer(q)})}
function ask(q){q=q.trim();if(!q||busy)return;add('me',esc(q));answer(q)}
CHIPS.forEach(function(c){var b=document.createElement('button');b.type='button';b.textContent=c;b.addEventListener('click',function(){ask(c)});chips.appendChild(b)});
form.addEventListener('submit',function(ev){ev.preventDefault();var v=inp.value;inp.value='';ask(v)});
var first=true;
function open(){box.hidden=false;btn.classList.add('as-hide');if(first){first=false;add('bot','Здравствуйте! Я ИИ-ассистент: отвечаю на вопросы об услугах, ценах, сроках и работе с данными. Выберите вопрос или напишите свой.')}setTimeout(function(){inp.focus()},50)}
function close(){box.hidden=true;btn.classList.remove('as-hide');btn.focus()}
btn.addEventListener('click',open);box.querySelector('.as-x').addEventListener('click',close);
document.addEventListener('keydown',function(ev){if(ev.key==='Escape'&&!box.hidden)close()});
})();
