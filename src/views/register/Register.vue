<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
    />
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入手机号"
        v-model="username"
      />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="提示密碼"
        v-model="password"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="text"
        class="wrapper__input__content"
        placeholder="輸入密碼"
        v-model="ensurement"
      />
    </div>
    <div class="wrapper__register-button" @click="handleRegister">注册</div>
    <div class="wrapper__register-link" @click="handleLoginClick">
      已有账号去登陆
    </div>
    <Toast v-if="show" :message="toastMessage" />
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
import { post } from '../../untils/request'
import { reactive, toRefs } from 'vue'
import Toast, { useToastEffect } from '../../components/Toast.vue'
// 處理註冊的邏輯
const useRegisterEffect = (showToast) => {
  const router = useRouter();
  const data = reactive({
    username: '',
    password: '',
    ensurement: ''
  })
  const handleRegister = async () => {
    try {
      const result = await post('/api/user/register', {
        username: data.username,
        password: data.password
      })
      if (result.error === 0) {
        router.push({ name: 'Login' })
      } else {
        showToast("註冊失敗")
      }
    } catch (e) {
      showToast('請求失敗')
    }
  }
  const { username, password, ensurement } = toRefs(data)
  return { username, password, ensurement, handleRegister }
}
//处理注册跳转
const useLoginEffect = () => {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push({ name: 'Login' });
  }
  return { handleLoginClick }
}
export default {
  name: 'Register',
  components: { Toast },
  // 职责就是告诉你，代码执行的一个流程
  setup () {
    const { show, toastMessage, showToast } = useToastEffect();
    const { username, password, ensurement, handleRegister } = useRegisterEffect(showToast);
    const { handleLoginClick } = useLoginEffect();
    return {
      show, toastMessage,
      username, password, ensurement, handleRegister,
      handleLoginClick
    }
  }
}










</script>
<style scoped lang='scss'>
@import "../../style/viriables.scss";
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto 0.4rem auto;
    width: 0.66rem;
    height: 0.66rem;
  }
  &__input {
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    padding: 0 0.16rem;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    border-radius: 6px;
    &__content {
      line-height: 0.48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: 0.16rem;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &__register-button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    color: #fff;
    font-size: 0.16rem;
    text-align: center;
  }
  &__register-link {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-fontcolor;
  }
}
</style>