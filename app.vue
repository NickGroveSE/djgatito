<script setup>
  import Track from "../components/Track.vue"
  import { reactive } from 'vue';
  
  // Reactive Position for Tracks and Indicator
  let trackState = reactive({position: 0})

  // Hardcoded Track Objects
  const tracks = [
    {
      title: "Easy (Remix)",
      genres: "K-Pop / Club",
      arturl: "https://i1.sndcdn.com/artworks-zO6C1vbyLJZ9K4nk-zXvPUQ-t500x500.jpg",
      links: {
        "soundcloud":"https://soundcloud.com/dj-bbflan/easy-le-sserafim-club-remix",
        "youtube":"https://www.youtube.com/watch?v=ZKgt-JDbnHk",
        "bandcamp":"https://djbbflan.bandcamp.com/track/ez"
      }
    },
    {
      title: "Bijoux Mix",
      genres: "Hyperpop / Club",
      arturl: "https://i1.sndcdn.com/artworks-aWYsfzNUWCCNZTNw-zPe9lQ-t500x500.jpg",
      links: {
        "soundcloud":"https://soundcloud.com/dj-bbflan/bijoux-mix",
        "youtube":"https://www.youtube.com/watch?v=MOQvQiBtIf0",
        "bandcamp":"https://djbbflan.bandcamp.com/track/bijoux-mix"
      }
    },
    {
      title: "On my way! 2 Bäreneck",
      genres: "Electropop / House",
      arturl: "https://i1.sndcdn.com/artworks-8xd6tp4lck6Ll3fB-gDDPJA-t500x500.jpg",
      links: {
        "soundcloud":"https://soundcloud.com/dj-bbflan/on-my-way-2-bareneck",
        "bandcamp":"https://djbbflan.bandcamp.com/track/on-my-way-2-b-reneck"
      }
    }

  ]
  
  // Array for indicating which track is being shown in the Carousel
  let indicator = [" indicated", "", ""]

  function handleCarouselClick(index) {
    indicator[trackState.position] = ""
    indicator[index] = " indicated"

    trackState.position = index
  }

</script>

<template>
  <div class="content-wrapper">
    <div class="track-panel">
      <Track 
        class="track"
        :title="tracks[trackState.position].title"
        :genres="tracks[trackState.position].genres"
        :arturl="tracks[trackState.position].arturl"
        :links="tracks[trackState.position].links"
      />
      <div id="carousel-wrapper">
        <div id="carousel-nav" :style="`width: calc(${tracks.length} * 90px + 30px)`">
          <!-- Carousel Buttons -->
          <div
            v-for="(track, index) in tracks"
            :class="`carousel-nav-item${indicator[index]}`"
            :style="`background-image: url(${track.arturl})`"
            @click="handleCarouselClick(index)"
          ></div>
        </div>
      </div>
      
    </div>
    
    <div class="bio-panel">
      <svg id="logo"></svg>
      <div id="bio">Hi! I'm DJ BB Flan</div>
      <div id="links">
        <a class="social-link-item" id="email-link" href="yum@djbbflan.com"></a>
        <a class="social-link-item" id="insta-social" href="https://www.instagram.com/djbbflan/"></a>
        <a class="social-link-item" id="soundcloud-social" href="https://soundcloud.com/dj-bbflan"></a>
        <a class="social-link-item" id="bandcamp-social" href="https://djbbflan.bandcamp.com/music"></a>
        <a class="social-link-item" id="tiktok-social" href="https://www.tiktok.com/@djbbflan"></a>
        <a class="social-link-item" id="youtube-social" href="https://www.youtube.com/@DJbbFlan"></a>
      </div>
    </div>
  </div>
  <footer>created by <a class="footer-element" href="https://nickgrove.netlify.app/">Nick Grove</a> powered by <a class="footer-element" href="https://nuxt.com/">Nuxt.js</a></footer>
</template>

<style scoped>

  .content-wrapper {
    width: 100%;
    height: 675px;
    margin-right: auto;
    margin-left: auto;
    margin-top: calc(50vh - 375px);
  }

  /* Track Styling */
  .track-panel {
    display: inline-block;
    width: 70%;
    height: 675px;
    overflow: hidden;
  }

  .track {
    display: inline-block;
    transition: 0.8s;
  }

  /* Carousel Styling */
  #carousel-wrapper {
    position: relative;
    width: 100%; 
    height: 100%;
    margin: 20px 0 0 125px;
  }

  #carousel-nav {
    height: 70px;
    margin: 50px auto 0 auto;
  }

  .carousel-nav-item {
    width: 70px;
    height: 70px;
    margin-right: 10px;
    display: inline-block;
    vertical-align: top;
    background-size: cover;
    background-repeat: no-repeat;
    vertical-align: middle;
    border: 10px solid rgba(255,254,230,0);
    border-radius: 5px;
    transition: 0.8s;
  }

  .carousel-nav-item:hover {
    border: 10px solid rgba(255,254,230, 0.5);
  }

  .indicated {
    border: 10px solid rgba(255,254,230, 0.2);
  }

  /* Bio Styling */
  .bio-panel {
    margin-left: 50px;
    width: 16%;
    height: 100%;
    display: inline-block;
    vertical-align: top;
    background-color: rgba(255, 254, 230, 0.2);
    border-radius: 10px;
    margin-right: 200px;
  }
  
  #logo {
    display: block;
    position: relative;
    width: 187px;
    height: 151px;
    background-image: url("bbflanfinal.svg");
    background-size: cover;
    background-repeat: no-repeat;
    margin: 40px auto 0 auto;
    left: -5px;
    border-radius: 10px;
  }

  #bio {
    width: 220px;
    height: 80px;
    margin: 20px auto 0 auto;
    font-size: 16px;
    color: var(--accent-color);
  }

  #links {
    width: 220px;
    margin: 20px auto 20px auto;
    color: var(--accent-color);
  }

  .social-link-item {
    width: 70px;
    height: 70px;
    margin: 20px;
    display: inline-block;
    transition: 0.8s;
    border-radius: 15px;
  }

  .social-link-item:hover {
    filter: drop-shadow(10px 10px 4px rgba(0,0,0,0.2));
  }

  /* Footer Styling */
  footer {
    font-size: 18px;
    color: var(--accent-color);
    vertical-align: bottom;
    text-align: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    line-height: 100%;
  }

  .footer-element {
    color: 	#7816b1;
    font-weight: 900;
  }

  /* Possible Shine Animation */
  /* .button-shine {
    position: relative;
    top: 0;
    left: -700px;
    width: 50px;
    height: 80px;
    transform: skewX(-30deg);
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: 0.8s;
    animation: 12s shine infinite;
  }

  @keyframes shine {

    70% {
      left: -120px;
      background: rgba(255, 255, 255, 0.15);
    }

    80% {
      left: 120px;
      background: rgba(255, 255, 255, 0.15);
    }

    88% {
      left: 120px;
      background: rgba(255, 255, 255, 0.15);
    }

    100% {
      left: -120px;
      background: rgba(255, 255, 255, 0.15);
    }
    
  } */

</style>
