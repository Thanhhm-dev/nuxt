<template>
  <section>
    <div class="r">
      <div class="ct text_center">
        <div class="tools">
          <button class="btn btn_success">Start</button>
          <button class="btn btn_primary">Create card</button>
        </div>
      </div>
    </div>
    <hr class="">
    <div class="r">
      <div class="c_3">
        <div class="card">
          <div class="front-card">
            <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="none">
          </div>
          <div class="back-card">
            <h6></h6>
          </div>
        </div>
      </div>
      <div class="c_3">
        <div class="card">
          <div class="front-card">
            <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="none">
          </div>
          <div class="back-card">
            <h6></h6>
          </div>
        </div>
      </div>
      <div class="c_3">
        <div class="card">
          <div class="front-card">
            <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="none">
          </div>
          <div class="back-card">
            <h6></h6>
          </div>
        </div>
      </div>
      <div class="c_3">
        <div class="card">
          <div class="front-card">
            <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="none">
          </div>
          <div class="back-card">
            <h6></h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  validate(content) {
    console.log(content);
    return /^[0-9]{0,9}$/.test(content.params.name);
  }
}
</script>

<style lang="scss">
  section {
    padding-top: 3rem;
    .card {
      padding: 1rem;
      img {
        width: 60%;
      }
    }
  }
</style>
