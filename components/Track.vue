<template>
    <div class="track-panel">
      <div class="track-art">
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
</template>

<script setup>
    defineProps({
        arturl: String,
        title: String,
        genres: String,
        links: Object
    })
</script>

    

<style scoped>

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

  .track-link-item:hover {
    background-color: #C35D7C;
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

</style>