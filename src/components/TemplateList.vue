<template>
  <div class="template-list-component">
    <a-row :gutter="16">
      <a-col v-for="item in list" :key="item.id" :span="6" class="poster-item">
        <router-link :to="{ name: 'template', params: { id: item.id } }">
          <a-card hoverable>
            <template #cover>
              <img v-if="item.coverImg" :src="item.coverImg" />
              <img
                v-else
                src="http://typescript-vue.oss-cn-beijing.aliyuncs.com/vue-marker/5f81cca3f3bf7a0e1ebaf885.png"
              />
              <div class="hover-item">
                <a-button size="large" type="primary">使用该模版创建</a-button>
              </div>
            </template>
            <a-card-meta :title="item.title">
              <template #discription>
                <div class="discription-detail">
                  <span>作者： {{}}</span>
                </div>
              </template>
            </a-card-meta>
          </a-card>
        </router-link>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    props: {
      list: {}
    },
    setup() {
      return {};
    }
  });
</script>

<style lang="less" scoped></style>
