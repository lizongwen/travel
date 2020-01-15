<template>
  <div class="order-feedback">
    <div class="order-result">
      <div class="state">订单完成</div>
      <img class="icon" src="@/assets/success.png" alt="订单反馈图标" />
      <div class="msg">出票成功</div>
      <div class="tip">入园消费时请向商家出示以下券码</div>
    </div>
    <div class="split border-b-1px"></div>
    <div class="order-qrcode">
      <div class="strong">入园验证码</div>
      <div class="strong">{{code}}}</div>
      <img class="qr" :src="qrimg" alt="订单二维码" />
    </div>
    <div class="btn-wrap">
        <button>继续购买</button>
        <button>订单详情</button>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            code:20191233,
            qrimg:''
        }
    },
    created(){
        this.qrimg=require('@/assets/qr.jpg');
    }
};
</script>

<style lang="scss" scoped>
.order-feedback {
  font-family: PingFang-SC;
  text-align: center;
  //订单结果
  .order-result {
    margin-bottom: 17px;
    .state {
      line-height: 50px;
      font-size: 20px;
      font-weight: bold;
      color: #333;
    }
    .icon {
      width: 44px;
      height: 44px;
    }
    .msg {
      line-height: 40px;
      font-weight: bolder;
      color: #262626;
    }
    .tip {
      font-size: 12px;
      color: #aaa8a8;
    }
  }
  //分割线
  .split{
      margin: 0 30px;
      @include border-b-1px(#E4E4E4);
  }
  //订单码
  .order-qrcode {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 190px;
    padding: 19px 0 29px;
    .qr{
        width: 125px;
        height: 125px;
    }
  }
  //按钮组
  .btn-wrap{
      margin: 0 16px;
      display: flex;
      justify-content: space-between;
      button{
          width: 166px;
          height: 40px;
          border-radius: 20px;
          border:1px solid #46aaff;
          background: transparent;
          color: #46aaff;
      }
  }
}
</style>