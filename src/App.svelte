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
  :global(.card) {
    display: inline-block;
    padding: 1rem 2rem;
    margin: 1rem;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 2px;
    box-shadow: 1px 1px 4px #666;
  }

  .flex-element {
    flex: 1;
    align-self: center;
  }
</style>
