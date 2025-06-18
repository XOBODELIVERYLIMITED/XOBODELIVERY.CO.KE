/**
 * Fix for 100vh issue on mobile browsers
 * Sets a CSS variable --vh that can be used instead of vh units
 * Usage: height: 100vh; height: calc(var(--vh, 1vh) * 100);
 */
export function setupViewportHeightFix() {
  // First we get the viewport height and multiply it by 1% to get a value for a vh unit
  const setVh = () => {
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  // Initial call
  setVh();

  // We listen to the resize event
  window.addEventListener('resize', setVh);
  
  // We also listen to orientation changes
  window.addEventListener('orientationchange', () => {
    // Small timeout to ensure the browser has updated the viewport height
    setTimeout(setVh, 100);
  });
}

export default setupViewportHeightFix; 