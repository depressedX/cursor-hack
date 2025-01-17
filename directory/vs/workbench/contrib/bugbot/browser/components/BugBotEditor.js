import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../aiMarkdown/browser/markdown.js';
import './BugLocationCodeBlock.js';
import '../../../ui/browser/scrollableDiv.js';
import './BugBotSimpleButton.js';
import '../../../../../base/common/codicons.js';
import '../../../controlCommon/browser/solid.js';
import '../../../ui/browser/hooks/useVSHoverTooltip.js';
import '../../../../../base/browser/ui/hover/hoverWidget.js';
import '../utils.js';
import '../../../ui/browser/ModalComponent.js';
import '../../../aichat/browser/components/ChatError.js';
import '../../../../../base/common/themables.js';
import '../../../ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../../../../../base/common/path.js';
import '../../../../../css!vs/workbench/contrib/bugbot/browser/components/BugBotEditor.js';
define(
			de[4258],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 13, 338, 4182, 135, 1377, 14, 36, 422,
				160, 1269, 815, 862, 26, 156, 54, 2386,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2zc = void 0);
				const S = (0, t.template)("<span>Custom Instructions: "),
					I = (0, t.template)(
						'<span class="bugbot-uncommitted-changes">(including working tree changes)',
					),
					T = (0, t.template)(
						'<div class="bugbot-commit-info"><span class="bugbot-commit-info-header">Comparing branches: <!> &lt;-> </span><span>Commit: <!> - </span><span>Author: </span><span>Date: ',
					),
					P = (0, t.template)(
						'<span class="bugbot-background-badge"><span class="codicon codicon-eye"></span>This report was generated in the background at no cost to you. We will occasionally run background analysis for a subset of users to help improve this feature.',
					),
					k = (0, t.template)('<span class="bugbot-model-name">'),
					L = (0, t.template)(
						'<span class="bugbot-iterations">\u2022 <!> iterations',
					),
					D = (0, t.template)(
						'<div class="bugbot-generation-info"><span></span><span class="bugbot-id">',
					),
					M = (0, t.template)(
						'<div class="bugbot-modal-warning"><p><strong>\u26A0\uFE0F Do not reload the window or quit the app</strong></p><p>Bug Finder is still analyzing your code. Reloading or quitting the editor will interrupt the analysis and any detected bugs will be lost. You may safely close this tab (you can re-open it later from the Bug Finder sidebar).',
					),
					N = (0, t.template)(
						'<div class="bugbot-status-footer"><div class="bugbot-status-header"><span class="bugbot-loading-icon codicon codicon-loadin"></span><div class="bugbot-status-text">',
					),
					A = (0, t.template)('<div class="bugbot-status-footer">'),
					R = (0, t.template)(
						'<div class="bugbot-stats-wrapper"><div class="bugbot-stats"><div class="bugbot-stat"><span class="bugbot-stat-value"></span><span>input tokens</span></div><div class="bugbot-stat"><span class="bugbot-stat-value"></span><span>output tokens</span></div><div class="bugbot-stat total"><span class="bugbot-stat-value"></span><span>total tokens</span></div></div><div class="bugbot-stats"><div class="bugbot-stat"><span class="bugbot-stat-value"></span><span>input cost</span></div><div class="bugbot-stat"><span class="bugbot-stat-value"></span><span>output cost</span></div><div class="bugbot-stat total"><span class="bugbot-stat-value"></span><span>total cost',
					),
					O = (0, t.template)(
						'<div class="bugbot-editor-wrapper"><div class="bugbot-editor-header"><div class="bugbot-editor-title"><h2>Bug Report</h2><div class="bugbot-actions"></div></div><div class="bugbot-metadata"><div class="bugbot-metadata-container"><div><span>Generated </span></div></div></div></div><div class="bugbot-editor-content">',
					),
					B = (0, t.template)(
						"<div><h2>Delete Bug Report</h2><p>Are you sure you want to delete this bug finder report? This action cannot be undone.</p><div>",
					),
					U = (0, t.template)('<div class="bugbot-editor">'),
					z = (0, t.template)(
						'<div class="bugbot-no-reports"><span>No bugs were found in the analyzed code.',
					),
					F = (0, t.template)("<span>"),
					x = (0, t.template)(
						'<div><div class="bugbot-bug-header"><div class="bugbot-bug-header-left"><span>Bug </span><div class="bugbot-file-pills"></div></div><div><div class="bugbot-confidence-group"><span class="bugbot-confidence-value">% confidence</span><div class="bugbot-confidence-bar"><div class="bugbot-confidence-fill"></div></div></div></div></div><div class="bugbot-bug-report-content"><div class="bugbot-actions-group"><div></div></div><div class="bugbot-bug-report-text">',
					),
					H = (0, t.template)('<span class="bugbot-file-pill">'),
					q = (0, t.template)('<div class="bugbot-bug-location">'),
					V = (ie) => (ie ? `$${ie.toFixed(2)}` : "-"),
					G = "bugbot-bug-report",
					K = "bugbot-bug-report-text",
					J = "data-bug-report-id",
					W = (ie) => (ie ? ie.toLocaleString() : "-"),
					X = 5e3,
					Y = (ie) => {
						const ne = (0, p.$odc)(),
							{
								composerService: ee,
								workspaceContextService: _,
								bugbotService: te,
							} = ne,
							[Q, Z] = (0, u.createSignal)(!1),
							{ showHover: se, hideHover: re } = (0, o.$z$b)(300),
							le = (0, u.createMemo)(
								() =>
									ne.reactiveStorageService.applicationUserPersistentStorage
										.composerState.unification,
							);
						(0, u.createEffect)(() => {
							(ie.bugbot.status.type === "errored" ||
								ie.bugbot.status.type === "completed") &&
								ne.bugbotDataService.updateBugBotData(ie.bugbot.bugbotId, {
									isUnread: !1,
								});
						});
						const oe = (me) =>
								me < 0.25 ? "low" : me < 0.6 ? "medium" : "high",
							ae = () => {
								Z(!0);
							},
							pe = async () => {
								try {
									ne.bugbotDataService.deleteBugBot(ie.bugbot.bugbotId),
										Z(!1),
										ie.onClose?.();
								} catch (me) {
									console.error("Error deleting bug finder report:", me);
								}
							};
						(0, u.createEffect)(() => {});
						const $e = () => {
								const me = ie.bugbot.usage?.processedCost || 0,
									ve = ie.bugbot.usage?.thinkingCost || 0;
								return V(me + ve);
							},
							ye = (0, u.createMemo)(() =>
								[...(ie.bugbot.bugReports?.bugReports || [])].sort(
									(me, ve) => (ve.confidence || 0) - (me.confidence || 0),
								),
							),
							ue = (me) => {
								Q() &&
									(me.key === "Enter" ? pe() : me.key === "Escape" && Z(!1));
							};
						(0, u.createEffect)(() => {
							Q() &&
								(ne.window.addEventListener("keydown", ue),
								(0, u.onCleanup)(() => {
									ne.window.removeEventListener("keydown", ue);
								}));
						});
						let fe;
						return (
							(0, u.onMount)(() => {
								const me = ne.window.setInterval(() => {
									const ve = ne.window.document.querySelectorAll(`.${G}`),
										ge = ne.window.document.querySelector(
											".part.panel.basepanel.bottom",
										),
										be = fe?.getBoundingClientRect(),
										Ce = be?.bottom ?? ne.window.innerHeight,
										Le = be?.top ?? 0,
										Fe = ge?.getBoundingClientRect().top ?? 0,
										Oe = Fe > 10 ? Math.min(Fe, Ce) : Ce,
										xe = Fe > 10 ? Math.min(Fe, Le) : Le;
									function He(Je) {
										const Te = Je.height;
										if (Te <= 0) return 0;
										const Ee = Math.max(xe, Je.top),
											Ie = Math.min(Oe, Je.bottom),
											Be = Math.max(0, Ie - Ee);
										return Math.min((Be / Te) * 100, 100);
									}
									const Ke = [];
									ve.forEach((Je) => {
										const Te = Je.getBoundingClientRect(),
											Ee = Je.getAttribute(J);
										if (!Ee || ie.bugbot.resolvedBugs[Ee]) return;
										const Ie = He(Te),
											Se = Je.querySelector(`.${K}`)?.getBoundingClientRect(),
											ke = Se ? He(Se) : 0;
										Ke.push([Ee, { fullPercentage: Ie, textPercentage: ke }]);
									}),
										Ke.length > 0 &&
											te.reportViewSideEffects(ie.bugbot.bugbotId, X / 1e3, Ke);
								}, X);
								(0, u.onCleanup)(() => {
									ne.window.clearInterval(me), te.flushTelemetry();
								});
							}),
							(() => {
								const me = U(),
									ve = fe;
								return (
									typeof ve == "function" ? (0, r.use)(ve, me) : (fe = me),
									(0, d.insert)(
										me,
										(0, m.createComponent)(c.$w0b, {
											style: { height: "100%" },
											scrollingDirection: "vertical",
											get children() {
												const ge = O(),
													be = ge.firstChild,
													Ce = be.firstChild,
													Le = Ce.firstChild,
													Fe = Le.nextSibling,
													Oe = Ce.nextSibling,
													xe = Oe.firstChild,
													He = xe.firstChild,
													Ke = He.firstChild,
													Je = Ke.firstChild,
													Te = be.nextSibling;
												return (
													(0, d.insert)(
														Fe,
														(0, m.createComponent)(n.$lzc, {
															onMouseEnter: (Ee) =>
																se({
																	target: Ee.target,
																	content: "Delete Bug Report",
																	position: {
																		hoverPosition: f.HoverPosition.BELOW,
																	},
																}),
															onMouseLeave: re,
															type: "secondary",
															get codicon() {
																return g.$ak.trash;
															},
															onClick: ae,
														}),
													),
													He.style.setProperty("display", "flex"),
													He.style.setProperty("flex-direction", "column"),
													He.style.setProperty("gap", "4px"),
													(0, d.insert)(
														Ke,
														() =>
															new Date(ie.bugbot.createdAt).toLocaleString(),
														null,
													),
													(0, d.insert)(
														He,
														(0, m.createComponent)(u.Show, {
															get when() {
																return (
																	ie.bugbot.customInstructions &&
																	ie.bugbot.customInstructions.length > 0
																);
															},
															get children() {
																const Ee = S(),
																	Ie = Ee.firstChild;
																return (
																	(0, d.insert)(
																		Ee,
																		() => ie.bugbot.customInstructions,
																		null,
																	),
																	Ee
																);
															},
														}),
														null,
													),
													(0, d.insert)(
														He,
														(0, m.createComponent)(u.Show, {
															get when() {
																return ie.bugbot.branch && ie.bugbot.commit;
															},
															get children() {
																const Ee = T(),
																	Ie = Ee.firstChild,
																	Be = Ie.firstChild,
																	Se = Be.nextSibling,
																	ke = Se.nextSibling,
																	Ue = Ie.nextSibling,
																	qe = Ue.firstChild,
																	Ae = qe.nextSibling,
																	Me = Ae.nextSibling,
																	De = Ue.nextSibling,
																	Re = De.firstChild,
																	je = De.nextSibling,
																	Ve = je.firstChild;
																return (
																	(0, d.insert)(
																		Ie,
																		() => ie.bugbot.baseBranch,
																		Se,
																	),
																	(0, d.insert)(
																		Ie,
																		() => ie.bugbot.branch,
																		null,
																	),
																	(0, d.insert)(
																		Ie,
																		(0, m.createComponent)(u.Show, {
																			get when() {
																				return ie.bugbot.includeUncommitted;
																			},
																			get children() {
																				return I();
																			},
																		}),
																		null,
																	),
																	(0, d.insert)(
																		Ue,
																		() => ie.bugbot.commit?.sha.slice(0, 7),
																		Ae,
																	),
																	(0, d.insert)(
																		Ue,
																		() => ie.bugbot.commit?.message,
																		null,
																	),
																	(0, d.insert)(
																		De,
																		() => ie.bugbot.commit?.author,
																		null,
																	),
																	(0, d.insert)(
																		je,
																		() =>
																			new Date(
																				ie.bugbot.commit?.date || "",
																			).toLocaleString(),
																		null,
																	),
																	Ee
																);
															},
														}),
														null,
													),
													(0, d.insert)(
														xe,
														(0, m.createComponent)(u.Show, {
															get when() {
																return ie.bugbot.isBackground;
															},
															get children() {
																return P();
															},
														}),
														null,
													),
													(0, d.insert)(
														Oe,
														(0, m.createComponent)(u.Show, {
															get when() {
																return (
																	ie.bugbot.generationInfo &&
																	ne.serverConfigService.cachedServerConfig
																		.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers
																);
															},
															get children() {
																const Ee = D(),
																	Ie = Ee.firstChild,
																	Be = Ie.nextSibling;
																return (
																	(0, d.insert)(
																		Ie,
																		(0, m.createComponent)(u.Show, {
																			get when() {
																				return ie.bugbot.generationInfo
																					?.modelNameUsed;
																			},
																			get children() {
																				const Se = k();
																				return (
																					(0, d.insert)(
																						Se,
																						() =>
																							ie.bugbot.generationInfo
																								?.modelNameUsed,
																					),
																					Se
																				);
																			},
																		}),
																		null,
																	),
																	(0, d.insert)(
																		Ie,
																		(0, m.createComponent)(u.Show, {
																			get when() {
																				return ie.bugbot.generationInfo
																					?.iterations;
																			},
																			get children() {
																				const Se = L(),
																					ke = Se.firstChild,
																					Ue = ke.nextSibling,
																					qe = Ue.nextSibling;
																				return (
																					(0, d.insert)(
																						Se,
																						() =>
																							ie.bugbot.generationInfo
																								?.iterations,
																						Ue,
																					),
																					Se
																				);
																			},
																		}),
																		null,
																	),
																	(0, d.insert)(Be, () => ie.bugbot.bugbotId),
																	Ee
																);
															},
														}),
														null,
													),
													(0, d.insert)(
														ge,
														(0, m.createComponent)(u.Show, {
															get when() {
																return ie.bugbot.status.type === "generating";
															},
															get children() {
																return M();
															},
														}),
														Te,
													),
													(0, d.insert)(
														Te,
														(0, m.createComponent)(u.For, {
															get each() {
																return ye();
															},
															get fallback() {
																return (0, m.createComponent)(u.Show, {
																	get when() {
																		return (
																			ie.bugbot.status.type === "completed"
																		);
																	},
																	get children() {
																		return z();
																	},
																});
															},
															children: (Ee, Ie) => {
																const Be = (0, u.createMemo)(
																		() => ie.bugbot.resolvedBugs[Ee.id],
																	),
																	[Se, ke] = (0, u.createSignal)(0);
																(0, u.createEffect)(() => {
																	Be() || ke((De) => De + 1);
																});
																const Ue = (0, u.createMemo)(
																		() =>
																			ie.bugbot.bugFeedback[Ee.id] === "good",
																	),
																	qe = (0, u.createMemo)(
																		() =>
																			ie.bugbot.bugFeedback[Ee.id] === "bad",
																	),
																	Ae = (De) => {
																		te.userFeedbackSideEffects(
																			ie.bugbot.bugbotId,
																			Ee.id,
																			De,
																		);
																	},
																	Me = (De) => {
																		if (
																			(De === "good" && Ue()) ||
																			(De === "bad" && qe())
																		) {
																			ne.bugbotDataService.updateBugBotData(
																				ie.bugbot.bugbotId,
																				{
																					bugFeedback: {
																						...ie.bugbot.bugFeedback,
																						[Ee.id]: void 0,
																					},
																				},
																			),
																				Ae(void 0);
																			return;
																		}
																		if (
																			(ne.bugbotDataService.updateBugBotData(
																				ie.bugbot.bugbotId,
																				{
																					resolvedBugs: {
																						...ie.bugbot.resolvedBugs,
																						[Ee.id]: !Be(),
																					},
																				},
																			),
																			De === "good" || De === "bad")
																		) {
																			ne.bugbotDataService.updateBugBotData(
																				ie.bugbot.bugbotId,
																				{
																					bugFeedback: {
																						...ie.bugbot.bugFeedback,
																						[Ee.id]: De,
																					},
																				},
																			),
																				Ae(De);
																			const Re = ye()[Ie() + 1];
																			Re &&
																				ie.bugbot.resolvedBugs[Re.id] &&
																				!ie.bugbot.bugFeedback[Re.id] &&
																				ne.bugbotDataService.updateBugBotData(
																					ie.bugbot.bugbotId,
																					{
																						resolvedBugs: {
																							...ie.bugbot.resolvedBugs,
																							[Re.id]: !1,
																						},
																					},
																				);
																		}
																	};
																return (() => {
																	const De = x(),
																		Re = De.firstChild,
																		je = Re.firstChild,
																		Ve = je.firstChild,
																		Ze = Ve.firstChild,
																		et = Ve.nextSibling,
																		rt = je.nextSibling,
																		ft = rt.firstChild,
																		bt = ft.firstChild,
																		nt = bt.firstChild,
																		lt = bt.nextSibling,
																		ct = lt.firstChild,
																		gt = Re.nextSibling,
																		ht = gt.firstChild,
																		Rt = ht.firstChild,
																		Nt = ht.nextSibling;
																	return (
																		(0, E.spread)(
																			De,
																			(0, C.mergeProps)(
																				{
																					get class() {
																						return `${G} ${Be() ? "resolved" : ""}`;
																					},
																					get style() {
																						return {
																							"padding-bottom": Be()
																								? "12px"
																								: "18px",
																							"padding-top": "12px",
																						};
																					},
																				},
																				() => ({ [J]: Ee.id }),
																			),
																			!1,
																			!0,
																		),
																		Re.addEventListener("click", (jt) => {
																			jt.target === jt.currentTarget && Me();
																		}),
																		je.addEventListener("click", (jt) => {
																			Me();
																		}),
																		(0, d.insert)(
																			je,
																			(0, m.createComponent)(n.$lzc, {
																				get class() {
																					return `bugbot-resolve-button ${Be() ? "resolved" : ""}`;
																				},
																				codiconStyle: { "font-size": "14px" },
																				get codicon() {
																					return g.$ak.chevronDown;
																				},
																				type: "secondary",
																			}),
																			Ve,
																		),
																		(0, d.insert)(Ve, () => Ie() + 1, null),
																		(0, d.insert)(
																			je,
																			(0, m.createComponent)(u.Show, {
																				get when() {
																					return Ue();
																				},
																				get children() {
																					const jt = F();
																					return (
																						(0, w.effect)(() =>
																							(0, i.className)(
																								jt,
																								`${y.ThemeIcon.asClassName(g.$ak.passFilled)} bugbot-feedback-icon good`,
																							),
																						),
																						jt
																					);
																				},
																			}),
																			et,
																		),
																		(0, d.insert)(
																			je,
																			(0, m.createComponent)(u.Show, {
																				get when() {
																					return qe();
																				},
																				get children() {
																					const jt = F();
																					return (
																						(0, w.effect)(() =>
																							(0, i.className)(
																								jt,
																								`${y.ThemeIcon.asClassName(g.$ak.error)} bugbot-feedback-icon bad`,
																							),
																						),
																						jt
																					);
																				},
																			}),
																			et,
																		),
																		(0, d.insert)(
																			et,
																			(0, m.createComponent)(u.For, {
																				get each() {
																					return [
																						...new Set(
																							Ee.locations.map((jt) =>
																								(0, v.$sc)(jt.file),
																							),
																						),
																					];
																				},
																				children: (jt) =>
																					(() => {
																						const ti = H();
																						return (
																							(0, d.insert)(
																								ti,
																								(0, m.createComponent)($.$k$b, {
																									fileName: jt,
																									get workspaceContextService() {
																										return ne.workspaceContextService;
																									},
																									get modelService() {
																										return ne.modelService;
																									},
																									get languageService() {
																										return ne.languageService;
																									},
																								}),
																								null,
																							),
																							(0, d.insert)(ti, jt, null),
																							ti
																						);
																					})(),
																			}),
																		),
																		rt.addEventListener("click", (jt) => {
																			jt.stopPropagation();
																		}),
																		(0, d.insert)(
																			bt,
																			() =>
																				Math.round((Ee.confidence || 0) * 100),
																			nt,
																		),
																		(0, d.insert)(
																			ht,
																			(0, m.createComponent)(n.$lzc, {
																				get codicon() {
																					return g.$ak.arrowRight;
																				},
																				title: "Fix in Composer",
																				onClick: () => {
																					te.fixInComposerSideEffects(
																						ie.bugbot.bugbotId,
																						Ee.id,
																					),
																						ee.fixBugReport(
																							Ee,
																							Object.fromEntries(
																								Object.entries(
																									ie.bugbot.fileSnapshots,
																								).map(([jt, ti]) => [
																									jt,
																									(0, b.$Pyc)(ti),
																								]),
																							),
																							Object.fromEntries(
																								Object.entries(
																									ie.bugbot
																										.fileSnapshotsPreDiff,
																								).map(([jt, ti]) => [
																									jt,
																									(0, b.$Pyc)(ti),
																								]),
																							),
																						);
																				},
																			}),
																			Rt,
																		),
																		(0, d.insert)(
																			ht,
																			(0, m.createComponent)(n.$lzc, {
																				get codicon() {
																					return g.$ak.plus;
																				},
																				get title() {
																					return le()
																						? "Add to Composer"
																						: "Add to Chat";
																				},
																				type: "secondary",
																				onClick: async () => {
																					const jt = le()
																						? ne.composerDataService
																								.selectedComposerId
																						: ne.composerDataService
																								.selectedChatId;
																					await ne.composerViewsService.showAndFocus(
																						jt,
																					),
																						te.addToChatSideEffects(
																							ie.bugbot.bugbotId,
																							Ee.id,
																						);
																					const ti =
																							ne.chatDataService.chatData
																								.selectedTabId ??
																							ne.chatDataService.chatData
																								.tabs[0].tabId,
																						kt =
																							ne.chatDataService.chatData.tabs.find(
																								(Xe) => Xe.tabId === ti,
																							),
																						hi =
																							kt.bubbles[kt.bubbles.length - 1]
																								.id,
																						Kt = new Set(),
																						di = await (0, b.$Qyc)({
																							report: Ee,
																							fileSnapshots:
																								ie.bugbot.fileSnapshots,
																							fileSnapshotsPreDiff:
																								ie.bugbot.fileSnapshotsPreDiff,
																							workspaceContextService:
																								ne.workspaceContextService,
																							modelService: ne.modelService,
																							editorWorkerService:
																								ne.editorWorkerService,
																						});
																					di &&
																						ne.composerService.addContext({
																							composerId: jt,
																							contextType: "selections",
																							value: di,
																							shouldShowPreview: !1,
																						});
																					const Ye = new Set();
																					for (const Xe of Ee.locations) {
																						const It =
																							ne.workspaceContextService.resolveRelativePath(
																								Xe.file,
																							);
																						Kt.add(It), Ye.add(Xe.file);
																						const Lt =
																							ie.bugbot.fileSnapshots[Xe.file];
																						if (!Lt) continue;
																						const xt = (0, b.$Pyc)(Lt);
																						if (!xt) continue;
																						const Vt = (0, b.$Ryc)(
																							Xe,
																							xt,
																							ne.workspaceContextService,
																							ne.languageService,
																						);
																						Vt &&
																							ne.composerService.addContext({
																								composerId: jt,
																								contextType: "selections",
																								value: Vt,
																								shouldShowPreview: !1,
																							});
																					}
																					for (const Xe of Kt)
																						ne.composerService.addContext({
																							composerId: jt,
																							contextType: "fileSelections",
																							value: { uri: Xe },
																							shouldShowPreview: !1,
																						});
																					const ze = (0, b.$Syc)({
																						report: Ee,
																						workspaceContextService:
																							ne.workspaceContextService,
																						fileLocations: Array.from(Ye),
																					});
																					ze &&
																						ne.composerService.addContext({
																							composerId: jt,
																							contextType: "selections",
																							value: ze,
																							shouldShowPreview: !0,
																						}),
																						await ne.aiChatService.show();
																				},
																			}),
																			Rt,
																		),
																		Rt.style.setProperty("flex-grow", "1"),
																		(0, d.insert)(
																			ht,
																			(0, m.createComponent)(n.$lzc, {
																				get codicon() {
																					return g.$ak.circleSlash;
																				},
																				title: "Unhelpful",
																				type: "secondary",
																				onClick: () => {
																					Me("bad");
																				},
																			}),
																			null,
																		),
																		(0, d.insert)(
																			ht,
																			(0, m.createComponent)(n.$lzc, {
																				get codicon() {
																					return g.$ak.thumbsup;
																				},
																				title: "Good Find",
																				type: "secondary",
																				onClick: () => {
																					Me("good");
																				},
																			}),
																			null,
																		),
																		(0, d.insert)(
																			Nt,
																			(0, m.createComponent)(a.$4$b, {
																				get rawText() {
																					return Ee.description;
																				},
																				finished: !0,
																				get codeBlockProps() {
																					return { shouldRecompute: Se() };
																				},
																			}),
																		),
																		(0, d.insert)(
																			De,
																			(0, m.createComponent)(u.For, {
																				get each() {
																					return Ee.locations;
																				},
																				children: (jt) => {
																					const ti =
																							ie.bugbot.fileSnapshots[jt.file],
																						kt =
																							ie.bugbot.fileSnapshotsPreDiff[
																								jt.file
																							];
																					return (() => {
																						const hi = q();
																						return (
																							(0, d.insert)(
																								hi,
																								(0, m.createComponent)(h.$1zc, {
																									get bugbotId() {
																										return ie.bugbot.bugbotId;
																									},
																									location: jt,
																									report: Ee,
																									get delegate() {
																										return ie.delegate;
																									},
																									fileSnapshot: ti,
																									fileSnapshotPreDiff: kt,
																								}),
																							),
																							hi
																						);
																					})();
																				},
																			}),
																			null,
																		),
																		(0, w.effect)(
																			(jt) => {
																				const ti = `bugbot-bug-confidence bugbot-confidence-${oe(Ee.confidence || 0)}`,
																					kt = `${(Ee.confidence || 0) * 100}%`;
																				return (
																					ti !== jt._v$ &&
																						(0, i.className)(rt, (jt._v$ = ti)),
																					kt !== jt._v$2 &&
																						((jt._v$2 = kt) != null
																							? ct.style.setProperty(
																									"width",
																									kt,
																								)
																							: ct.style.removeProperty(
																									"width",
																								)),
																					jt
																				);
																			},
																			{ _v$: void 0, _v$2: void 0 },
																		),
																		De
																	);
																})();
															},
														}),
													),
													(0, d.insert)(
														ge,
														(0, m.createComponent)(u.Show, {
															get when() {
																return ie.bugbot.status.type === "generating";
															},
															get children() {
																const Ee = N(),
																	Ie = Ee.firstChild,
																	Be = Ie.firstChild,
																	Se = Be.nextSibling;
																return (
																	(0, d.insert)(
																		Se,
																		() =>
																			ie.bugbot.status.message ||
																			"Analyzing code...",
																	),
																	Ee
																);
															},
														}),
														null,
													),
													(0, d.insert)(
														ge,
														(0, m.createComponent)(u.Show, {
															get when() {
																return ie.bugbot.status.type === "errored";
															},
															get children() {
																const Ee = A();
																return (
																	(0, d.insert)(
																		Ee,
																		(0, m.createComponent)(l.$0ac, {
																			get generationUUID() {
																				return ie.bugbot.bugbotId;
																			},
																			get error() {
																				return ie.bugbot.status.errorDetails;
																			},
																			get message() {
																				return ie.bugbot.status.message;
																			},
																			rerun: void 0,
																			extraDetail:
																				"(Don't worry, you did not get charged.)",
																		}),
																	),
																	Ee
																);
															},
														}),
														null,
													),
													(0, d.insert)(
														ge,
														(0, m.createComponent)(u.Show, {
															get when() {
																return (
																	ie.bugbot.status.type === "completed" &&
																	ie.bugbot.usage &&
																	ne.serverConfigService.cachedServerConfig
																		.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers
																);
															},
															get children() {
																const Ee = R(),
																	Ie = Ee.firstChild,
																	Be = Ie.firstChild,
																	Se = Be.firstChild,
																	ke = Be.nextSibling,
																	Ue = ke.firstChild,
																	qe = ke.nextSibling,
																	Ae = qe.firstChild,
																	Me = Ie.nextSibling,
																	De = Me.firstChild,
																	Re = De.firstChild,
																	je = De.nextSibling,
																	Ve = je.firstChild,
																	Ze = je.nextSibling,
																	et = Ze.firstChild;
																return (
																	(0, d.insert)(Se, () =>
																		W(ie.bugbot.usage?.processedTokens),
																	),
																	(0, d.insert)(Ue, () =>
																		W(ie.bugbot.usage?.thinkingTokens),
																	),
																	(0, d.insert)(Ae, () =>
																		W(
																			(ie.bugbot.usage?.processedTokens || 0) +
																				(ie.bugbot.usage?.thinkingTokens || 0),
																		),
																	),
																	(0, d.insert)(Re, () =>
																		V(ie.bugbot.usage?.processedCost),
																	),
																	(0, d.insert)(Ve, () =>
																		V(ie.bugbot.usage?.thinkingCost),
																	),
																	(0, d.insert)(et, $e),
																	Ee
																);
															},
														}),
														null,
													),
													ge
												);
											},
										}),
										null,
									),
									(0, d.insert)(
										me,
										(0, m.createComponent)(u.Show, {
											get when() {
												return Q();
											},
											get children() {
												return (0, m.createComponent)(s.$fzc, {
													isOpen: !0,
													onClose: () => Z(!1),
													style: { padding: "1rem" },
													get children() {
														const ge = B(),
															be = ge.firstChild,
															Ce = be.nextSibling,
															Le = Ce.nextSibling;
														return (
															ge.style.setProperty("display", "flex"),
															ge.style.setProperty("flex-direction", "column"),
															ge.style.setProperty("gap", "1rem"),
															be.style.setProperty("font-size", "1rem"),
															be.style.setProperty("margin", "0"),
															Ce.style.setProperty("margin", "0"),
															Le.style.setProperty("display", "flex"),
															Le.style.setProperty("gap", "0.5rem"),
															Le.style.setProperty(
																"justify-content",
																"flex-end",
															),
															(0, d.insert)(
																Le,
																(0, m.createComponent)(n.$lzc, {
																	type: "secondary",
																	title: "Cancel",
																	onClick: () => Z(!1),
																}),
																null,
															),
															(0, d.insert)(
																Le,
																(0, m.createComponent)(n.$lzc, {
																	type: "danger",
																	title: "Delete",
																	onClick: pe,
																}),
																null,
															),
															ge
														);
													},
												});
											},
										}),
										null,
									),
									me
								);
							})()
						);
					};
				e.$2zc = Y;
			},
		),
		