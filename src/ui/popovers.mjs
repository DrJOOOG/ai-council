export function getPopoverPosition(anchorRect, popoverSize, viewport, margin = 12) {
  const width = Math.min(popoverSize.width, viewport.width - margin * 2);
  const left = Math.min(viewport.width - width - margin, Math.max(margin, anchorRect.right - width));
  let top = anchorRect.top - popoverSize.height - 10;
  if (top < margin) top = anchorRect.bottom + 10;
  return { left, top, width };
}
