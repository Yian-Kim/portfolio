(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9637:function(t,a,n){Promise.resolve().then(n.bind(n,5443))},5443:function(t,a,n){"use strict";n.r(a),n.d(a,{default:function(){return RootLayout}});var i=n(7437);n(3557);var r=n(2265),o=n(7381),s=n(4033);let l=["light","dark"],c="(prefers-color-scheme: dark)",m="undefined"==typeof window,d=(0,r.createContext)(void 0),u={setTheme:t=>{},themes:[]},y=()=>{var t;return null!==(t=(0,r.useContext)(d))&&void 0!==t?t:u},$=t=>(0,r.useContext)(d)?r.createElement(r.Fragment,null,t.children):r.createElement(f,t),g=["light","dark"],f=({forcedTheme:t,disableTransitionOnChange:a=!1,enableSystem:n=!0,enableColorScheme:i=!0,storageKey:o="theme",themes:s=g,defaultTheme:m=n?"system":"light",attribute:u="data-theme",value:v,children:x,nonce:k})=>{let[w,j]=(0,r.useState)(()=>S(o,m)),[E,C]=(0,r.useState)(()=>S(o)),N=v?Object.values(v):s,T=(0,r.useCallback)(t=>{let r=t;if(!r)return;"system"===t&&n&&(r=p());let o=v?v[r]:r,s=a?b():null,c=document.documentElement;if("class"===u?(c.classList.remove(...N),o&&c.classList.add(o)):o?c.setAttribute(u,o):c.removeAttribute(u),i){let t=l.includes(m)?m:null,a=l.includes(r)?r:t;c.style.colorScheme=a}null==s||s()},[]),P=(0,r.useCallback)(t=>{j(t);try{localStorage.setItem(o,t)}catch(t){}},[t]),A=(0,r.useCallback)(a=>{let i=p(a);C(i),"system"===w&&n&&!t&&T("system")},[w,t]);(0,r.useEffect)(()=>{let t=window.matchMedia(c);return t.addListener(A),A(t),()=>t.removeListener(A)},[A]),(0,r.useEffect)(()=>{let e=t=>{t.key===o&&P(t.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[P]),(0,r.useEffect)(()=>{T(null!=t?t:w)},[t,w]);let M=(0,r.useMemo)(()=>({theme:w,setTheme:P,forcedTheme:t,resolvedTheme:"system"===w?E:w,themes:n?[...s,"system"]:s,systemTheme:n?E:void 0}),[w,P,t,E,n,s]);return r.createElement(d.Provider,{value:M},r.createElement(h,{forcedTheme:t,disableTransitionOnChange:a,enableSystem:n,enableColorScheme:i,storageKey:o,themes:s,defaultTheme:m,attribute:u,value:v,children:x,attrs:N,nonce:k}),x)},h=(0,r.memo)(({forcedTheme:t,storageKey:a,attribute:n,enableSystem:i,enableColorScheme:o,defaultTheme:s,value:m,attrs:d,nonce:u})=>{let g="system"===s,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${d.map(t=>`'${t}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,v=o?l.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",$=(t,a=!1,i=!0)=>{let r=m?m[t]:t,s=a?t+"|| ''":`'${r}'`,c="";return o&&i&&!a&&l.includes(t)&&(c+=`d.style.colorScheme = '${t}';`),"class"===n?c+=a||r?`c.add(${s})`:"null":r&&(c+=`d[s](n,${s})`),c},x=t?`!function(){${h}${$(t)}}()`:i?`!function(){try{${h}var e=localStorage.getItem('${a}');if('system'===e||(!e&&${g})){var t='${c}',m=window.matchMedia(t);if(m.media!==t||m.matches){${$("dark")}}else{${$("light")}}}else if(e){${m?`var x=${JSON.stringify(m)};`:""}${$(m?"x[e]":"e",!0)}}${g?"":"else{"+$(s,!1,!1)+"}"}${v}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${a}');if(e){${m?`var x=${JSON.stringify(m)};`:""}${$(m?"x[e]":"e",!0)}}else{${$(s,!1,!1)};}${v}}catch(t){}}();`;return r.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:x}})},()=>!0),S=(t,a)=>{let n;if(!m){try{n=localStorage.getItem(t)||void 0}catch(t){}return n||a}},b=()=>{let t=document.createElement("style");return t.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},p=t=>(t||(t=window.matchMedia(c)),t.matches?"dark":"light");var v=n(9708),x=n(4873),k=n(6951);let w=[{label:"Home",page:"home"},{label:"About",page:"about"},{label:"Experience",page:"experience"},{label:"Project",page:"project"},{label:"Contact",page:"contact"}];function Navbar(){let{systemTheme:t,theme:a,setTheme:n}=y();(0,s.usePathname)();let[l,c]=(0,r.useState)(!1);return(0,i.jsx)("header",{className:"w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600",children:(0,i.jsxs)("div",{className:"justify-between md:items-center md:flex",children:[(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"flex items-center justify-between py-3 md:py-5 md:block",children:[(0,i.jsx)(o.rU,{to:"home",children:(0,i.jsx)("div",{className:"container flex items-center space-x-2",children:(0,i.jsx)("h2",{className:"text-2xl font-bold",children:k.S3})})}),(0,i.jsx)("div",{className:"md:hidden",children:(0,i.jsx)("button",{className:"p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border",onClick:()=>c(!l),children:l?(0,i.jsx)(x.QAE,{size:30}):(0,i.jsx)(x.tgG,{size:30})})})]})}),(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:"flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ".concat(l?"block":"hidden"),children:(0,i.jsxs)("div",{className:"items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0",children:[w.map((t,a)=>(0,i.jsx)(o.rU,{to:t.page,className:"block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100 cursor-pointer",activeClass:"active",spy:!0,smooth:!0,offset:-100,duration:500,onClick:()=>c(!l),children:t.label},a)),"dark"===("system"===a?t:a)?(0,i.jsx)("button",{onClick:()=>n("light"),className:"bg-slate-100 p-2 rounded-xl",children:(0,i.jsx)(v.sEY,{size:25,color:"black"})}):(0,i.jsx)("button",{onClick:()=>n("dark"),className:"bg-slate-100 p-2 rounded-xl",children:(0,i.jsx)(v.BUV,{size:25})})]})})})]})})}var j=n(1546),E=n(8527),C=n(9172),N=n(9509),components_Footer=()=>{let{GITHUB_URL:t,LINKEDIN_URL:a,TISTORY_URL:n,DEV_COMMUNITY_URL:r,THREADS_URL:o,TWITTER_URL:s}=k.SocialMedia;return(0,i.jsxs)("footer",{className:"mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ",children:[(0,i.jsx)("hr",{className:"w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"}),(0,i.jsxs)("div",{className:"mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between",children:[(0,i.jsxs)("div",{className:"flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100",children:["\xa9 2024 ",k.S3,(0,i.jsx)("a",{href:"/",className:"hover:underline"})]}),(0,i.jsxs)("div",{className:"flex flex-row items-center justify-center space-x-2 mb-1",children:[(0,i.jsx)("a",{href:t,rel:"noreferrer",target:"_blank",children:(0,i.jsx)(j.idJ,{className:"hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100",size:30})}),(0,i.jsx)("a",{href:a,rel:"noreferrer",target:"_blank",children:(0,i.jsx)(j.Rti,{className:"hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100",size:30})}),(0,i.jsx)("a",{href:n,rel:"noreferrer",target:"_blank",children:(0,i.jsx)(E.vgs,{className:"hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100",size:23})}),(0,i.jsx)("a",{href:r,rel:"noreferrer",target:"_blank",children:(0,i.jsx)(C.CUm,{className:"hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100",size:27})}),(0,i.jsx)("a",{href:o,rel:"noreferrer",target:"_blank",children:(0,i.jsx)(N.gAM,{className:"hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100",size:25})}),(0,i.jsx)("a",{href:s,rel:"noreferrer",target:"_blank",children:(0,i.jsx)(j.h3E,{className:"hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100",size:30})})]})]})]})};function RootLayout(t){let{children:a}=t;return(0,i.jsxs)("html",{lang:"en",children:[(0,i.jsx)("head",{}),(0,i.jsx)("body",{className:"dark:bg-stone-900",children:(0,i.jsxs)($,{enableSystem:!0,attribute:"class",children:[(0,i.jsx)(Navbar,{}),a,(0,i.jsx)(components_Footer,{})]})})]})}},6951:function(t,a,n){"use strict";n.d(a,{S3:function(){return r},SocialMedia:function(){return l},_0:function(){return s},v0:function(){return o}});var i=n(145);let r=i.v,o=i.FC,s="mailto:".concat(o,"@gmail.com"),l={GITHUB_URL:"https://github.com/".concat(i.LF.WZ),LINKEDIN_URL:"https://www.linkedin.com/in/".concat(i.LF.eK),TISTORY_URL:"https://".concat(i.LF.We,".tistory.com"),DEV_COMMUNITY_URL:"https://dev.to/".concat(i.LF.EG),THREADS_URL:"https://www.threads.net/".concat(i.LF.k8),TWITTER_URL:"https://x.com/".concat(i.LF.Ow)},createProjectEntry=t=>({name:t.name,description:t.description,image:t.image,github:t.github,link:t.link}),createExperienceEntry=t=>({company:t.company,period:t.period,position:t.position,description:t.description,logo:t.logo,url:t.url,techStack:t.techStack,achievements:t.achievements});i.q.reduce((t,a,n)=>{let i=String(n+1).padStart(2,"0");return t[i]=createProjectEntry(a),t},{}),i.kw.reduce((t,a,n)=>{let i=String(n+1).padStart(2,"0");return t[i]=createExperienceEntry(a),t},{})},3557:function(){},4033:function(t,a,n){t.exports=n(94)},145:function(t){"use strict";t.exports=JSON.parse('{"v":"Yian Kim","FC":"devyiankim","LF":{"WZ":"Yian-Kim","eK":"yiankim","We":"yian","EG":"yian","k8":"@yiankim_","Ow":"devyiankim"},"kw":[{"company":"TOURHARA","period":"2024.06 ~ Present","position":"Software Engineer (Full Stack Developer)","description":"AtHomeTrip is a New York-based travel technology startup, comparable to Expedia and Booking.com. As one of the fastest growing creative global online travel agencies (OTAs), the company leverages a state-of-the-art IT infrastructure to deliver innovative travel solutions globally. Tourhara is AtHomeTrip\'s South Korean subsidiary/regional office. The company currently employs 50 professionals across its international offices, including headquarters and regional offices.","logo":"./images/Experience/athometrip.ico","url":"https://athometrip.com/en/","techStack":["TypeScript","Node.js","NextJS","Next.js","React.js","MySQL","TypeROM","QueryRunner","Git","GitHub","Jira"],"achievements":{"name":"Admin System","details":["Developed administrative tools for clients to streamline their internal employee business travel arrangements.","Built backend servers utilizing Nest.js, Node.js, TypeScript to ensure efficient data handling and robust API integration","Created dynamic user interfaces with React.js and Next.js, enhancing user experience and reducing page load times by 30%.","Utilized collaboration and productivity tools such as Jira, Slack, and Notion to effectively manage work history, improving team communication and project tracking.","Facilitated collaboration through version control system, ensuring code integrity and streamlining team workflows."]}},{"company":"LINE GAMES","period":"2020.06 ~ 2022.08","position":"Software Engineer (Backend Developer)","description":"A subsidiary of LINE Corporation (similar to WhatsApp in Asia), LINE Games is a major player in the global gaming industry with 400 employees. The company develops and publishes mobile and PC games, serving millions of users worldwide through platforms such as the Apple App Store and Google Play Store.","logo":"./images/Experience/line-games.ico","url":"https://www.line.games/en/","techStack":["Java","Spring Boot","JSP","Ajax","Redis","AWS","Jenkins","MySQL","MyBatis","GitLab","Jira","Confluence"],"achievements":[{"name":"Personal Information Management System","details":["Developed and maintained access control system managing permissions for 200+ users across multiple service platforms, improving security compliance by 40%.","Implemented customer service management portal using Java/Spring Boot, reducing request processing time by 10%.","Designed MySQL database architecture and executed migration plans, improving query performance by 20%."]},{"name":"FLOOR Customer Service Platform","details":["Built multi-channel customer service platform supporting 10+ concurrent requests, improving response efficiency by 40%.","Built RESTful APIs for internal service integration, handling 4,000+ weekly requests with 99.5% uptime.","Implemented custom management features for various game titles, reducing configuration effort by 30%."]},{"name":"Employee Management System","details":["Enhanced approval workflow system, reducing approval processing time from 10 minutes to 3 minutes.","Improved approval request validation process, reducing manual review time by 20%.","Resolved over 50 maintenance requests in collaboration with infrastructure team, maintaining 99% system availability."]},{"name":"Office Seating Management System","details":["Architected and deployed AWS-based seating management system supporting 200+ employees.","Integrated Spring Security for user authentication and authorization, ensuring secure access control.","Developed admin dashboard using React and REST APIs, improving seat management efficiency by 30%."]},{"name":"LINE Games Portal Admin System","details":["Developed game version control system to manage 10+ games across multiple platforms.","Built authentication token API that handles 100,000+ daily requests with 99.5% uptime.","Integrated front-end components with back-end services using jQuery, improving workflow efficiency by 20%."]}]},{"company":"NEOWIZ","period":"2020.01 ~ 2020.04","position":"Software Engineer (Backend Developer) - Intern","description":"Neowiz is a publicly traded (KOSDAQ) gaming powerhouse in South Korea, similar in size to mid-sized gaming companies in the US market. With over 1,000 employees, the company has a 25+ year track record of developing and publishing successful game titles across PC, mobile and emerging metaverse platforms.","logo":"./images/Experience/neowiz.ico","url":"https://www.neowiz.com/","techStack":["Java","Spring Boot","Pebble","Ajax","MySQL","MyBatis","GitLab","Jira","Confluence"],"achievements":[{"name":"Internship","details":["Supported development for the centralized gaming platform service to optimize content distribution.","Completed bulletin board application project utilizing Spring Boot, Java, and Pebble.","Improved database efficiency and integrity for internal game management systems through reorganization of databases and table normalization"]}]},{"company":"WEBZEN","period":"2017.07 ~ 2018.08","position":"Business Project Manager (PM)","description":"WEBZEN is a publicly traded (KOSDAQ) game company known worldwide for its MMORPG titles (similar to World of Warcraft). With 700 employees, the company has been a key player in the online gaming industry since 1999 and has successfully expanded from PC to mobile platforms.","logo":"./images/Experience/webzen.ico","url":"https://www.webzen.co.kr/","techStack":["Jira","Redmine","PowerPoint","Excel","Word"],"achievements":[{"name":"App MarketPlace Manager","details":["Managed the Google Play Console and iTunes Connect, iOS certificate issuance, and in-app code generation.","Facilitated reviews for market policy management and conducted build reviews to uphold platform compliance.","Created and distributed new market management guidelines to revamp processes across teams."]},{"name":"POOL TIME","details":["Contributed to the soft launch of the global mobile 8 ball billiards game PoolTime.","Analyzed game metric statistics to inform strategic decision-making.","Planned and executed in-game content and promotions on Facebook to enhance user engagement and drive participation."]},{"name":"SOGWC","details":["Contributed to the global launch of the golf game SOGWC.","Analyzed worldwide user trends across different communities to effectively tailor marketing strategies.","Managed the operation of the Billing System service to ensure seamless transaction processes."]}]},{"company":"Beyond Marketing Group","period":"2016.06 ~ 2016.08","position":"Account Executivee (AE) – Intern","description":"Beyond Marketing is a boutique digital marketing agency, comparable to smaller specialist agencies in the US market. With a team of 50 digital professionals, the company provides comprehensive marketing solutions including PPC advertising, social media management and strategic brand development.","logo":"./images/Experience/beyond-marketing-group.ico","url":"https://beyondmarketing.co.kr/","techStack":["HTML","PowerPoint","Excel","Word"],"achievements":[{"name":"Samsung Everland","details":["Planned and executed a viral MCN video campaign for the Everland Summer Festival at Cheil Worldwide.","Managed viral blog content for the Everland Music Garden, successfully enhancing brand and driving traffic to the event."]},{"name":"LG Uplus","details":["Authored brand awareness campaigns and strategic viral articles online for LG Uplus IDC.","Developed webtoon content proposals for LG Uplus Home Services to creatively illustrate their benefits and features."]},{"name":"Korea Yakult","details":["Proposed innovative and successful campaign strategies for Korea Yakult\'s \\"Daily Vegetable\\" and \\"Cold Brew\\" products.","Compiled trend reports to inform project strategies, ensuring alignment with market dynamics and consumer interests."]}]}],"q":[{"name":"Jeju Double Dragon Tour","description":"Jeju Random Matching Travel Schedule Management Program Using Java Collection and File Input/Output.","image":"./images/Project/jeju-double-dragon-tour-thumbnail.png","github":"https://github.com/Yian-Kim/jeju-double-dragon-tour","link":"https://github.com/Yian-Kim/Jeju-Double-Dragon-Tour/blob/main/README.md"},{"name":"SEDU Center","description":"SW Education Center Operation Program Based on Relational Database.","image":"./images/Project/sedu-center-thumbnail.png","github":"https://github.com/Yian-Kim/sedu-center","link":"https://github.com/Yian-Kim/SEDU-Center/blob/main/README.md"},{"name":"Tramap Basket","description":"A free travel agency site that packs servlets and JSP-based baskets.","image":"./images/Project/tramap-basket-thumbnail.png","github":"https://github.com/Yian-Kim/tramap-basket","link":"https://github.com/Yian-Kim/Tramap-Basket/blob/main/README.md"},{"name":"Portfolio 2019","description":"Single-page portfolio static website with HTML5, CSS3, JavaScript.","image":"./images/Project/portfolio-thumbnail.png","github":"https://github.com/Yian-Kim/portfolio/tree/2019","link":"https://github.com/Yian-Kim/portfolio/blob/2019/README.md"}],"r8":[{"src":"/images/Contact/20231012113659107001092.jpg","alt":"그랜드 캐니언"},{"src":"/images/Contact/20231012111535247001031.jpg","alt":"엔텔롭 캐니언"},{"src":"/images/Contact/20231012111524046001056.jpg","alt":"브라이스 캐니언"},{"src":"/images/Contact/20231012103713893001083.jpg","alt":"라스베가스"},{"src":"/imgaes/Contact/20231012103623677001018.jpg","alt":"홀슈스밴드"},{"src":"/imgaes/Contact/20231012012357599001022.jpg","alt":"라스베가스"},{"src":"/images/Contact/20231012090640885001005.jpg","alt":"비행기"}]}')}},function(t){t.O(0,[957,522,452,699,779,259,366,971,472,744],function(){return t(t.s=9637)}),_N_E=t.O()}]);