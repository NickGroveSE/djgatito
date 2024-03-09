<template>
  <div class="album-art-wrapper">
    <div class="album-art">
      <div class="album-art-shine"></div>
      <div class="left-wing"></div>
      <div class="right-wing"></div>
    </div>
  </div>

</template>

<script>

</script>

<style scoped>

  .album-art-wrapper {
    overflow: hidden;
  }

  .album-art {
    position: relative;
    width: 500px; 
    height: 500px;
    margin: calc(50vh - 300px) 0 0 200px;
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
    left: 464px;
    width: 140px;
    height: 96px;
    background-image: url("right-wing.svg");
    background-repeat: no-repeat;
    background-size: cover;
    animation: 1.5s flapRight infinite;
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
