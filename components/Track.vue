<script setup>
    defineProps({
        title: String,
        genres: String,
        arturl: String,
        links: Object
    })
</script>

<template>
    <div class="track-art" :style="`background-image: url(${arturl})`">
      <div class="wing" id="left-wing"></div>
      <div class="wing" id="right-wing"></div>
    </div>
    <div class="track-info">
      <div class="track-name">{{ title }}</div>
      <div class="track-tags">{{ genres }}</div>
      <div class="track-links">
        <!-- If Declarative Syntax for to check if link is inside the links Map -->
        <a v-if="links.soundcloud" class="track-link-item" id="soundcloud-social" :href="links.soundcloud"></a>
        <a v-if="links.youtube" class="track-link-item" id="youtube-social" :href="links.youtube"></a>
        <a v-if="links.bandcamp" class="track-link-item" id="bandcamp-social" :href="links.bandcamp"></a>
      </div>
    </div>
</template>
    
<style scoped>

  /* Track Artwork and Wings Styling */
  .track-art {
    display: inline-block;
    position: relative;
    margin: 50px 0 0 200px;
    width: 450px; 
    height: 450px;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-size: cover;
    filter: drop-shadow(20px 15px 4px rgba(0,0,0,0.2));
    animation: 1.5s fly infinite;
    transition:0.8s;
  }

  .wing {
    position: relative;
    width: 140px;
    height: 98px;
    background-repeat: no-repeat;
    background-size: cover;
    transition: 0.8s;
  }

  #left-wing {
    top: 190px;
    left: -104px;
    background-image: url("left-wing-large.svg");
    animation: 1.5s flapLeft infinite;
  }

  #right-wing {
    top: 94px;
    left: 414px;
    background-image: url("right-wing-large.svg");
    animation: 1.5s flapRight infinite;
  }
  
  /* Info and Links Styling */
  .track-info {
    display: inline-block;
    vertical-align: top;
    padding: 100px 0 0 150px;
    /* margin: 100px 0 0 0; */
    width: 30%;
    color: var(--accent-color);
    padding-right: 10px;
  }

  .track-name {
    font-weight: 700;
    font-size: 60px;
    margin-bottom: 10px;
  }

  .track-tags {
    font-weight: 600;
    font-size: 25px;
    transition: 0.8s;
  }

  .track-links {
    margin: 50px 0 0 0;
    width: 100%;
    height: 80px;
  }

  .track-link-item {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin-right: 15px;
    /* border: 2px solid var(--accent-color); */
    filter: drop-shadow(20px 15px 4px rgba(0,0,0,0.2));
    transition: 0.8s;
    border-radius: 15px;
  }

  .track-link-item:hover {
    background-color: #C35D7C;
  }

  /* Flying Animations */
  @keyframes flapLeft {

      28% {
          rotate: -10deg;
          top: 195px;
      }

  }

  @keyframes flapRight {

      28% {
          rotate: 10deg;
          top: 99px;
      }

  }

  @keyframes fly {

      0% {
          top: 0px;
      }

      40% {
          top: -15px;
      }

      100% {
          top: 0px;
      }

  }

  /* Media Queries for Responsiveness */
  @media (max-width: 1655px) {

    .track-art {
      width: 400px;
      height: 400px;
    }

    #left-wing {
      top: 160px;
      animation: 1.5s flapLeft1655 infinite;
    }

    #right-wing {
      left: 364px;
      top: 64px;
      animation: 1.5s flapRight1655 infinite;
    }

    .track-info {
      width: 25%;
    }

    .track-name {
      font-size: 50px;
    }

    .track-tags {
      font-size: 20px;
    }

    .track-link-item {
      width: 70px;
      height: 70px;
    }

    @keyframes flapLeft1655 {

      28% {
          rotate: -10deg;
          top: 165px;
      }

    }

    @keyframes flapRight1655 {

      28% {
          rotate: 10deg;
          top: 69px;
      }

    }

  }

</style>