<template>
  <!-- <div>

  </div> -->
  <div class="content-wrapper">
    <div class="track-panel">
      <div class="track-art">
        <!-- <div class="album-art-shine"></div> -->
        <div class="left-wing"></div>
        <div class="right-wing"></div>
      </div>
      <div class="track-info">
        <div class="track-name">Bijoux Mix</div>
        <div class="track-tags">Hyperpop / Club</div>
        <ul class="track-links">
          <li class="track-link-item" id="soundcloud-social"><a href="" ></a></li>
          <li class="track-link-item" id="youtube-social"><a href=""></a></li>
          <li class="track-link-item" id="bandcamp-social"><a href=""></a></li>
        </ul>
      </div>
    </div>
    <div class="bio-panel">
      <svg id="logo"></svg>
      <div id="bio">
        <div class="social-link-item" id="email-link"></div>
        <div class="social-link-item" id="insta-social"></div>
        <div class="social-link-item" id="soundcloud-social"></div>
        <div class="social-link-item"></div>
        <div class="social-link-item" id="tiktok-social"></div>
        <div class="social-link-item" id="youtube-social"></div>
        
      </div>
    </div>
  </div>

</template>

<script>

</script>

<style scoped>

  .content-wrapper {
    width: 80%;
    height: 675px;
    margin-right: auto;
    margin-left: auto;
    margin-top: calc(50vh - 375px)
  }

  .track-panel {
    display: inline-block;
    width: 75%;
  }

  .track-art {
    display: inline-block;
    position: relative;
    margin: 100px 0 100px 0;
    width: 450px; 
    height: 450px;
    border-radius: 10px;
    opacity: 1; 
    background-image: url("https://i1.sndcdn.com/artworks-aWYsfzNUWCCNZTNw-zPe9lQ-t500x500.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    filter: drop-shadow(20px 15px 4px rgba(0,0,0,0.2));
    animation: 1.5s fly infinite;
  }

  .left-wing {
    position: relative;
    top: 190px;
    left: -104px;
    width: 140px;
    height: 98px;
    background-image: url("left-wing-large.svg");
    background-repeat: no-repeat;
    background-size: cover;
    animation: 1.5s flapLeft infinite;
  }

  .right-wing {
    position: relative;
    top: 94px;
    left: 414px;
    width: 140px;
    height: 98px;
    background-image: url("right-wing-large.svg");
    background-repeat: no-repeat;
    background-size: cover;
    animation: 1.5s flapRight infinite;
  }
  
  .track-info {
    display: inline-block;
    vertical-align: top;
    padding: 100px 0 100px 150px;
    margin: 100px 0 100px 0;
    width: 35%;
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
  }

  .track-links {
    list-style: none;
    margin: 50px 0 0 0;
    padding: 0;
    width: 100%;
    height: 80px;
  }

  .track-link-item {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin-right: 20px;
    /* border: 2px solid var(--accent-color); */
    overflow: hidden;
    filter: drop-shadow(20px 15px 4px rgba(0,0,0,0.2));
    transition: 0.8s;
    border-radius: 15px;
  }

  #soundcloud {
    background-image: url("soundcloud.svg");
    background-size: cover;
  }

  #youtube {
    background-image: url("youtube.svg");
    background-size: 70px 70px;
    background-repeat: no-repeat;
  }

  .bio-panel {
    margin-left: 50px;
    width: 20%;
    height: 100%;
    display: inline-block;
    vertical-align: top;
    background-color: rgba(255, 254, 230, 0.2);
    border-radius: 10px;
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
    height: 58%;
    margin: 70px auto 40px auto;
    color: var(--accent-color);
  }


  .social-link-item {
    width: 80px;
    height: 80px;
    margin: 15px;
    display: inline-block;
    transition: 0.8s;
    border-radius: 15px;
  }

  #email-link {
    background-image: url("mail_email_icon.svg");
    background-size: cover;
  }

  #email-link:hover {
    background-color: #C35D7C;
  }

  #tiktok-social {
    background-image: url("tiktok-square.svg");
    background-size: cover;
  }

  #tiktok-social:hover {
    background-color: var(--tiktok);
  }

  #insta-social {
    background-image: url("instagram-square.svg");
    background-size: cover;
  }

  #insta-social:hover {
    background-color: var(--insta);
  }

  #soundcloud-social {
    background-image: url("soundcloud-square.svg");
    background-size: cover;
  }

  #soundcloud-social:hover {
    background-color: var(--soundcloud);
  }

  #youtube-social {
    background-image: url("youtube-square.svg");
    background-size: cover;
  }

  #youtube-social:hover {
    background-color: var(--youtube);
  }

  #bandcamp-social {
    background-color: var(--accent-color);
  }

  .track-link-item:hover {
    background-color: #C35D7C;
  }

  .social-link-item:hover {
    filter: drop-shadow(10px 10px 4px rgba(0,0,0,0.2));
  }


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
