<script lang="ts">
  let y: number = 0;

  $: isVisible = y > 300;

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
</script>

<svelte:window bind:scrollY={y} />
<div
  class={`fixed bottom-6 right-8 hidden lg:block transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
>
  <button
    on:click={handleClick}
    class="w-8 h-8 rounded-full opacity-60 transition duration-300 bg-theme-primary dark:bg-theme-dark-primary"
  >
    <svg
      class="text-3xl font-light text-theme-background dark:text-theme-dark-background w-8 h-8"
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 40 40"
    >
      <g>
        <path d="m12.3 25.7l-2.3-2.3 10-10 10 10-2.3 2.3-7.7-7.7z"></path>
      </g>
    </svg>
  </button>
</div>
