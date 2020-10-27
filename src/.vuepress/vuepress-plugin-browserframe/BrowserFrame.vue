<template>
  <div class="browser-frame">
    <div class="browser-frame__top">
      <div class="browser-frame__button browser-frame__button--red" />
      <div class="browser-frame__button browser-frame__button--yellow" />
      <div class="browser-frame__button browser-frame__button--green" />
      <div class="browser-frame__address" aria-hidden v-if="url">{{ url }}</div>
      <div class="browser-frame__burger">
        <span class="browser-frame__burger-line" />
        <span class="browser-frame__burger-line" />
        <span class="browser-frame__burger-line" />
      </div>
    </div>
    <div class="browser-frame__body" ref="putImageHere"></div>
  </div>
</template>

<script>
export default {
  props: ["src", "url", "alt", "width", "imgElement"],

  mounted() {
        this.$refs.putImageHere.appendChild(this.imgElement.cloneNode());
  }

};
</script>
