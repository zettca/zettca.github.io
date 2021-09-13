<script>
import SVG from "svelte-inline-svg";

export let name;
export let url;
export let fill;
export let text;
</script>

<div class="contact">
  <span class="icon">
    <SVG style="fill: {fill}" src="/img/svg/{name}.svg" />
  </span>
  <a href={url || null} class="text">{text}</a>
</div>

<style>
.contact {
  display: flex;
  align-items: center;
}
.icon {
  margin-right: 6px;
  width: 24px;
  height: 24px;
}
.text {
  font-family: "Lucida Console", "Monaco", monospace;
}

a {
  text-decoration: initial;
}
</style>
