<template>
  <div class="loginwrapper bg-white ">
    <div class="lg-inner-column">
      <div class="right-column relative">
        <div
          class="inner-content h-full flex justify-center flex-col bg-white"
        >
          <div class="auth-box h-fit flex border flex-col justify-center">
            <div class="mobile-logo text-center mb-6 block">
              <router-link to="/">
                <img
                  :src="logoWhite"
                  alt=""
                  class="mx-auto"
                />
              </router-link>
            </div>
            <div class="text-center 2xl:mb-10 mb-4">
              <h4 class="font-medium text-black-500" style="color: black;">Sign in</h4>
              <div class="text-slate-500 text-base">
                Sign in to your account to Shopping
              </div>
            </div>
            <Signin />
            <div
              class="md:max-w-[345px] mx-auto font-normal text-slate-500 mt-12 uppercase text-sm"
            >
              Don’t have an account? Sign up
              <router-link
                to="/register"
                class="text-pink-600  font-medium hover:underline"
              >
                Sign up
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Signin from "../common/Signin";
import Social from "../common/Social";
// Image Import
import logoWhite from "@/assets/images/logo/logo-j.svg"
import logo from "@/assets/images/logo/logo.svg"
import sideImg from "@/assets/images/auth/ils1.svg"

export default {
  data () {
    return {
      logoWhite,logo,sideImg
    }
  },
  components: {
    Social,
    Signin,
  },
};
</script>
<style lang="scss"></style>
