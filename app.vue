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
          <li class="track-link-item" id="soundcloud"><a href="" ></a></li>
          <li class="track-link-item" id="youtube"><a href=""></a></li>
          <li class="track-link-item"><a href=""></a></li>
        </ul>
      </div>
    </div>
    <div class="">

    </div>
  </div>

</template>

<script>

</script>

<style scoped>

  .content-wrapper {
    width: 80%;
    height: 475px;
    margin-right: auto;
    margin-left: auto;
    margin-top: calc(50vh - 275px)
  }

  .track-art {
    display: inline-block;
    position: relative;
    width: 450px; 
    height: 450px;
    border: 20px solid rgba(0, 0, 0, .15);
    border-radius: 10px;
    opacity: 1; 
    background-image: url("https://i1.sndcdn.com/artworks-aWYsfzNUWCCNZTNw-zPe9lQ-t500x500.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    animation: 1.5s fly infinite;
  }

  .left-wing {
    position: relative;
    top: 190px;
    left: -104px;
    width: 140px;
    height: 96px;
    background-image: url("left-wing.svg");
    background-repeat: no-repeat;
    background-size: cover;
    animation: 1.5s flapLeft infinite;
  }

  .right-wing {
    position: relative;
    top: 94px;
    left: 414px;
    width: 140px;
    height: 96px;
    background-image: url("right-wing.svg");
    background-repeat: no-repeat;
    background-size: cover;
    animation: 1.5s flapRight infinite;
  }
  
  .track-info {
    display: inline-block;
    vertical-align: top;
    padding: 100px 0 100px 150px;
    width: 450px;
    color: #fffee6;
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
    /* border: 2px solid #fffee6; */
    border-radius: 5px;
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

  /* .album-art-shine {
    position: relative;
    top: 0;
    left: -700px;
    width: 400px;
    height: 500px;
    transform: skewX(-30deg);
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: 0.8s;
    animation: 8s shine infinite;
  }

  @keyframes shine {

    70% {
      left: -700px;
      background: rgba(255, 255, 255, 0.15);
    }

    80% {
      left: 700px;
      background: rgba(255, 255, 255, 0.15);
    }

    88% {
      left: 700px;
      background: rgba(255, 255, 255, 0.15);
    }

    100% {
      left: -700px;
      background: rgba(255, 255, 255, 0.15);
    }
    
  } */

</style>
