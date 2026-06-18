import re

with open('/Users/vincenthsiao/.openclaw/tmp/MagicMirror_Sync/base_config.js', 'r', encoding='utf-8') as f:
    js = f.read()

with open('/Users/vincenthsiao/.openclaw/tmp/MagicMirror_Sync/base_custom.css', 'r', encoding='utf-8') as f:
    css = f.read()

# CSS Modifications
css = re.sub(r'/\*.*?\*/', '', css, flags=re.DOTALL)
marquee = """
.us-portfolio .jast-wrapper.vertical {
    height: 280px !important;
    overflow: hidden !important;
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
    mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
}
.us-portfolio .jast-wrapper.vertical ul {
  animation-name: tickerv-us !important;
  animation-duration: 40s !important;
  animation-iteration-count: infinite !important;
  animation-timing-function: linear !important;
}
@keyframes tickerv-us {
  0% { transform: translateY(0); }
  100% { transform: translateY(calc(-50% - 10px)); }
}
"""
css += marquee

# JS Modifications
js = js.replace('scroll: "none",', 'displayMode: "vertical",')
js = js.replace('header: "Portfolio",', 'header: "PORTFOLIO",\n\t\t\tclasses: "us-portfolio",')

new_stocks = """stocks: [
\t\t\t\t\t{ name: "APH(成本$127.00)", symbol: "APH" },
\t\t\t\t\t{ name: "COPX(成本$60.00)", symbol: "COPX" },
\t\t\t\t\t{ name: "DGRO(成本$67.54)", symbol: "DGRO" },
\t\t\t\t\t{ name: "GLW(成本$193.57)", symbol: "GLW" },
\t\t\t\t\t{ name: "GOOGL(成本$333.66)", symbol: "GOOGL" },
\t\t\t\t\t{ name: "INTC", symbol: "INTC" },
\t\t\t\t\t{ name: "MPWR(成本$1076.13)", symbol: "MPWR" },
\t\t\t\t\t{ name: "MRVL(成本$164.50)", symbol: "MRVL" },
\t\t\t\t\t{ name: "Micron(成本$457.36)", symbol: "MU" },
\t\t\t\t\t{ name: "NVDA(成本$190.15)", symbol: "NVDA" },
\t\t\t\t\t{ name: "QCOM(成本$149.98)", symbol: "QCOM" },
\t\t\t\t\t{ name: "SCHD(成本$30.19)", symbol: "SCHD" },
\t\t\t\t\t{ name: "SOXX(成本$267.00)", symbol: "SOXX" },
\t\t\t\t\t{ name: "SPCX(成本$195.10)", symbol: "SPCX" },
\t\t\t\t\t{ name: "TDY(成本$567.62)", symbol: "TDY" },
\t\t\t\t\t{ name: "TSM(成本$336.79)", symbol: "TSM" },
\t\t\t\t\t{ name: "VOO(成本$613.78)", symbol: "VOO" },
\t\t\t\t\t{ name: "VRT(成本$176.50)", symbol: "VRT" },
\t\t\t\t\t{ name: "S&P 500", symbol: "^GSPC" },
\t\t\t\t\t{ name: "Nasdaq", symbol: "^IXIC" },
\t\t\t\t\t{ name: "TAIEX", symbol: "^TWII" },
\t\t\t\t\t{ name: "TSMC(TW)", symbol: "2330.TW" }, 
\t\t\t\t\t{ name: "0050", symbol: "0050.TW" }
\t\t\t\t]"""
js = re.sub(r'stocks:\s*\[.*?\]', new_stocks, js, flags=re.DOTALL)

with open('/Users/vincenthsiao/.openclaw/tmp/MagicMirror_Sync/ready_config.js', 'w', encoding='utf-8') as f:
    f.write(js)
    
with open('/Users/vincenthsiao/.openclaw/tmp/MagicMirror_Sync/ready_custom.css', 'w', encoding='utf-8') as f:
    f.write(css)
