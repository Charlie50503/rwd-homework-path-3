<template>
  <div id="app">
    <div class="wrap">
      <div class="navbar">
        <router-link class="navbar__logo" to="/Home"
          ><img src="@/assets/img/logo-new_工作區域 1.png" alt=""
        /></router-link>
        <ul class="navbar__links">
          <li class="navbar__link">
            <router-link to="/">系列鏡框</router-link>
          </li>
          <li class="navbar__link">
            <router-link to="/Store_Location">門市據點</router-link>
          </li>
          <li class="navbar__link">
            <router-link to="/Blog/main">部落格</router-link>
          </li>
          <li class="navbar__link">
            <router-link to="/FAQ">常見問題</router-link>
          </li>
        </ul>
      </div>
      <router-view />
      <div class="footer">
        <div class="container">
          <div class="footer-mobile-container">
            <div class="footer-header">
              <ul class="footer-header__links">
                <li class="footer-header__link">
                  <router-link to="/Home">首頁</router-link>
                </li>
                <li class="footer-header__link">
                  <router-link to="/">系列鏡框</router-link>
                </li>
                <li class="footer-header__link">
                  <router-link to="/Store_Location">門市據點</router-link>
                </li>
                <li class="footer-header__link">
                  <router-link to="/Blog/main">部落格</router-link>
                </li>
                <li class="footer-header__link">
                  <router-link to="/FAQ">常見問題</router-link>
                </li>
              </ul>
              <ul class="footer-header__icons">
                <li class="footer-header__icon">
                  <a href="#"
                    ><svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook"
                      class="svg-inline--fa fa-facebook fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                      ></path></svg
                  ></a>
                </li>
                <li class="footer-header__icon">
                  <a href="#"
                    ><svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="instagram"
                      class="svg-inline--fa fa-instagram fa-w-14"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      ></path></svg
                  ></a>
                </li>
                <li class="footer-header__icon">
                  <a href="#"
                    ><svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="line"
                      class="svg-inline--fa fa-line fa-w-14"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M272.1 204.2v71.1c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.1 0-2.1-.6-2.6-1.3l-32.6-44v42.2c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.8 0-3.2-1.4-3.2-3.2v-71.1c0-1.8 1.4-3.2 3.2-3.2H219c1 0 2.1.5 2.6 1.4l32.6 44v-42.2c0-1.8 1.4-3.2 3.2-3.2h11.4c1.8-.1 3.3 1.4 3.3 3.1zm-82-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 1.8 1.4 3.2 3.2 3.2h11.4c1.8 0 3.2-1.4 3.2-3.2v-71.1c0-1.7-1.4-3.2-3.2-3.2zm-27.5 59.6h-31.1v-56.4c0-1.8-1.4-3.2-3.2-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 .9.3 1.6.9 2.2.6.5 1.3.9 2.2.9h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.7-1.4-3.2-3.1-3.2zM332.1 201h-45.7c-1.7 0-3.2 1.4-3.2 3.2v71.1c0 1.7 1.4 3.2 3.2 3.2h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2V234c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2v-11.4c-.1-1.7-1.5-3.2-3.2-3.2zM448 113.7V399c-.1 44.8-36.8 81.1-81.7 81H81c-44.8-.1-81.1-36.9-81-81.7V113c.1-44.8 36.9-81.1 81.7-81H367c44.8.1 81.1 36.8 81 81.7zm-61.6 122.6c0-73-73.2-132.4-163.1-132.4-89.9 0-163.1 59.4-163.1 132.4 0 65.4 58 120.2 136.4 130.6 19.1 4.1 16.9 11.1 12.6 36.8-.7 4.1-3.3 16.1 14.1 8.8 17.4-7.3 93.9-55.3 128.2-94.7 23.6-26 34.9-52.3 34.9-81.5z"
                      ></path></svg
                  ></a>
                </li>
              </ul>
            </div>
            <div class="footer-container">
              <ul class="footer-container__content">
                <li class="footer-container__item">
                  <a class="footer-container__link" href="tel:+0800-000-000"
                    ><div class="footer-container__link-icon">
                      <img
                        class="icon-phone"
                        src="@/assets/img/ic_phone_48px.svg"
                        alt=""
                      />
                    </div>
                    <span class="footer-container__link-text"
                      >0800-000-000</span
                    >
                  </a>
                </li>
                <li class="footer-container__item">
                  <a
                    class="footer-container__link"
                    href="mailto:glasses@business.com"
                  >
                    <div class="footer-container__link-icon">
                      <img
                        class="icon-mail"
                        src="@/assets/img/ic_mail_outline_24px.svg"
                        alt=""
                      />
                    </div>
                    <span class="footer-container__link-text"
                      >glasses@business.com</span
                    >
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="footer-footer">
            <router-link to="/Home" class="footer-footer__logo"
              ><img src="@/assets/img/logo-new_工作區域 1.png" alt=""
            /></router-link>
            <span class="footer-footer__copyright"
              >Copyright © 2020 Glasses.All rights reserved.</span
            >
            <div class="footer-footer__links">
              <a class="footer-footer__link" href="#">隱私權政策</a>
              <a class="footer-footer__link" href="#">服務條款</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import '@/assets/scss/css-reset.scss';

@import '@/assets/scss/util.scss';

