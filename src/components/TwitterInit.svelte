<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {
    const post = document.getElementById('post-content');

    if (!post) {
      return;
    }

    // @ts-ignore
    window.twttr.widgets.load(post);
  });
</script>
