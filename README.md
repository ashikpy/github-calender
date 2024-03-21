# Github Calendar
#### This React App is used mimic the github calendar from the commit history

- To Start
```bash
npm i
npm run dev
```
- At `App.jsx` for the argument of username, enter your username, 
```jsx
function App() {
  return (
    <div>
      <GitHubContribution
        username="ENTER_YOUR_GITHUB_USERNAME_HERE"
        token="ENTER_YOUR_GITHUB_PERSONAL_ACCESS_TOKEN_HERE"
      />
    </div>
  );
}
```
- For the `API` go to your [github](https://github.com/). Navigate yourself to settings and go to developer settings and get your private key.
- Pass the API into it.
---
### For the live preview visit [here](https://git-comit-calendar.vercel.app)