</style>
<style lang="scss" scoped>
.navbar {
   display: flex;
   justify-content: space-between;
   padding: 30px 39px 30px 39px;
   background-color: #aa0601;

   &__links {
      display: flex;
   }

   &__link {
      display: flex;

      a {
         padding: 10px;
         color: white;
         text-align: center;
         text-decoration: none;
         font-size: 20px;
         line-height: 30px;
      }
   }
}

.footer {
   padding-top: 36px;
   padding-bottom: 28.43px;
   background-color: #aa0601;
   color: white;
   font-family: 'custom Regular', sans-serif;

   a {
      color: white;
   }

   svg {
      fill: white;
   }

   &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &__links {
         display: flex;
         font-size: 16px;
         line-height: 24px;

         li {
            margin-left: 48px;

            &:first-child {
               margin-left: 0;
            }
         }
      }

      &__icons {
         display: flex;
         //使圖片排列的水平一致
         align-items: baseline;
      }

      &__icon {
         margin-left: 32px;
         width: 48px;
         height: 48px;

         &:first-child {
            margin-left: 0;
         }
      }
   }

   &-container {
      padding-top: 25px;
      padding-bottom: 22px;
      border-bottom: 1px solid #fff;

      &__item {
         margin-bottom: 20px;

         &:last-child {
            margin-bottom: 0;
         }
      }

      &__link {
         display: flex;
         align-items: center;

         &-icon {
            display: flex;
            justify-content: flex-start;
            width: 65px;

            img {
               filter: invert(1);

               &.icon-phone {
                  width: 38px;
                  height: 38px;
               }

               &.icon-mail {
                  width: 44px;
                  height: 40px;
               }
            }
         }

         &-text {
            font-size: 36px;
            line-height: 54px;
         }
      }
   }

   &-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 24px;

      &__copyright {
         margin-left: 38px;
         font-size: 16px;
         line-height: 24px;
      }

      &__logo {
         width: 80px;
         height: 49px;
      }



      &__link {
         font-size: 14px;
         line-height: 21px;

         &:last-child {
            margin-left: 62px;
         }
      }
   }
}

@media screen and (max-width: 768px) {
   .footer {
      padding-top: 40px;
      padding-bottom: 40px;

      &-header {
         &__links {
            li {
               margin-left: 40px;
            }
         }

         &__icon {
            margin-left: 24px;
            width: 24px;
            height: 24px;

            &:first-child {
               margin-left: 0;
            }
         }
      }

      &-container {
         padding-top: 22px;
         padding-bottom: 27px;

         &__item {
            margin-bottom: 20px;

            &:last-child {
               margin-bottom: 0;
            }
         }

         &__link {
            &-icon {
               justify-content: center;
               width: 30px;

               img {
                  filter: invert(1);

                  &.icon-phone {
                     width: 18px;
                     height: 18px;
                  }

                  &.icon-mail {
                     width: 28px;
                     height: 24px;
                  }
               }
            }

            &-text {
               margin-left: 10px;
               font-size: 20px;
               line-height: 30px;
            }
         }
      }

      &-footer {
         &__copyright {
            margin-left: 0;
         }

         &__logo {
            display: none;
         }

         &__links {
         }

         &__link {
            &:last-child {
            }
         }
      }
   }
}

@media screen and (max-width: 375px) {
   .navbar {
      position: sticky;
      top: 0;
      flex-direction: column;
      padding: 0;

      &__logo {
         margin: 10px auto 10px auto;
      }

      &__links {
         flex-wrap: wrap;
      }

      &__link {
         width: 50%;

         a {
            display: block;
            width: 100%;
            border: 1px solid #fff;
         }
      }
   }

   .footer {
      padding-top: 23px;
      padding-bottom: 21.07px;

      &-mobile-container {
         display: flex;
         align-items: flex-start;
         flex-direction: row-reverse;
         justify-content: space-between;
         border-bottom: 1px solid #fff;
      }

      &-header {
         display: flex;
         align-items: center;
         justify-content: space-between;

         &__links {
            display: none;
         }

         &__icons {
            display: flex;
         }

         &__icon {
            width: 24px;
            height: 24px;
         }
      }

      &-container {
         padding-top: 0;
         padding-bottom: 24px;
         border-bottom: none;

         &__item {
            margin-bottom: 0;
         }

         &__link {
            display: flex;
            align-items: center;

            &-icon {
               display: flex;
               justify-content: flex-start;
               width: auto;

               img {
                  filter: invert(1);

                  &.icon-phone {
                     width: 14px;
                     height: 14px;
                  }

                  &.icon-mail {
                     width: 16px;
                     height: 12px;
                  }
               }
            }

            &-text {
               margin-left: 7px;
               font-size: 16px;
               line-height: 30px;
            }
         }
      }

      &-footer {
         position: relative;
         display: flex;
         align-items: flex-start;
         flex-direction: column;
         justify-content: flex-start;
         padding-top: 24px;

         &__copyright {
            margin-bottom: 7px;
            margin-left: 0;
            font-size: 14px;
            line-height: 21px;
         }

         &__logo {
            position: absolute;
            right: 0;
            bottom: 0;
            display: block;
            width: 46px;
            height: 28px;
         }

         &__links {
            display: flex;
            flex-direction: column;
         }

         &__link {
            &:first-child {
               margin-bottom: 8px;
            }

            &:last-child {
               margin-left: 0;
            }
         }
      }
   }
}

</style>
