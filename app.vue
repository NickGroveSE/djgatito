<script setup>
  import Track from "../components/Track.vue"
  import { reactive, ref, onMounted } from 'vue';

  const config = useRuntimeConfig()
  const clientId = config.public.soundcloudClientId
  const userId = config.public.soundcloudUserId
  
  // Reactive Position for Tracks and Indicator
  let trackState = reactive({position: 0, timer: null, playerOpen: false})

  // Menu state for mobile
  const isMenuOpen = ref(false)

  // Hardcoded Track Objects
  var tracks = ref([])
  //   [
  //   {
  //     title: "EMBER",
  //     genres: "Melodic House / Trance",
  //     arturl: "https://i1.sndcdn.com/artworks-kbvMCr2xhjyQpfyK-gNwm4A-t500x500.jpg",
  //     links: {
  //       "soundcloud":"https://soundcloud.com/gatitoxoxo/ember"
  //     }
  //   },
  //   {
  //     title: "Winter Solstice",
  //     genres: "Hardstyle / Guaracha / Tribal",
  //     arturl: "https://i1.sndcdn.com/artworks-qBHfzjMu9Ep9pW9H-ZOxnVA-t500x500.jpg",
  //     links: {
  //       "soundcloud":"https://soundcloud.com/gatitoxoxo/winter-solstice"
  //     }
  //   },
  //   {
  //     title: "Diciembre Guarachoso",
  //     genres: "Guaracha / Tribal",
  //     arturl: "https://i1.sndcdn.com/artworks-kXQ29YKL9Ocs8zNc-idlo1g-t500x500.jpg",
  //     links: {
  //       "soundcloud":"https://soundcloud.com/gatitoxoxo/diciembre-guarachoso"
  //     }
  //   },
  //   {
  //     title: "Melt",
  //     genres: "G-Tech",
  //     arturl: "https://i1.sndcdn.com/artworks-S7L4hBBDPyWId487-ZmwNUQ-t500x500.jpg",
  //     links: {
  //       "soundcloud":"https://soundcloud.com/gatitoxoxo/melt-1"
  //     }
  //   },
  //   {
  //     title: "Verano Tribalero",
  //     genres: "Guaracha / Tribal",
  //     arturl: "https://i1.sndcdn.com/artworks-GzTy83Cdy8rdUFB9-QYWiqQ-t500x500.jpg",
  //     links: {
  //       "soundcloud":"https://soundcloud.com/gatitoxoxo/verano-tribalero"
  //     }
  //   },
  // ])
  
  // Array for indicating which track is being shown in the Carousel
  let indicator = ref([" indicated", "", "", "", ""])

  onBeforeMount(async () => {
    // Dev
    // const response = await fetch(
    //   `/api/soundcloud/users/${userId}/tracks?client_id=${clientId}&limit=7`
    // )

    const response = await fetch(
      `https://api-v2.soundcloud.com/users/${userId}/tracks?client_id=${clientId}&limit=7`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch tracks')
    }
    
    const data = await response.json()
    const trackBulkData = data.collection

    console.log(trackBulkData)

    tracks.value = trackBulkData.map(singleTrack => ({
      title: singleTrack.title,
      genres: singleTrack.genre,
      arturl: singleTrack.artwork_url.replace("large", "t500x500"),
      links: {
        soundcloud: singleTrack.permalink_url
      }
    }))

    // console.log(tracks)
  })

  onMounted(() => {
    trackState.timer = setInterval(advancedCarousel, 60000)

    window.handlePlayer = (isOpen) => {
      console.log("Player Open")
      trackState.playerOpen = isOpen
    }
  })

  function handleCarouselClick(index) {
    indicator.value[trackState.position] = ""
    indicator.value[index] = " indicated"

    trackState.position = index
  }

  function advancedCarousel() {
    if (!trackState.playerOpen) {
      if (tracks.value.length - 1 <= trackState.position) {
        clearInterval(trackState.timer)
        trackState.timer = setInterval(advancedCarousel, 60000)
        indicator.value[trackState.position] = ""
        trackState.position = 0
        indicator.value[trackState.position] = " indicated"
      } else {
        clearInterval(trackState.timer)
        trackState.timer = setInterval(advancedCarousel, 60000)
        indicator.value[trackState.position] = ""
        trackState.position = trackState.position + 1
        indicator.value[trackState.position] = " indicated"
      }
    }
  }

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
  }

  function closeMenu() {
    isMenuOpen.value = false
  }



