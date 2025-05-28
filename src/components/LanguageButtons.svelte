<script>
  import { locale, locales } from "../internationalisation/i18n";
</script>

<p>
  {#each locales as l}
    <button 
      on:click={() => $locale = l}
      class:active={$locale === l}
    >
      {l}
    </button>
  {/each}
</p>