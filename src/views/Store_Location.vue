<template>
  <div class="FAQ">
    <header class="header header-banner header__container">
      <div class="container">
        <h1 class="header__title">
          門市據點
          <img src="@/assets/img/iconfinder_location_1585851.svg" alt="" />
        </h1>
      </div>
    </header>
    <main class="store">
      <div class="container">
        <div class="select-location">
          <span class="select-location__label">選擇地區</span>
          <select class="select-location__select" value="1">
            <option value="1">台北市</option>
          </select>
        </div>
        <ul class="store-list" v-show="!storeClick">
          <li
            v-for="(item, idx) in storeImg"
            class="store-list__item"
            :key="idx"
          >
            <img class="store-list__photo" :src="item.url" alt="" />
            <h3 class="store-list__name">台北中山旗艦店</h3>
            <ul class="store-item-info">
              <li class="store-item-info__item">
                <img
                  class="store-item-info__icon"
                  src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/4baf15e7aa2800a1e312de01435b7dbf6f654843/week4/icon-phone.svg"
                  alt=""
                />
                <p class="store-item-info__text">電話：(02)000-1234</p>
              </li>
              <li class="store-item-info__item">
                <img
                  class="store-item-info__icon"
                  src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/4baf15e7aa2800a1e312de01435b7dbf6f654843/week4/icon-clock.svg"
                  alt=""
                />
                <p class="store-item-info__text">營業時間：10:00-21:00</p>
              </li>
              <li class="store-item-info__item">
                <img
                  class="store-item-info__icon"
                  src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/4baf15e7aa2800a1e312de01435b7dbf6f654843/week4/icon-map.svg"
                  alt=""
                />
                <p class="store-item-info__text">
                  地址：台北市中山區南京東路25巷2-1號
                </p>
              </li>
            </ul>
            <a
              href="#Store_Location"
              class="store__link"
              @click="itemClick(item)"
              >詳細資訊</a
            >
          </li>
        </ul>
        <div class="selected-store" v-show="storeClick">
          <div class="selected-store-detail">
            <img class="selected-store__photo" :src="selectURL" alt="" />
            <div class="selected-store__content">
              <h3 class="selected-store__name">台北中山旗艦店</h3>
              <ul class="selected-store-info">
                <li class="selected-store-info__item">
                  <img
                    class="selected-store-info__icon"
                    src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/4baf15e7aa2800a1e312de01435b7dbf6f654843/week4/icon-phone.svg"
                    alt=""
                  />
                  <p class="selected-store-info__text">電話：(02)000-1234</p>
                </li>
                <li class="selected-store-info__item">
                  <img
                    class="selected-store-info__icon"
                    src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/4baf15e7aa2800a1e312de01435b7dbf6f654843/week4/icon-clock.svg"
                    alt=""
                  />
                  <p class="selected-store-info__text">營業時間：10:00-21:00</p>
                </li>
                <li class="selected-store-info__item">
                  <img
                    class="selected-store-info__icon"
                    src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/4baf15e7aa2800a1e312de01435b7dbf6f654843/week4/icon-map.svg"
                    alt=""
                  />
                  <p class="selected-store-info__text">
                    地址：台北市中山區南京東路25巷2-1號
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <img
            class="selected-store__map"
            src="@/assets/img/google-map.png"
            alt=""
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "FAQ",
  components: {},
  data() {
    return {
      storeClick: false,
      selectURL: "",
      storeImg: [
        {
          url:
            "https://github.com/hexschool/webLayoutTraining1st/blob/master/week3/locate1.jpeg?raw=true",
        },
        {
          url:
            "https://github.com/hexschool/webLayoutTraining1st/blob/master/week3/locate2.jpg?raw=true",
        },
        {
          url:
            "https://github.com/hexschool/webLayoutTraining1st/blob/master/week3/locate3.jpg?raw=true",
        },
        {
          url:
            "https://github.com/hexschool/webLayoutTraining1st/blob/master/week3/locate4.jpg?raw=true",
        },
        {
          url:
            "https://github.com/hexschool/webLayoutTraining1st/blob/master/week3/locate5.jpg?raw=true",
        },
      ],
    };
  },
  methods: {
    itemClick(item) {
      this.storeClick = true;
      this.selectURL = item.url;
    },
  },
};
</script>

<style lang="scss" scoped>
.header-banner {
  height: 304px;
  background-image: url(https://images.unsplash.com/photo-1511467094700-849a6a082fa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
  background-size: cover;
}

.header {
  &__container {
    display: flex;
    align-items: flex-end;
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
      width: 40px;
      height: 58px;
    }
  }
}

