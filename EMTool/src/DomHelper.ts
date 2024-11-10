// Calculates the intersection point on the edge of a rectangle for a line connecting two components
export const calculateEdgeIntersection = (startRect: DOMRect, endRect: DOMRect) => {
    // Center points of start and end rectangles
    const startX = startRect.left + startRect.width / 2;
    const startY = startRect.top + startRect.height / 2;
    const endX = endRect.left + endRect.width / 2;
    const endY = endRect.top + endRect.height / 2;
  
    // Calculate direction vector
    const dx = endX - startX;
    const dy = endY - startY;
  
    // Variables to hold edge points
    let startEdgeX, startEdgeY, endEdgeX, endEdgeY;
  
    // Determine which edge of the startRect to use
    if (Math.abs(dx) > Math.abs(dy)) {
      // Target is more to the left or right than top/bottom
      startEdgeX = dx > 0 ? startRect.right : startRect.left;
      startEdgeY = startY + ((startEdgeX - startX) * dy) / dx;
    } else {
      // Target is more above or below than left/right
      startEdgeY = dy > 0 ? startRect.bottom : startRect.top;
      startEdgeX = startX + ((startEdgeY - startY) * dx) / dy;
    }
  
    // Determine which edge of the endRect to use
    if (Math.abs(dx) > Math.abs(dy)) {
      // Source is more to the left or right than top/bottom
      endEdgeX = dx > 0 ? endRect.left : endRect.right;
      endEdgeY = endY + ((endEdgeX - endX) * dy) / dx;
    } else {
      // Source is more above or below than left/right
      endEdgeY = dy > 0 ? endRect.top : endRect.bottom;
      endEdgeX = endX + ((endEdgeY - endY) * dx) / dy;
    }
  
    return { startEdgeX, startEdgeY, endEdgeX, endEdgeY };
  };
  