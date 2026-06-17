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
				{
			module: "MMM-Markdown",
			position: "top_left",
			config: {
				markdownFilename: "fortune.md",
				updateInterval: 60 * 1000
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
