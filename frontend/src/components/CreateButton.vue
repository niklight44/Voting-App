<template>
    <div class="create-btn">
      Join
    </div>
</template>

<style>
.create-btn {  
  display: inline-block;
  margin: auto;
  padding: 15px;
  width: 300px;
  height: 80px;
  background: linear-gradient(
    to bottom right, 
    hsl(322, 63%, 58%), 
    hsl(237, 95%, 71%)
  );
  border-radius: 1rem;
  position: relative;
  z-index: 2;

  color: #dddddd;
  font-weight: 700;
  font-size: 2em;

  box-sizing: border-box;
  transition: 100ms;

}

.create-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right, 
    hsl(322, 63%, 58%), 
    hsl(237, 95%, 71%)
  );
  z-index: -1;
  transform: translateY(15%) scale(.85);
  filter: blur(30px);
  transition: 300ms;
}

.create-btn:hover{
    cursor: pointer;
}

.create-btn:hover::before{
  filter: blur(40px);
}


/* Click state */
.create-btn:active{
    z-index: 2;
    transform: scale(0.95);
}

.create-btn:active::before{
  transform: translateY(0%) scale(0);
}



</style>