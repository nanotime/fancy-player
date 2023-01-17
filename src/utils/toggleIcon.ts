type Args = {
  target: HTMLElement;
  defaultIcon: string;
  toggleIcon: string;
  condition: boolean;
};

/**
 * Helper function that toggles an icon depending on a condition
 *
 * @export
 * @param {Args} {
 *   target,
 *   defaultIcon,
 *   toggleIcon,
 *   condition,
 * }
 */
export function toggleIcon({
  target,
  defaultIcon,
  toggleIcon,
  condition,
}: Args) {
  // Toggle on condition
  target.innerText = condition ? defaultIcon : toggleIcon;
}