</script>

<template>

  <!-- Hamburger Button (mobile only) -->
  <button class="hamburger-btn" :class="{ 'is-open': isMenuOpen }"  @click="toggleMenu" aria-label="Menu">
    <span></span>
    <span></span>
    <span></span>
  </button>

  <!-- Overlay (when menu is open) -->
  <div 
    class="menu-overlay" 
    :class="{ 'active': isMenuOpen }"
    @click="closeMenu"
  ></div>

  <div id="page-wrapper">
  <div class="content-wrapper">
    <div class="track-panel">
      <Track 
        v-if="tracks.length > 0"
        class="track"
        :title="tracks[trackState.position].title"
        :genres="tracks[trackState.position].genres"
        :arturl="tracks[trackState.position].arturl"
        :links="tracks[trackState.position].links"
      />
      <div id="carousel-wrapper">
        <div id="carousel-nav">
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
    
      <div id="links" :class="{ 'menu-open': isMenuOpen }">
        <div id="link-grid">
          <a class="social-link-item" title="email" id="email-link" href="/"></a>
          <a class="social-link-item" title="instagram" id="insta-social" href="https://www.instagram.com/gatitoxoxoxo?igsh=dmt2cmVkOWpiaTZo&utm_source=qr"></a>
          <a class="social-link-item" title="soundcloud" id="soundcloud-social" href="https://soundcloud.com/gatitoxoxo"></a>
          <a class="social-link-item" title="bandcamp" id="bandcamp-social" href="https://gatitoxoxo.bandcamp.com/"></a>
          <a class="social-link-item" title="tiktok" id="tiktok-social" href="https://www.tiktok.com/@gatitoxoxoxo?_r=1&_t=ZT-91SM0gMiIXn"></a>
          <a class="social-link-item" title="youtube" id="youtube-social" href="https://youtube.com/@gatitoxoxo?si=YfROh7c_Ub3e0ANg"></a>
        </div>
        <!-- <div id="sidebar-footer" :class="{'menu-open': isMenuOpen}">created by <a class="footer-link" href="https://nickgrove.netlify.app/">Nick Grove</a> powered by <a class="footer-link" href="https://nuxt.com/">Nuxt.js</a></div> -->
      </div>
    </div>

  <footer><span id="footer-text">created by <a class="footer-link" href="https://nickgrove.netlify.app/">Nick Grove</a> powered by <a class="footer-link" href="https://nuxt.com/">Nuxt.js</a></span></footer>
  </div>
</template>

