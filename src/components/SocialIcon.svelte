<script>
  import SVG from "svelte-inline-svg";

  export let name;
  export let url;
  export let fill;
</script>

<a href={url} class="icon">
  <SVG style="fill: {fill}" src="/img/svg/{name}.svg" />
</a>

<style>
  .icon {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: 0 6px;
  }
</style>
