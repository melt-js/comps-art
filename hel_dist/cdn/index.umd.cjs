(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('hel-lib-proxy')) :
	typeof define === 'function' && define.amd ? define(['exports', 'hel-lib-proxy'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["comps-art"] = {}, global.HelLibProxy));
})(this, (function (exports, helLibProxy) { 'use strict';

	/*
	|--------------------------------------------------------------------------
	|
	| 对应 package.json / appGroupName
	|
	|--------------------------------------------------------------------------
	*/

	const LIB_NAME$1 = 'comps-art';

	// Proxy only: implementations are prepared by the host before this module is evaluated.

	const dtlib = helLibProxy.exposeLib(LIB_NAME$1);
	const LIB_NAME = dtlib.LIB_NAME;
	const ArtBackToTop = dtlib.ArtBackToTop;
	const ArtBarChart = dtlib.ArtBarChart;
	const ArtBarChartCard = dtlib.ArtBarChartCard;
	const ArtBasicBanner = dtlib.ArtBasicBanner;
	const ArtBreadcrumb = dtlib.ArtBreadcrumb;
	const ArtButtonMore = dtlib.ArtButtonMore;
	const ArtButtonTable = dtlib.ArtButtonTable;
	const ArtCardBanner = dtlib.ArtCardBanner;
	const ArtChatWindow = dtlib.ArtChatWindow;
	const ArtCountTo = dtlib.ArtCountTo;
	const ArtCutterImg = dtlib.ArtCutterImg;
	const ArtDataListCard = dtlib.ArtDataListCard;
	const ArtDonutChartCard = dtlib.ArtDonutChartCard;
	const ArtDragVerify = dtlib.ArtDragVerify;
	const ArtDualBarCompareChart = dtlib.ArtDualBarCompareChart;
	const ArtExcelExport = dtlib.ArtExcelExport;
	const ArtExcelImport = dtlib.ArtExcelImport;
	const ArtException = dtlib.ArtException;
	const ArtFastEnter = dtlib.ArtFastEnter;
	const ArtFestivalTextScroll = dtlib.ArtFestivalTextScroll;
	const ArtFireworksEffect = dtlib.ArtFireworksEffect;
	const ArtForm = dtlib.ArtForm;
	const ArtGlobalComponent = dtlib.ArtGlobalComponent;
	const ArtGlobalSearch = dtlib.ArtGlobalSearch;
	const ArtHBarChart = dtlib.ArtHBarChart;
	const ArtHeaderBar = dtlib.ArtHeaderBar;
	const ArtHorizontalMenu = dtlib.ArtHorizontalMenu;
	const ArtIconButton = dtlib.ArtIconButton;
	const ArtImageCard = dtlib.ArtImageCard;
	const ArtKLineChart = dtlib.ArtKLineChart;
	const ArtLineChart = dtlib.ArtLineChart;
	const ArtLineChartCard = dtlib.ArtLineChartCard;
	const ArtLogo = dtlib.ArtLogo;
	const ArtMapChart = dtlib.ArtMapChart;
	const ArtMenuRight = dtlib.ArtMenuRight;
	const ArtMixedMenu = dtlib.ArtMixedMenu;
	const ArtNotification = dtlib.ArtNotification;
	const ArtPageContent = dtlib.ArtPageContent;
	const ArtProgressCard = dtlib.ArtProgressCard;
	const ArtRadarChart = dtlib.ArtRadarChart;
	const ArtResultPage = dtlib.ArtResultPage;
	const ArtRingChart = dtlib.ArtRingChart;
	const ArtScatterChart = dtlib.ArtScatterChart;
	const ArtScreenLock = dtlib.ArtScreenLock;
	const ArtSearchBar = dtlib.ArtSearchBar;
	const ArtSettingsPanel = dtlib.ArtSettingsPanel;
	const ArtSidebarMenu = dtlib.ArtSidebarMenu;
	const ArtStatsCard = dtlib.ArtStatsCard;
	const ArtSvgIcon = dtlib.ArtSvgIcon;
	const ArtTable = dtlib.ArtTable;
	const ArtTableHeader = dtlib.ArtTableHeader;
	const ArtTextScroll = dtlib.ArtTextScroll;
	const ArtTimelineListCard = dtlib.ArtTimelineListCard;
	const ArtVideoPlayer = dtlib.ArtVideoPlayer;
	const ArtWangEditor = dtlib.ArtWangEditor;
	const ArtWatermark = dtlib.ArtWatermark;
	const ArtWorkTab = dtlib.ArtWorkTab;
	const AuthTopBar = dtlib.AuthTopBar;
	const CommentWidget = dtlib.CommentWidget;
	const LoginLeftView = dtlib.LoginLeftView;
	const ThemeSvg = dtlib.ThemeSvg;
	const components = dtlib.components;
	const install = dtlib.install;
	const installArtComponents = dtlib.installArtComponents;
	const setupArtRuntime = dtlib.setupArtRuntime;
	const getArtRuntime = dtlib.getArtRuntime;
	const getArtEnv = dtlib.getArtEnv;
	const isArtRuntimeInjected = dtlib.isArtRuntimeInjected;

	exports.ArtBackToTop = ArtBackToTop;
	exports.ArtBarChart = ArtBarChart;
	exports.ArtBarChartCard = ArtBarChartCard;
	exports.ArtBasicBanner = ArtBasicBanner;
	exports.ArtBreadcrumb = ArtBreadcrumb;
	exports.ArtButtonMore = ArtButtonMore;
	exports.ArtButtonTable = ArtButtonTable;
	exports.ArtCardBanner = ArtCardBanner;
	exports.ArtChatWindow = ArtChatWindow;
	exports.ArtCountTo = ArtCountTo;
	exports.ArtCutterImg = ArtCutterImg;
	exports.ArtDataListCard = ArtDataListCard;
	exports.ArtDonutChartCard = ArtDonutChartCard;
	exports.ArtDragVerify = ArtDragVerify;
	exports.ArtDualBarCompareChart = ArtDualBarCompareChart;
	exports.ArtExcelExport = ArtExcelExport;
	exports.ArtExcelImport = ArtExcelImport;
	exports.ArtException = ArtException;
	exports.ArtFastEnter = ArtFastEnter;
	exports.ArtFestivalTextScroll = ArtFestivalTextScroll;
	exports.ArtFireworksEffect = ArtFireworksEffect;
	exports.ArtForm = ArtForm;
	exports.ArtGlobalComponent = ArtGlobalComponent;
	exports.ArtGlobalSearch = ArtGlobalSearch;
	exports.ArtHBarChart = ArtHBarChart;
	exports.ArtHeaderBar = ArtHeaderBar;
	exports.ArtHorizontalMenu = ArtHorizontalMenu;
	exports.ArtIconButton = ArtIconButton;
	exports.ArtImageCard = ArtImageCard;
	exports.ArtKLineChart = ArtKLineChart;
	exports.ArtLineChart = ArtLineChart;
	exports.ArtLineChartCard = ArtLineChartCard;
	exports.ArtLogo = ArtLogo;
	exports.ArtMapChart = ArtMapChart;
	exports.ArtMenuRight = ArtMenuRight;
	exports.ArtMixedMenu = ArtMixedMenu;
	exports.ArtNotification = ArtNotification;
	exports.ArtPageContent = ArtPageContent;
	exports.ArtProgressCard = ArtProgressCard;
	exports.ArtRadarChart = ArtRadarChart;
	exports.ArtResultPage = ArtResultPage;
	exports.ArtRingChart = ArtRingChart;
	exports.ArtScatterChart = ArtScatterChart;
	exports.ArtScreenLock = ArtScreenLock;
	exports.ArtSearchBar = ArtSearchBar;
	exports.ArtSettingsPanel = ArtSettingsPanel;
	exports.ArtSidebarMenu = ArtSidebarMenu;
	exports.ArtStatsCard = ArtStatsCard;
	exports.ArtSvgIcon = ArtSvgIcon;
	exports.ArtTable = ArtTable;
	exports.ArtTableHeader = ArtTableHeader;
	exports.ArtTextScroll = ArtTextScroll;
	exports.ArtTimelineListCard = ArtTimelineListCard;
	exports.ArtVideoPlayer = ArtVideoPlayer;
	exports.ArtWangEditor = ArtWangEditor;
	exports.ArtWatermark = ArtWatermark;
	exports.ArtWorkTab = ArtWorkTab;
	exports.AuthTopBar = AuthTopBar;
	exports.CommentWidget = CommentWidget;
	exports.LIB_NAME = LIB_NAME;
	exports.LoginLeftView = LoginLeftView;
	exports.ThemeSvg = ThemeSvg;
	exports.components = components;
	exports.default = dtlib;
	exports.dtlib = dtlib;
	exports.getArtEnv = getArtEnv;
	exports.getArtRuntime = getArtRuntime;
	exports.install = install;
	exports.installArtComponents = installArtComponents;
	exports.isArtRuntimeInjected = isArtRuntimeInjected;
	exports.setupArtRuntime = setupArtRuntime;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