.store {
  padding-top: 16px;
  padding-bottom: 304px;

  .select-location {
    margin-bottom: 24px;

    &__label {
      font-size: 24px;
      line-height: 30px;
      font-family: "custom Regular";
    }
    &__select {
      padding: 10px 19px 10px 19px;
      font-family: "custom Regular";
      color: #ced4da;
      font-size: 16px;
      line-height: 24px;
      width: 324px;
      margin-left: 20px;
    }
  }

  .store-list {
    display: flex;
    flex-wrap: wrap;

    &__item {
      width: calc(100% / 3);
      margin-bottom: 32px;
    }

    &__photo {
      width: 350px;
      height: 224px;
    }

    &__name {
      padding: 12px 24px;
      font-family: "custom Regular";
      font-size: 24px;
      line-height: 36px;
      width: 350px;
      border: 1px solid #00000020;
    }
  }

  &-item-info {
    width: 350px;
    padding: 16px 24px;
    border-right: 1px solid #00000020;
    border-left: 1px solid #00000020;
    border-bottom: 1px solid #00000020;

    &__item {
      display: flex;
      margin-bottom: 8px;
      align-items: center;
    }

    &__icon {
      width: 21px;
      height: 21px;
    }

    &__text {
      font-size: 20px;
      line-height: 30px;
      margin-left: 8px;
    }
  }

  &__link {
    display: flex;
    justify-content: center;
    width: 350px;
    padding: 20px 0 20px 0;
    font-size: 19px;
    line-height: 26px;
    color: #fff;
    font-family: "custom Regular";
    background-color: #000000;
    border: 1px solid #00000020;
  }
}

.selected-store {
  display: flex;
  justify-content: space-between;

  &-detail {
    width: 445px;
  }

  &__photo {
    height: 224px;
    width: 445px;
    object-fit: cover;
  }

  &__name {
    padding: 12px 24px;
    font-size: 24px;
    line-height: 36px;
    font-family: "custom Regular";
    border: 1px solid #00000020;
  }

  &-info {
    padding: 16px 24px;
    border: 1px solid #00000020;

    &__item {
      display: flex;
      align-items: center;
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0px;
      }
    }

    &__icon {
      width: 21px;
      height: 21px;
    }

    &__text {
      font-family: "custom Regular";
      font-size: 20px;
      line-height: 30px;
      margin-left: 12px;
    }
  }
}

@media screen and (max-width: 768px) {
  .header {
    &__title {
      font-size: 48px;

      img {
        margin-left: 16px;
        width: 30px;
        height: 44px;
      }
    }
  }

  .store {
    padding-top: 20px;
    padding-bottom: 104px;

    .select-location {
      margin-bottom: 24px;

      &__label {
        font-size: 16px;
        line-height: 30px;
      }
      &__select {
        padding: 12px 16px;
        width: 237px;
      }
    }

    .store-list {
      &__item {
        width: calc(100% / 2);
        margin-bottom: 20px;
      }

      &__photo {
        width: 330px;
        height: 164px;
      }

      &__name {
        width: 330px;
        padding: 8px 16px;
        font-size: 16px;
        line-height: 24px;
        border: 1px solid #00000020;
      }
    }

    &-item-info {
      width: 330px;
      padding: 16px;

      &__item {
        display: flex;
        margin-bottom: 8px;
        align-items: center;
      }

      &__icon {
        width: 20px;
        height: 20px;
      }

      &__text {
        font-size: 14px;
        line-height: 21px;
        margin-left: 16px;
      }
    }

    &__link {
      width: 330px;
      padding: 16px 0;
      font-size: 14px;
      line-height: 21px;
    }
  }

  .selected-store {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    &-detail {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 32px;
    }

    &__photo {
      height: 164px;
      width: 330px;
      object-fit: cover;
    }

    &__content {
      width: 330px;
    }

    &__name {
      padding: 8px 16px;
      font-size: 16px;
      line-height: 24px;
      font-family: "custom Bold";
    }

    &-info {
      padding: 16px;
      border: 1px solid #00000020;

      &__item {
        &:last-child {
          margin-bottom: 0px;
        }
      }

      &__icon {
        width: 21px;
        height: 21px;
      }

      &__text {
        font-size: 14px;
        line-height: 21px;
        margin-left: 16px;
      }
    }

    &__map {
      height: 465px;
    }
  }
}

@media screen and (max-width: 375px) {
  .header {
    &__title {
      font-size: 28px;

      img {
        margin-left: 8px;
        width: 17px;
        height: 24px;
      }
    }
  }

  .store {
    padding-top: 8px;
    padding-bottom: 56px;

    .select-location {
      margin-bottom: 20px;

      &__label {
        font-size: 14px;
      }

      &__select {
        padding: 8px 16px;
        width: 277px;
        margin-left: 12px;
      }
    }

    .store-list {
      &__item {
        width: 100%;
        margin-bottom: 20px;
      }

      &__photo {
        width: 100%;
        height: 164px;
      }

      &__name {
        width: 100%;
        padding: 8px 16px;
      }
    }

    &-item-info {
      width: 100%;
    }

    &__link {
      width: 100%;
    }
  }

  .selected-store {
    &-detail {
      flex-direction: column;
      margin-bottom: 16px;
    }

    &__photo {
      width: 100%;
      height: 164px;
    }

    &__content {
      width: 100%;
    }

    &__name {
      font-family: "custom Regular";
    }

    &-info {
      &__icon {
        width: 20px;
        height: 20px;
      }
    }

    &__map {
      height: 227px;
    }
  }
}
</style>
