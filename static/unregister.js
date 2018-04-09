if (
  window.navigator &&
  window.navigator.serviceWorker &&
  window.navigator.serviceWorker.getRegistrations
) {
  window.navigator.serviceWorker
    .getRegistrations()
    .then(function(registrations) {
      for (var i = 0; i < registrations.length; i += 1) {
        registrations[i].unregister();
      }
    });
}
