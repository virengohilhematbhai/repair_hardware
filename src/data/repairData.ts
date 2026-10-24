export interface MetricItem {
  value: string;
  label: string;
}

export interface DomainCategory {
  id: string;
  title: string;
  href: string;
  badge: string;
  summary: string;
  keyIssues: string[];
  commonCauses: string;
}

export interface DisplayIssue {
  id: string;
  title: string;
  badge: string;
  severity: "Critical" | "Urgent" | "Moderate" | "Low";
  summary: string;
  primaryCause: string;
  steps: string[];
  quickFixCommand: string;
}

export interface BsodError {
  code: string;
  hex: string;
  severity: "Critical" | "High" | "Moderate";
  cause: string;
  solution: string;
  fixCommand: string;
}

export interface TerminalCommand {
  title: string;
  desc: string;
  cmd: string;
}

export interface BeepCode {
  code: string;
  bios: string;
  fault: string;
  severity: "Critical" | "High" | "Emergency";
  symptom: string;
  remedy: string[];
}

export interface ThermalThreshold {
  state: string;
  temp: string;
  status: string;
  color: string;
  notes: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ValueItem {
  title: string;
  desc: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  desc: string;
}

export interface ProblemGuide {
  id: string;
  category: "DISPLAY PROBLEMS" | "HARDWARE PROBLEMS" | "SOFTWARE PROBLEMS";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  title: string;
  description: string;
  timeToFix: string;
  iconName: string;
  symptoms: string[];
  rootCause: string;
  steps: string[];
  commandOrShortcut?: string;
  preventionTip?: string;
  youtubeUrl?: string;
  youtubeId?: string;
  youtubeTitle?: string;
}

// ==========================================
// 1. PLATFORM METRICS
// ==========================================
export const metricsData: MetricItem[] = [
  {
    value: "18K+",
    label: "Devices restored",
  },
  {
    value: "99.2%",
    label: "Resolution rate",
  },
  {
    value: "40m",
    label: "Diagnostic turnaround",
  },
  {
    value: "24/7",
    label: "AI System telemetry",
  },
];

// ==========================================
// 2. DOMAIN CATEGORIES
// ==========================================
export const domainCategories: DomainCategory[] = [
  {
    id: "display-problems",
    title: "Display Problems",
    href: "/display-problems",
    badge: "Signal & GPU",
    summary:
      "Display issues occur when the visual output between your graphics card and monitor fails to render or synchronize properly.",
    keyIssues: [
      "Black screen on power-up with monitor standby",
      "Screen flickering & horizontal scan lines",
      "GPU artifacting & HDMI/DP handshakes",
      "Mismatched refresh rates & tearing",
    ],
    commonCauses:
      "Cables plugged into motherboard instead of discrete GPU, unseated PCIe graphics cards, and outdated display adapters.",
  },
  {
    id: "software-problems",
    title: "Software Problems",
    href: "/software-problems",
    badge: "OS & Kernel",
    summary:
      "Software bottlenecks originate within the operating system, corrupt device drivers, background processes, or damaged system libraries.",
    keyIssues: [
      "Blue Screen of Death (BSOD) stop code crashes",
      "100% Disk usage & boot loop crashes",
      "Corrupted Windows system files (SFC/DISM)",
      "Conflicting device driver updates",
    ],
    commonCauses:
      "Corrupted Windows system files, conflicting updates, missing WHQL driver signatures, and unoptimized virtual memory paging.",
  },
  {
    id: "hardware-problems",
    title: "Hardware Problems",
    href: "/hardware-problems",
    badge: "Physical & POST",
    summary:
      "Hardware failures occur when physical components inside your computer become unseated, gather dust, overheat, or degrade over time.",
    keyIssues: [
      "Motherboard POST beep code errors",
      "RAM gold pin oxidation & memory seating",
      "CPU thermal throttling & dry thermal paste",
      "Power supply rail drops & capacitor bulge",
    ],
    commonCauses:
      "Oxidized RAM gold contacts, thick dust mats inside exhaust heatsinks, dry thermal interface material, and loose power connectors.",
  },
];

// ==========================================
// 3. DISPLAY ISSUES
// ==========================================
export const displayIssuesData: DisplayIssue[] = [
  {
    id: "black-screen",
    title: "Black Screen on Boot (No Signal Detected)",
    badge: "High Frequency",
    severity: "Critical",
    summary:
      "The computer turns on, fans spin, but the monitor displays 'No Signal' or enters standby mode immediately.",
    primaryCause:
      "Display cable plugged into motherboard instead of discrete GPU, or loose PCIe power.",
    steps: [
      "Verify the HDMI / DisplayPort cable is firmly seated into the horizontal GPU bracket on the back of the case, NOT the vertical motherboard ports.",
      "Press 'Win + Ctrl + Shift + B' on Windows to force an immediate graphics driver reset (you will hear a system beep).",
      "Reseat the GPU: Power off completely, disconnect the power supply cord, unclip the PCIe lock, pull the graphics card out, and firmly snap it back in.",
      "Test with a different display cable (HDMI or DP) and verify the monitor source input setting matches the connected port.",
    ],
    quickFixCommand: "Win + Ctrl + Shift + B (Restart GPU Driver Subsystem)",
  },
  {
    id: "flicker",
    title: "Screen Flickering & Horizontal Lines",
    badge: "Signal Noise",
    severity: "Moderate",
    summary:
      "Rapid flashing, intermittent blackouts, or lines running horizontally across the display during desktop use.",
    primaryCause:
      "Mismatched refresh rate, corrupted graphics driver, or unshielded cable electromagnetic interference.",
    steps: [
      "Right-click desktop → Display Settings → Advanced display → Adjust refresh rate down to 60Hz to test stability.",
      "Disable hardware acceleration in Chrome/Edge (Settings → System → Use graphics acceleration).",
      "Perform a clean install of NVIDIA / AMD / Intel drivers without GeForce Experience bloatware.",
      "Swap low-quality HDMI cables with a certified High-Speed HDMI 2.1 or VESA-certified DisplayPort 1.4 cable.",
    ],
    quickFixCommand: "devmgmt.msc → Display Adapters → Update / Roll Back Driver",
  },
  {
    id: "artifacting",
    title: "GPU Artifacting & 3D Polygon Glitches",
    badge: "VRAM Warning",
    severity: "Urgent",
    summary:
      "Checkerboard patterns, green or pink pixel blocks, and geometric stretching across games or video playback.",
    primaryCause:
      "VRAM overheating, unstable GPU clock frequency, or failing silicon solder joints.",
    steps: [
      "Monitor GPU memory junction temperature using HWInfo64 or MSI Afterburner (keep VRAM below 95°C).",
      "Underclock the GPU core clock by -50MHz and Memory clock by -100MHz using MSI Afterburner to stabilize.",
      "Blow compressed air through the GPU cooling fins to dislodge trapped dust blankets.",
      "If artifacts persist in BIOS / Safe Mode, the GPU VRAM has sustained physical hardware degradation.",
    ],
    quickFixCommand: "MSI Afterburner: -50MHz Core Clock / -100MHz VRAM Clock",
  },
  {
    id: "resolution",
    title: "Stuck in 1024x768 / Native Resolution Missing",
    badge: "EDID Handshake",
    severity: "Low",
    summary:
      "Windows cannot recognize the monitor's native 1080p, 1440p, or 4K resolution and falls back to low-res basic display.",
    primaryCause:
      "Missing vendor monitor driver, corrupt EDID handshake, or Windows Generic PnP fallback.",
    steps: [
      "Open Device Manager → Expand 'Monitors' → Right-click 'Generic PnP Monitor' → Uninstall device → Scan for hardware changes.",
      "Download your monitor's specific color profile and driver from the manufacturer's support site (LG, Dell, ASUS).",
      "Unplug the monitor's power cord from the electrical wall outlet for 60 seconds to discharge the internal EDID memory chip.",
      "Re-enable DSC (Display Stream Compression) in the monitor's on-screen physical menu if running 4K 144Hz.",
    ],
    quickFixCommand: "devmgmt.msc → Uninstall Generic PnP Monitor → Action → Scan",
  },
];

// ==========================================
// 4. SOFTWARE BSOD STOP CODES
// ==========================================
export const bsodErrorsData: BsodError[] = [
  {
    code: "IRQL_NOT_LESS_OR_EQUAL",
    hex: "0x0000000A",
    severity: "High",
    cause:
      "A kernel-mode driver attempted to access pageable memory at an invalid interrupt request level (IRQL).",
    solution:
      "Roll back recently updated device drivers (specifically GPU or Wi-Fi network adapter). Run Windows Memory Diagnostic.",
    fixCommand: "mdsched.exe",
  },
  {
    code: "CRITICAL_PROCESS_DIED",
    hex: "0x000000EF",
    severity: "Critical",
    cause:
      "A vital system background process (such as csrss.exe or wininit.exe) unexpectedly terminated.",
    solution:
      "Corrupted system files. Boot into Safe Mode and execute DISM health restore followed by System File Checker.",
    fixCommand: "DISM /Online /Cleanup-Image /RestoreHealth",
  },
  {
    code: "WHEA_UNCORRECTABLE_ERROR",
    hex: "0x00000124",
    severity: "Critical",
    cause:
      "Windows Hardware Error Architecture detected an unrecoverable physical hardware fault (usually CPU voltage or heat).",
    solution:
      "Disable CPU/RAM overclocking (XMP/EXPO) in BIOS. Check CPU thermal paste and ensure heatsink is making flat contact.",
    fixCommand: "Enter BIOS → Load Optimized Defaults (F5 / F9)",
  },
  {
    code: "PAGE_FAULT_IN_NONPAGED_AREA",
    hex: "0x00000050",
    severity: "High",
    cause:
      "Requested data was not present in memory. Often caused by failing RAM modules or an unstable pagefile.",
    solution:
      "Run MemTest86 or test one RAM stick at a time. Re-enable system-managed virtual memory paging in Advanced System Settings.",
    fixCommand: "chkdsk C: /f /r",
  },
  {
    code: "SYSTEM_SERVICE_EXCEPTION",
    hex: "0x0000003B",
    severity: "Moderate",
    cause:
      "An unhandled exception occurred while executing a system routine from a user-mode driver.",
    solution:
      "Inspect the file name indicated on the blue screen (e.g., nvlddmkm.sys for NVIDIA, amdkmdag.sys for AMD). Reinstall driver.",
    fixCommand: "dxdiag",
  },
];

// ==========================================
// 5. TERMINAL COMMANDS
// ==========================================
export const terminalCommandsData: TerminalCommand[] = [
  {
    title: "System File Checker (SFC)",
    desc: "Scans integrity of all protected operating system files and repairs corrupt versions.",
    cmd: "sfc /scannow",
  },
  {
    title: "DISM Image Component Cleanup",
    desc: "Connects to Windows Update servers to download clean copies of corrupt system components.",
    cmd: "DISM /Online /Cleanup-Image /RestoreHealth",
  },
  {
    title: "Check Disk File System Scan",
    desc: "Locates bad sectors on your primary SSD/HDD and recovers readable metadata.",
    cmd: "chkdsk C: /f /r",
  },
  {
    title: "Winsock Network Reset",
    desc: "Clears corrupt TCP/IP network catalog entries that cause browser disconnects.",
    cmd: "netsh winsock reset",
  },
];

// ==========================================
// 6. HARDWARE BEEP CODES
// ==========================================
export const beepCodesData: BeepCode[] = [
  {
    code: "1 Long Beep, Repeating",
    bios: "AMI / Phoenix BIOS",
    fault: "Memory (RAM) Initialization Failure",
    severity: "High",
    symptom:
      "Fans turn on, power LED lights up, but screen remains pitch black with repetitive long beeps.",
    remedy: [
      "Completely shut down system and unplug the AC power cord from the wall outlet.",
      "Unclip the RAM locking tabs at both ends of the memory slots.",
      "Remove RAM sticks and gently polish the gold contacts using a soft pencil eraser or 99% isopropyl alcohol.",
      "Firmly press RAM back into DIMM slots 2 and 4 until both side clips click inward automatically.",
    ],
  },
  {
    code: "1 Long, 2 Short Beeps",
    bios: "Award / AMI BIOS",
    fault: "Graphics Card (GPU) Failure / Unseated Card",
    severity: "Critical",
    symptom:
      "Motherboard POST cannot communicate with the discrete PCIe graphics card.",
    remedy: [
      "Verify all 6-pin or 8-pin PCIe power cables are pushed firmly into the GPU until the clip snaps.",
      "Unscrew the rear bracket and remove the graphics card. Inspect the PCIe slot for dust or broken pins.",
      "Reseat the GPU into the top PCIe x16 slot and re-tighten the bracket screws to eliminate GPU sag.",
      "If your CPU has integrated graphics, remove the GPU and plug the display cable directly into the motherboard.",
    ],
  },
  {
    code: "5 Short Beeps",
    bios: "AMI BIOS",
    fault: "Processor (CPU) General Malfunction",
    severity: "Critical",
    symptom:
      "The CPU cannot initialize internal registers during early boot POST stages.",
    remedy: [
      "Check that the 4-pin or 8-pin CPU 12V EPS power cable (top left of motherboard) is connected.",
      "Carefully unmount the CPU cooler and inspect for bent socket pins (LGA) or bent processor pins (AM4).",
      "Clear CMOS by removing the coin-cell CR2032 battery for 5 minutes with the power cord unplugged.",
    ],
  },
  {
    code: "Continuous Rapid Beeping",
    bios: "General ATX",
    fault: "Power Supply Unit (PSU) Voltage Instability / Short",
    severity: "Emergency",
    symptom:
      "Power supply clicks or beeps and immediately cuts power to prevent fire or component blowout.",
    remedy: [
      "Unplug all non-essential USB devices, external drives, and LED strips.",
      "Inspect motherboard standoff screws inside the case to ensure the back of the PCB is not touching bare metal.",
      "Test power supply rails with a dedicated digital PSU tester or try a known working power supply.",
    ],
  },
];

// ==========================================
// 7. THERMAL THRESHOLDS
// ==========================================
export const thermalThresholdsData: ThermalThreshold[] = [
  {
    state: "System Idle",
    temp: "35°C – 48°C",
    status: "Optimal Cooling",
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    notes: "Fans should operate at quiet low RPM with pump running normally.",
  },
  {
    state: "Gaming / Render Load",
    temp: "65°C – 82°C",
    status: "Safe Operating Limit",
    color: "text-blue-600 bg-blue-50 border-blue-200",
    notes: "Normal sustained temperature under modern multithreaded workloads.",
  },
  {
    state: "Thermal Throttling",
    temp: "95°C – 105°C",
    status: "Critical Danger",
    color: "text-rose-600 bg-rose-50 border-rose-200",
    notes:
      "CPU/GPU reduces clock speed to prevent physical silicon melting. Immediate service needed.",
  },
];

// ==========================================
// 8. FAQS & VALUES
// ==========================================
export const faqsData: FaqItem[] = [
  {
    q: "Is the diagnostic service completely free?",
    a: "Yes! All browser-based diagnostic tools, step-by-step guides, and initial telemetry analyses on HW Nexus are 100% free with no registration required.",
  },
  {
    q: "How fast do technicians respond to urgent tickets?",
    a: "Our priority support team reviews critical hardware and software emergencies within 15–30 minutes during laboratory hours.",
  },
  {
    q: "Can I get assistance for custom-built desktop PCs?",
    a: "Absolutely. We specialize in custom PC builds, motherboard POST beep codes, overclocking instability, and liquid cooling loop troubleshooting.",
  },
  {
    q: "Do you offer remote desktop troubleshooting sessions?",
    a: "Yes, for software crashes, BSOD analysis, and driver corruptions, our certified technicians can schedule an encrypted remote diagnostics session.",
  },
];

export const valuesData: ValueItem[] = [
  {
    title: "No Technical Jargon",
    desc: "We translate obscure hex codes and register crash dumps into plain, understandable instructions anyone can follow safely.",
  },
  {
    title: "Non-Destructive First",
    desc: "We always test harmless software repairs (driver resets, DISM commands) before asking you to open hardware panels.",
  },
  {
    title: "Isolated Problem Domains",
    desc: "Our platform categorizes issues strictly by Display, Software, and Hardware to eliminate confusion and wrong fixes.",
  },
  {
    title: "100% Free & Open Access",
    desc: "All diagnostic tools, guides, and tutorials run client-side in your web browser with zero subscriptions or paywalls.",
  },
];

export const workflowStepsData: WorkflowStep[] = [
  {
    step: "01",
    title: "Observe Symptoms",
    desc: "Carefully note exact error codes, monitor status lights, beep patterns, or the specific action that triggered the crash.",
  },
  {
    step: "02",
    title: "Isolate Domain",
    desc: "Determine whether the failure is hardware (physical cables, RAM, thermals) or software (drivers, operating system updates).",
  },
  {
    step: "03",
    title: "Apply Non-Destructive Fix",
    desc: "Always start with harmless software checks (SFC scan, driver rollbacks) before opening computer cases or buying replacement parts.",
  },
  {
    step: "04",
    title: "Verify & Maintain",
    desc: "Run memory diagnostics and stress tests to confirm stability, and schedule periodic dust cleaning every 6 months.",
  },
];

// ==========================================
// 9. DISPLAY PROBLEM GUIDES (12 Detailed Guides)
// ==========================================
export const displayGuidesData: ProblemGuide[] = [
  {
    id: "disp-1",
    category: "DISPLAY PROBLEMS",
    difficulty: "Beginner",
    title: "Brightness Control Not Working",
    description: "Restore the brightness slider and Fn shortcut keys when laptop or monitor brightness refuses to change.",
    timeToFix: "10 mins",
    iconName: "Sun",
    symptoms: [
      "Brightness slider in Windows Action Center is grayed out or missing",
      "Fn + Brightness keyboard keys show on-screen bar but level stays constant",
      "Screen is permanently stuck at 100% or minimum dimness",
    ],
    rootCause: "Generic PnP Monitor device driver disabled, missing OEM hotkey service, or outdated integrated GPU graphics driver.",
    steps: [
      "Press Win + X and select 'Device Manager'.",
      "Expand the 'Monitors' section, right-click 'Generic PnP Monitor' (or OEM monitor) and click 'Enable device' if it has a down-arrow.",
      "Expand 'Display adapters', right-click your integrated graphics (Intel Iris Xe / AMD Radeon Graphics), and click 'Update driver' → 'Search automatically'.",
      "If the issue persists, open Registry Editor (regedit), navigate to HKLM\\SYSTEM\\ControlSet001\\Control\\Class\\{4d36e968-e325-11ce-bfc1-08002be10318}\\0000 and change 'FeatureTestControl' value to ffff.",
      "Restart your computer to restore adaptive brightness and slider controls.",
    ],
    commandOrShortcut: "devmgmt.msc",
    preventionTip: "Avoid third-party brightness dimming overlay apps that interfere with Windows DDC/CI monitor communication.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20Brightness%20Control%20Not%20Working%20tutorial",
    youtubeId: "F3xK8vO2u3E",
    youtubeTitle: "How to Fix Brightness Slider Not Working in Windows 11 / 10",
  },
  {
    id: "disp-2",
    category: "DISPLAY PROBLEMS",
    difficulty: "Beginner",
    title: "Computer Black Screen",
    description: "Diagnose and fix a computer that powers on but displays a completely black or blank monitor screen.",
    timeToFix: "15 mins",
    iconName: "Monitor",
    symptoms: [
      "PC case fans spin and RGB lights turn on, but monitor says 'No Signal'",
      "Monitor power LED turns amber / enters standby immediately",
      "Caps Lock key toggles on keyboard, confirming Windows is booting in background",
    ],
    rootCause: "Monitor video cable plugged into the motherboard backplate instead of discrete GPU, loose PCIe power connection, or sleeping display driver.",
    steps: [
      "Press the emergency graphics driver reset shortcut: Win + Ctrl + Shift + B (you will hear a short beep and the screen will flicker).",
      "Inspect the back of your desktop PC case: Ensure HDMI or DisplayPort is connected to the horizontal GPU port, NOT the vertical motherboard port.",
      "Check the monitor source menu (OSD) with the physical buttons and manually switch to HDMI 1, HDMI 2, or DisplayPort.",
      "Perform a full flea-power discharge: Shut down PC, unplug wall cord, hold power button for 20 seconds, reconnect and power on.",
      "Reseat the graphics card in the PCIe slot and ensure all 6-pin/8-pin power cables are fully clicked in.",
    ],
    commandOrShortcut: "Win + Ctrl + Shift + B",
    preventionTip: "Never use cheap passive VGA-to-HDMI adapters; always use active certified converters.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20Computer%20Black%20Screen%20tutorial",
    youtubeId: "wN4-HnL0vK8",
    youtubeTitle: "How to Fix Computer Turns On But No Display On Screen",
  },
  {
    id: "disp-3",
    category: "DISPLAY PROBLEMS",
    difficulty: "Intermediate",
    title: "Display Driver Error",
    description: "Solve 'Display driver stopped responding and has recovered' warnings and nvlddmkm.sys crashes.",
    timeToFix: "20 mins",
    iconName: "AlertTriangle",
    symptoms: [
      "Screen freezes for 3 seconds, goes black, then desktop reappears with notification",
      "Game crashes to desktop with nvlddmkm.sys or amdkmdag.sys error in Event Viewer",
      "DirectX / Vulkan initialization device loss error",
    ],
    rootCause: "Windows TDR (Timeout Detection and Recovery) delay exceeded due to GPU driver crash, corrupted shader cache, or unstable GPU factory overclock.",
    steps: [
      "Download Display Driver Uninstaller (DDU) and the latest WHQL driver package from NVIDIA/AMD.",
      "Reboot Windows into Safe Mode (Shift + Restart → Troubleshoot → Advanced → Startup Settings → 4).",
      "Launch DDU, select GPU, and click 'Clean and Restart' to completely purge old driver hooks and registry entries.",
      "Install the freshly downloaded driver package choosing 'Custom Installation' and checking 'Perform a clean installation'.",
      "Increase Windows TDR delay: In regedit, navigate to HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers, create DWORD 'TdrDelay', and set value to 8.",
    ],
    commandOrShortcut: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers" /v TdrDelay /t REG_DWORD /d 8 /f',
    preventionTip: "Use Studio Drivers instead of Game Ready drivers if you prioritize absolute rock-solid system stability for work.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20Display%20Driver%20Error%20tutorial",
    youtubeId: "kY31Wn6Ghy8",
    youtubeTitle: "How to Fix Display Driver Stopped Responding and Has Recovered",
  },
  {
    id: "disp-4",
    category: "DISPLAY PROBLEMS",
    difficulty: "Beginner",
    title: "External Monitor Not Detected",
    description: "Get secondary dual-monitor setups, docking stations, or USB-C display adapters recognized in Windows.",
    timeToFix: "10 mins",
    iconName: "Laptop",
    symptoms: [
      "Second monitor remains dark and Windows Display Settings says 'Didn't detect another display'",
      "USB-C hub HDMI port produces no video signal",
      "Monitor briefly flashes upon plug-in but disconnects instantly",
    ],
    rootCause: "Windows projection mode set to 'PC screen only', USB-C port lacks DP Alt Mode support, or docking station handshake cache lock.",
    steps: [
      "Press Win + P and select 'Extend' to ensure Windows is broadcasting to secondary displays.",
      "Open Settings → System → Display → Multiple displays → Click the 'Detect' button.",
      "Power cycle the external monitor: Unplug its power brick from the wall socket for 30 seconds to reset its internal scaler chip.",
      "Verify your laptop's USB-C port has a 'D' (DisplayPort) or lightning bolt icon indicating video output capability.",
      "Update Intel Thunderbolt or USB4 host controller drivers via Device Manager.",
    ],
    commandOrShortcut: "Win + P (Select Extend)",
    preventionTip: "Always plug dual high-resolution monitors directly into dedicated GPU ports rather than sharing a single unpowered hub.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20External%20Monitor%20Not%20Detected%20tutorial",
    youtubeId: "J9H7J_sT6c0",
    youtubeTitle: "Fix Windows 11 Not Detecting Second External Monitor",
  },
  {
    id: "disp-5",
    category: "DISPLAY PROBLEMS",
    difficulty: "Intermediate",
    title: "Horizontal or Vertical Lines on Screen",
    description: "Identify whether colored horizontal or vertical lines are caused by cables, GPU artifacts, or damaged LCDs.",
    timeToFix: "15 mins",
    iconName: "Layers",
    symptoms: [
      "Single solid green, magenta, or white vertical line spanning entire screen",
      "Flickering horizontal scanlines across bottom 2 inches of monitor",
      "Lines change position when pressing gently on monitor bottom bezel",
    ],
    rootCause: "Defective monitor T-Con board or LCD gate driver tab bonding failure, pin damage in video cable, or failing GPU VRAM solder ball.",
    steps: [
      "Test in Motherboard BIOS: Restart PC and press Del or F2. If the lines are still visible in BIOS screen, the problem is 100% hardware (cable or monitor panel).",
      "If lines only appear inside Windows desktop, lower refresh rate from 144Hz/240Hz to 60Hz in Display Settings → Advanced display.",
      "Swap display cable: Replace HDMI/DisplayPort cable with a VESA-certified 8K rated shielded cable.",
      "Gently inspect the monitor panel: If line shifts with subtle pressure along bezel edges, the COF (Chip on Film) tab bonding has failed and panel requires replacement.",
    ],
    commandOrShortcut: "ms-settings:display-advanced",
    preventionTip: "Never spray cleaning fluid directly onto monitor screens as liquid seeps into bottom bezel driver boards.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20Horizontal%20or%20Vertical%20Lines%20on%20Screen%20tutorial",
    youtubeId: "e1A9qU6A7aU",
    youtubeTitle: "How to Fix Horizontal or Vertical Lines on Laptop & PC Screen",
  },
  {
    id: "disp-6",
    category: "DISPLAY PROBLEMS",
    difficulty: "Beginner",
    title: "Incorrect Display Scaling",
    description: "Fix oversized or blurry text, distorted UI elements, and mismatched multi-monitor DPI scaling.",
    timeToFix: "10 mins",
    iconName: "Maximize",
    symptoms: [
      "Text and icons appear huge, blurry, or fuzzy on high-resolution 1440p / 4K screen",
      "Windows dialog boxes render off-screen or cut off button controls",
      "Moving windows between primary 4K screen and 1080p secondary screen causes sudden size jump",
    ],
    rootCause: "Windows DPI virtualization scaling mismatch across multiple monitors with differing pixel densities.",
    steps: [
      "Right-click desktop → 'Display settings' → Select the affected monitor.",
      "Under 'Scale & layout', set Scale to recommended percentage (typically 100% or 125% for 1440p, 150% for 4K).",
      "Click 'Advanced scaling settings' and enable 'Let Windows try to fix apps so they're not blurry'.",
      "For individual blurry legacy apps: Right-click app shortcut → Properties → Compatibility → 'Change high DPI settings' → Check 'Override high DPI scaling' → Choose 'Application'.",
      "Sign out of Windows and sign back in to force a complete desktop UI vector redraw.",
    ],
    commandOrShortcut: "ms-settings:display",
    preventionTip: "Keep all monitors in multi-screen setups at matching or integer-ratio scaling factors for seamless cursor transitions.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20Incorrect%20Display%20Scaling%20tutorial",
    youtubeId: "UqQY9b1LqE4",
    youtubeTitle: "How to Fix Blurry Apps and Resolution Scaling in Windows 11",
  },
  {
    id: "disp-7",
    category: "DISPLAY PROBLEMS",
    difficulty: "Intermediate",
    title: "Screen Flickering at High Refresh Rates",
    description: "Eliminate rapid black frame dropouts and micro-stutters when running 144Hz, 165Hz, or 240Hz monitors.",
    timeToFix: "15 mins",
    iconName: "RefreshCw",
    symptoms: [
      "Screen goes black for 1–2 seconds randomly during gaming or web scrolling",
      "Rapid flashing brightness when G-Sync or FreeSync is enabled in menu",
      "Monitor drops down to 60Hz automatically after sleep",
    ],
    rootCause: "DisplayPort cable bandwidth limitation (failing HBR3 / DSC signal integrity) or variable refresh rate (VRR) brightness flickering below minimum LFC range.",
    steps: [
      "Open NVIDIA Control Panel or AMD Adrenalin software and toggle G-Sync/FreeSync off to test if flicker stops.",
      "In monitor physical OSD menu, verify DisplayPort version is set to DP 1.4 + DSC rather than legacy DP 1.1 / 1.2.",
      "Replace cable with a VESA certified DP8K DisplayPort cable under 2 meters in length.",
      "Disable 'Multi-Plane Overlay' (MPO) in Windows by running the official Microsoft MPO disable registry fix.",
    ],
    commandOrShortcut: "ms-settings:display-advanced",
    preventionTip: "Never use DisplayPort cables longer than 2 meters without an active signal repeater for high-refresh rates.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20Screen%20Flickering%20at%20High%20Refresh%20Rates%20tutorial",
    youtubeId: "7h2p3h-V3gQ",
    youtubeTitle: "How to Fix Monitor Screen Flickering on Windows 11 & 10",
  },
  {
    id: "disp-8",
    category: "DISPLAY PROBLEMS",
    difficulty: "Advanced",
    title: "GPU Artifacting & 3D Glitches",
    description: "Diagnose geometric tearing, multicolored checkerboard patterns, and VRAM stability degradation.",
    timeToFix: "25 mins",
    iconName: "Layers",
    symptoms: [
      "Pink, green, or yellow squares appear across the desktop wallpaper",
      "3D polygons in games stretch into infinite spikes across the screen",
      "PC locks up with video TDR error when launching any 3D benchmark",
    ],
    rootCause: "Overheating GDDR6/GDDR6X VRAM microchips, memory clock degradation, or cracked BGA solder joints on the graphics card substrate.",
    steps: [
      "Launch HWInfo64 and check 'GPU Memory Junction Temperature'. If it exceeds 100°C, the thermal pads have dried out.",
      "Download MSI Afterburner and reduce 'Memory Clock (MHz)' by -200MHz and 'Core Clock' by -100MHz to test stability.",
      "Blow compressed air through GPU heatsink fins to dislodge insulating dust blocks.",
      "If artifacts appear during motherboard POST / BIOS boot screen, the GPU hardware requires professional micro-soldering / reballing.",
    ],
    commandOrShortcut: "nvidia-smi -q -d TEMPERATURE",
    preventionTip: "Clean computer dust filters every 3 months to prevent VRAM thermal pad baking.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20GPU%20Artifacting%20%26%203D%20Glitches%20tutorial",
    youtubeId: "RkP-jJv767M",
    youtubeTitle: "Diagnosing & Fixing GPU Artifacting, VRAM Faults and Glitches",
  },
  {
    id: "disp-9",
    category: "DISPLAY PROBLEMS",
    difficulty: "Beginner",
    title: "No Signal on HDMI or DisplayPort",
    description: "Fix persistent 'No Cable Connected' and 'No Signal' errors on monitors despite working PC power.",
    timeToFix: "10 mins",
    iconName: "Zap",
    symptoms: [
      "Monitor display cycling through HDMI 1, HDMI 2, DP and then turning off",
      "PC sounds Windows startup chime through speakers but screen has zero video",
      "HDMI cable works on console but fails on PC",
    ],
    rootCause: "Monitor stuck in deep power sleep state, corrupted EDID handshake, or bent pin inside HDMI connector.",
    steps: [
      "Unplug the monitor's power cable from wall for 60 seconds to completely discharge monitor internal logic board.",
      "Disconnect all other display cables and connect only ONE monitor with a known-good HDMI cable.",
      "Inspect HDMI / DP cable connectors on both ends for bent or recessed gold contact pins.",
      "Try connecting via alternate port on GPU (switch from HDMI to DisplayPort or vice versa).",
    ],
    commandOrShortcut: "Win + Ctrl + Shift + B",
    preventionTip: "Always turn off monitor power before plugging or unplugging high-bandwidth DisplayPort cables.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20No%20Signal%20on%20HDMI%20or%20DisplayPort%20tutorial",
    youtubeId: "H7BsqzP7Vf8",
    youtubeTitle: "Monitor Says No Signal - HDMI / DisplayPort Quick Troubleshooting",
  },
  {
    id: "disp-10",
    category: "DISPLAY PROBLEMS",
    difficulty: "Beginner",
    title: "HDR Colors Washed Out & Gray",
    description: "Correct dull, low-contrast, faded desktop colors when enabling High Dynamic Range in Windows.",
    timeToFix: "10 mins",
    iconName: "Sun",
    symptoms: [
      "Colors look gray, washed out, and less vibrant than SDR mode",
      "White backgrounds look blinding or yellowish-gray",
      "Dark scenes in videos appear muddy with elevated black levels",
    ],
    rootCause: "Windows HDR tone mapping mismatch with monitor DisplayHDR certification level and SDR Content Brightness slider set incorrectly.",
    steps: [
      "Download the official 'Windows HDR Calibration' app from Microsoft Store and run the 3-step luminance calibration.",
      "Open Settings → System → Display → HDR → Adjust 'SDR content brightness' slider to 40–50% to prevent overexposure.",
      "In monitor physical OSD menu, ensure HDR mode is set to 'Auto' or 'DisplayHDR' instead of emulated HDR.",
      "In GPU Control Panel, set Output Color Format to RGB and Output Color Depth to 10-bit (bpc).",
    ],
    commandOrShortcut: "ms-settings:display",
    preventionTip: "Only enable Windows HDR on monitors featuring local dimming or true DisplayHDR 600/1000/OLED panels.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20HDR%20Colors%20Washed%20Out%20%26%20Gray%20tutorial",
    youtubeId: "b4N8eX7Q9iI",
    youtubeTitle: "Fix Windows 11 HDR Washed Out Dull Gray Colors Tutorial",
  },
  {
    id: "disp-11",
    category: "DISPLAY PROBLEMS",
    difficulty: "Intermediate",
    title: "Dual Monitor Cursor Stutter",
    description: "Resolve lagging mouse cursor and stuttering desktop animation on mixed 60Hz and 144Hz setups.",
    timeToFix: "15 mins",
    iconName: "Clock",
    symptoms: [
      "Primary 144Hz monitor drops down to 60Hz feeling whenever video plays on secondary monitor",
      "Mouse cursor lags and skips frames when dragging windows between displays",
      "Hardware-accelerated apps like Discord or Spotify stutter when gaming",
    ],
    rootCause: "Desktop Window Manager (DWM) frame syncing conflicts between asynchronous refresh rates.",
    steps: [
      "Turn on 'Hardware-accelerated GPU scheduling' (HAGS) in Windows: Settings → System → Display → Graphics → Default graphics settings.",
      "In Discord / Chrome / Spotify, disable Hardware Acceleration in their respective settings menus.",
      "Set your 144Hz monitor to 120Hz (an exact integer multiple of 60Hz) to allow DWM to synchronize frame intervals smoothly.",
      "Ensure both monitors are plugged into the discrete GPU, not one into GPU and one into motherboard.",
    ],
    commandOrShortcut: "ms-settings:display-advanced",
    preventionTip: "Match refresh rates or use integer multiples (e.g. 60Hz + 120Hz) across dual monitors for smoothest desktop experience.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20Dual%20Monitor%20Cursor%20Stutter%20tutorial",
    youtubeId: "G9jF8W0X8e0",
    youtubeTitle: "How to Fix Mouse Cursor Stutter on Dual Monitor Setup",
  },
  {
    id: "disp-12",
    category: "DISPLAY PROBLEMS",
    difficulty: "Beginner",
    title: "Stuck or Dead Pixel Correction",
    description: "Identify and attempt software pixel cycling recovery for single-color bright stuck sub-pixels.",
    timeToFix: "20 mins",
    iconName: "Monitor",
    symptoms: [
      "Tiny microscopic red, green, or blue dot frozen in one spot on dark background",
      "Pixel remains lit regardless of window content behind it",
    ],
    rootCause: "Liquid crystal sub-pixel transistor in a frozen electrical state, distinct from permanently non-functional dead black pixels.",
    steps: [
      "Clean screen surface gently with microfiber cloth to confirm the dot is not trapped dust or debris.",
      "Run full-screen rapid RGB sub-pixel cycle tool (JScreenFix) for 10–20 minutes over the affected coordinate.",
      "Gently apply localized pressure around the stuck pixel using a wrapped pencil eraser while turning monitor off and on.",
      "If the dot is completely black on all white backgrounds, the sub-pixel transistor is permanently dead and requires warranty claim.",
    ],
    commandOrShortcut: "F11 (Full Screen Browser Test)",
    preventionTip: "Check manufacturer zero-bright-dot warranty terms before purchase to ensure free panel replacement.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20Stuck%20or%20Dead%20Pixel%20Correction%20tutorial",
    youtubeId: "wY_dD5l6u6E",
    youtubeTitle: "How to Fix Stuck & Dead Pixels on an LCD or OLED Screen",
  },
];

// ==========================================
// 10. HARDWARE PROBLEM GUIDES (12 Detailed Guides)
// ==========================================
export const hardwareGuidesData: ProblemGuide[] = [
  {
    id: "hw-1",
    category: "HARDWARE PROBLEMS",
    difficulty: "Beginner",
    title: "Motherboard Continuous Beeps",
    description: "Diagnose and fix continuous rapid or long POST beeps indicating memory module unseating or contact oxidation.",
    timeToFix: "15 mins",
    iconName: "HardDrive",
    symptoms: [
      "Motherboard buzzer emits rhythmic continuous beeping on boot",
      "Display remains completely dark with zero video output",
      "PC restarts continuously every 5 seconds in boot loop",
    ],
    rootCause: "RAM sticks loose in DIMM sockets, oxidized gold contact pins, or mismatched memory channel slotting.",
    steps: [
      "Power down PC and unplug AC wall cord.",
      "Release the plastic retention latches on both sides of the RAM slots and pull modules straight out.",
      "Use a clean pencil eraser or 99% isopropyl alcohol with lint-free swab to gently buff the gold contacts on both sides.",
      "Reinstall RAM firmly into recommended slots (slots 2 and 4 on dual-channel 4-slot motherboards) until latches audibly click shut.",
      "Test booting with ONE single memory stick at a time to isolate defective DIMM modules.",
    ],
    commandOrShortcut: "mdsched.exe (Windows Memory Diagnostic)",
    preventionTip: "Always use slots 2 and 4 for 2-stick configurations as daisy-chain motherboard traces require populated slot ends.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20Motherboard%20Continuous%20Beeps%20tutorial",
    youtubeId: "Xh0l0iR_lQ8",
    youtubeTitle: "Motherboard Continuous POST Beep Codes Explained & RAM Fix",
  },
  {
    id: "hw-2",
    category: "HARDWARE PROBLEMS",
    difficulty: "Intermediate",
    title: "1 Long, 2 Short POST Beeps",
    description: "Resolve video adapter initialization failure and PCIe seating errors detected during motherboard power-on test.",
    timeToFix: "15 mins",
    iconName: "Monitor",
    symptoms: [
      "Motherboard speaker chirps 1 long beep followed by 2 short beeps",
      "VGA debug LED on motherboard stays solid white or red",
      "Display receives zero signal from graphics card",
    ],
    rootCause: "Graphics card unseated in PCIe slot, missing PCIe supplemental power connectors, or GPU UEFI GOP handshake failure.",
    steps: [
      "Unplug computer power cord and open left side case panel.",
      "Unscrew GPU rear bracket screws, release PCIe slot latch, and remove graphics card completely.",
      "Inspect PCIe slot for dust; blow clean with compressed air.",
      "Reinsert graphics card into primary top PCIe x16 slot with firm downward pressure until click.",
      "Verify all 8-pin / 6-pin PCIe auxiliary power cables are plugged directly from power supply without daisy-chain pigtails.",
    ],
    commandOrShortcut: "devmgmt.msc",
    preventionTip: "Support heavy 3-fan graphics cards with an anti-sag GPU bracket to avoid damaging motherboard PCIe soldering.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%201%20Long%2C%202%20Short%20POST%20Beeps%20tutorial",
    youtubeId: "V9X8qK3I8t0",
    youtubeTitle: "1 Long 2 Short Beeps Fix: Reseating GPU and Video Card Memory",
  },
  {
    id: "hw-3",
    category: "HARDWARE PROBLEMS",
    difficulty: "Intermediate",
    title: "Continuous Rapid Beeps (PSU Voltage)",
    description: "Identify power supply rail drops, 12V voltage regulation faults, and motherboard short-circuit protections.",
    timeToFix: "20 mins",
    iconName: "Zap",
    symptoms: [
      "PC emits machine-gun like continuous rapid chirping immediately after pressing power button",
      "Fans spin for half a second and shut off instantly",
      "Motherboard power LED blinks rapidly without starting",
    ],
    rootCause: "Power supply rail voltage drop below ATX specification, short circuit on 12V CPU EPS line, or grounded motherboard standoff.",
    steps: [
      "Disconnect all external USB devices, external drives, and printer cables.",
      "Verify 24-pin ATX main motherboard power connector and 8-pin CPU power connectors are clicked completely flush.",
      "Perform PSU paperclip test: Disconnect all internal cables, jump green wire (PS_ON) to black wire (ground) with paperclip to verify fan spin.",
      "Inspect motherboard for loose screws or uninsulated metal standoffs touching the rear solder joints.",
    ],
    commandOrShortcut: "HWInfo64: Check +12V, +5V, +3.3V Rails",
    preventionTip: "Always choose 80 Plus Bronze or Gold rated power supplies from tier-A manufacturers with active PFC.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20Continuous%20Rapid%20Beeps%20(PSU%20Voltage)%20tutorial",
    youtubeId: "P6jQ-N1J6aY",
    youtubeTitle: "How to Test a PC Power Supply With a Paperclip or Tester",
  },
  {
    id: "hw-4",
    category: "HARDWARE PROBLEMS",
    difficulty: "Intermediate",
    title: "CPU Thermal Throttling at 95°C",
    description: "Cure extreme processor overheating, dry thermal paste, and noisy cooler fans under load.",
    timeToFix: "25 mins",
    iconName: "Thermometer",
    symptoms: [
      "PC slows down to a crawl during games or video exports",
      "CPU fan screams at 100% maximum RPM continuously",
      "HWMonitor reports CPU core temperatures pinned at 95°C – 100°C",
    ],
    rootCause: "Degraded thermal paste between CPU IHS and cooler, peel-off plastic sticker left on cooler base, or air bubble in AIO water cooler pump.",
    steps: [
      "Unmount CPU heatsink/cooler and inspect cold plate: Ensure no clear plastic protective sticker was accidentally left on.",
      "Clean old dried thermal paste off CPU and cooler using 99% isopropyl alcohol and coffee filter or microfiber cloth.",
      "Apply a pea-sized dot of high-conductivity thermal paste (e.g. Arctic MX-6 / Thermal Grizzly) in the center of CPU heat spreader.",
      "Re-tighten cooler mounting bracket screws in a diagonal cross pattern to ensure even mounting pressure.",
      "Verify AIO liquid cooler pump tachometer wire is plugged into motherboard 'AIO_PUMP' or 'CPU_OPT' header at 100% speed.",
    ],
    commandOrShortcut: "HWInfo64 (Monitor CPU Package Temp)",
    preventionTip: "Replace CPU thermal paste every 2 years to prevent drying and thermal conductivity loss.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20CPU%20Thermal%20Throttling%20at%2095%C2%B0C%20tutorial",
    youtubeId: "RHYgqIkgwU4",
    youtubeTitle: "How to Repaste CPU & Fix High Temperature Thermal Throttling",
  },
  {
    id: "hw-5",
    category: "HARDWARE PROBLEMS",
    difficulty: "Beginner",
    title: "Computer Won't Power On At All",
    description: "Diagnose a completely dead PC with zero lights, zero fan rotation, and no reaction to power button.",
    timeToFix: "20 mins",
    iconName: "Zap",
    symptoms: [
      "Pressing case power button does absolutely nothing",
      "Zero LED lights illuminate on motherboard or power supply",
      "System appears completely lifeless",
    ],
    rootCause: "Power supply rocker switch turned off, loose wall plug, front panel power switch wire disconnected, or tripped surge protector.",
    steps: [
      "Check the physical I/O rocker switch on the back of power supply: Ensure 'I' is pressed in (not 'O').",
      "Test wall outlet with a lamp or phone charger to verify electrical mains power is live.",
      "Inspect front panel header wires on bottom right of motherboard: Verify 'POWER SW' two-pin connector is firmly plugged into PWR pins.",
      "Jump power switch manually: Touch a flathead screwdriver across the two 'PWR_SW' motherboard pins to bypass potentially broken case button.",
    ],
    commandOrShortcut: "Multimeter: Pin 9 (Purple 5VSB) should read 5V",
    preventionTip: "Always plug desktop PCs into a dedicated surge protector or uninterruptible power supply (UPS).",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20Computer%20Won't%20Power%20On%20At%20All%20tutorial",
    youtubeId: "f9vT8X09y8g",
    youtubeTitle: "Computer Won't Turn On At All - Bench Troubleshooting Steps",
  },
  {
    id: "hw-6",
    category: "HARDWARE PROBLEMS",
    difficulty: "Intermediate",
    title: "M.2 NVMe SSD Not Detected in BIOS",
    description: "Restore missing high-speed solid state drives from motherboard BIOS storage device lists.",
    timeToFix: "15 mins",
    iconName: "HardDrive",
    symptoms: [
      "BIOS displays 'No Bootable Device Found' upon turning on PC",
      "M.2 slot shows 'Not Present' or 'Empty' in motherboard BIOS",
      "Windows installer cannot find any storage drive to install OS",
    ],
    rootCause: "M.2 drive seated at incorrect angle, PCIe lane sharing with disabled SATA ports, or missing VMD/AHCI controller mode.",
    steps: [
      "Power down PC, remove M.2 heatsink, unfasten screw, and pull M.2 drive out.",
      "Insert M.2 SSD into slot firmly at a 30-degree angle until gold teeth disappear, then press flat and screw down gently.",
      "In BIOS settings, verify SATA/NVMe mode is set to 'AHCI' instead of 'RAID/Intel VMD'.",
      "Check motherboard manual: Some boards disable M.2 Slot 2 when SATA ports 5 and 6 are populated.",
      "Update motherboard BIOS firmware using USB flashback to ensure compatibility with newer PCIe 4.0/5.0 NVMe drives.",
    ],
    commandOrShortcut: "diskpart → list disk",
    preventionTip: "Never over-tighten M.2 mounting screws as bowing the PCB breaks fragile surface-mount NAND traces.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20M.2%20NVMe%20SSD%20Not%20Detected%20in%20BIOS%20tutorial",
    youtubeId: "jW93uTfB3y0",
    youtubeTitle: "M.2 NVMe SSD Not Detected in BIOS or Windows Setup Solution",
  },
  {
    id: "hw-7",
    category: "HARDWARE PROBLEMS",
    difficulty: "Beginner",
    title: "USB Port Power Surge Warning",
    description: "Clear 'Power surge on the USB port' Windows alerts and recover disabled peripheral connectivity.",
    timeToFix: "10 mins",
    iconName: "Cpu",
    symptoms: [
      "Windows displays 'Power surge on the USB port – A USB device has malfunctioned' notification",
      "All USB ports on front panel stop recognizing mice or flash drives",
      "USB ports fail to deliver charging current",
    ],
    rootCause: "Short circuit inside USB connector pins (bent tongue pin touching metal chassis) or drawing over 500mA on unpowered port.",
    steps: [
      "Disconnect all USB devices immediately.",
      "Inspect all USB ports (front and rear) with a flashlight: Look for bent gold spring pins touching the outer metal housing.",
      "If front panel ports are damaged, unplug internal 'USB 3.0' header connector from motherboard to isolate the short.",
      "Restart PC and open Device Manager: Expand 'Universal Serial Bus controllers' and click 'Scan for hardware changes'.",
    ],
    commandOrShortcut: "devmgmt.msc",
    preventionTip: "Never force USB connectors in upside-down as this shears the plastic guide tab and causes direct short circuits.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20USB%20Port%20Power%20Surge%20Warning%20tutorial",
    youtubeId: "9g0H2B3K_4A",
    youtubeTitle: "Power Surge on the USB Port Error: Diagnosis & Safe Fix",
  },
  {
    id: "hw-8",
    category: "HARDWARE PROBLEMS",
    difficulty: "Intermediate",
    title: "PC Shuts Down Randomly Under Load",
    description: "Troubleshoot sudden instantaneous power cuts and shutdowns without blue screen error during games.",
    timeToFix: "20 mins",
    iconName: "AlertTriangle",
    symptoms: [
      "PC plays fine for 15 minutes, then abruptly powers off as if unplugged",
      "No blue screen (BSOD) or error dump generated",
      "PC will not turn back on unless power supply switch is cycled off and on",
    ],
    rootCause: "Power Supply OCP (Over-Current Protection) triggered by modern GPU transient power spikes, or VRM overheating.",
    steps: [
      "Check power supply wattage against recommended GPU spec: High-end GPUs (RTX 3080/4080/RX 7900) require minimum 750W–850W quality PSU.",
      "Ensure separate, independent 8-pin PCIe cables run from PSU to graphics card (do NOT use daisy-chain splitter cables).",
      "Run FurMark GPU stress test + Prime95 simultaneously to test if shutdown triggers instantly under synthetic max load.",
      "If shutdown occurs at specific temperature, blow dust out of PSU intake fan and bottom dust filter.",
    ],
    commandOrShortcut: "Event Viewer: Event ID 41 (Kernel-Power)",
    preventionTip: "Account for 150W of transient headroom above calculated component wattage when buying power supplies.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20PC%20Shuts%20Down%20Randomly%20Under%20Load%20tutorial",
    youtubeId: "Y8kC8Qp1XkQ",
    youtubeTitle: "PC Shuts Down When Gaming - Overheating or PSU Overcurrent",
  },
  {
    id: "hw-9",
    category: "HARDWARE PROBLEMS",
    difficulty: "Beginner",
    title: "Loud Fan Noise & Coil Whine",
    description: "Silence rattling case fan bearings, aggressive fan curves, and high-pitched electrical buzzing.",
    timeToFix: "15 mins",
    iconName: "Volume2",
    symptoms: [
      "High-pitched screeching or electrical hissing from GPU when running games at 500+ FPS",
      "Rattling or clicking noise coming from computer case fans",
      "Fans constantly rev up and down every few seconds",
    ],
    rootCause: "Vibrating ceramic inductors under uncapped FPS loads (coil whine), dry fan sleeve bearing, or loose case screws.",
    steps: [
      "Cap frame rates in GPU driver settings (e.g. set Max Frame Rate to your monitor refresh rate like 144 FPS) to immediately suppress coil whine.",
      "In BIOS or FanControl app, adjust fan curve to have a 3-second temperature hysteresis smoothing delay.",
      "Inspect all fan cables to ensure no loose wires are lightly brushing against spinning fan blades.",
      "Tighten mounting screws on all case fans using rubber anti-vibration washers.",
    ],
    commandOrShortcut: "FanControl.exe",
    preventionTip: "Capping frame rates to your monitor refresh rate eliminates 90% of electrical inductor coil whine.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20Loud%20Fan%20Noise%20%26%20Coil%20Whine%20tutorial",
    youtubeId: "F5d2kP0J-eI",
    youtubeTitle: "How to Stop GPU Coil Whine & Tune Quiet Fan Curves",
  },
  {
    id: "hw-10",
    category: "HARDWARE PROBLEMS",
    difficulty: "Beginner",
    title: "CMOS Battery Dead & BIOS Resetting",
    description: "Fix computer clock resetting to 2001, BIOS settings vanishing on reboot, and checksum errors.",
    timeToFix: "10 mins",
    iconName: "Clock",
    symptoms: [
      "System date and time resets to factory default every time PC is disconnected from wall",
      "Prompt 'CMOS Checksum Error – Press F1 to enter setup' appears on every boot",
      "Custom XMP RAM profiles and fan curves disappear",
    ],
    rootCause: "Depleted CR2032 3-volt lithium coin cell battery on the motherboard unable to retain volatile CMOS SRAM register values.",
    steps: [
      "Purchase a standard replacement CR2032 3V coin cell battery (available at supermarkets and electronics shops).",
      "Shut down PC, unplug power cord, and ground yourself by touching bare metal on chassis.",
      "Locate the silver coin battery on motherboard (often between PCIe slots or below graphics card).",
      "Press the metal spring release clip with a fingernail or flat plastic spudger; the old battery will pop up.",
      "Install the new CR2032 battery with the smooth '+' side facing upward until it clicks into place.",
    ],
    commandOrShortcut: "timedate.cpl",
    preventionTip: "CR2032 motherboard batteries last 3–5 years; replace immediately if time synchronization errors occur.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20CMOS%20Battery%20Dead%20%26%20BIOS%20Resetting%20tutorial",
    youtubeId: "AOq9QY3I0t8",
    youtubeTitle: "How to Replace CR2032 CMOS Battery & Reset BIOS Settings",
  },
  {
    id: "hw-11",
    category: "HARDWARE PROBLEMS",
    difficulty: "Beginner",
    title: "Front Audio Jack Not Working",
    description: "Restore headphone and microphone audio from desktop case front 3.5mm panel ports.",
    timeToFix: "10 mins",
    iconName: "Volume2",
    symptoms: [
      "Plugging headphones into front panel 3.5mm jack produces no sound",
      "Windows Sound settings shows headphones disconnected",
      "Rear motherboard audio works perfectly but front stays silent",
    ],
    rootCause: "Front panel HD Audio cable unplugged from motherboard, or Realtek front jack detection misconfigured in control panel.",
    steps: [
      "Open PC case and trace cable from front panel: Ensure 'HD AUDIO' 10-pin connector is plugged into bottom left motherboard pins.",
      "Open Realtek Audio Console / Control Panel → Device advanced settings → Enable 'Disable front panel jack detection'.",
      "In Windows Sound Settings, verify default output device is set to 'Realtek High Definition Audio'.",
      "Run Windows Audio Troubleshooter to refresh endpoint driver mappings.",
    ],
    commandOrShortcut: "mmsys.cpl",
    preventionTip: "Use dedicated USB DACs or rear audio ports for superior shielding against motherboard electromagnetic interference.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20Front%20Audio%20Jack%20Not%20Working%20tutorial",
    youtubeId: "M9lK3P8_6gA",
    youtubeTitle: "Front Panel Headphone Audio Jack Not Working (HD Audio Header)",
  },
  {
    id: "hw-12",
    category: "HARDWARE PROBLEMS",
    difficulty: "Advanced",
    title: "GPU Sag & PCIe Slot Strain",
    description: "Prevent physical graphics card bending, PCIe slot trace fracture, and intermittent signal disconnects.",
    timeToFix: "30 mins",
    iconName: "Layers",
    symptoms: [
      "Heavy 3-fan graphics card visibly droops downward on right corner",
      "Slight bump to computer desk causes display signal loss or crash",
      "PCIe slot clip sheared or cracked under weight",
    ],
    rootCause: "Modern high-end GPUs weigh 1.5kg to 2.5kg; gravitational leverage strains the PCIe slot socket and solder pins.",
    steps: [
      "Support the right outer corner of GPU with an adjustable screw-stand or magnetic support bracket.",
      "Ensure all two or three rear case expansion bracket thumbscrews are firmly torqued.",
      "If transport is needed, ALWAYS remove discrete GPU before moving PC in car to avoid snapping PCIe slot during bumps.",
      "Inspect PCIe slot for micro-fractures if intermittent crashes occurred prior to adding support.",
    ],
    commandOrShortcut: "Inspect PCIe Link: GPU-Z Bus Interface",
    preventionTip: "Always install an anti-sag support bracket immediately when assembling GPUs with 3 fans or dual-slot heatsinks.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20GPU%20Sag%20%26%20PCIe%20Slot%20Strain%20tutorial",
    youtubeId: "9Y8sE4B-8z8",
    youtubeTitle: "How to Prevent Heavy GPU Sag & Install Support Anti-Sag Brackets",
  },
];

// ==========================================
// 11. SOFTWARE PROBLEM GUIDES (12 Detailed Guides)
// ==========================================
export const softwareGuidesData: ProblemGuide[] = [
  {
    id: "sw-1",
    category: "SOFTWARE PROBLEMS",
    difficulty: "Intermediate",
    title: "IRQL_NOT_LESS_OR_EQUAL Blue Screen",
    description: "Resolve Windows stop code 0x0000000A caused by kernel-mode driver accessing invalid memory addresses.",
    timeToFix: "15 mins",
    iconName: "ShieldAlert",
    symptoms: [
      "PC abruptly crashes with Blue Screen stating Stop Code: IRQL_NOT_LESS_OR_EQUAL",
      "Crash dump cites ntoskrnl.exe, nvlddmkm.sys, or tcpip.sys",
      "Occurs frequently during network transfers or launching games",
    ],
    rootCause: "Kernel driver attempting to access paged memory address at an elevated Interrupt Request Level (IRQL).",
    steps: [
      "Run Windows Memory Diagnostic: Press Win + R, type mdsched.exe, and select 'Restart now and check for problems'.",
      "Update network adapter and Wi-Fi drivers from Intel / Realtek official support sites.",
      "Open PowerShell as Administrator and run System File Checker: sfc /scannow.",
      "Use BlueScreenView to inspect C:\\Windows\\Minidump files to identify the exact third-party driver filename responsible.",
      "Roll back or clean install the offending driver identified in the minidump analysis.",
    ],
    commandOrShortcut: "sfc /scannow",
    preventionTip: "Keep driver updates confined to official manufacturer WHQL signed releases rather than automatic third-party driver updaters.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20IRQL_NOT_LESS_OR_EQUAL%20Blue%20Screen%20tutorial",
    youtubeId: "k8vL9G2p1H0",
    youtubeTitle: "How to Fix IRQL_NOT_LESS_OR_EQUAL Blue Screen in Windows 11",
  },
  {
    id: "sw-2",
    category: "SOFTWARE PROBLEMS",
    difficulty: "Intermediate",
    title: "CRITICAL_PROCESS_DIED Crash",
    description: "Recover from Blue Screen stop code 0x000000EF when vital Windows subsystem processes terminate unexpectedly.",
    timeToFix: "20 mins",
    iconName: "Cpu",
    symptoms: [
      "Instant crash to blue screen with 0x000000EF CRITICAL_PROCESS_DIED",
      "Windows will not boot into normal mode without initiating Automatic Repair",
      "Event Viewer shows svchost.exe, csrss.exe, or wininit.exe exited abruptly",
    ],
    rootCause: "Corruption of core Windows system executables, bad storage sectors on OS drive, or malware injection into system processes.",
    steps: [
      "Boot into Windows Recovery Environment (hold Shift while clicking Restart).",
      "Open Command Prompt and repair system image via DISM: DISM /Online /Cleanup-Image /RestoreHealth.",
      "Follow immediately with System File Checker: sfc /scannow.",
      "Check storage integrity: chkdsk C: /f /r to verify disk sectors and file allocation table.",
      "If boot continues failing, use System Restore to roll back to a point prior to recent updates or software installations.",
    ],
    commandOrShortcut: "DISM /Online /Cleanup-Image /RestoreHealth",
    preventionTip: "Never forcefully shut down PC by holding power button during active Windows Update installations.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20CRITICAL_PROCESS_DIED%20Crash%20tutorial",
    youtubeId: "O1QzJ4F0W0Q",
    youtubeTitle: "CRITICAL PROCESS DIED Blue Screen of Death Permanent Fix",
  },
  {
    id: "sw-3",
    category: "SOFTWARE PROBLEMS",
    difficulty: "Beginner",
    title: "100% Disk Usage in Task Manager",
    description: "Eliminate constant 100% hard drive and SSD utilization that freezes the Windows desktop.",
    timeToFix: "15 mins",
    iconName: "HardDrive",
    symptoms: [
      "Task Manager reports Disk tab pinned at 100% constantly despite idle computer",
      "Apps take 2 minutes to open and computer freezes when typing",
      "System process or 'SysMain' shows as top disk user",
    ],
    rootCause: "SysMain (Superfetch) caching bug, corrupted Windows Search index, or failing mechanical HDD sectors.",
    steps: [
      "Press Win + R, type services.msc and press Enter.",
      "Locate 'SysMain', right-click → Properties → Set Startup type to 'Disabled' → Click 'Stop'.",
      "Disable Connected User Experiences and Telemetry service in services.msc.",
      "Open Command Prompt as Admin and reset Windows Search: net.exe stop 'Windows Search'.",
      "If running Windows on a mechanical spinning hard drive (HDD), upgrade OS drive to an NVMe or SATA SSD.",
    ],
    commandOrShortcut: "net stop sysmain",
    preventionTip: "Windows 10/11 is fundamentally architected for SSD storage; mechanical hard drives should only be used for archive storage.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20100%25%20Disk%20Usage%20in%20Task%20Manager%20tutorial",
    youtubeId: "Vz5qY5fFq10",
    youtubeTitle: "How to Fix 100% Disk Usage in Windows 11 & Windows 10",
  },
  {
    id: "sw-4",
    category: "SOFTWARE PROBLEMS",
    difficulty: "Advanced",
    title: "WHEA_UNCORRECTABLE_ERROR (0x124)",
    description: "Triage fatal hardware architecture error blue screens caused by CPU voltage drop and unstable overclocks.",
    timeToFix: "25 mins",
    iconName: "AlertTriangle",
    symptoms: [
      "Instantaneous reboot with WHEA_UNCORRECTABLE_ERROR stop code",
      "Event Viewer records WHEA-Logger Event ID 18 or 19 with APIC ID hardware error",
      "Occurs exclusively during heavy rendering or processor-intensive gaming",
    ],
    rootCause: "CPU core voltage (Vcore) dipping below required stability threshold, unstable XMP memory timings, or degraded CPU silicon.",
    steps: [
      "Enter BIOS settings and reset all CPU overclocks, voltage offsets, and PBO curve optimizer values to default/auto.",
      "Disable XMP / DOCP in BIOS temporarily to test if crash is caused by unstable memory controller.",
      "Update motherboard BIOS firmware to latest version with updated Intel Microcode / AMD AGESA stability patches.",
      "Monitor CPU core voltages using HWInfo64 during load: Ensure Vcore does not fluctuate erratically under multithreaded benchmarks.",
    ],
    commandOrShortcut: "chkdsk /f /r",
    preventionTip: "Never use automated one-click 'AI Overclocking' utilities that apply unstable low voltage curves.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20WHEA_UNCORRECTABLE_ERROR%20(0x124)%20tutorial",
    youtubeId: "D6nQvH0K5-k",
    youtubeTitle: "WHEA UNCORRECTABLE ERROR 0x124 - Hardware BSOD Diagnosis",
  },
  {
    id: "sw-5",
    category: "SOFTWARE PROBLEMS",
    difficulty: "Beginner",
    title: "Windows Update Error 0x80070002",
    description: "Fix failed Windows updates that refuse to install, download, or complete during restart.",
    timeToFix: "15 mins",
    iconName: "RefreshCw",
    symptoms: [
      "Windows Update says 'Some update files are missing or have problems. Error code: 0x80070002'",
      "Updates download to 100% and then roll back stating 'Undoing changes'",
      "Same update fails repeatedly every week",
    ],
    rootCause: "Corrupted temporary update download files stored in C:\\Windows\\SoftwareDistribution directory.",
    steps: [
      "Open Command Prompt as Administrator.",
      "Stop update services: net stop wuauserv && net stop bits && net stop cryptsvc.",
      "Rename cache folder: ren C:\\Windows\\SoftwareDistribution SoftwareDistribution.old.",
      "Restart update services: net start wuauserv && net start bits && net start cryptsvc.",
      "Return to Settings → Windows Update and click 'Check for updates' to download fresh uncorrupted update packages.",
    ],
    commandOrShortcut: "net stop wuauserv && ren C:\\Windows\\SoftwareDistribution SoftwareDistribution.old && net start wuauserv",
    preventionTip: "Never delete active system files manually; stopping Windows Update services before renaming folders guarantees clean cache creation.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20Windows%20Update%20Error%200x80070002%20tutorial",
    youtubeId: "9pG8z8L_0H0",
    youtubeTitle: "How to Fix Windows 11 Update Error 0x80070002 / 0x80070003",
  },
  {
    id: "sw-6",
    category: "SOFTWARE PROBLEMS",
    difficulty: "Beginner",
    title: "Audio Services Not Responding",
    description: "Restore missing sound and fix red 'X' over the Windows volume speaker tray icon.",
    timeToFix: "10 mins",
    iconName: "Volume2",
    symptoms: [
      "Red 'X' icon over volume icon in system tray stating 'Audio Service is not running'",
      "Zero sound output from speakers, headphones, or HDMI audio",
      "Windows Audio troubleshooter reports 'One or more audio service is not running'",
    ],
    rootCause: "Windows Audio service or Windows Audio Endpoint Builder crashed or set to incorrect logon credentials.",
    steps: [
      "Press Win + R, type services.msc and press Enter.",
      "Find 'Windows Audio', right-click and click 'Restart'.",
      "Double-click 'Windows Audio', ensure Startup type is set to 'Automatic'.",
      "Switch to 'Log On' tab: Ensure it logs on as 'This account': Local Service (with empty password fields).",
      "Restart 'Windows Audio Endpoint Builder' service immediately after.",
    ],
    commandOrShortcut: "net start Audiosrv",
    preventionTip: "Keep audio enhancements disabled in Sound Properties if using professional external audio interfaces.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20Audio%20Services%20Not%20Responding%20tutorial",
    youtubeId: "K3gT6wR1Z8g",
    youtubeTitle: "Fix Audio Services Not Responding on Windows 11 / 10",
  },
  {
    id: "sw-7",
    category: "SOFTWARE PROBLEMS",
    difficulty: "Beginner",
    title: "Corrupted Windows System Files",
    description: "Repair broken dynamic link libraries, manifest files, and missing Windows components with SFC and DISM.",
    timeToFix: "15 mins",
    iconName: "Terminal",
    symptoms: [
      "Windows Start Menu refuses to open when clicked",
      "Settings app crashes immediately upon launch",
      "DLL error popups: 'The code execution cannot proceed because VCRUNTIME140.dll was not found'",
    ],
    rootCause: "System file corruption caused by power outages, disk write interrupts, or faulty software uninstallers.",
    steps: [
      "Open PowerShell as Administrator (Win + X → Terminal (Admin)).",
      "Run Deployment Image Servicing: DISM /Online /Cleanup-Image /RestoreHealth (wait for 100% completion).",
      "Run System File Checker: sfc /scannow.",
      "If Windows reports 'Windows Resource Protection found corrupt files and successfully repaired them', reboot PC.",
      "Reinstall the official Microsoft Visual C++ Redistributable AIO package.",
    ],
    commandOrShortcut: "sfc /scannow & DISM /Online /Cleanup-Image /RestoreHealth",
    preventionTip: "Run sfc /scannow once a month as routine preventive maintenance to fix minor registry corruptions before they escalate.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20Corrupted%20Windows%20System%20Files%20tutorial",
    youtubeId: "6v4m9y8q1K0",
    youtubeTitle: "How to Repair Corrupted Windows Files with SFC and DISM",
  },
  {
    id: "sw-8",
    category: "SOFTWARE PROBLEMS",
    difficulty: "Beginner",
    title: "Slow Windows Boot & Startup Lag",
    description: "Accelerate boot times from 2 minutes down to 10 seconds by purging bloated startup applications.",
    timeToFix: "10 mins",
    iconName: "Clock",
    symptoms: [
      "PC takes several minutes after typing login password before desktop is usable",
      "Dozens of tray icons appear in bottom right corner",
      "Task Manager reports 'Last BIOS time' over 30 seconds",
    ],
    rootCause: "High-impact startup apps (Spotify, Steam, Epic, Discord, Adobe CC) fighting for disk and CPU during user logon initialization.",
    steps: [
      "Press Ctrl + Shift + Esc to open Task Manager and navigate to the 'Startup apps' tab.",
      "Sort by 'Startup impact' and right-click 'Disable' on heavy non-essential apps (Steam, Discord, Spotify, Cortana, Teams).",
      "Enable Fast Startup: Open Control Panel → Power Options → 'Choose what the power buttons do' → Check 'Turn on fast startup'.",
      "Clean temporary junk files: Press Win + R, type temp and %temp%, and delete cached files.",
    ],
    commandOrShortcut: "msconfig",
    preventionTip: "Only keep security software and peripheral drivers (e.g. mouse/audio software) enabled in Startup apps.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20Slow%20Windows%20Boot%20%26%20Startup%20Lag%20tutorial",
    youtubeId: "8mB7v2q0W4k",
    youtubeTitle: "Make Windows 11 Boot 10x Faster by Disabling Startup Lag",
  },
  {
    id: "sw-9",
    category: "SOFTWARE PROBLEMS",
    difficulty: "Intermediate",
    title: "PAGE_FAULT_IN_NONPAGED_AREA (0x50)",
    description: "Fix stop code 0x00000050 triggered by invalid memory references and corrupted virtual memory pagefiles.",
    timeToFix: "20 mins",
    iconName: "HardDrive",
    symptoms: [
      "Blue screen crash referencing PAGE_FAULT_IN_NONPAGED_AREA with 0x00000050",
      "Crash occurs shortly after opening heavy multitasking applications",
      "Antivirus driver or graphics driver listed as cause",
    ],
    rootCause: "System requested data from memory that was not found in pagefile or physical RAM address space.",
    steps: [
      "Reset Windows Virtual Memory paging file: Open sysdm.cpl → Advanced → Performance Settings → Advanced → Virtual Memory → Change.",
      "Select 'Automatically manage paging file size for all drives', click OK, and reboot.",
      "Uninstall conflicting third-party antivirus utilities (Avast, McAfee) and rely on Windows Defender.",
      "Run Windows Memory Diagnostic tool to test physical RAM modules for bad memory chips.",
    ],
    commandOrShortcut: "sysdm.cpl",
    preventionTip: "Let Windows automatically manage paging file size rather than forcing custom static min/max sizes.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20PAGE_FAULT_IN_NONPAGED_AREA%20(0x50)%20tutorial",
    youtubeId: "J7m9p2L1K3g",
    youtubeTitle: "How to Fix PAGE_FAULT_IN_NONPAGED_AREA 0x50 Blue Screen",
  },
  {
    id: "sw-10",
    category: "SOFTWARE PROBLEMS",
    difficulty: "Intermediate",
    title: "Automatic Repair Loop",
    description: "Break out of endless 'Preparing Automatic Repair' and 'Your PC did not start correctly' boot cycles.",
    timeToFix: "30 mins",
    iconName: "AlertTriangle",
    symptoms: [
      "PC boots to blue screen 'Automatic Repair couldn't repair your PC' with SrtTrail.txt error",
      "Clicking 'Restart' just loops back to the same repair screen",
      "Cannot access normal Windows desktop",
    ],
    rootCause: "Damaged BCD (Boot Configuration Data) store, corrupted registry hives in System32\\config, or broken Master Boot Record.",
    steps: [
      "In Automatic Repair blue screen, click 'Advanced options' → 'Troubleshoot' → 'Advanced options' → 'Command Prompt'.",
      "Rebuild Boot Configuration: Type bootrec /fixmbr and press Enter.",
      "Type bootrec /fixboot (if access denied, use bcdboot C:\\Windows /s C: /f ALL).",
      "Type bootrec /rebuildbcd to locate Windows installations and add to boot list.",
      "Run chkdsk C: /f to fix filesystem errors, then type exit and reboot.",
    ],
    commandOrShortcut: "bootrec /rebuildbcd",
    preventionTip: "Create a Windows 11 installation media USB stick to keep on hand as an emergency recovery boot drive.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20Automatic%20Repair%20Loop%20tutorial",
    youtubeId: "0kF6x4F1w3Q",
    youtubeTitle: "How to Fix Preparing Automatic Repair Boot Loop in Windows",
  },
  {
    id: "sw-11",
    category: "SOFTWARE PROBLEMS",
    difficulty: "Beginner",
    title: "Print Spooler Service Keeps Stopping",
    description: "Clear clogged print queues and restore printing when the Print Spooler service crashes repeatedly.",
    timeToFix: "10 mins",
    iconName: "RefreshCw",
    symptoms: [
      "Error: 'The local print spooler service is not running. Please restart the spooler.'",
      "Printer dialog shows 'Printer offline' or documents stuck in queue forever",
      "Starting the service in services.msc crashes again within 10 seconds",
    ],
    rootCause: "Corrupted printer driver spool files stuck in C:\\Windows\\System32\\spool\\PRINTERS directory.",
    steps: [
      "Open Command Prompt as Administrator.",
      "Stop spooler service: net stop spooler.",
      "Delete corrupt spool cache: del /Q /F /S '%systemroot%\\System32\\Spool\\Printers\\*.*'.",
      "Restart spooler service: net start spooler.",
      "Reopen document and send print job again.",
    ],
    commandOrShortcut: "net stop spooler && del /Q /F /S %systemroot%\\System32\\Spool\\Printers\\*.* && net start spooler",
    preventionTip: "Always cancel failed print jobs before powering off your printer to prevent spool file locks.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20Print%20Spooler%20Service%20Keeps%20Stopping%20tutorial",
    youtubeId: "G8n7Q2p1K4w",
    youtubeTitle: "How to Fix Print Spooler Service Keeps Stopping in Windows",
  },
  {
    id: "sw-12",
    category: "SOFTWARE PROBLEMS",
    difficulty: "Beginner",
    title: "High CPU by Antimalware Service",
    description: "Tame MsMpEng.exe consuming 50%–90% CPU and slowing down computer fans during idle periods.",
    timeToFix: "15 mins",
    iconName: "ShieldAlert",
    symptoms: [
      "Task Manager shows 'Antimalware Service Executable' (MsMpEng.exe) consuming 50%+ CPU continuously",
      "Fans spin up whenever computer is idle for 5 minutes",
      "Visual Studio or game compiles take 5x longer due to background scanning",
    ],
    rootCause: "Windows Defender scanning its own executable folder or scanning huge project directories with thousands of small files.",
    steps: [
      "Open Windows Security → Virus & threat protection → Virus & threat protection settings → Manage settings.",
      "Scroll down to 'Exclusions' → Click 'Add or remove exclusions'.",
      "Add Process Exclusion: Type MsMpEng.exe to prevent Defender from recursively scanning itself.",
      "Add Folder Exclusion: Add your programming workspace folders (e.g. node_modules, git directories) to prevent scanning bottlenecks.",
      "In Task Scheduler, navigate to Microsoft\\Windows\\Windows Defender, open 'Windows Defender Scheduled Scan', and uncheck 'Start the task only if the computer is idle'.",
    ],
    commandOrShortcut: "windowsdefender://threatsettings",
    preventionTip: "Excluding programming dependency directories like node_modules dramatically speeds up development compile times.",
    youtubeUrl: "https://www.youtube.com/results?search_query=how%20to%20fix%20High%20CPU%20by%20Antimalware%20Service%20tutorial",
    youtubeId: "P2q3W5e8R1k",
    youtubeTitle: "How to Fix Antimalware Service Executable High CPU Usage",
  },
];

