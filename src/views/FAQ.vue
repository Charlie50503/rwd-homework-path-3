<template>
  <div class="FAQ">
    <header class="header header-banner ">
      <div class="container header__container">
        <h1 class="header__title">
          常見問題
          <img src="@/assets/img/help-circle-sharp.svg" alt="" />
        </h1>
      </div>
    </header>
    <main class="main">
      <div class="container">
        <h2 class="main__title">
          我想詢問配鏡問題
        </h2>
        <ul class="main__container">
          <li class="main__question">
            <h3 class="main__question-title">Q1.請問可否自備鏡框單配鏡片？</h3>
            <div class="main__question-content">
              <p class="main__question-answer">
                A1.我牌鏡框搭配薄型非球面鏡片1480元，搭配功能型鏡片則依鏡片種類加價購買。<br />
                當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片980元(隔日後則為1480元)，搭配功能型鏡片則依鏡片種類加價購買。
              </p>
              <p class="main__question-supplement">
                他牌鏡框，搭配薄型非球面鏡片1980元，搭配功能型鏡片則依鏡片種類加價購買。
              </p>
            </div>
          </li>
          <li class="main__question">
            <h3 class="main__question-title">Q2.眼鏡都可以20分鐘取件嗎？</h3>
            <div class="main__question-content">
              <p class="main__question-answer">
                A1.我牌鏡框搭配薄型非球面鏡片1480元，搭配功能型鏡片則依鏡片種類加價購買。<br />
                當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片980元(隔日後則為1480元)，搭配功能型鏡片則依鏡片種類加價購買。
              </p>
              <p class="main__question-supplement">
                他牌鏡框，搭配薄型非球面鏡片1980元，搭配功能型鏡片則依鏡片種類加價購買。
              </p>
            </div>
          </li>
          <li class="main__question">
            <h3 class="main__question-title">Q3.散光鏡片需要額外加價嗎？</h3>
            <div class="main__question-content">
              <p class="main__question-answer">
                A1.我牌鏡框搭配薄型非球面鏡片1480元，搭配功能型鏡片則依鏡片種類加價購買。<br />
                當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片980元(隔日後則為1480元)，搭配功能型鏡片則依鏡片種類加價購買。
              </p>
              <p class="main__question-supplement">
                他牌鏡框，搭配薄型非球面鏡片1980元，搭配功能型鏡片則依鏡片種類加價購買。
              </p>
            </div>
          </li>
          <li class="main__question">
            <h3 class="main__question-title">
              Q4.我可以使用舊眼鏡的度數配鏡片嗎？
            </h3>
            <div class="main__question-content">
              <p class="main__question-answer">
                A1.我牌鏡框搭配薄型非球面鏡片1480元，搭配功能型鏡片則依鏡片種類加價購買。<br />
                當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片980元(隔日後則為1480元)，搭配功能型鏡片則依鏡片種類加價購買。
              </p>
              <p class="main__question-supplement">
                他牌鏡框，搭配薄型非球面鏡片1980元，搭配功能型鏡片則依鏡片種類加價購買。
              </p>
            </div>
          </li>
          <li class="main__question">
            <h3 class="main__question-title">Q5.請問可以單購買鏡框嗎？</h3>
            <div class="main__question-content">
              <p class="main__question-answer">
                A1.我牌鏡框搭配薄型非球面鏡片1480元，搭配功能型鏡片則依鏡片種類加價購買。<br />
                當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片980元(隔日後則為1480元)，搭配功能型鏡片則依鏡片種類加價購買。
              </p>
              <p class="main__question-supplement">
                他牌鏡框，搭配薄型非球面鏡片1980元，搭配功能型鏡片則依鏡片種類加價購買。
              </p>
            </div>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "FAQ",
  components: {},
};
</script>

<style lang="scss" scoped>
.ps-re {
  position: relative;
}
.header-banner {
  height: 304px;
  background-image: url(https://images.unsplash.com/photo-1511467094700-849a6a082fa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
  background-size: cover;
}

.header {
  &__container {
    display: flex;
    align-items: flex-end;
    height: 100%;
  }

  &__title {
    display: flex;
    font-size: 64px;
    line-height: 80px;
    font-weight: bold;
    align-items: center;

    img {
      display: block;
      margin-left: 24px;
      width: 58px;
      height: 58px;
    }
  }
}

.main {
  padding-top: 80px;
  padding-bottom: 304px;

  &__title {
    font-size: 32px;
    font-weight: bold;
    line-height: 63px;
    margin-bottom: 36px;
  }

  &__question {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0px;
    }

    &-title {
      font-size: 20px;
      line-height: 23px;
      margin-bottom: 16px;
    }

    &-content {
      align-self: center;
      font-size: 16px;
      line-height: 24px;
    }
  }
}

@media screen and (max-width: 768px) {
  .header {
    &__container {
    }

    &__title {
      font-size: 48px;

      img {
        width: 48px;
        height: 48px;
      }
    }
  }

  .main {
    padding-top: 40px;
    padding-bottom: 104px;

    &__title {
      font-size: 32px;
    }

    &__question {
      &-content {
        align-self: flex-end;
        width: 630px;
      }
    }
  }
}

@media screen and (max-width: 375px) {
  .header {
    &__container {
    }

    &__title {
      font-size: 28px;
      margin-bottom: 12px;

      img {
        margin-left: 8px;
        width: 24px;
        height: 24px;
      }
    }
  }

  .main {
    padding-top: 24px;
    padding-bottom: 56px;

    &__title {
      margin-bottom: 16px;
      font-size: 20px;
    }

    &__question {
      margin-bottom: 20px;

      &-title {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 8px;
      }

      &-content {
        align-self: flex-start;
        width: 100%;
      }

      &-answer {
        margin-bottom: 21px;
      }
    }
  }
}
</style>
