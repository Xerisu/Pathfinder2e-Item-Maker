<script lang="ts">
    import { t } from "../internationalisation/i18n.ts";
</script>

<h1>{$t("layout.title", {})}!</h1>
<slot></slot>
<!--<footer><a href="/about">About page</a></footer>-->

<style>
    :global(body) 
    {
        background-color: antiquewhite;
    }
</style>