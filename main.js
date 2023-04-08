const titleList = document.querySelector('#title-list')
const contentPanel = document.querySelector('#content-panel')
const contents = {
  answers: [
    { title: '個人簡介', answer: '<img src="../picture/personal.jpg" style="float: right" width="180" heigh="200" alt="個人照">我今年31歲，畢業於國立高雄大學工業管理系。大學期間修過基礎的網頁設計課程以及Java。這些課程讓我對程式設計產生濃厚的興趣，並且深刻體驗到程式設計所帶來的成就感。<br><br>畢業後，不斷在找尋人的目標及規劃，期間協助親戚開了一家餐飲店，也做過ERP的顧問，甚至也短暫的經歷業務的生活。這些經驗讓我更深入地理解了待人處事的道理，學會了如何與人建立良好的關係並協調各方利益。現在，我正在健身工廠的營運部門工作，這份工作讓我了解到了更廣泛的行業，並且學會了如何協調不同的工作流程和系統。<br><br>在我不斷與自已對話中，究竟什麼才是我的興趣，在偶然間的看到彭彭的直播，想起我的對程式的初心，毅然決然放下其他事務，我相信我對程式的熱情和堅定的決心是我成功的關鍵。這次連工作都辭掉了，抱著破釜沉舟的心態轉職，真的非常渴望有機會加入Wehelp Bootcamp。' , active: true},
    { title: '為了成為軟體工程師，曾做過什麼努力？若有具體專案作品請分享給我們。', answer: '已經確定今年6月底離職的我，在去年就已經申請過一次Wehelp，可惜沒有選上，後續我認清了自己的不足，就是決心，因此我先花了4萬多買了AlphaCamp的課程，利用下班的時間學習，以下是專案連結:<br><br><a href="https://restaurant-forum-xp3g.onrender.com">我的餐廳論壇</a><br><br>⚠️麻煩登入使用下面 2 組帳號登入，或是創建新的使用者帳密：<br><br>第一組帳號有 admin 權限：<br>email: root@example.com<br>password: 12345678<br><br>第二組帳號沒有 admin 權限：<br>email: user1@example.com<br>password: 12345678' },{ title: '如果參與這個計畫，會怎麼安排學習時間？', answer: '在第一階段訓練開始前，會先利用這幾個月將所需的技能提前做好預習，也會陸續安排每項專案的完成時間。<br><br>六月底離職後，我已經先預存了一筆錢當作這六個月三個學期的開銷，所以每天除了吃飯睡覺，剩餘的時間都會拿來學習，再來預計一個禮拜兩天的晚上會去健身房運動，或是放鬆伸展，畢竟身心都要健康才能長久堅持下去。<br><br>' },{ title: '是否有想要加入的軟體公司？為什麼想加入該公司？', answer: '1. <a href="https://www.kdanmobile.com/zh-tw">凱鈿行動科技股份有限公司</a> --後端工程師 Back-End Engineer (台南/Tainan) <br><br>凱鈿行動科技是國際化的軟體服務(SaaS) 廠商，在台南發跡的公司，產品相當多元，目前規模也越來越大，相當看好這間公司未來的發展，剛好我也住在台南' },{ title: '請描述一件讓你產生明顯負面情緒的事情，你如何處理該情緒？', answer: '有一次在工作時因疏忽一件事，導致客戶覺得權益受損，進而向公司反應，算是滿嚴重的問題，後續也因此有懲處，甚至自己是不是連簡單的事都做不好，意志消沉一陣子，但是過程中主管真的人很好，不但沒有叫我自己處理，反而是一個人扛起責任，向公司擔保我，而我也意識到，我再不振作會影響到同事甚至是主管對我的好意，因此我也轉念一想，挫折不應該是我的阻力，而是引以為戒的動力，後來的工作我更加的細心，甚至將這個事件都會跟後進的新人分享，不要害怕犯錯，而是要怎麼去讓自己進步。' },{ title: '關於這份申請網頁，請分享一個你開發時的技術心得。', answer: '畢竟已經學了一陣子，所以不想再做簡單的畫面而已，我就順便複習了一下DOM的操作，做的過程中也發現需要有一個預設的畫面，不然點開會一片空白，為此也是有花了一點時間去做調整，整體而言算是做出了我滿意的設計。' },{ title: '從上次提出申請至今，多做了哪些努力？', answer: '報名了Alpha Camp的課程，有完成整個課程，並且利用下班時間及假日學習，經過了這幾個月的努力，我更加確信，轉職軟體工程師是非常適合我的，儘管上班後，我仍可以專心做個3、4小時的學習，我也已經確定會在今年六月底離職，全職投入彭彭的課程，對於尚未開學這幾個月，能先學的就會先學好，三個階段的訓練對我來說是相當有把握完成的。' },{ title: '其他想要對我們說的事情？', answer: '第一次看到彭彭的Youtube直播後，就有種醍醐灌頂的感覺，真的不誇張，頓時確立了我人生的目標，雖然我年齡已經31了，但我看到有年紀比我大的轉職成功後，我相信我也可以，再次感謝彭彭!' }
  ]
}

let navHtml = ''
for (const question of contents.answers) {
  const activeClass = question.active ? 'active' : ''
  navHtml += `
      <li>
        <a class="nav-link ${activeClass}" href="#" role="tab">${question.title}</a>
      </li>`
}
titleList.innerHTML = navHtml

titleList.addEventListener('click', event => {
  const activeItem = document.querySelector('#title-list .active')
  if (activeItem) {
    activeItem.classList.remove('active')
  }
  if (event.target.matches('.nav-link')) {
    event.target.classList.add('active')
    const question = event.target.innerText
    const selectedQuestion = contents.answers.find(s => s.title === question)
    const answer = selectedQuestion.answer
    contentPanel.innerHTML = `
          <h3 style="margin-bottom: 20px ;text-decoration:underline">${question}</h3>
          <pre>${answer}</pre>
          `
  }
})

// 預設顯示第一個問題的答案
const defaultQuestion = contents.answers[0].title
const defaultAnswer = contents.answers[0].answer
contentPanel.innerHTML = `
  <h3>${defaultQuestion}</h3>
  <pre>${defaultAnswer}</pre>
`
const defaultNavItem = titleList.querySelector(`.nav-link[role="tab"][data-title="${defaultQuestion}"]`)
if (defaultNavItem) {
  defaultNavItem.classList.add('active')
}
