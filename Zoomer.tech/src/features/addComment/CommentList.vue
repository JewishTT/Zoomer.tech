<template>
  <div>
    <CommentItem
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
    />
  </div>
</template>

<script>
import CommentItem from './CommentItem.vue';

export default {
  components: {
    CommentItem
  },
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>
