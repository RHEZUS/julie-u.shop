<template>
  <div class="loginwrapper bg-white">
    <div class="lg-inner-column">
      <div class="right-column relative bg-white">
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
            <div class="text-center 2xl:mb-10 mb-5">
              <h4 class="font-medium" style="color: black;">Sign up</h4>
              <div class="text-slate-500 dark:text-slate-400 text-base">
                Create an account to start shopping
              </div>
            </div>
            <Signup />
            <div
              class="max-w-[215px] mx-auto flex font-normal text-slate-500 2xl:mt-12 mt-6 uppercase text-sm"
            >
              Already registered?
              <router-link
                to="/login"
                class="text-pink-600  font-medium hover:underline"
              >
                Sign In</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Signup from "../common/Signup";
import logoWhite from "@/assets/images/logo/logo-j.svg"
import Social from "../common/Social";

export default {
  data() {
    return {
      logoWhite,
    };
  },
  components: {
    Social,
    Signup,
  },
};
</script>
<style lang="scss"></style>
