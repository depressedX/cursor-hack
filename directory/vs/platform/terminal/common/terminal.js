import '../../../../require.js';
import '../../../../exports.js';
import '../../instantiation/common/instantiation.js';
import '../../contextkey/common/contextkey.js';
import '../../registry/common/platform.js';
define(de[117], he([1, 0, 5, 8, 30]), function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/,
 i /*contextkey*/,
 w /*platform*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$YJ =
					e.$XJ =
					e.$WJ =
					e.TerminalExitReason =
					e.ShellIntegrationStatus =
					e.ProfileSource =
					e.FlowControlConstants =
					e.LocalReconnectConstants =
					e.TerminalLocationString =
					e.TerminalLocation =
					e.HeartbeatConstants =
					e.$VJ =
					e.ProcessPropertyType =
					e.TerminalIpcChannels =
					e.TitleEventSource =
					e.GeneralShellType =
					e.WindowsShellType =
					e.PosixShellType =
					e.TerminalSettingId =
					e.TerminalSettingPrefix =
					e.$UJ =
						void 0),
				(e.$UJ = new i.$5j("terminalTabFocusMode", !1, !0));
			var E;
			(function (y) {
				(y.AutomationProfile = "terminal.integrated.automationProfile."),
					(y.DefaultProfile = "terminal.integrated.defaultProfile."),
					(y.Profiles = "terminal.integrated.profiles.");
			})(E || (e.TerminalSettingPrefix = E = {}));
			var C;
			(function (y) {
				(y.SendKeybindingsToShell =
					"terminal.integrated.sendKeybindingsToShell"),
					(y.AutomationProfileLinux =
						"terminal.integrated.automationProfile.linux"),
					(y.AutomationProfileMacOs =
						"terminal.integrated.automationProfile.osx"),
					(y.AutomationProfileWindows =
						"terminal.integrated.automationProfile.windows"),
					(y.ProfilesWindows = "terminal.integrated.profiles.windows"),
					(y.ProfilesMacOs = "terminal.integrated.profiles.osx"),
					(y.ProfilesLinux = "terminal.integrated.profiles.linux"),
					(y.DefaultProfileLinux = "terminal.integrated.defaultProfile.linux"),
					(y.DefaultProfileMacOs = "terminal.integrated.defaultProfile.osx"),
					(y.DefaultProfileWindows =
						"terminal.integrated.defaultProfile.windows"),
					(y.UseWslProfiles = "terminal.integrated.useWslProfiles"),
					(y.TabsDefaultColor = "terminal.integrated.tabs.defaultColor"),
					(y.TabsDefaultIcon = "terminal.integrated.tabs.defaultIcon"),
					(y.TabsEnabled = "terminal.integrated.tabs.enabled"),
					(y.TabsEnableAnimation = "terminal.integrated.tabs.enableAnimation"),
					(y.TabsHideCondition = "terminal.integrated.tabs.hideCondition"),
					(y.TabsShowActiveTerminal =
						"terminal.integrated.tabs.showActiveTerminal"),
					(y.TabsShowActions = "terminal.integrated.tabs.showActions"),
					(y.TabsLocation = "terminal.integrated.tabs.location"),
					(y.TabsFocusMode = "terminal.integrated.tabs.focusMode"),
					(y.MacOptionIsMeta = "terminal.integrated.macOptionIsMeta"),
					(y.MacOptionClickForcesSelection =
						"terminal.integrated.macOptionClickForcesSelection"),
					(y.AltClickMovesCursor = "terminal.integrated.altClickMovesCursor"),
					(y.CopyOnSelection = "terminal.integrated.copyOnSelection"),
					(y.EnableMultiLinePasteWarning =
						"terminal.integrated.enableMultiLinePasteWarning"),
					(y.DrawBoldTextInBrightColors =
						"terminal.integrated.drawBoldTextInBrightColors"),
					(y.FontFamily = "terminal.integrated.fontFamily"),
					(y.FontSize = "terminal.integrated.fontSize"),
					(y.LetterSpacing = "terminal.integrated.letterSpacing"),
					(y.LineHeight = "terminal.integrated.lineHeight"),
					(y.MinimumContrastRatio = "terminal.integrated.minimumContrastRatio"),
					(y.TabStopWidth = "terminal.integrated.tabStopWidth"),
					(y.FastScrollSensitivity =
						"terminal.integrated.fastScrollSensitivity"),
					(y.MouseWheelScrollSensitivity =
						"terminal.integrated.mouseWheelScrollSensitivity"),
					(y.BellDuration = "terminal.integrated.bellDuration"),
					(y.FontWeight = "terminal.integrated.fontWeight"),
					(y.FontWeightBold = "terminal.integrated.fontWeightBold"),
					(y.CursorBlinking = "terminal.integrated.cursorBlinking"),
					(y.CursorStyle = "terminal.integrated.cursorStyle"),
					(y.CursorStyleInactive = "terminal.integrated.cursorStyleInactive"),
					(y.CursorWidth = "terminal.integrated.cursorWidth"),
					(y.Scrollback = "terminal.integrated.scrollback"),
					(y.DetectLocale = "terminal.integrated.detectLocale"),
					(y.DefaultLocation = "terminal.integrated.defaultLocation"),
					(y.GpuAcceleration = "terminal.integrated.gpuAcceleration"),
					(y.TerminalTitleSeparator = "terminal.integrated.tabs.separator"),
					(y.TerminalTitle = "terminal.integrated.tabs.title"),
					(y.TerminalDescription = "terminal.integrated.tabs.description"),
					(y.RightClickBehavior = "terminal.integrated.rightClickBehavior"),
					(y.MiddleClickBehavior = "terminal.integrated.middleClickBehavior"),
					(y.Cwd = "terminal.integrated.cwd"),
					(y.ConfirmOnExit = "terminal.integrated.confirmOnExit"),
					(y.ConfirmOnKill = "terminal.integrated.confirmOnKill"),
					(y.EnableBell = "terminal.integrated.enableBell"),
					(y.EnableVisualBell = "terminal.integrated.enableVisualBell"),
					(y.CommandsToSkipShell = "terminal.integrated.commandsToSkipShell"),
					(y.AllowChords = "terminal.integrated.allowChords"),
					(y.AllowMnemonics = "terminal.integrated.allowMnemonics"),
					(y.TabFocusMode = "terminal.integrated.tabFocusMode"),
					(y.EnvMacOs = "terminal.integrated.env.osx"),
					(y.EnvLinux = "terminal.integrated.env.linux"),
					(y.EnvWindows = "terminal.integrated.env.windows"),
					(y.EnvironmentChangesIndicator =
						"terminal.integrated.environmentChangesIndicator"),
					(y.EnvironmentChangesRelaunch =
						"terminal.integrated.environmentChangesRelaunch"),
					(y.ExperimentalWindowsUseConptyDll =
						"terminal.integrated.experimental.windowsUseConptyDll"),
					(y.ShowExitAlert = "terminal.integrated.showExitAlert"),
					(y.SplitCwd = "terminal.integrated.splitCwd"),
					(y.WindowsEnableConpty = "terminal.integrated.windowsEnableConpty"),
					(y.WordSeparators = "terminal.integrated.wordSeparators"),
					(y.EnableFileLinks = "terminal.integrated.enableFileLinks"),
					(y.AllowedLinkSchemes = "terminal.integrated.allowedLinkSchemes"),
					(y.UnicodeVersion = "terminal.integrated.unicodeVersion"),
					(y.EnablePersistentSessions =
						"terminal.integrated.enablePersistentSessions"),
					(y.PersistentSessionReviveProcess =
						"terminal.integrated.persistentSessionReviveProcess"),
					(y.HideOnStartup = "terminal.integrated.hideOnStartup"),
					(y.CustomGlyphs = "terminal.integrated.customGlyphs"),
					(y.RescaleOverlappingGlyphs =
						"terminal.integrated.rescaleOverlappingGlyphs"),
					(y.PersistentSessionScrollback =
						"terminal.integrated.persistentSessionScrollback"),
					(y.InheritEnv = "terminal.integrated.inheritEnv"),
					(y.ShowLinkHover = "terminal.integrated.showLinkHover"),
					(y.IgnoreProcessNames = "terminal.integrated.ignoreProcessNames"),
					(y.AutoReplies = "terminal.integrated.autoReplies"),
					(y.ShellIntegrationEnabled =
						"terminal.integrated.shellIntegration.enabled"),
					(y.ShellIntegrationShowWelcome =
						"terminal.integrated.shellIntegration.showWelcome"),
					(y.ShellIntegrationDecorationsEnabled =
						"terminal.integrated.shellIntegration.decorationsEnabled"),
					(y.ShellIntegrationCommandHistory =
						"terminal.integrated.shellIntegration.history"),
					(y.EnableImages = "terminal.integrated.enableImages"),
					(y.SmoothScrolling = "terminal.integrated.smoothScrolling"),
					(y.IgnoreBracketedPasteMode =
						"terminal.integrated.ignoreBracketedPasteMode"),
					(y.FocusAfterRun = "terminal.integrated.focusAfterRun"),
					(y.DeveloperPtyHostLatency =
						"terminal.integrated.developer.ptyHost.latency"),
					(y.DeveloperPtyHostStartupDelay =
						"terminal.integrated.developer.ptyHost.startupDelay"),
					(y.DevMode = "terminal.integrated.developer.devMode");
			})(C || (e.TerminalSettingId = C = {}));
			var d;
			(function (y) {
				(y.Bash = "bash"),
					(y.Fish = "fish"),
					(y.Sh = "sh"),
					(y.Csh = "csh"),
					(y.Ksh = "ksh"),
					(y.Zsh = "zsh");
			})(d || (e.PosixShellType = d = {}));
			var m;
			(function (y) {
				(y.CommandPrompt = "cmd"), (y.Wsl = "wsl"), (y.GitBash = "gitbash");
			})(m || (e.WindowsShellType = m = {}));
			var r;
			(function (y) {
				(y.PowerShell = "pwsh"),
					(y.Python = "python"),
					(y.Julia = "julia"),
					(y.NuShell = "nu");
			})(r || (e.GeneralShellType = r = {}));
			var u;
			(function (y) {
				(y[(y.Api = 0)] = "Api"),
					(y[(y.Process = 1)] = "Process"),
					(y[(y.Sequence = 2)] = "Sequence"),
					(y[(y.Config = 3)] = "Config");
			})(u || (e.TitleEventSource = u = {}));
			var a;
			(function (y) {
				(y.LocalPty = "localPty"),
					(y.PtyHost = "ptyHost"),
					(y.PtyHostWindow = "ptyHostWindow"),
					(y.Logger = "logger"),
					(y.Heartbeat = "heartbeat");
			})(a || (e.TerminalIpcChannels = a = {}));
			var h;
			(function (y) {
				(y.Cwd = "cwd"),
					(y.InitialCwd = "initialCwd"),
					(y.FixedDimensions = "fixedDimensions"),
					(y.Title = "title"),
					(y.ShellType = "shellType"),
					(y.HasChildProcesses = "hasChildProcesses"),
					(y.ResolvedShellLaunchConfig = "resolvedShellLaunchConfig"),
					(y.OverrideDimensions = "overrideDimensions"),
					(y.FailedShellIntegrationActivation =
						"failedShellIntegrationActivation"),
					(y.UsedShellIntegrationInjection = "usedShellIntegrationInjection");
			})(h || (e.ProcessPropertyType = h = {})),
				(e.$VJ = (0, t.$Mi)("ptyService"));
			var c;
			(function (y) {
				(y[(y.BeatInterval = 5e3)] = "BeatInterval"),
					(y[(y.ConnectingBeatInterval = 2e4)] = "ConnectingBeatInterval"),
					(y[(y.FirstWaitMultiplier = 1.2)] = "FirstWaitMultiplier"),
					(y[(y.SecondWaitMultiplier = 1)] = "SecondWaitMultiplier"),
					(y[(y.CreateProcessTimeout = 5e3)] = "CreateProcessTimeout");
			})(c || (e.HeartbeatConstants = c = {}));
			var n;
			(function (y) {
				(y[(y.Panel = 1)] = "Panel"), (y[(y.Editor = 2)] = "Editor");
			})(n || (e.TerminalLocation = n = {}));
			var g;
			(function (y) {
				(y.TerminalView = "view"), (y.Editor = "editor");
			})(g || (e.TerminalLocationString = g = {}));
			var p;
			(function (y) {
				(y[(y.GraceTime = 6e4)] = "GraceTime"),
					(y[(y.ShortGraceTime = 6e3)] = "ShortGraceTime");
			})(p || (e.LocalReconnectConstants = p = {}));
			var o;
			(function (y) {
				(y[(y.HighWatermarkChars = 1e5)] = "HighWatermarkChars"),
					(y[(y.LowWatermarkChars = 5e3)] = "LowWatermarkChars"),
					(y[(y.CharCountAckSize = 5e3)] = "CharCountAckSize");
			})(o || (e.FlowControlConstants = o = {}));
			var f;
			(function (y) {
				(y.GitBash = "Git Bash"), (y.Pwsh = "PowerShell");
			})(f || (e.ProfileSource = f = {}));
			var b;
			(function (y) {
				(y[(y.Off = 0)] = "Off"),
					(y[(y.FinalTerm = 1)] = "FinalTerm"),
					(y[(y.VSCode = 2)] = "VSCode");
			})(b || (e.ShellIntegrationStatus = b = {}));
			var s;
			(function (y) {
				(y[(y.Unknown = 0)] = "Unknown"),
					(y[(y.Shutdown = 1)] = "Shutdown"),
					(y[(y.Process = 2)] = "Process"),
					(y[(y.User = 3)] = "User"),
					(y[(y.Extension = 4)] = "Extension");
			})(s || (e.TerminalExitReason = s = {})),
				(e.$WJ = {
					Backend: "workbench.contributions.terminal.processBackend",
				});
			class l {
				constructor() {
					this.a = new Map();
				}
				get backends() {
					return this.a;
				}
				registerTerminalBackend($) {
					const v = this.b($.remoteAuthority);
					if (this.a.has(v))
						throw new Error(
							`A terminal backend with remote authority '${v}' was already registered.`,
						);
					this.a.set(v, $);
				}
				getTerminalBackend($) {
					return this.a.get(this.b($));
				}
				b($) {
					return $?.toLowerCase() ?? "";
				}
			}
			w.$Io.add(e.$WJ.Backend, new l()),
				(e.$XJ = (0, t.$Mi)("localPtyService")),
				(e.$YJ = (0, t.$Mi)("terminalLogService"));
		}),
		