<style scoped>

  /* #page-wrapper {
    
  } */

  /* #sidebar-footer {
    display: none;
    visibility: hidden;
    width: 200px;
    height: 50px;
    margin: 50px auto 0 auto;
    font-size: 18px;
    color: var(--accent-color);
    text-align: center;
  }

  #sidebar-footer.menu-open {
    display: block;
    visibility: visible;
  } */

  .content-wrapper {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 50px;
  }

  /* Hamburger Button */
  .hamburger-btn {
    display: none;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1001;
    width: 50px;
    height: 50px;
    background: rgba(255, 254, 230, 0.3);
    border: none;
    border-radius: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    transition: 0.3s;
  }

  .hamburger-btn:hover {
    background: rgba(255, 254, 230, 0.5);
  }

  .hamburger-btn span {
    display: block;
    width: 25px;
    height: 3px;
    background: var(--accent-color);
    border-radius: 2px;
    transition: 0.3s;
  }



  /* Transform into X when active */
  .hamburger-btn.is-open span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }

  .hamburger-btn.is-open span:nth-child(2) {
    opacity: 0;
  }

  .hamburger-btn.is-open span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }

  /* Menu Overlay */
  .menu-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
  }

  .menu-overlay.active {
    opacity: 1;
    pointer-events: auto;
  }

  /* Track Styling */
  .track-panel {
    display: inline-block;
    width: 75%;
  }

  .track {
    display: inline-block;
    transition: 0.8s;
  }

  /* Carousel Styling */
  #carousel-wrapper {
    position: relative;
    margin: 20px auto 0 auto;
  }

  #carousel-nav {
    margin: 50px auto 0 auto;
    width: calc(5 * 100px);
  }

  .carousel-nav-item {
    width: 70px;
    height: 70px;
    margin: 0 5px 0 5px;
    display: inline-block;
    vertical-align: top;
    background-size: cover;
    background-repeat: no-repeat;
    vertical-align: middle;
    border: 10px solid rgba(255,254,230,0);
    border-radius: 5px;
    transition: 0.8s;
    cursor: pointer;
  }

  .carousel-nav-item:hover {
    border: 10px solid rgba(255,254,230, 0.5);
  }

  .indicated {
    border: 10px solid rgba(255,254,230, 0.2);
  }

  #links {
    display: inline-block;
    vertical-align: top;
    margin-top: 50px;
  }
  
  #link-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .social-link-item {
    width: 70px;
    height: 70px;
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
    vertical-align: top;
    text-align: center;
    position: relative;
    width: 400px;
    margin: 50px auto 0 auto;
    height: 50px;
    line-height: 100%;
  }

  #footer-text {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 20px;
    text-align: center;
  }

  .footer-link {
    color: 	#7816b1;
    font-weight: 900;
  }

  
  @media (max-width: 1460px) {
    .track-panel {
      width: 80%;
    }

    #links {
      margin-left: 50px;
    }

    #carousel-nav {
      margin-top: 0;
    }
  }

  /* Tablet and Mobile - Hamburger Menu */
  @media (max-width: 1200px) {
    .hamburger-btn {
      display: flex;
    }

    .menu-overlay {
      display: block;
    }

    .close-btn {
      display: block;
    }

    .content-wrapper {
      margin-top: 20px;
    }

    /* Track panel takes full width */
    .track-panel {
      width: 100%;
      height: auto;
    }

    /* Bio panel becomes slide-out menu */
    #links {
      position: fixed;
      top: 0;
      right: -100%;
      width: 280px;
      background: rgba(195, 93, 124, 0.95);
      backdrop-filter: blur(10px);
      z-index: 1000;
      transition: right 0.3s ease;
      overflow-y: auto;
      margin: 0;
      padding: 80px 20px 20px 20px;
      height: 100%;
    }

    #links.menu-open {
      right: 0;
    }

    #link-grid {
      margin-top: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      justify-items: center;
    }

    .social-link-item {
      width: 80px;
      height: 80px;
    }



    footer {
      margin-top: 40px;
      position: relative;
    }
  }

  @media (max-width: 1050px) {

    #carousel-nav {
      width: calc(5 * 85px)
    }

    .carousel-nav-item {
      width: 55px;
      height: 55px;
    }

    footer {
      margin-top: 25px;
      font-size: 16px;
    }

  }
  
  @media (max-height: 700px) {

    footer {
      height: 20px;
    }
    
  }

  /* Small mobile adjustments */
  @media (max-width: 480px) {
    .hamburger-btn {
      width: 45px;
      height: 45px;
      top: 15px;
      right: 15px;
    }

    #links {
      width: 250px;
    }

    #link-grid {
      gap: 20px;
    }

    .social-link-item {
      width: 70px;
      height: 70px;
    }

    #carousel-nav {
      margin-top: 50px;
      width: calc(5 * 74px);
    }

    .carousel-nav-item {
      width: 50px;
      height: 50px;
      margin: 0 4px 0 4px;
      border-width: 8px;
    }

    footer {
      font-size: 14px;
      
    }
  }

  @media (max-width: 400px) {

    footer {
      width: 100%;
    }
    
  }

  @media (max-width: 370px) {
    #carousel-nav {
      width: calc(5 * 58px);
    }

    .carousel-nav-item {
      width: 40px;
      height: 40px;
      margin: 0 3px 0 3px;
      border-width: 6px;
    }
  }

  /* Extra small devices */
  @media (max-width: 320px) {
    #links {
      width: 220px;
    }

    .social-link-item {
      width: 60px;
      height: 60px;
    }

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