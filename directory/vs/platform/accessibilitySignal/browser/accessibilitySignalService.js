import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/cache.js';
import '../../../base/common/equals.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/network.js';
import '../../../base/common/observable.js';
import '../../../base/common/observableInternal/utils.js';
import '../../../nls.js';
import '../../accessibility/common/accessibility.js';
import '../../configuration/common/configuration.js';
import '../../instantiation/common/instantiation.js';
import '../../observable/common/platformObservableUtils.js';
import '../../telemetry/common/telemetry.js';
define(
			de[184],
			he([1, 0, 744, 433, 3, 23, 77, 457, 4, 91, 10, 5, 326, 32]),
			function (ce /*require*/,
 e /*exports*/,
 t /*cache*/,
 i /*equals*/,
 w /*lifecycle*/,
 E /*network*/,
 C /*observable*/,
 d /*utils*/,
 m /*nls*/,
 r /*accessibility*/,
 u /*configuration*/,
 a /*instantiation*/,
 h /*platformObservableUtils*/,
 c /*telemetry*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Twb = e.$Swb = e.$Rwb = e.$Qwb = e.$Pwb = e.$Owb = void 0),
					(e.$Owb = (0, a.$Mi)("accessibilitySignalService")),
					(e.$Pwb = Symbol("AcknowledgeDocCommentsToken"));
				let n = class extends w.$1c {
					constructor(l, y, $) {
						super(),
							(this.f = l),
							(this.g = y),
							(this.h = $),
							(this.a = new Map()),
							(this.b = (0, C.observableFromEvent)(
								this,
								this.g.onDidChangeScreenReaderOptimized,
								() => this.g.isScreenReaderOptimized(),
							)),
							(this.c = new Set()),
							(this.n = new Set()),
							(this.q = new t.$gf((v) =>
								(0, h.$Mwb)(
									v.settingsKey,
									{ sound: "off", announcement: "off" },
									this.f,
								),
							)),
							(this.r = new t.$gf({ getCacheKey: i.$fd }, (v) =>
								(0, C.derived)((S) => {
									const I = this.q.get(v.signal).read(S);
									return !!(
										((v.modality === "sound" || v.modality === void 0) &&
											g(I.sound, () => this.b.read(S), v.userGesture)) ||
										((v.modality === "announcement" || v.modality === void 0) &&
											g(I.announcement, () => this.b.read(S), v.userGesture))
									);
								}).recomputeInitiallyAndOnChange(this.B),
							));
					}
					getEnabledState(l, y, $) {
						return new d.$Md(
							this.r.get({ signal: l, userGesture: y, modality: $ }),
						);
					}
					async playSignal(l, y = {}) {
						const $ = y.modality === "announcement" || y.modality === void 0,
							v = l.announcementMessage;
						$ &&
							this.isAnnouncementEnabled(l, y.userGesture) &&
							v &&
							this.g.status(v),
							(y.modality === "sound" || y.modality === void 0) &&
								this.isSoundEnabled(l, y.userGesture) &&
								(this.j(l, y.source),
								await this.playSound(
									l.sound.getSound(),
									y.allowManyInParallel,
								));
					}
					async playSignals(l) {
						for (const S of l)
							this.j(
								"signal" in S ? S.signal : S,
								"source" in S ? S.source : void 0,
							);
						const y = l.map((S) => ("signal" in S ? S.signal : S)),
							$ = y
								.filter((S) => this.isAnnouncementEnabled(S))
								.map((S) => S.announcementMessage);
						$.length && this.g.status($.join(", "));
						const v = new Set(
							y
								.filter((S) => this.isSoundEnabled(S))
								.map((S) => S.sound.getSound()),
						);
						await Promise.all(Array.from(v).map((S) => this.playSound(S, !0)));
					}
					j(l, y) {
						const $ = this.g.isScreenReaderOptimized(),
							v =
								l.name +
								(y ? `::${y}` : "") +
								($ ? "{screenReaderOptimized}" : "");
						this.c.has(v) ||
							this.m() === 0 ||
							(this.c.add(v),
							this.h.publicLog2("signal.played", {
								signal: l.name,
								source: y ?? "",
								isScreenReaderOptimized: $,
							}));
					}
					m() {
						const l = this.f.getValue("accessibility.signalOptions.volume");
						return typeof l != "number" ? 50 : Math.max(Math.min(l, 100), 0);
					}
					async playSound(l, y = !1) {
						if (!y && this.n.has(l)) return;
						this.n.add(l);
						const $ = E.$7g
							.asBrowserUri(
								`vs/platform/accessibilitySignal/browser/media/${l.fileName}`,
							)
							.toString(!0);
						try {
							const v = this.a.get($);
							if (v)
								(v.volume = this.m() / 100),
									(v.currentTime = 0),
									await v.play();
							else {
								const S = await p($, this.m() / 100);
								this.a.set($, S);
							}
						} catch (v) {
							v.message.includes(
								"play() can only be initiated by a user gesture",
							) || console.error("Error while playing sound", v);
						} finally {
							this.n.delete(l);
						}
					}
					playSignalLoop(l, y) {
						let $ = !0;
						const v = () => {
							$ &&
								this.playSignal(l, { allowManyInParallel: !0 }).finally(() => {
									setTimeout(() => {
										$ && v();
									}, y);
								});
						};
						return v(), (0, w.$Yc)(() => ($ = !1));
					}
					isAnnouncementEnabled(l, y) {
						return l.announcementMessage
							? this.r
									.get({
										signal: l,
										userGesture: !!y,
										modality: "announcement",
									})
									.get()
							: !1;
					}
					isSoundEnabled(l, y) {
						return this.r
							.get({ signal: l, userGesture: !!y, modality: "sound" })
							.get();
					}
					onSoundEnabledChanged(l) {
						return this.getEnabledState(l, !1).onDidChange;
					}
					getDelayMs(l, y, $) {
						if (
							!this.f.getValue(
								"accessibility.signalOptions.debouncePositionChanges",
							)
						)
							return 0;
						let v;
						return (
							l.name === b.errorAtPosition.name && $ === "positional"
								? (v = this.f.getValue(
										"accessibility.signalOptions.experimental.delays.errorAtPosition",
									))
								: l.name === b.warningAtPosition.name && $ === "positional"
									? (v = this.f.getValue(
											"accessibility.signalOptions.experimental.delays.warningAtPosition",
										))
									: (v = this.f.getValue(
											"accessibility.signalOptions.experimental.delays.general",
										)),
							y === "sound" ? v.sound : v.announcement
						);
					}
				};
				(e.$Qwb = n),
					(e.$Qwb = n = Ne([j(0, u.$gj), j(1, r.$XK), j(2, c.$km)], n));
				function g(s, l, y) {
					return (
						s === "on" ||
						s === "always" ||
						(s === "auto" && l()) ||
						(s === "userGesture" && y)
					);
				}
				function p(s, l) {
					return new Promise((y, $) => {
						const v = new Audio(s);
						(v.volume = l),
							v.addEventListener("ended", () => {
								y(v);
							}),
							v.addEventListener("error", (S) => {
								$(S.error);
							}),
							v.play().catch((S) => {
								$(S);
							});
					});
				}
				class o {
					static a(l) {
						return new o(l.fileName);
					}
					static {
						this.error = o.a({ fileName: "error.mp3" });
					}
					static {
						this.warning = o.a({ fileName: "warning.mp3" });
					}
					static {
						this.success = o.a({ fileName: "success.mp3" });
					}
					static {
						this.foldedArea = o.a({ fileName: "foldedAreas.mp3" });
					}
					static {
						this.break = o.a({ fileName: "break.mp3" });
					}
					static {
						this.quickFixes = o.a({ fileName: "quickFixes.mp3" });
					}
					static {
						this.taskCompleted = o.a({ fileName: "taskCompleted.mp3" });
					}
					static {
						this.taskFailed = o.a({ fileName: "taskFailed.mp3" });
					}
					static {
						this.terminalBell = o.a({ fileName: "terminalBell.mp3" });
					}
					static {
						this.diffLineInserted = o.a({ fileName: "diffLineInserted.mp3" });
					}
					static {
						this.diffLineDeleted = o.a({ fileName: "diffLineDeleted.mp3" });
					}
					static {
						this.diffLineModified = o.a({ fileName: "diffLineModified.mp3" });
					}
					static {
						this.chatRequestSent = o.a({ fileName: "chatRequestSent.mp3" });
					}
					static {
						this.chatResponseReceived1 = o.a({
							fileName: "chatResponseReceived1.mp3",
						});
					}
					static {
						this.chatResponseReceived2 = o.a({
							fileName: "chatResponseReceived2.mp3",
						});
					}
					static {
						this.chatResponseReceived3 = o.a({
							fileName: "chatResponseReceived3.mp3",
						});
					}
					static {
						this.chatResponseReceived4 = o.a({
							fileName: "chatResponseReceived4.mp3",
						});
					}
					static {
						this.clear = o.a({ fileName: "clear.mp3" });
					}
					static {
						this.save = o.a({ fileName: "save.mp3" });
					}
					static {
						this.format = o.a({ fileName: "format.mp3" });
					}
					static {
						this.voiceRecordingStarted = o.a({
							fileName: "voiceRecordingStarted.mp3",
						});
					}
					static {
						this.voiceRecordingStopped = o.a({
							fileName: "voiceRecordingStopped.mp3",
						});
					}
					static {
						this.progress = o.a({ fileName: "progress.mp3" });
					}
					constructor(l) {
						this.fileName = l;
					}
				}
				e.$Rwb = o;
				class f {
					constructor(l) {
						this.randomOneOf = l;
					}
					getSound(l = !1) {
						if (l || this.randomOneOf.length === 1) return this.randomOneOf[0];
						{
							const y = Math.floor(Math.random() * this.randomOneOf.length);
							return this.randomOneOf[y];
						}
					}
				}
				e.$Swb = f;
				class b {
					constructor(l, y, $, v, S, I) {
						(this.sound = l),
							(this.name = y),
							(this.legacySoundSettingsKey = $),
							(this.settingsKey = v),
							(this.legacyAnnouncementSettingsKey = S),
							(this.announcementMessage = I);
					}
					static {
						this.a = new Set();
					}
					static b(l) {
						const y = new f(
								"randomOneOf" in l.sound ? l.sound.randomOneOf : [l.sound],
							),
							$ = new b(
								y,
								l.name,
								l.legacySoundSettingsKey,
								l.settingsKey,
								l.legacyAnnouncementSettingsKey,
								l.announcementMessage,
							);
						return b.a.add($), $;
					}
					static get allAccessibilitySignals() {
						return [...this.a];
					}
					static {
						this.errorAtPosition = b.b({
							name: (0, m.localize)(1595, null),
							sound: o.error,
							announcementMessage: (0, m.localize)(1596, null),
							settingsKey: "accessibility.signals.positionHasError",
							delaySettingsKey:
								"accessibility.signalOptions.delays.errorAtPosition",
						});
					}
					static {
						this.warningAtPosition = b.b({
							name: (0, m.localize)(1597, null),
							sound: o.warning,
							announcementMessage: (0, m.localize)(1598, null),
							settingsKey: "accessibility.signals.positionHasWarning",
							delaySettingsKey:
								"accessibility.signalOptions.delays.warningAtPosition",
						});
					}
					static {
						this.errorOnLine = b.b({
							name: (0, m.localize)(1599, null),
							sound: o.error,
							legacySoundSettingsKey: "audioCues.lineHasError",
							legacyAnnouncementSettingsKey: "accessibility.alert.error",
							announcementMessage: (0, m.localize)(1600, null),
							settingsKey: "accessibility.signals.lineHasError",
						});
					}
					static {
						this.warningOnLine = b.b({
							name: (0, m.localize)(1601, null),
							sound: o.warning,
							legacySoundSettingsKey: "audioCues.lineHasWarning",
							legacyAnnouncementSettingsKey: "accessibility.alert.warning",
							announcementMessage: (0, m.localize)(1602, null),
							settingsKey: "accessibility.signals.lineHasWarning",
						});
					}
					static {
						this.foldedArea = b.b({
							name: (0, m.localize)(1603, null),
							sound: o.foldedArea,
							legacySoundSettingsKey: "audioCues.lineHasFoldedArea",
							legacyAnnouncementSettingsKey: "accessibility.alert.foldedArea",
							announcementMessage: (0, m.localize)(1604, null),
							settingsKey: "accessibility.signals.lineHasFoldedArea",
						});
					}
					static {
						this.break = b.b({
							name: (0, m.localize)(1605, null),
							sound: o.break,
							legacySoundSettingsKey: "audioCues.lineHasBreakpoint",
							legacyAnnouncementSettingsKey: "accessibility.alert.breakpoint",
							announcementMessage: (0, m.localize)(1606, null),
							settingsKey: "accessibility.signals.lineHasBreakpoint",
						});
					}
					static {
						this.inlineSuggestion = b.b({
							name: (0, m.localize)(1607, null),
							sound: o.quickFixes,
							legacySoundSettingsKey: "audioCues.lineHasInlineSuggestion",
							settingsKey: "accessibility.signals.lineHasInlineSuggestion",
						});
					}
					static {
						this.terminalQuickFix = b.b({
							name: (0, m.localize)(1608, null),
							sound: o.quickFixes,
							legacySoundSettingsKey: "audioCues.terminalQuickFix",
							legacyAnnouncementSettingsKey:
								"accessibility.alert.terminalQuickFix",
							announcementMessage: (0, m.localize)(1609, null),
							settingsKey: "accessibility.signals.terminalQuickFix",
						});
					}
					static {
						this.onDebugBreak = b.b({
							name: (0, m.localize)(1610, null),
							sound: o.break,
							legacySoundSettingsKey: "audioCues.onDebugBreak",
							legacyAnnouncementSettingsKey: "accessibility.alert.onDebugBreak",
							announcementMessage: (0, m.localize)(1611, null),
							settingsKey: "accessibility.signals.onDebugBreak",
						});
					}
					static {
						this.noInlayHints = b.b({
							name: (0, m.localize)(1612, null),
							sound: o.error,
							legacySoundSettingsKey: "audioCues.noInlayHints",
							legacyAnnouncementSettingsKey: "accessibility.alert.noInlayHints",
							announcementMessage: (0, m.localize)(1613, null),
							settingsKey: "accessibility.signals.noInlayHints",
						});
					}
					static {
						this.taskCompleted = b.b({
							name: (0, m.localize)(1614, null),
							sound: o.taskCompleted,
							legacySoundSettingsKey: "audioCues.taskCompleted",
							legacyAnnouncementSettingsKey:
								"accessibility.alert.taskCompleted",
							announcementMessage: (0, m.localize)(1615, null),
							settingsKey: "accessibility.signals.taskCompleted",
						});
					}
					static {
						this.taskFailed = b.b({
							name: (0, m.localize)(1616, null),
							sound: o.taskFailed,
							legacySoundSettingsKey: "audioCues.taskFailed",
							legacyAnnouncementSettingsKey: "accessibility.alert.taskFailed",
							announcementMessage: (0, m.localize)(1617, null),
							settingsKey: "accessibility.signals.taskFailed",
						});
					}
					static {
						this.terminalCommandFailed = b.b({
							name: (0, m.localize)(1618, null),
							sound: o.error,
							legacySoundSettingsKey: "audioCues.terminalCommandFailed",
							legacyAnnouncementSettingsKey:
								"accessibility.alert.terminalCommandFailed",
							announcementMessage: (0, m.localize)(1619, null),
							settingsKey: "accessibility.signals.terminalCommandFailed",
						});
					}
					static {
						this.terminalCommandSucceeded = b.b({
							name: (0, m.localize)(1620, null),
							sound: o.success,
							announcementMessage: (0, m.localize)(1621, null),
							settingsKey: "accessibility.signals.terminalCommandSucceeded",
						});
					}
					static {
						this.terminalBell = b.b({
							name: (0, m.localize)(1622, null),
							sound: o.terminalBell,
							legacySoundSettingsKey: "audioCues.terminalBell",
							legacyAnnouncementSettingsKey: "accessibility.alert.terminalBell",
							announcementMessage: (0, m.localize)(1623, null),
							settingsKey: "accessibility.signals.terminalBell",
						});
					}
					static {
						this.notebookCellCompleted = b.b({
							name: (0, m.localize)(1624, null),
							sound: o.taskCompleted,
							legacySoundSettingsKey: "audioCues.notebookCellCompleted",
							legacyAnnouncementSettingsKey:
								"accessibility.alert.notebookCellCompleted",
							announcementMessage: (0, m.localize)(1625, null),
							settingsKey: "accessibility.signals.notebookCellCompleted",
						});
					}
					static {
						this.notebookCellFailed = b.b({
							name: (0, m.localize)(1626, null),
							sound: o.taskFailed,
							legacySoundSettingsKey: "audioCues.notebookCellFailed",
							legacyAnnouncementSettingsKey:
								"accessibility.alert.notebookCellFailed",
							announcementMessage: (0, m.localize)(1627, null),
							settingsKey: "accessibility.signals.notebookCellFailed",
						});
					}
					static {
						this.diffLineInserted = b.b({
							name: (0, m.localize)(1628, null),
							sound: o.diffLineInserted,
							legacySoundSettingsKey: "audioCues.diffLineInserted",
							settingsKey: "accessibility.signals.diffLineInserted",
						});
					}
					static {
						this.diffLineDeleted = b.b({
							name: (0, m.localize)(1629, null),
							sound: o.diffLineDeleted,
							legacySoundSettingsKey: "audioCues.diffLineDeleted",
							settingsKey: "accessibility.signals.diffLineDeleted",
						});
					}
					static {
						this.diffLineModified = b.b({
							name: (0, m.localize)(1630, null),
							sound: o.diffLineModified,
							legacySoundSettingsKey: "audioCues.diffLineModified",
							settingsKey: "accessibility.signals.diffLineModified",
						});
					}
					static {
						this.chatRequestSent = b.b({
							name: (0, m.localize)(1631, null),
							sound: o.chatRequestSent,
							legacySoundSettingsKey: "audioCues.chatRequestSent",
							legacyAnnouncementSettingsKey:
								"accessibility.alert.chatRequestSent",
							announcementMessage: (0, m.localize)(1632, null),
							settingsKey: "accessibility.signals.chatRequestSent",
						});
					}
					static {
						this.chatResponseReceived = b.b({
							name: (0, m.localize)(1633, null),
							legacySoundSettingsKey: "audioCues.chatResponseReceived",
							sound: {
								randomOneOf: [
									o.chatResponseReceived1,
									o.chatResponseReceived2,
									o.chatResponseReceived3,
									o.chatResponseReceived4,
								],
							},
							settingsKey: "accessibility.signals.chatResponseReceived",
						});
					}
					static {
						this.progress = b.b({
							name: (0, m.localize)(1634, null),
							sound: o.progress,
							legacySoundSettingsKey: "audioCues.chatResponsePending",
							legacyAnnouncementSettingsKey: "accessibility.alert.progress",
							announcementMessage: (0, m.localize)(1635, null),
							settingsKey: "accessibility.signals.progress",
						});
					}
					static {
						this.clear = b.b({
							name: (0, m.localize)(1636, null),
							sound: o.clear,
							legacySoundSettingsKey: "audioCues.clear",
							legacyAnnouncementSettingsKey: "accessibility.alert.clear",
							announcementMessage: (0, m.localize)(1637, null),
							settingsKey: "accessibility.signals.clear",
						});
					}
					static {
						this.save = b.b({
							name: (0, m.localize)(1638, null),
							sound: o.save,
							legacySoundSettingsKey: "audioCues.save",
							legacyAnnouncementSettingsKey: "accessibility.alert.save",
							announcementMessage: (0, m.localize)(1639, null),
							settingsKey: "accessibility.signals.save",
						});
					}
					static {
						this.format = b.b({
							name: (0, m.localize)(1640, null),
							sound: o.format,
							legacySoundSettingsKey: "audioCues.format",
							legacyAnnouncementSettingsKey: "accessibility.alert.format",
							announcementMessage: (0, m.localize)(1641, null),
							settingsKey: "accessibility.signals.format",
						});
					}
					static {
						this.voiceRecordingStarted = b.b({
							name: (0, m.localize)(1642, null),
							sound: o.voiceRecordingStarted,
							legacySoundSettingsKey: "audioCues.voiceRecordingStarted",
							settingsKey: "accessibility.signals.voiceRecordingStarted",
						});
					}
					static {
						this.voiceRecordingStopped = b.b({
							name: (0, m.localize)(1643, null),
							sound: o.voiceRecordingStopped,
							legacySoundSettingsKey: "audioCues.voiceRecordingStopped",
							settingsKey: "accessibility.signals.voiceRecordingStopped",
						});
					}
				}
				e.$Twb = b;
			},
		),
		