<template>
  <div id="app">
    <header id="pageHeader">
      <div class="header">
        <span class="logo">
          <p>Timchist adventures</p>
        </span>
        <span class="user">
          <router-link to>
            <span>User icon</span>
          </router-link>
          <router-link to="/login" class="link">
            <span class="btn">Login</span>
          </router-link>
        </span>
      </div>
    </header>
    <div id="siteAds">
      <div class="menu">
        <router-link to="/about" class="link">
          <span class="btn">About</span>
        </router-link>
        <router-link to="/add-smoothie" class="link">
          <span class="btn">Plan a Trip</span>
        </router-link>
        <router-link to="/add-smoothie" class="link">
          <span class="btn">Where to Go</span>
        </router-link>
        <router-link to="/add-smoothie" class="link">
          <span class="btn">Where to Stay</span>
        </router-link>
        <router-link to="/planned" class="link">
          <span class="btn">Planned Experinces</span>
        </router-link>
        <router-link to="/add-smoothie" class="link">
          <span class="btn">Hotels</span>
        </router-link>
        <router-link to="/add-smoothie" class="link">
          <span class="btn">More</span>
        </router-link>
      </div>
    </div>
    <article id="mainArticle">
      <router-view />
    </article>
    <footer id="pageFooter">
      <hr />
      <div class="footer">
        <span>
        <p>Powered by @Mutall Data Managers</p>
        <p>CopyRight @Timchist & Company 2020</p>
        </span>
        <span>
          <ul>
            <li>Find us:</li>
            <li><img src="@/assets/images/facebook.png" alt="Facebook" />Facebook</li>
            <li><img src="@/assets/images/twitter.png" alt="Twiter" />Twiter</li>
            <li><img src="@/assets/images/whatsapp.png" alt="Whatsapp" />WhatsApp</li>
            <li><img src="@/assets/images/insta.png" alt="Instagram" />Instagram</li>
            <li><img src="@/assets/images/mail.png" alt="Mail_us" />Mail Us</li>
          </ul>
        </span>
      </div>
    </footer>
  </div>
</template>

<style>
html{
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
#app {
  display: grid;
  grid-template-areas:
    "header header"
    "ads ads"
    "article article"
    "footer footer";
  grid-template-rows: 10% 15% 70% 5%;
  grid-column-gap: 5px;
  height: 100vh;
  margin: 0;
  background-color: #DADADA;
  font-family: 'Oswald', sans-serif;
}

#pageHeader {
  grid-area: header;
  background-color: white;
  z-index: 2;
}
#pageFooter {
  grid-area: footer;
  align-content: center;
}
#mainArticle {
  grid-area: article;
}
#siteAds {
  grid-area: ads;
  background-color: whitesmoke;
}
.menu {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.btn {
  background-color: white; /* Green */
  border: 1px solid #fff9a5;
  border-radius: 2px;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px auto;
  z-index: 1;
}
.link {
  margin: 10px auto;
}
.header {
  display: flex;
  justify-content: space-between;
  height: 100%;
  flex-flow: wrap;
}
.logo {
  font-family: "Pacifico", cursive;
  margin: 10px auto;
  font-size: 24px;
}
.logo:hover {
  cursor: pointer;
}
.footer{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.footer span{
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: inherit;
  font-size: 14px;
}
.footer span ul{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.footer ul li{
  height: 5vh;
  display: inline-flex;
  font-size: 12px;
}
.footer ul li img{
  height: 20px;
}
</style>
