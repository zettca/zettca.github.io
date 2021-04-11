<script>
  export let name;
  export let full = false;
  export let center = false;
  export let showTitle = false;

  const id = name.toLowerCase();
</script>

<section {id} {name} class:full class:center>
  {#if showTitle}
    <div class="title">
      <a href="#{id}">{name}</a>
    </div>
  {/if}

  <div class="center">
    <slot />
  </div>
</section>

<style>
  section {
    text-align: center;
  }

  section:nth-child(2n) {
    background: #eee;
  }

  section:nth-child(2n + 1) {
    background: #fafafa;
  }

  .full {
    min-height: 100vh;
  }

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
