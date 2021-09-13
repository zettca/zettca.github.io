<script>
  import SocialIcon from "./SocialIcon.svelte";

  const icons = [
    { name: "facebook", fill: "#3B5998", url: "https://facebook.com/zettca" },
    { name: "linkedin", fill: "#0077B5", url: "https://linkedin.com/in/zettca/" },
    { name: "instagram", fill: "#E4405F", url: "https://instagram.com/zettca/" },
    { name: "github", fill: "#181717", url: "https://github.com/zettca" },
    { name: "twitter", fill: "#1DA1F2", url: "https://twitter.com/zettca" },
  ];
</script>

<div id="idCard" class="card">
  <div>
    <div class="portrait">
      <img
        width="128"
        height="128"
        src="https://avatars2.githubusercontent.com/u/638946"
        alt="portrait"
      />
    </div>
    <div class="idCard-content">
      <div class="separator">
        <h1 class="no-separator">Bruno Henriques</h1>
        <div>
          <a href="https://github.com/zettca">zettca</a>
        </div>
      </div>
      <div class="separator">
        <div>UI • UX</div>
        <div>Cybersecurity</div>
        <div>Distributed Systems</div>
      </div>
      <div class="separator">
        <span>JavaScript • Java • Python</span>
      </div>
      <div class="separator dots" />
      <div class="no-separator social-icons">
        {#each icons as icon}
          <SocialIcon {...icon} />
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  #idCard {
    --image-size: 128px;
    --offset: calc(var(--image-size) / 2);
    display: inline-block;
    padding: 0 2rem 1rem;
    margin-top: var(--offset);
  }

  #idCard > div {
    position: relative;
    top: calc(-1 * var(--offset));
    margin-bottom: calc(-1 * var(--offset));
  }

  .portrait {
    overflow: hidden;
    margin: 0 auto 1rem;
    width: var(--image-size);
    height: var(--image-size);
    border-radius: 50%;
    box-shadow: 1px 1px 4px var(--shadow);
  }

  .separator {
    margin-bottom: 1rem;
  }

  .no-separator {
    margin-bottom: 0;
  }

  .dots {
    border-top: 1px dashed var(--divider);
  }

  .social-icons {
    height: 32px;
  }
</style>
