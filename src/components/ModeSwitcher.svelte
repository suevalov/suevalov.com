<script lang="ts">
  type ThemeType = 'dark' | 'light';

  let currTheme: ThemeType =
    document.documentElement.attributes.getNamedItem('data-theme')?.value ===
    'dark'
      ? 'dark'
      : 'light';

  function toggleTheme() {
    let value = currTheme === 'dark' ? ('light' as const) : ('dark' as const);
    document.dispatchEvent(new CustomEvent('set-theme', { detail: value }));
    currTheme = value;
  }
</script>

<button
  on:click={toggleTheme}
  class="focus-visible:ring-2 ring-theme-primry dark:ring-theme-dark-primary outline-none rounded flex flex-row items-center justify-center"
>
  <slot theme={currTheme} />
</button>
