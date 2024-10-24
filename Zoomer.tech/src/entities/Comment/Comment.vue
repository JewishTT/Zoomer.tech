<template>
  <div class="comment-card">
    <img class="profile-image" >
      <p>Андрей Васильев</p>
      <p> {{ comment.text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    comment: {
      type: Object,
      required: true,
      text: '',
      author: 'Андрей Васильев'
    }
  }
};
</script>

<style>
.comment-card {
  padding: 10px;
  margin: 0 auto 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  width: auto;
  max-width: 400px;
  box-shadow: 0 0 5px #ccc;
  min-height: 80px;
}

.profile-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #e7e7e7;
  display: block;
  margin-left: 0;
  margin-bottom: -70px;
}

.comment-card p {
  margin: 10px 0;
  font-size: 16px;
  margin-left: 90px;
}

.comment-card p:nth-child(odd) {
  color: #333;
}

.comment-card p:nth-child(even) {
  color: #888;
}

</style>
