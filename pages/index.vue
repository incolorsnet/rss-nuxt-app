<template lang="pug">
div
  .p_mv
    .c_inner
      .p_mv-header
        h1.p_mv-heading
          span.p_mv-heading-text note から RSS を取得するテスト
        .p_mv-text
          p
            a(href="/api/note") このページで利用している API はここ
            br
            a(href="https://github.com/incolorsnet/rss-nuxt-app", target="_blank", ref="noreferrer noopener") ソースコード全文 はここ
  section.p_note(v-for="apiItems in apiResult")
    .c_inner
      .p_note-header.c_col.u_col-ai-c
        h2.p_note-heading
          span.p_note-heading-text(v-html="apiItems.title + '｜'")
        .p_note-descript
          p: a(:href="apiItems.url", v-html="apiItems.url")
      .p_note-body
        .p_note-body-list.c_col.u_col-wrap
          article.p_nt(v-for="postItem in apiItems.items")
            .p_nt-inner
              a.p_nt-mv(v-html="getMvImagePath(postItem.description[0], postItem.title[0])", :href="postItem.link[0]", v-touch:tap)
              .p_nt-body
                .p_nt-body-header
                  .p_nt-body-date
                    p(v-html="getTheDate(postItem.pubDate)")
                  a.p_nt-body-heading.c_col.u_col-ai-c(:href="postItem.link[0]")
                    h3.p_nt-body-heading-text(v-html="postItem.title[0]")
                a.p_nt-body-button(:href="postItem.link[0]", v-touch:tap="true")
                  p.p_nt-body-button-text 続きを読む
  footer.p_footer
    .p_footer-text
      a(href="https://twitter.com/_incolors", target="_blank") @_incolors
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  asyncData(app) {
    return app.$axios.get('/api/note').then(res => {
      return { apiResult: res.data }
    })
  },
  methods: {
    getTheDate(date) {
      const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      const dateStr = new Date(date)
      const y = dateStr.getFullYear()
      const m = dateStr.getMonth() + 1
      const d = dateStr.getDate()
      const day = week[dateStr.getDay()]
      return `${y}.${m}.${d} (${day})`
    },
    getMvImagePath(descript, title) {
      let image = descript.match(/https(.|\s)*?(jpg|png|gif|jpeg)/gi)
      if (image !== null && image !== undefined) {
        console.log(Object.values(image)[0])
        image = `<img src="${Object.values(image)[0]}" alt="${title}" />`
      } else {
        image = [
          '<div class="no-image c_col-c">',
          '<span class="no-image-text">',
          'NO IMAGE',
          '</span>',
          '</div>'
        ].join('')
      }
      return image
    }
  }
}
</script>

<style lang="scss">
.p_nt {
  &-mv {
    &.tap {
      img {
        transform: scale(1.02);
        filter: grayscale(100%);
        backface-visibility: hidden;
      }

      .no-image {
        filter: blur(3px);
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    object-fit: cover;
    position: 50%;
    transition: all 0.2s linear;
  }

  .no-image {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    transition: all 0.2s linear;

    &-text {
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 0.3em;
    }
  }
}
</style>

<style lang="scss" scoped>
a {
  text-decoration: underline;
}

.p_mv {
  padding: 60px 0;

  &-header {
  }

  &-heading {
    &-text {
      font-weight: bold;
      font-size: 20px;
    }
  }

  &-text {
    font-size: 13px;
    margin: 8px 0 0;
  }
}

.p_note {
  padding: 0 0 0;

  &-header {
    padding: 30px 0;
  }

  &-heading {
    font-size: 16px;
    font-weight: bold;

    &-text {
    }
  }

  &-descript {
    a {
      font-size: 14px;
    }
  }

  &-body {
    &-list {
    }
  }

  .p_nt {
    @include pc {
      width: cal(300, 950);
      min-width: cal(300, 950);
      margin: 0 0 cal(25, 950) cal(25, 950);

      &:nth-child(3n + 1) {
        margin: 0 0 cal(25, 950) 0;
      }
    }
    @include sp {
      width: cal(50, 105);
      min-width: cal(50, 105);
      margin: 0 0 cal(5, 105) cal(5, 105);

      &:nth-child(2n + 1) {
        margin: 0 0 cal(5, 105) 0;
      }
    }
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    padding: 0 0 40px;
    background: $palet1;

    &-inner {
    }

    &-mv {
      width: 100%;
      height: 0;
      padding: 0 0 cal(185, 300);
      position: relative;
      overflow: hidden;
    }

    &-body {
      @include sp {
        padding: 0 10px;
      }
      @include pc {
        padding: 0 20px;
      }

      &-header {
        margin: 0 0 15px;
        padding: 0 5px;
      }

      &-date {
        font-size: 13px;
        display: block;
        margin: 15px 0 0;
      }

      &-heading {
        min-height: 3em;

        &-text {
          font-size: 14px;
          font-weight: bold;
          line-height: 1.6;
        }
      }

      &-button {
        @include sp {
          width: calc(100% - 25px);
        }
        @include pc {
          width: calc(100% - 40px);
        }
        padding: 5px 10px;
        border: 1px solid $palet2;
        text-align: center;
        position: absolute;
        display: block;
        margin: auto;
        left: 0;
        right: 0;
        bottom: 15px;
        border-radius: 3px;
        background: $palet2;
        transition: all 0.5s ease;

        &.tap {
          background: #fff;

          .p_nt-body-button-text {
            color: $palet2;
          }
        }

        &-text {
          color: #fff;
          font-size: 12px;
          font-weight: bold;
          transition: all 0.3s ease;
        }
      }
    }
  }
}

.p_footer {
  padding: 60px 0;

  &-text {
    text-align: center;

    a {
      font-size: 12px;
    }
  }
}
</style>
