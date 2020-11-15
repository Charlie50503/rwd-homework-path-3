<template>
  <div class="Blog">
    <header class="blog-navbar">
      <div class="container blog-navbar__container">
        <ul class="blog-navlinks">
          <li><a href="#" class="blog-navlinks__link">最新消息</a></li>
          <li><a href="#" class="blog-navlinks__link">特別企劃</a></li>
          <li><a href="#" class="blog-navlinks__link">新品上市</a></li>
          <li><a href="#" class="blog-navlinks__link">鏡框小知識</a></li>
        </ul>
        <img
          class="blog-navbar__search"
          src="@/assets/img/iconfinder_icon-ios7-search-strong_211817.svg"
          alt=""
        />
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Blog",
  components: {},
  data() {
    return {
      showMainPage: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-navbar {
  background: #650300;

  &__container {
    display: flex;
    justify-content: space-between;
    padding-top: 12px;
    padding-bottom: 14px;
  }

  &__search {
    width: 24px;
    height: 24px;
  }
}

.blog-navlinks {
  display: flex;
  li {
    margin-left: 48px;

    &:nth-child(1) {
      margin-left: 0px;
    }
  }
  &__link {
    text-decoration: none;
    color: white;
    font-size: 20px;
    line-height: 24px;
  }
}

@media screen and (max-width: 768px) {
  .blog-navbar {
    &__container {
      padding: 15px 39px;
    }
  }

  .blog-navlinks {
    li {
      margin-left: 32px;
    }
    &__link {
      font-size: 16px;
    }
  }
}

@media screen and (max-width: 375px) {
  .blog-navbar {
    &__container {
      padding: 16px 15px;
    }

    &__search {
      display: none;
    }
  }

  .blog-navlinks {
    justify-content: space-between;
    width: 100%;

    li {
      margin-left: 0px;
    }
  }
}
</style>
