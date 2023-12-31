
## 本次專案選用的技術：

### Next.js
新版的Next.js13能更快速的建立專案，搭配配置好的eslint、TypeScript，
同時有Server Side Rendering 和Client Side Rendering的功能可以互相搭配

### TypeScript
提昇程式嚴謹性、可讀性，Code auto-completion

### Tailwind CSS
for quick prototyping
以前是用styled-component，這次選用tailwind是為了快速畫出想要的畫面，也能夠先專心在處理component的邏輯上，之後再針對共用的樣式做細部抽取、模組化。

### Eslint && SonarLint && Prettier
維持程式碼一致性、找出程式可能產生的錯誤、自動format
eslint和prettier是安裝npm套件，SonarLint是我編輯器webstorm安裝的套件

### State Management
Use React context API to avoid Props drilling

### Plugin
目前使用了Sweet Alert2，這個套件客製化容易，也有CSS動畫及自動消失功能

### Testing
1. 有使用Jest的snapshot testing 
2. 原本想使用React Testing Library，但Next.js App Router因為還太新，相容性上似乎有問題，這塊還需要研究。 參考：  [[NEXT-863] Unable to test page components using metadata API with Jest](https://github.com/vercel/next.js/issues/47299)


## 程式邏輯

1. CURD基礎操作，若有更多時間會想做windowing或分頁、搜尋功能
2. 新增contact的時候是跳彈窗，編輯contact時是直接使用原有的值來編輯，個人覺得這樣操作直覺
3. 新增contact的時候有限制不能輸入空值 
4. sort功能使用useEffect搭配useState實現 
5. Next.js有針對API做快取，但考慮這個Contact List有可能會頻繁更新資料，所以就把快取功能限制秒數

## 其它部份

1. deploy部份有使用Vercel，但因為我比較熟悉前端靜態網站deploy，所以沒有把後端也佈上去，這部份還需要學習
2. 若能順利deploy前端、後端，會想加入e2e測試(PlayWright)
3. 前端佈署產生的網址：https://contact-xi-kohl.vercel.app/

