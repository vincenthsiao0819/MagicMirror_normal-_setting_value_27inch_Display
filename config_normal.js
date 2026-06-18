let config = {
	address: "localhost",
	port: 8080,
	basePath: "/",
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
	useHttps: false,
	language: "zh-tw",
	locale: "zh-tw",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",
	modules: [
		{
			module: "MMM-Wallpaper",
			position: "fullscreen_below",
			config: {
				source: "firetv",
				slideInterval: 60 * 1000,
				crossfade: true
			}
		},
		{ module: "alert" },
		{ module: "updatenotification", position: "top_bar" },
		{
			module: "clock",
			position: "top_left",
			config: { timezone: "Asia/Taipei" }
		},
		{
			module: "MMM-Jast",
			position: "top_left",
			header: "PORTFOLIO",
			config: {
				maxWidth: "100%",
				updateIntervalInSeconds: 300,
				fadeSpeedInSeconds: 3.5,
				displayMode: "none", 
				maxStocksInOneLine: 1,
				useGrouping: false,
				currencyStyle: "code",
				lastUpdateFormat: "HH:mm",
				showColors: true,
				showCurrency: true,
				showChangePercent: true,
				showChangeValue: false,
				showHiddenStocks: false,
				showLastUpdate: false,
				numberDecimalsValues: 2,
				numberDecimalsPercentages: 2,
				stocks: [
					{ name: "S&P 500", symbol: "^GSPC" },
					{ name: "Nasdaq", symbol: "^IXIC" },
					{ name: "TAIEX", symbol: "^TWII" },
					{ name: "TSMC(TW)", symbol: "2330.TW" }, 
					{ name: "0050", symbol: "0050.TW" }
				]
			}
		},
		{
			module: "MMM-Jast",
			position: "top_left",
			classes: "us-portfolio",
			config: {
				maxWidth: "100%",
				updateIntervalInSeconds: 300,
				fadeSpeedInSeconds: 2.5,
				displayMode: "vertical", 
				maxStocksInOneLine: 1,
				useGrouping: false,
				currencyStyle: "code",
				lastUpdateFormat: "HH:mm",
				showColors: true,
				showCurrency: true,
				showChangePercent: true,
				showChangeValue: false,
				showHiddenStocks: false,
				showLastUpdate: false,
				numberDecimalsValues: 2,
				numberDecimalsPercentages: 2,
				stocks: [
					{ name: "APH(成本$127.00)", symbol: "APH" },
					{ name: "COPX(成本$60.00)", symbol: "COPX" },
					{ name: "DGRO(成本$67.54)", symbol: "DGRO" },
					{ name: "GLW(成本$193.57)", symbol: "GLW" },
					{ name: "GOOGL(成本$333.66)", symbol: "GOOGL" },
					{ name: "INTC", symbol: "INTC" },
					{ name: "MPWR(成本$1076.13)", symbol: "MPWR" },
					{ name: "MRVL(成本$164.50)", symbol: "MRVL" },
					{ name: "Micron(成本$457.36)", symbol: "MU" },
					{ name: "NVDA(成本$190.15)", symbol: "NVDA" },
					{ name: "QCOM(成本$149.98)", symbol: "QCOM" },
					{ name: "SCHD(成本$30.19)", symbol: "SCHD" },
					{ name: "SOXX(成本$267.00)", symbol: "SOXX" },
					{ name: "SPCX(成本$195.10)", symbol: "SPCX" },
					{ name: "TDY(成本$567.62)", symbol: "TDY" },
					{ name: "TSM(成本$336.79)", symbol: "TSM" },
					{ name: "VOO(成本$613.78)", symbol: "VOO" },
					{ name: "VRT(成本$176.50)", symbol: "VRT" }
				]
			}
		},
		{
			module: "MMM-WorldCupOdds",
			position: "top_left"
		},
		{
			module: "MMM-BilingualProverb",
			position: "top_left"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 25.0330,
				lon: 121.5654
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Taipei Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 25.0330,
				lon: 121.5654
			}
		},
		{
			module: "calendar",
			header: "Vincent & Family",
			position: "top_right",
			config: {
			    maximumEntries: 8,
			    wrapEvents: true,
				calendars: [
					{
						fetchInterval: 5 * 60 * 1000,
						symbol: "user",
						color: "#66b3ff",
						url: "https://calendar.google.com/calendar/ical/vinhsiao%40gmail.com/private-b91c9a22b7d98a01cca158b4b3f5818d/basic.ics"
					},
					{
						fetchInterval: 5 * 60 * 1000,
						symbol: "users",
						color: "#f5a742",
						url: "https://calendar.google.com/calendar/ical/family11131945583328378197%40group.calendar.google.com/private-d000fc46a7e67fb5f49e5921ae2be15d/basic.ics"
					},
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check", titleClass: "holiday-title", timeClass: "holiday-time", symbolClass: "holiday-symbol", url: "https://calendar.google.com/calendar/ical/zh-tw.taiwan%23holiday%40group.v.calendar.google.com/public/basic.ics"
					}
				]
			}
		},
		{
			module: "MMM-Markdown",
			position: "bottom_center",
			config: {
				markdownFilename: "message_board.md",
				updateInterval: 10 * 1000
			}
		},
		{
			module: "MMM-OpenClawStatus",
			position: "bottom_right",
			config: {
				updateInterval: 30000,
				gpuHost: "192.168.50.154",
				macHost: "192.168.64.6"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [{
					title: "World Cup News",
					url: "https://www.espn.com/espn/rss/soccer/news"
				}],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		}
	]
};
if (typeof module !== "undefined") { module.exports = config; }
