<script>
  import Section from "./components/Section.svelte";
  import SelfCard from "./components/SelfCard.svelte";
</script>

<main>
  <Section name="Disclaimer">
    <div>websiterino still under constructiorino</div>
    <div>pls no judge です, ありがとうございます</div>
  </Section>
  <Section center full name="Landing">
    <div class="flex-element">
      <SelfCard />
    </div>
  </Section>
</main>

<style>
  :global(:root) {
    /* LIGHT */
    --text1: rgba(0, 0, 0, 0.87);
    --text2: rgba(0, 0, 0, 0.54);
    --divider: rgba(0, 0, 0, 0.12);

    --bg1: #fafafa;
    --bg2: #f0f0f0;
    --paper: #ffffff;
    --shadow: #666666;

    /* DARK */
    --text1: #ffffff;
    --text2: rgba(255, 255, 255, 0.7);
    --divider: rgba(255, 255, 255, 0.12);

    --bg1: #303030;
    --bg2: #363636;
    --paper: #424242;
    --shadow: #222222;

    color: var(--text2);
  }

  :global(.card) {
    display: inline-block;
    padding: 1rem 2rem;
    margin: 1rem;
    background-color: var(--paper);
    border-radius: 2px;
    box-shadow: 1px 1px 4px var(--shadow);
  }

  .flex-element {
    flex: 1;
    align-self: center;
  }
</style>
