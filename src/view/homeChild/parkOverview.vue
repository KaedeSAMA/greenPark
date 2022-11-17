<template>
  <div class="parkOverviewRoot">
    <div class="upperDiv">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="bottomDiv">
        <div class="left">

        </div>
        <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.parkOverviewRoot{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.upperDiv{
    width: 95%;
    height: 45%;
    background-color: rgb(255, 255, 255);
    /* border: 1px black solid; */
    box-shadow :0px 2px 8px 1px rgba(57, 140, 92, 42);
    border-radius: 10px;
}
.bottomDiv{
    width: 95%;
    height: 43%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .left{
        width: 40%;
        height: 100%;
        background-color: rgb(255, 255, 255);
        box-shadow :0px 2px 8px 1px rgba(57, 140, 92, 42);
        border-radius: 10px;

    }
    .right{
        width: 55%;
        height: 100%;
        background-color: rgb(255, 255, 255);
        box-shadow :0px 2px 8px 1px rgba(57, 140, 92, 42);
        border-radius: 10px;
    }
}
</style>