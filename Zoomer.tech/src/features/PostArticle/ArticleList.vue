<template>
  <div>
    <ArticleItem v-for="article in articles"
                 :key="article.id"
                 :article="article"
                 @remove="$emit('remove', article)"
    />
  </div>
</template>

<script>
import ArticleItem from './ArticleItem.vue';

export default {
  components: {
    ArticleItem
  },
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
}
</script>


