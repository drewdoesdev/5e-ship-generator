<template>
  <div class="selectTemplate">
      <div class="selectTemplate__content">
          <h1 class="selectTemplate__heading">Select a Starting Template</h1>
          <select class="selectTemplate__select">
              <option value="DEF">No Template</option>
              <option value="galley">Galley</option>
              <option value="keelboat">Keelboat</option>
              <option value="longship">Longship</option>
              <option value="sailingShip">Sailing Ship</option>
              <option value="warship">Warship</option>
          </select>
          <button class="selectTemplate__continueButton" @click="handleClick">Continue</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'SelectTemplate',
    methods: {
      handleClick() {
          this.$router.push({ name: 'Stats' });
      }
  }
}
</script>

<style lang="scss" scoped>
.selectTemplate {
    @extend .flex_column--center;
    width: 100%;
    height: 100%;
    background: $ocean-gradient;
    &__content {
        @extend .content_box;
    }
    &__heading {
        color: $black;
        text-align: center;
    }
    &__continueButton {
        @extend .button_primary;
        max-width: 300px;
        margin-top: 1.5rem;
    }
}
</style>