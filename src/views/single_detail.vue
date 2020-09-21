<template>
    <div class="container">
        <div class="left_panel">
            <div class="imgDetails">
                <div class="large_imgBox">
                    <img :src="require(`../assets/activity/${activity.img}`)"/>
                </div>
                <div class='small_imgBox'></div>
            </div>
            <div class="content">
                <h2>{{activity.name}}</h2>
                <p>{{activity.description}}</p>
                <div><span>Maximun Pirce:{{activity.price.max_price}}</span> <span> Minimum Price:{{activity.price.min_price}}</span></div>
                <span class="date"> Schedule Date:{{activity.date}}</span>
                <router-link :to="{name:'Book', params:{}}" class="route">
              <span>Book Now</span>
            </router-link>
            </div>
        </div>
        <div class="right_panel">

        </div>
    </div>
</template>

<script>
//
// Import neede modules to handle any extra funtionality.
import services from '@/service/index.js'
export default {
  name: 'Single Detail',
  components: { },
  data () {
    return {
      current: this.$route.params.current,
      planned: []
    }
  },
  computed: {
    activity () {
      return this.planned[this.current]
    }
  },
  created () {
    const result = services.get_activities()
    console.log(result)
    this.planned = result.activities.filter(activity => activity.planned)
  }
}
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 85% 15%;
  grid-template-rows: 5% 95%;
  grid-template-areas:
    "control right_panel"
    "left_panel right_panel" ;
  justify-content: space-between;
}
.container .left_panel {
  grid-area: left_panel;
  background: white;
  margin: 10px;
  display: grid;
  grid-template-columns: 50% 50%;
}
.container .left_panel .imgDetails{
    width: 100%;
    height: 100%;
}
.controls{
  grid-area: controls;
}
.container .right_panel {
    grid-area: right_panel;
    background: white;
    margin: 10px;
}
.container .left_panel .large_imgBox{
  top: 0;
  left: 0;
  align-self: center;
  padding: 10px;
}
.container .left_panel .large_imgBox img {
    max-width: 100%;
    max-height: 100%;
}
.container .left_panel .content{
    padding: 30px;
    text-align: -webkit-center;
}
.container .left_panel .content h2{
    font-size: 35px;
    border-bottom: 1px solid red;
}
.container .left_panel .content p{
    height: 50%;
    width: 40%;
}
.container .left_panel .content span{
    display: block;
    padding: 2px;
}
.container .left_panel .route{
    float: right;
    text-decoration: none;
    color: white;
    background: #fff9a5;
    width: 100px
}
 @keyframes glowing {
        0% {
          background-color: #2ba805;
          box-shadow: 0 0 5px #2ba805;
        }
        50% {
          background-color: #49e819;
          box-shadow: 0 0 20px #49e819;
        }
        100% {
          background-color: #2ba805;
          box-shadow: 0 0 5px #2ba805;
        }
      }
      .route {
        animation: glowing 1300ms infinite;
      }
</style>
