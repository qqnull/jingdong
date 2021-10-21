<template>
  <div class="wrapper">
    <!-- 我是Header.vue login -->
    <img
      class="wrapper__img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
    />
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="請輸入你的用戶名"
        v-model="username"
      />
    </div>
    <div class="wrapper__input">
      <input
        v-model="password"
        class="wrapper__input__content"
        placeholder="請輸入密碼"
      />
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登錄</div>
    <div class="wrapper__login-link" @click="handleRegisterClick">立即註冊</div>
  </div>
  <Toast v-if="show" :mgs="toasMessage" />
</template>
<script>
import { useRouter } from "vue-router";
import { post } from "../../untils/request";
import { reactive, toRefs } from "vue";
import Toast, { useToastEffect } from "../../components/Toast";

//处理登录的逻辑
const useLoginEffect = (showToast) => {
  const router = useRouter();
  const data = reactive({ username: "", password: "" });
  const handleLogin = async () => {
    try {
      const result = await post("/api/user/login", {
        username: data.username,
        password: data.password,
      });
      if (result.error === 0) {
        (localStorage.isLogin = true), router.push({ name: "Home" });
      } else {
        showToast("登录失败");
      }
    } catch (e) {
      showToast("请求失败");
    }
  };
  const { username, password } = toRefs(data);
  return { username, password, handleLogin };
};
//处理登录跳转注册页面
const useRegisterEffect = () => {
  const router = useRouter();
  const handleRegisterClick = () => {
    router.push({ name: "Register" });
  };
  return { handleRegisterClick };
};
//处理注册的验证
export default {
  name: "Login",
  components: { Toast },
  // 职责就是告诉你，代码执行的一个流程
  setup () {
    const { show, toastMessage, showToast } = useToastEffect();
    const { username, password, handleLogin } = useLoginEffect(showToast);
    const { handleRegisterClick } = useRegisterEffect();

    return {
      username,
      password,
      show,
      toastMessage,
      handleLogin,
      handleRegisterClick,
    };
  },
};
</script>
<style scoped lang="scss">
@import "../../style/viriables.scss";
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  // background-color: bisque;
  &__img {
    display: block;
    width: 0.66rem;
    height: 0.66rem;
    margin: 0 auto 0.1rem auto;
  }
  &__input {
    height: 0.5rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    padding: 0 0.16rem;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    border-radius: 6px;
    &__content {
      border: none;
      outline: none;
      width: 100%;
      line-height: 0.48rem;
      background: none;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &__login-button {
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
  &__login-link {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-fontcolor;
    margin: 0 auto 19.2px auto;
  }
}
</style>