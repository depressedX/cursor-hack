import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../platform/terminal/common/terminal.js';
import '../terminal.js';
import '../../../../../platform/log/common/log.js';
import '../../../../../platform/notification/common/notification.js';
import './markNavigationAddon.js';
import '../../../../../nls.js';
import '../../../../../platform/theme/common/themeService.js';
import '../../../../common/theme.js';
import '../../common/terminalColorRegistry.js';
import '../../../../../platform/terminal/common/xterm/shellIntegrationAddon.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import './decorationAddon.js';
import '../../../../../platform/terminal/common/capabilities/capabilities.js';
import '../../../../../base/common/event.js';
import '../../../../../platform/telemetry/common/telemetry.js';
import '../../../../../amdX.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../common/terminalContextKey.js';
import '../../../../../platform/clipboard/common/clipboardService.js';
import '../../../../../base/common/decorators.js';
import '../../../../../base/browser/ui/scrollbar/scrollableElement.js';
import '../../../../../base/browser/mouseEvent.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../../platform/layout/browser/layoutService.js';
import '../../../../../platform/tooltipService/common/tooltipService.js';
import '../../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
import '../../../../../platform/theme/common/colorRegistry.js';
define(
			de[1299],
			he([
				1, 0, 7, 10, 3, 117, 107, 34, 40, 3165, 4, 35, 123, 512, 1202, 5, 3439,
				189, 6, 32, 536, 8, 237, 121, 138, 203, 168, 45, 180, 308, 184, 51,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*configuration*/,
				w /*lifecycle*/,
				E /*terminal*/,
				C /*terminal*/,
				d /*log*/,
				m /*notification*/,
				r /*markNavigationAddon*/,
				u /*nls*/,
				a /*themeService*/,
				h /*theme*/,
				c /*terminalColorRegistry*/,
				n /*shellIntegrationAddon*/,
				g /*instantiation*/,
				p /*decorationAddon*/,
				o /*capabilities*/,
				f /*event*/,
				b /*telemetry*/,
				s /*amdX*/,
				l /*contextkey*/,
				y /*terminalContextKey*/,
				$ /*clipboardService*/,
				v /*decorators*/,
				S /*scrollableElement*/,
				I /*mouseEvent*/,
				T /*reactiveStorageService*/,
				P /*layoutService*/,
				k /*tooltipService*/,
				L /*accessibilitySignalService*/,
				D /*colorRegistry*/,
) {
				"use strict";
				var M;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$Hb = void 0),
					(e.$_Hb = H),
					(t = mt(t));
				var N;
				(function (G) {
					G[(G.SmoothScrollDuration = 125)] = "SmoothScrollDuration";
				})(N || (N = {}));
				let A, R, O, B, U, z;
				function F(G, K) {
					let J = K.getLine(G);
					if (!J) return { lineData: void 0, lineIndex: G };
					let W = J.translateToString(!0);
					for (; G > 0 && J.isWrapped && ((J = K.getLine(--G)), !!J); )
						W = J.translateToString(!1) + W;
					return { lineData: W, lineIndex: G };
				}
				let x = class extends w.$1c {
					static {
						M = this;
					}
					*getBufferReverseIteratorFromCursor() {
						let { cursorX: K, cursorY: J } = this.raw.buffer.active;
						J += this.raw.buffer.active.baseY;
						let W = this.raw.buffer.active.getLine(J);
						if (W) {
							let X = W.translateToString(!0).substring(0, K);
							for (
								;
								J > 0 &&
								W.isWrapped &&
								((W = this.raw.buffer.active.getLine(--J)), !!W);
							)
								X = W.translateToString(!1) + X;
							yield X;
						}
						for (let X = J - 1; X >= 0; X--) {
							const { lineData: Y, lineIndex: ie } = F(
								X,
								this.raw.buffer.active,
							);
							Y && ((X = ie), yield Y);
						}
					}
					getBufferLength() {
						return this.raw.buffer.active.length;
					}
					getFirstLine() {
						return this.raw.buffer.active.viewportY;
					}
					getBufferLines(K, J, W = !1) {
						const X = [];
						for (let Y = K; Y < J; Y++) {
							const { lineData: ie } = F(Y, this.raw.buffer.active);
							(ie || !W) && X.push(ie ?? "");
						}
						return X;
					}
					static {
						this.b = void 0;
					}
					static {
						this.c = !1;
					}
					get findResult() {
						return this.G;
					}
					get isStdinDisabled() {
						return !!this.raw.options.disableStdin;
					}
					get isGpuAccelerated() {
						return !!this.s;
					}
					get markTracker() {
						return this.h;
					}
					get shellIntegration() {
						return this.j;
					}
					get textureAtlas() {
						const K = this.s?.textureAtlas;
						if (K) return createImageBitmap(K);
					}
					get isFocused() {
						return this.raw.element ? t.$Lgb(this.raw.element) : !1;
					}
					constructor(
						K,
						J,
						W,
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
					) {
						super(),
							(this.R = X),
							(this.S = Y),
							(this.U = ee),
							(this.W = _),
							(this.X = te),
							(this.Y = Q),
							(this.Z = Z),
							(this.$ = se),
							(this.ab = re),
							(this.bb = le),
							(this.cb = oe),
							(this.db = pe),
							(this.eb = $e),
							(this.g = S.$3hb.INSTANCE.isPhysicalMouseWheel()),
							(this.z = this.D(new w.$Zc())),
							(this.H = this.D(new f.$re())),
							(this.onDidRequestRunCommand = this.H.event),
							(this.I = this.D(new f.$re())),
							(this.onDidRequestFocus = this.I.event),
							(this.J = this.D(new f.$re())),
							(this.onDidRequestSendText = this.J.event),
							(this.L = this.D(new f.$re())),
							(this.onDidRequestFreePort = this.L.event),
							(this.M = this.D(new f.$re())),
							(this.onDidRequestRefreshDimensions = this.M.event),
							(this.N = this.D(new f.$re())),
							(this.onDidChangeFindResults = this.N.event),
							(this.O = this.D(new f.$re())),
							(this.onDidChangeSelection = this.O.event),
							(this.P = this.D(new f.$re())),
							(this.onDidChangeFocus = this.P.event),
							(this.Q = this.D(new f.$re())),
							(this.onDidDispose = this.Q.event);
						const ue = this.ab.getFont(t.$Ogb(), void 0, !0),
							fe = this.ab.config,
							me = this.U.getValue("editor");
						(this.raw = this.D(
							new K({
								allowProposedApi: !0,
								cols: J,
								rows: W,
								documentOverride: ye.mainContainer.ownerDocument,
								altClickMovesCursor:
									fe.altClickMovesCursor && me.multiCursorModifier === "alt",
								scrollback: fe.scrollback,
								theme: this.getXtermTheme(),
								drawBoldTextInBrightColors: fe.drawBoldTextInBrightColors,
								fontFamily: ue.fontFamily,
								fontWeight: fe.fontWeight,
								fontWeightBold: fe.fontWeightBold,
								fontSize: ue.fontSize,
								letterSpacing: ue.letterSpacing,
								lineHeight: ue.lineHeight,
								logLevel: q(this.X.getLevel()),
								logger: this.X,
								minimumContrastRatio: fe.minimumContrastRatio,
								tabStopWidth: fe.tabStopWidth,
								cursorBlink: fe.cursorBlinking,
								cursorStyle: V(fe.cursorStyle),
								cursorInactiveStyle: V(fe.cursorStyleInactive),
								cursorWidth: fe.cursorWidth,
								macOptionIsMeta: fe.macOptionIsMeta,
								macOptionClickForcesSelection: fe.macOptionClickForcesSelection,
								rightClickSelectsWord: fe.rightClickBehavior === "selectWord",
								fastScrollModifier: "alt",
								fastScrollSensitivity: fe.fastScrollSensitivity,
								scrollSensitivity: fe.mouseWheelScrollSensitivity,
								wordSeparator: fe.wordSeparators,
								overviewRuler: { width: 14, showTopBorder: !0 },
								ignoreBracketedPasteMode: fe.ignoreBracketedPasteMode,
								rescaleOverlappingGlyphs: fe.rescaleOverlappingGlyphs,
								windowOptions: {
									getWinSizePixels: !0,
									getCellSizePixels: !0,
									getWinSizeChars: !0,
								},
							}),
						)),
							this.gb(),
							(this.a = this.raw._core),
							this.D(
								this.U.onDidChangeConfiguration(async (ve) => {
									ve.affectsConfiguration(
										E.TerminalSettingId.GpuAcceleration,
									) && (M.b = void 0),
										(ve.affectsConfiguration("terminal.integrated") ||
											ve.affectsConfiguration("editor.fastScrollSensitivity") ||
											ve.affectsConfiguration(
												"editor.mouseWheelScrollSensitivity",
											) ||
											ve.affectsConfiguration("editor.multiCursorModifier")) &&
											this.updateConfig(),
										ve.affectsConfiguration(
											E.TerminalSettingId.UnicodeVersion,
										) && this.Bb(),
										ve.affectsConfiguration(
											E.TerminalSettingId.ShellIntegrationDecorationsEnabled,
										) && this.Ab();
								}),
							),
							this.D(this.Z.onDidColorThemeChange((ve) => this.Ab(ve))),
							this.D(
								this.X.onDidChangeLogLevel(
									(ve) => (this.raw.options.logLevel = q(ve)),
								),
							),
							this.D(
								this.raw.onSelectionChange(() => {
									this.O.fire(),
										this.isFocused && this.F.set(this.raw.hasSelection());
								}),
							),
							this.Bb(),
							(this.h = this.W.createInstance(r.$HHb, Y)),
							this.raw.loadAddon(this.h),
							(this.m = this.W.createInstance(p.$0Hb, this.S)),
							this.D(this.m.onDidRequestRunCommand((ve) => this.H.fire(ve))),
							this.raw.loadAddon(this.m),
							(this.j = new n.$RHb(ie, ne, this.$, this.X)),
							this.raw.loadAddon(this.j),
							this.tb().then((ve) => {
								(this.n = this.W.createInstance(ve, void 0, {
									async readText(ge) {
										return le.readText(ge === "p" ? "selection" : "clipboard");
									},
									async writeText(ge, be) {
										return le.writeText(
											be,
											ge === "p" ? "selection" : "clipboard",
										);
									},
								})),
									this.raw.loadAddon(this.n);
							}),
							(this.C = y.TerminalContextKeys.focusInAny.bindTo(ae)),
							(this.F = y.TerminalContextKeys.textSelectedInFocused.bindTo(ae));
					}
					*getBufferReverseIterator() {
						for (let K = this.raw.buffer.active.length; K >= 0; K--) {
							const { lineData: J, lineIndex: W } = F(
								K,
								this.raw.buffer.active,
							);
							J && ((K = W), yield J);
						}
					}
					async getContentsAsHtml() {
						if (!this.t) {
							const K = await this.yb();
							(this.t = new K()), this.raw.loadAddon(this.t);
						}
						return this.t.serializeAsHTML();
					}
					onRender(K) {
						return this.raw.onRender(K);
					}
					async getSelectionAsHtml(K) {
						if (!this.t) {
							const W = await this.yb();
							(this.t = new W()), this.raw.loadAddon(this.t);
						}
						if (K) {
							const W = K.getOutput()?.length,
								X = K.marker?.line;
							if (!W || !X)
								throw new Error(
									`No row ${X} or output length ${W} for command ${K}`,
								);
							this.raw.select(0, X + 1, W - Math.floor(W / this.raw.cols));
						}
						const J = this.t.serializeAsHTML({ onlySelection: !0 });
						return K && this.raw.clearSelection(), J;
					}
					attachToElement(K, J) {
						const W = { enableGpu: !0, ...J };
						if (
							(this.f || this.raw.open(K),
							W.enableGpu && this.hb() && this.qb(),
							!this.raw.element || !this.raw.textarea)
						)
							throw new Error("xterm elements not set after open");
						const X = this.z;
						return (
							X.clear(),
							X.add(
								t.$0fb(this.raw.textarea, "focus", () => {
									this.eb.registerEvent("terminal.focus"), this.fb(!0);
								}),
							),
							X.add(t.$0fb(this.raw.textarea, "blur", () => this.fb(!1))),
							X.add(t.$0fb(this.raw.textarea, "focusout", () => this.fb(!1))),
							X.add(
								t.$0fb(
									this.raw.element,
									t.$$gb.MOUSE_WHEEL,
									(Y) => {
										const ie = S.$3hb.INSTANCE;
										ie.acceptStandardWheelEvent(new I.$4fb(Y));
										const ne = ie.isPhysicalMouseWheel();
										ne !== this.g && ((this.g = ne), this.gb());
									},
									{ passive: !0 },
								),
							),
							(this.f = { container: K, options: W }),
							this.f?.container.querySelector(".xterm-screen")
						);
					}
					fb(K) {
						this.P.fire(K),
							this.C.set(K),
							this.F.set(K && this.raw.hasSelection());
					}
					write(K, J) {
						this.raw.write(K, J);
					}
					resize(K, J) {
						this.raw.resize(K, J);
					}
					updateConfig() {
						const K = this.ab.config;
						(this.raw.options.altClickMovesCursor = K.altClickMovesCursor),
							this.mb(K.cursorBlinking),
							this.nb(K.cursorStyle),
							this.ob(K.cursorStyleInactive),
							this.pb(K.cursorWidth),
							(this.raw.options.scrollback = K.scrollback),
							(this.raw.options.drawBoldTextInBrightColors =
								K.drawBoldTextInBrightColors),
							(this.raw.options.minimumContrastRatio = K.minimumContrastRatio),
							(this.raw.options.tabStopWidth = K.tabStopWidth),
							(this.raw.options.fastScrollSensitivity =
								K.fastScrollSensitivity),
							(this.raw.options.scrollSensitivity =
								K.mouseWheelScrollSensitivity),
							(this.raw.options.macOptionIsMeta = K.macOptionIsMeta);
						const J = this.U.getValue("editor");
						(this.raw.options.altClickMovesCursor =
							K.altClickMovesCursor && J.multiCursorModifier === "alt"),
							(this.raw.options.macOptionClickForcesSelection =
								K.macOptionClickForcesSelection),
							(this.raw.options.rightClickSelectsWord =
								K.rightClickBehavior === "selectWord"),
							(this.raw.options.wordSeparator = K.wordSeparators),
							(this.raw.options.customGlyphs = K.customGlyphs),
							(this.raw.options.ignoreBracketedPasteMode =
								K.ignoreBracketedPasteMode),
							(this.raw.options.rescaleOverlappingGlyphs =
								K.rescaleOverlappingGlyphs),
							(this.raw.options.overviewRuler = {
								width: 14,
								showTopBorder: !0,
							}),
							this.gb(),
							this.f?.options.enableGpu && (this.hb() ? this.qb() : this.zb());
					}
					gb() {
						this.raw.options.smoothScrollDuration =
							this.ab.config.smoothScrolling && this.g
								? N.SmoothScrollDuration
								: 0;
					}
					hb() {
						return (
							(this.ab.config.gpuAcceleration === "auto" && M.b === void 0) ||
							this.ab.config.gpuAcceleration === "on"
						);
					}
					forceRedraw() {
						this.raw.clearTextureAtlas();
					}
					clearDecorations() {
						this.m?.clearDecorations();
					}
					forceRefresh() {
						this.a.viewport?._innerRefresh();
					}
					async findNext(K, J) {
						return this.ib(J), (await this.kb()).findNext(K, J);
					}
					async findPrevious(K, J) {
						return this.ib(J), (await this.kb()).findPrevious(K, J);
					}
					ib(K) {
						const J = this.Z.getColorTheme(),
							W = J.getColor(c.$iHb) || J.getColor(h.$qFb),
							X = J.getColor(c.$vHb),
							Y = J.getColor(c.$xHb),
							ie = J.getColor(c.$sHb),
							ne = J.getColor(c.$yHb),
							ee = J.getColor(c.$zHb),
							_ = J.getColor(c.$AHb);
						K.decorations = {
							activeMatchBackground: X?.toString(),
							activeMatchBorder: Y?.toString() || "transparent",
							activeMatchColorOverviewRuler: ie?.toString() || "transparent",
							matchBackground: W ? ne?.blend(W).toString() : void 0,
							matchBorder: ee?.toString() || "transparent",
							matchOverviewRuler: _?.toString() || "transparent",
						};
					}
					kb() {
						return (
							this.jb ||
								(this.jb = this.vb().then(
									(K) => (
										(this.q = new K({
											highlightLimit:
												C.XtermTerminalConstants.SearchHighlightLimit,
										})),
										this.raw.loadAddon(this.q),
										this.q.onDidChangeResults((J) => {
											(this.G = J), this.N.fire(J);
										}),
										this.q
									),
								)),
							this.jb
						);
					}
					clearSearchDecorations() {
						this.q?.clearDecorations();
					}
					clearActiveSearchDecoration() {
						this.q?.clearActiveDecoration();
					}
					getFont() {
						return this.ab.getFont(t.getWindow(this.raw.element), this.a);
					}
					getLongestViewportWrappedLineLength() {
						let K = 0;
						for (
							let J = this.raw.buffer.active.length - 1;
							J >= this.raw.buffer.active.viewportY;
							J--
						) {
							const W = this.lb(J, this.raw.buffer.active);
							(K = Math.max(K, W.lineCount * this.raw.cols - W.endSpaces || 0)),
								(J = W.currentIndex);
						}
						return K;
					}
					lb(K, J) {
						let W = J.getLine(K);
						if (!W) throw new Error("Could not get line");
						let X = K,
							Y = 0;
						for (
							let ie = Math.min(W.length, this.raw.cols) - 1;
							ie >= 0 && !W?.getCell(ie)?.getChars();
							ie--
						)
							Y++;
						for (; W?.isWrapped && X > 0; ) X--, (W = J.getLine(X));
						return { lineCount: K - X + 1, currentIndex: X, endSpaces: Y };
					}
					scrollDownLine() {
						this.raw.scrollLines(1);
					}
					scrollDownPage() {
						this.raw.scrollPages(1);
					}
					scrollToBottom() {
						this.raw.scrollToBottom();
					}
					scrollUpLine() {
						this.raw.scrollLines(-1);
					}
					scrollUpPage() {
						this.raw.scrollPages(-1);
					}
					scrollToTop() {
						this.raw.scrollToTop();
					}
					scrollToLine(K, J = r.ScrollPosition.Top) {
						this.markTracker.scrollToLine(K, J);
					}
					clearBuffer() {
						this.raw.clear(),
							this.S.get(
								o.TerminalCapability.CommandDetection,
							)?.handlePromptStart(),
							this.S.get(
								o.TerminalCapability.CommandDetection,
							)?.handleCommandStart(),
							this.db.playSignal(L.$Twb.clear);
					}
					hasSelection() {
						return this.raw.hasSelection();
					}
					clearSelection() {
						this.raw.clearSelection();
					}
					selectMarkedRange(K, J, W = !1) {
						const X = this.shellIntegration.capabilities.get(
							o.TerminalCapability.BufferMarkDetection,
						);
						if (!X) return;
						const Y = X.getMark(K),
							ie = X.getMark(J);
						Y === void 0 ||
							ie === void 0 ||
							(this.raw.selectLines(Y.line, ie.line),
							W && this.raw.scrollToLine(Y.line));
					}
					selectAll() {
						this.raw.focus(), this.raw.selectAll();
					}
					focus() {
						this.raw.focus();
					}
					async copySelection(K, J) {
						if (
							(this.eb.registerEvent("terminal.copy"),
							this.hasSelection() || (K && J))
						)
							if (K) {
								let X = function (ie) {
									ie.clipboardData.types.includes("text/plain") ||
										ie.clipboardData.setData(
											"text/plain",
											J?.getOutput() ?? "",
										),
										ie.clipboardData.setData("text/html", W),
										ie.preventDefault();
								};
								const W = await this.getSelectionAsHtml(J),
									Y = t.getDocument(this.raw.element);
								Y.addEventListener("copy", X),
									Y.execCommand("copy"),
									Y.removeEventListener("copy", X),
									this.cb.setNonPersistentStorage({
										lastCopy: {
											text: W,
											range: this.selectionRange,
											languageId: "bash",
										},
									});
							} else
								await this.bb.writeText(this.raw.getSelection()),
									this.cb.setNonPersistentStorage({
										lastCopy: {
											text: this.raw.getSelection(),
											range: this.selectionRange,
											languageId: "bash",
										},
									});
						else this.Y.warn((0, u.localize)(10195, null));
					}
					get selectionRange() {
						const K = this.hasSelection()
							? this.raw.getSelectionPosition()
							: void 0;
						if (K)
							return {
								selectionStartColumn: K.start.x,
								selectionStartLineNumber: K.start.y + 1,
								positionColumn: K.end.x,
								positionLineNumber: K.end.y + 1,
							};
					}
					mb(K) {
						this.raw.options.cursorBlink !== K &&
							((this.raw.options.cursorBlink = K),
							this.raw.refresh(0, this.raw.rows - 1));
					}
					nb(K) {
						const J = V(K);
						this.raw.options.cursorStyle !== J &&
							(this.raw.options.cursorStyle = J);
					}
					ob(K) {
						const J = V(K);
						this.raw.options.cursorInactiveStyle !== J &&
							(this.raw.options.cursorInactiveStyle = J);
					}
					pb(K) {
						this.raw.options.cursorWidth !== K &&
							(this.raw.options.cursorWidth = K);
					}
					async qb() {
						if (!this.raw.element || this.s) return;
						if (!M.c) {
							M.c = !0;
							const W = document.createElement("canvas").getContext("webgl2"),
								X = W?.getExtension("WEBGL_debug_renderer_info");
							if (
								W &&
								X &&
								W.getParameter(X.UNMASKED_RENDERER_WEBGL).startsWith(
									"ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero)",
								)
							) {
								this.rb();
								return;
							}
						}
						const K = await this.xb();
						this.s = new K();
						try {
							this.raw.loadAddon(this.s),
								this.X.trace("Webgl was loaded"),
								this.s.onContextLoss(() => {
									this.X.info(
										"Webgl lost context, disposing of webgl renderer",
									),
										this.zb();
								}),
								this.sb(),
								this.M.fire();
						} catch (J) {
							this.X.warn(
								"Webgl could not be loaded. Falling back to the DOM renderer",
								J,
							),
								this.rb();
						}
					}
					rb() {
						(M.b = "dom"), this.zb();
					}
					async sb() {
						if (this.ab.config.enableImages && this.s) {
							if (!this.u) {
								const K = await this.ub();
								(this.u = new K()), this.raw.loadAddon(this.u);
							}
						} else {
							try {
								this.u?.dispose();
							} catch {}
							this.u = void 0;
						}
					}
					async tb() {
						return (
							A ||
								(A = (
									await (0, s.$Tq)(
										"@xterm/addon-clipboard",
										"lib/addon-clipboard.js",
									)
								).ClipboardAddon),
							A
						);
					}
					async ub() {
						return (
							R ||
								(R = (
									await (0, s.$Tq)("@xterm/addon-image", "lib/addon-image.js")
								).ImageAddon),
							R
						);
					}
					async vb() {
						return (
							O ||
								(O = (
									await (0, s.$Tq)("@xterm/addon-search", "lib/addon-search.js")
								).SearchAddon),
							O
						);
					}
					async wb() {
						return (
							U ||
								(U = (
									await (0, s.$Tq)(
										"@xterm/addon-unicode11",
										"lib/addon-unicode11.js",
									)
								).Unicode11Addon),
							U
						);
					}
					async xb() {
						return (
							z ||
								(z = (
									await (0, s.$Tq)("@xterm/addon-webgl", "lib/addon-webgl.js")
								).WebglAddon),
							z
						);
					}
					async yb() {
						return (
							B ||
								(B = (
									await (0, s.$Tq)(
										"@xterm/addon-serialize",
										"lib/addon-serialize.js",
									)
								).SerializeAddon),
							B
						);
					}
					zb() {
						try {
							this.s?.dispose();
						} catch {}
						(this.s = void 0), this.sb();
					}
					getXtermTheme(K) {
						K || (K = this.Z.getColorTheme());
						const J = this.ab.config,
							W = ["never", "gutter"].includes(
								J.shellIntegration?.decorationsEnabled ?? "",
							),
							X = K.getColor(c.$jHb),
							Y = this.R.getBackgroundColor(K),
							ie = K.getColor(c.$kHb) || X,
							ne = K.getColor(c.$lHb) || Y,
							ee = K.getColor(c.$mHb),
							_ = K.getColor(c.$nHb),
							te = K.getColor(c.$oHb) || void 0;
						return {
							background: Y?.toString(),
							foreground: X?.toString(),
							cursor: ie?.toString(),
							cursorAccent: ne?.toString(),
							selectionBackground: ee?.toString(),
							selectionInactiveBackground: _?.toString(),
							selectionForeground: te?.toString(),
							overviewRulerBorder: W ? "#0000" : K.getColor(c.$uHb)?.toString(),
							scrollbarSliderActiveBackground: K.getColor(D.$6P)?.toString(),
							scrollbarSliderBackground: K.getColor(D.$4P)?.toString(),
							scrollbarSliderHoverBackground: K.getColor(D.$5P)?.toString(),
							black: K.getColor(c.$hHb[0])?.toString(),
							red: K.getColor(c.$hHb[1])?.toString(),
							green: K.getColor(c.$hHb[2])?.toString(),
							yellow: K.getColor(c.$hHb[3])?.toString(),
							blue: K.getColor(c.$hHb[4])?.toString(),
							magenta: K.getColor(c.$hHb[5])?.toString(),
							cyan: K.getColor(c.$hHb[6])?.toString(),
							white: K.getColor(c.$hHb[7])?.toString(),
							brightBlack: K.getColor(c.$hHb[8])?.toString(),
							brightRed: K.getColor(c.$hHb[9])?.toString(),
							brightGreen: K.getColor(c.$hHb[10])?.toString(),
							brightYellow: K.getColor(c.$hHb[11])?.toString(),
							brightBlue: K.getColor(c.$hHb[12])?.toString(),
							brightMagenta: K.getColor(c.$hHb[13])?.toString(),
							brightCyan: K.getColor(c.$hHb[14])?.toString(),
							brightWhite: K.getColor(c.$hHb[15])?.toString(),
						};
					}
					Ab(K) {
						this.raw.options.theme = this.getXtermTheme(K);
					}
					refresh() {
						this.Ab(), this.m.refreshLayouts();
					}
					async Bb() {
						if (!this.r && this.ab.config.unicodeVersion === "11") {
							const K = await this.wb();
							(this.r = new K()), this.raw.loadAddon(this.r);
						}
						this.raw.unicode.activeVersion !== this.ab.config.unicodeVersion &&
							(this.raw.unicode.activeVersion = this.ab.config.unicodeVersion);
					}
					_writeText(K) {
						this.raw.write(K);
					}
					dispose() {
						this.C.reset(), this.F.reset(), this.Q.fire(), super.dispose();
					}
				};
				(e.$$Hb = x),
					Ne([(0, v.$fi)(100)], x.prototype, "sb", null),
					(e.$$Hb =
						x =
						M =
							Ne(
								[
									j(7, i.$gj),
									j(8, g.$Li),
									j(9, E.$YJ),
									j(10, m.$4N),
									j(11, a.$iP),
									j(12, b.$km),
									j(13, C.$jIb),
									j(14, $.$Vxb),
									j(15, T.$0zb),
									j(16, l.$6j),
									j(17, L.$Owb),
									j(18, k.$5X),
									j(19, P.$jEb),
								],
								x,
							));
				function H(G, K, J, W) {
					if (!K.charWidth || !K.charHeight) return null;
					const X = J * G.devicePixelRatio,
						Y = K.charWidth * G.devicePixelRatio + K.letterSpacing,
						ie = Math.max(Math.floor(X / Y), 1),
						ne = W * G.devicePixelRatio,
						ee = Math.ceil(K.charHeight * G.devicePixelRatio),
						_ = Math.floor(ee * K.lineHeight);
					return { rows: Math.max(Math.floor(ne / _), 1), cols: ie };
				}
				function q(G) {
					switch (G) {
						case d.LogLevel.Trace:
							return "trace";
						case d.LogLevel.Debug:
							return "debug";
						case d.LogLevel.Info:
							return "info";
						case d.LogLevel.Warning:
							return "warn";
						case d.LogLevel.Error:
							return "error";
						default:
							return "off";
					}
				}
				function V(G) {
					return G === "line" ? "bar" : G;
				}
			},
		)
