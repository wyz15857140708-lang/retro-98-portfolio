/**
 * Authentic Windows 98 Pixel-Perfect SVG Icon Set
 * Exactly modeled after Windows 98 SE shell32.dll, mspaint.exe, notepad.exe,
 * winmine.exe, command.com, desk.cpl, sysdm.cpl, and explorer.exe.
 */

// Helper to encode SVG to Data URI
function svgToUri(svgString) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgString.trim())}`;
}

export const win98Icons = {
  // 1. MS Paint (Painter palette with brush and color dots)
  paint: svgToUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
      <!-- Palette wood -->
      <path d="M10 4 h12 v2 h4 v4 h2 v10 h-2 v4 h-4 v2 h-14 v-2 h-4 v-4 h-2 v-12 h2 v-4 h4 v-2 z" fill="#D4A054"/>
      <path d="M10 4 h12 v1 h4 v3 h2 v10 h-1 v4 h-4 v2 h-13 v-1 h-4 v-4 h-2 v-11 h2 v-4 h4 v-1 z" fill="#E8BA76"/>
      <!-- Palette shadow -->
      <path d="M8 24 h14 v2 h-14 z M22 22 h4 v2 h-4 z M26 18 h2 v4 h-2 z" fill="#8C5C1E"/>
      <!-- Thumb hole -->
      <path d="M20 12 h4 v4 h-4 z" fill="#008080"/>
      <path d="M19 11 h1 v6 h-1 z M20 11 h4 v1 h-4 z" fill="#8C5C1E"/>
      <path d="M24 12 h1 v5 h-1 z M20 16 h4 v1 h-4 z" fill="#FFFFFF"/>
      <!-- Paint blobs -->
      <circle cx="9" cy="9" r="2.5" fill="#E70000" stroke="#8C0000" stroke-width="1"/>
      <circle cx="15" cy="8" r="2.5" fill="#00B000" stroke="#005800" stroke-width="1"/>
      <circle cx="9" cy="16" r="2.5" fill="#004CE7" stroke="#00188C" stroke-width="1"/>
      <circle cx="13" cy="21" r="2.5" fill="#FFE700" stroke="#8C7A00" stroke-width="1"/>
      <!-- Paintbrush -->
      <path d="M28 3 l-3 3 l-12 12 l-3 5 l-1 3 l3 -1 l5 -3 l12 -12 l3 -3 z" fill="#703800"/>
      <path d="M26 5 l-12 12 l-1 2 l2 -1 l12 -12 z" fill="#A86820"/>
      <path d="M12 19 l-3 4 l2 2 l4 -3 z" fill="#C0C0C0"/>
      <path d="M9 23 l-2 4 l3 -1 l1 -2 z" fill="#004CE7"/>
      <path d="M7 27 l1 1 l-2 1 z" fill="#E70000"/>
    </svg>
  `),

  // 2. Notepad (Paper sheet with blue header & yellow pencil)
  notepad: svgToUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
      <!-- Shadow -->
      <rect x="7" y="5" width="20" height="24" fill="#808080"/>
      <!-- Pad Base -->
      <rect x="5" y="3" width="20" height="24" fill="#FFFFFF" stroke="#000000" stroke-width="1"/>
      <!-- Blue Top Header Binding -->
      <rect x="5" y="3" width="20" height="5" fill="#000080"/>
      <rect x="6" y="4" width="18" height="1" fill="#0080FF"/>
      <!-- Spiral/Tear notches -->
      <rect x="8" y="2" width="2" height="3" fill="#C0C0C0"/>
      <rect x="13" y="2" width="2" height="3" fill="#C0C0C0"/>
      <rect x="18" y="2" width="2" height="3" fill="#C0C0C0"/>
      <!-- Text Lines -->
      <rect x="8" y="11" width="14" height="1" fill="#808080"/>
      <rect x="8" y="14" width="14" height="1" fill="#808080"/>
      <rect x="8" y="17" width="14" height="1" fill="#808080"/>
      <rect x="8" y="20" width="10" height="1" fill="#808080"/>
      <rect x="8" y="23" width="12" height="1" fill="#808080"/>
      <!-- Pencil across notepad -->
      <path d="M26 14 l-11 11 l-3 3 l-1 2 l3 -1 l3 -3 l11 -11 z" fill="#FFC000"/>
      <path d="M27 13 l-1 -1 l-2 2 l1 1 z" fill="#FF8080"/> <!-- Eraser -->
      <path d="M25 14 l-1 -1 l-1 1 l1 1 z" fill="#C0C0C0"/> <!-- Ferrule -->
      <path d="M12 28 l-2 1 l1 -2 z" fill="#D8A060"/> <!-- Wood tip -->
      <path d="M10 29 l1 -1 l-1 0 z" fill="#000000"/> <!-- Lead -->
    </svg>
  `),

  // 3. Minesweeper (Classic Mine + Flag on 3D button)
  minesweeper: svgToUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
      <!-- 3D Sunken/Raised Tile -->
      <rect x="2" y="2" width="28" height="28" fill="#C0C0C0"/>
      <path d="M2 2 h28 v2 h-26 v26 h-2 z" fill="#FFFFFF"/>
      <path d="M30 2 h-2 v26 h-26 v2 h28 z" fill="#808080"/>
      <path d="M29 3 h-1 v25 h-25 v1 h26 z" fill="#000000"/>
      <!-- Mine Body -->
      <circle cx="16" cy="17" r="7" fill="#000000"/>
      <!-- Spikes -->
      <rect x="15" y="7" width="2" height="20" fill="#000000"/>
      <rect x="6" y="16" width="20" height="2" fill="#000000"/>
      <path d="M9 10 l14 14" stroke="#000000" stroke-width="2"/>
      <path d="M23 10 l-14 14" stroke="#000000" stroke-width="2"/>
      <!-- Mine Highlight -->
      <rect x="13" y="14" width="2" height="2" fill="#FFFFFF"/>
      <!-- Red Flag -->
      <path d="M19 6 l7 4 l-7 4 z" fill="#FF0000"/>
      <rect x="18" y="5" width="2" height="12" fill="#000000"/>
      <rect x="16" y="16" width="6" height="2" fill="#000000"/>
    </svg>
  `),

  // 4. MS-DOS Prompt (Black Monitor with C:\ Prompt)
  dos: svgToUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
      <!-- Outer Monitor Shell -->
      <rect x="3" y="3" width="26" height="22" fill="#C0C0C0" stroke="#000000" stroke-width="1"/>
      <path d="M4 4 h24 v1 h-23 v20 h-1 z" fill="#FFFFFF"/>
      <path d="M28 4 h-1 v20 h-23 v1 h24 z" fill="#808080"/>
      <!-- Screen Bezel -->
      <rect x="6" y="6" width="20" height="15" fill="#000000"/>
      <!-- CRT Prompt Text C:\>_ -->
      <rect x="8" y="9" width="3" height="1" fill="#FFFFFF"/>
      <rect x="8" y="10" width="1" height="3" fill="#FFFFFF"/>
      <rect x="8" y="13" width="3" height="1" fill="#FFFFFF"/>
      <rect x="12" y="10" width="1" height="1" fill="#FFFFFF"/>
      <rect x="12" y="12" width="1" height="1" fill="#FFFFFF"/>
      <rect x="14" y="13" width="1" height="1" fill="#FFFFFF"/>
      <rect x="15" y="11" width="1" height="2" fill="#FFFFFF"/>
      <rect x="16" y="9" width="1" height="2" fill="#FFFFFF"/>
      <rect x="18" y="10" width="1" height="1" fill="#FFFFFF"/>
      <rect x="19" y="11" width="1" height="1" fill="#FFFFFF"/>
      <rect x="18" y="12" width="1" height="1" fill="#FFFFFF"/>
      <rect x="21" y="13" width="3" height="1" fill="#00FF00"/>
      <!-- Base Stand -->
      <rect x="11" y="25" width="10" height="3" fill="#808080" stroke="#000000" stroke-width="1"/>
      <rect x="8" y="28" width="16" height="2" fill="#C0C0C0" stroke="#000000" stroke-width="1"/>
    </svg>
  `),

  // 5. Display Properties / Monitor (Control Panel)
  display: svgToUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
      <!-- CRT Monitor Housing -->
      <rect x="2" y="3" width="28" height="21" fill="#C0C0C0" stroke="#000000" stroke-width="1"/>
      <path d="M3 4 h26 v1 h-25 v19 h-1 z" fill="#FFFFFF"/>
      <path d="M29 4 h-1 v19 h-25 v1 h26 z" fill="#808080"/>
      <!-- Screen -->
      <rect x="5" y="5" width="22" height="16" fill="#008080"/>
      <!-- Mini Windows Logo on Screen -->
      <rect x="10" y="8" width="5" height="4" fill="#FF0000"/>
      <rect x="16" y="8" width="5" height="4" fill="#00FF00"/>
      <rect x="10" y="13" width="5" height="4" fill="#0000FF"/>
      <rect x="16" y="13" width="5" height="4" fill="#FFFF00"/>
      <!-- Monitor Stand -->
      <path d="M12 24 h8 v3 h-8 z" fill="#808080"/>
      <path d="M8 27 h16 v3 h-16 z" fill="#C0C0C0" stroke="#000000" stroke-width="1"/>
      <rect x="9" y="28" width="14" height="1" fill="#FFFFFF"/>
    </svg>
  `),

  // 6. Network Neighborhood / Social Connections (Two networked PCs)
  network: svgToUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
      <!-- PC 1 (Top Left) -->
      <rect x="2" y="3" width="14" height="11" fill="#C0C0C0" stroke="#000000" stroke-width="1"/>
      <rect x="4" y="5" width="10" height="7" fill="#000080"/>
      <rect x="2" y="14" width="14" height="4" fill="#C0C0C0" stroke="#000000" stroke-width="1"/>
      <rect x="11" y="15" width="3" height="1" fill="#000000"/>
      
      <!-- PC 2 (Bottom Right) -->
      <rect x="16" y="13" width="14" height="11" fill="#C0C0C0" stroke="#000000" stroke-width="1"/>
      <rect x="18" y="15" width="10" height="7" fill="#000080"/>
      <rect x="16" y="24" width="14" height="4" fill="#C0C0C0" stroke="#000000" stroke-width="1"/>
      <rect x="25" y="25" width="3" height="1" fill="#000000"/>

      <!-- Connecting Cable -->
      <path d="M9 18 v7 h14 v-1" stroke="#000000" stroke-width="2" fill="none"/>
      <path d="M9 18 v7 h14 v-1" stroke="#FF0000" stroke-width="1" fill="none"/>
    </svg>
  `),

  // 7. Folder / Programs (Classic Yellow 3D folder)
  folder: svgToUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
      <path d="M2 7 h10 l3 3 h15 v16 h-28 z" fill="#D49A36"/>
      <path d="M3 8 h8 l3 3 h14 v1 h-25 z" fill="#FFF280"/>
      <!-- Folder Inside/Front Sheet -->
      <path d="M2 12 h28 v14 h-28 z" fill="#FFC838" stroke="#8C5C00" stroke-width="1"/>
      <path d="M3 13 h26 v1 h-26 z" fill="#FFE878"/>
      <path d="M2 26 h28 v1 h-28 z" fill="#A06A00"/>
    </svg>
  `),

  // 8. Document / Resume (White page with folded corner)
  document: svgToUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
      <path d="M6 3 h13 l7 7 v18 h-20 z" fill="#FFFFFF" stroke="#000000" stroke-width="1"/>
      <path d="M19 3 v7 h7 z" fill="#C0C0C0" stroke="#000000" stroke-width="1"/>
      <path d="M10 13 h12 v1 h-12 z M10 16 h12 v1 h-12 z M10 19 h12 v1 h-12 z M10 22 h8 v1 h-8 z" fill="#000080"/>
    </svg>
  `),

  // 9. Settings / Control Panel (Gears & Tools)
  settings: svgToUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
      <circle cx="16" cy="16" r="10" fill="#808080" stroke="#000000" stroke-width="1"/>
      <circle cx="16" cy="16" r="4" fill="#C0C0C0" stroke="#000000" stroke-width="1"/>
      <path d="M14 3 h4 v4 h-4 z M14 25 h4 v4 h-4 z M3 14 h4 v4 h-4 z M25 14 h4 v4 h-4 z" fill="#808080"/>
      <!-- Screwdriver -->
      <path d="M26 6 l-8 8 l-2 -2 l8 -8 z" fill="#C0C0C0"/>
      <path d="M27 5 l2 -2 l2 2 l-2 2 z" fill="#FF0000"/>
    </svg>
  `),

  // 10. Run (Open Window with Document)
  run: svgToUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
      <rect x="3" y="5" width="26" height="20" fill="#FFFFFF" stroke="#000000" stroke-width="1"/>
      <rect x="3" y="5" width="26" height="5" fill="#000080"/>
      <rect x="6" y="7" width="2" height="2" fill="#FFFFFF"/>
      <path d="M12 14 l8 5 l-8 5 z" fill="#008000" stroke="#000000" stroke-width="1"/>
    </svg>
  `),

  // 11. Shut Down (Computer with red power symbol)
  shutdown: svgToUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
      <rect x="4" y="4" width="24" height="18" fill="#C0C0C0" stroke="#000000" stroke-width="1"/>
      <rect x="7" y="7" width="18" height="12" fill="#000000"/>
      <circle cx="16" cy="13" r="4" fill="none" stroke="#FF0000" stroke-width="2"/>
      <rect x="15" y="8" width="2" height="5" fill="#FF0000"/>
      <rect x="2" y="24" width="28" height="4" fill="#C0C0C0" stroke="#000000" stroke-width="1"/>
      <circle cx="25" cy="26" r="1" fill="#00FF00"/>
    </svg>
  `),

  // 12. Restart (Computer with green circle arrow)
  restart: svgToUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
      <rect x="4" y="4" width="24" height="18" fill="#C0C0C0" stroke="#000000" stroke-width="1"/>
      <rect x="7" y="7" width="18" height="12" fill="#000080"/>
      <path d="M12 13 a4 4 0 1 1 2 3.5" fill="none" stroke="#00FF00" stroke-width="2"/>
      <path d="M14 16.5 l-3 1.5 l0 -3.5 z" fill="#00FF00"/>
      <rect x="2" y="24" width="28" height="4" fill="#C0C0C0" stroke="#000000" stroke-width="1"/>
    </svg>
  `),

  // 13. Help Book
  help: svgToUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
      <rect x="5" y="4" width="22" height="24" fill="#800080" stroke="#000000" stroke-width="1"/>
      <rect x="7" y="6" width="18" height="20" fill="#FFFFFF"/>
      <text x="12" y="21" font-family="'VT323', monospace" font-size="20" font-weight="bold" fill="#000080">?</text>
    </svg>
  `),

  // 14. Printer
  print: svgToUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
      <rect x="8" y="3" width="16" height="8" fill="#FFFFFF" stroke="#000000" stroke-width="1"/>
      <rect x="4" y="10" width="24" height="12" fill="#C0C0C0" stroke="#000000" stroke-width="1"/>
      <rect x="7" y="18" width="18" height="10" fill="#FFFFFF" stroke="#000000" stroke-width="1"/>
      <rect x="24" y="12" width="2" height="2" fill="#00FF00"/>
      <rect x="9" y="21" width="14" height="1" fill="#808080"/>
      <rect x="9" y="24" width="10" height="1" fill="#808080"/>
    </svg>
  `),

  // 15. Floppy Disk (3.5 inch disk)
  floppy: svgToUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
      <path d="M4 3 h20 l4 4 v22 h-24 z" fill="#000080" stroke="#000000" stroke-width="1"/>
      <rect x="8" y="3" width="14" height="9" fill="#FFFFFF"/>
      <rect x="16" y="4" width="4" height="7" fill="#808080"/>
      <rect x="7" y="16" width="18" height="12" fill="#C0C0C0"/>
      <rect x="10" y="18" width="12" height="8" fill="#000000"/>
    </svg>
  `),

  // 16. Hard Drive (Quantum IDE)
  harddrive: svgToUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
      <rect x="3" y="8" width="26" height="16" fill="#C0C0C0" stroke="#000000" stroke-width="1"/>
      <path d="M4 9 h24 v1 h-23 v14 h-1 z" fill="#FFFFFF"/>
      <circle cx="9" cy="16" r="3" fill="#808080" stroke="#000000" stroke-width="1"/>
      <circle cx="23" cy="16" r="1.5" fill="#00FF00"/>
    </svg>
  `),

  // 17. CPU Microprocessor
  cpu: svgToUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
      <rect x="6" y="6" width="20" height="20" fill="#2E4F28" stroke="#000000" stroke-width="1"/>
      <rect x="10" y="10" width="12" height="12" fill="#C0C0C0" stroke="#808080" stroke-width="1"/>
      <path d="M12 12 h8 v8 h-8 z" fill="#D4AF37"/>
      <!-- Pins -->
      <rect x="8" y="2" width="2" height="4" fill="#D4AF37"/>
      <rect x="12" y="2" width="2" height="4" fill="#D4AF37"/>
      <rect x="16" y="2" width="2" height="4" fill="#D4AF37"/>
      <rect x="20" y="2" width="2" height="4" fill="#D4AF37"/>
      <rect x="8" y="26" width="2" height="4" fill="#D4AF37"/>
      <rect x="12" y="26" width="2" height="4" fill="#D4AF37"/>
      <rect x="16" y="26" width="2" height="4" fill="#D4AF37"/>
      <rect x="20" y="26" width="2" height="4" fill="#D4AF37"/>
    </svg>
  `),

  // 18. Sound Card / Speaker
  audio: svgToUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" shape-rendering="crispEdges">
      <path d="M4 11 h6 l8 -6 v22 l-8 -6 h-6 z" fill="#808080" stroke="#000000" stroke-width="1"/>
      <path d="M5 12 h5 l7 -5 v18 l-7 -5 h-5 z" fill="#C0C0C0"/>
      <path d="M22 11 a5 5 0 0 1 0 10" fill="none" stroke="#000080" stroke-width="2"/>
      <path d="M25 8 a9 9 0 0 1 0 16" fill="none" stroke="#000080" stroke-width="2"/>
    </svg>
  `)
};
