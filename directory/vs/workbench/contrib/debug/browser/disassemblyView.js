import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/pixelRatio.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/path.js';
import '../../../../base/common/uint.js';
import '../../../../base/common/uri.js';
import '../../../../editor/browser/config/domFontInfo.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/common/config/fontInfo.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/core/stringBuilder.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/editor/common/editor.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../browser/parts/editor/editorPane.js';
import './callStackEditorContribution.js';
import './debugIcons.js';
import '../common/debug.js';
import '../common/debugModel.js';
import '../common/debugSource.js';
import '../common/debugUtils.js';
import '../../../services/editor/common/editorService.js';
define(
			de[1881],
			he([
				1, 0, 345, 7, 24, 6, 3, 54, 210, 9, 321, 56, 463, 17, 462, 42, 4, 10, 8,
				116, 5, 93, 34, 21, 32, 51, 35, 68, 217, 796, 352, 112, 300, 826, 396,
				18,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*pixelRatio*/,
				i /*dom*/,
				w /*arrays*/,
				E /*event*/,
				C /*lifecycle*/,
				d /*path*/,
				m /*uint*/,
				r /*uri*/,
				u /*domFontInfo*/,
				a /*editorBrowser*/,
				h /*fontInfo*/,
				c /*range*/,
				n /*stringBuilder*/,
				g /*resolverService*/,
				p /*nls*/,
				o /*configuration*/,
				f /*contextkey*/,
				b /*editor*/,
				s /*instantiation*/,
				l /*listService*/,
				y /*log*/,
				$ /*storage*/,
				v /*telemetry*/,
				S /*colorRegistry*/,
				I /*themeService*/,
				T /*uriIdentity*/,
				P /*editorPane*/,
				k /*callStackEditorContribution*/,
				L /*debugIcons*/,
				D /*debug*/,
				M /*debugModel*/,
				N /*debugSource*/,
				A /*debugUtils*/,
				R /*editorService*/,
) {
				"use strict";
				var O, B, U;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kGc = e.$jGc = void 0),
					(L = mt(L));
				const z = {
					allowBreakpoint: !1,
					isBreakpointSet: !1,
					isBreakpointEnabled: !1,
					instructionReference: "",
					instructionOffset: 0,
					instructionReferenceOffset: 0,
					address: 0n,
					instruction: {
						address: "-1",
						instruction: (0, p.localize)(5663, null),
					},
				};
				let F = class extends P.$JEb {
					static {
						O = this;
					}
					static {
						this.a = 50;
					}
					constructor(K, J, W, X, Y, ie, ne) {
						super(D.$W4, K, J, W, X),
							(this.cb = Y),
							(this.db = ie),
							(this.eb = ne),
							(this.j = []),
							(this.m = !0),
							(this.r = !1),
							(this.u = new Map()),
							(this.c = void 0),
							(this.f = this.D(new E.$re({ leakWarningThreshold: 1e3 }))),
							(this.g = ne.state),
							this.D(
								Y.onDidChangeConfiguration((ee) => {
									if (ee.affectsConfiguration("debug")) {
										const _ =
											this.cb.getValue("debug").disassemblyView.showSourceCode;
										this.m !== _ ? (this.m = _) : this.c?.rerender();
									}
								}),
							);
					}
					get fontInfo() {
						return (
							this.b ||
								((this.b = this.fb()),
								this.D(
									this.cb.onDidChangeConfiguration((K) => {
										K.affectsConfiguration("editor") && (this.b = this.fb());
									}),
								)),
							this.b
						);
					}
					fb() {
						return h.$OK.createFromRawSettings(
							this.cb.getValue("editor"),
							t.$sjb.getInstance(this.window).value,
						);
					}
					get currentInstructionAddresses() {
						return this.eb
							.getModel()
							.getSessions(!1)
							.map((K) => K.getAllThreads())
							.reduce((K, J) => K.concat(J), [])
							.map((K) => K.getTopStackFrame())
							.map((K) => K?.instructionPointerReference)
							.map((K) => (K ? this.getReferenceAddress(K) : void 0));
					}
					get focusedCurrentInstructionReference() {
						return this.eb
							.getViewModel()
							.focusedStackFrame?.thread.getTopStackFrame()
							?.instructionPointerReference;
					}
					get focusedCurrentInstructionAddress() {
						const K = this.focusedCurrentInstructionReference;
						return K ? this.getReferenceAddress(K) : void 0;
					}
					get focusedInstructionReference() {
						return this.eb.getViewModel().focusedStackFrame
							?.instructionPointerReference;
					}
					get focusedInstructionAddress() {
						const K = this.focusedInstructionReference;
						return K ? this.getReferenceAddress(K) : void 0;
					}
					get isSourceCodeRender() {
						return this.m;
					}
					get debugSession() {
						return this.eb.getViewModel().focusedSession;
					}
					get onDidChangeStackFrame() {
						return this.f.event;
					}
					get focusedAddressAndOffset() {
						const K = this.c?.getFocusedElements()[0];
						if (!K) return;
						const J = K.instructionReference,
							W = Number(K.address - this.getReferenceAddress(J));
						return { reference: J, offset: W, address: K.address };
					}
					Y(K) {
						this.m = this.cb.getValue("debug").disassemblyView.showSourceCode;
						const J = this.fontInfo.lineHeight,
							W = this,
							X = new (class {
								constructor() {
									this.headerRowHeight = 0;
								}
								getHeight(ie) {
									return W.isSourceCodeRender &&
										ie.showSourceLocation &&
										ie.instruction.location?.path &&
										ie.instruction.line
										? ie.instruction.endLine
											? J * (ie.instruction.endLine - ie.instruction.line + 2)
											: J * 2
										: J;
								}
							})(),
							Y = this.D(this.db.createInstance(H, this));
						(this.c = this.D(
							this.db.createInstance(
								l.$AMb,
								"DisassemblyView",
								K,
								X,
								[
									{
										label: "",
										tooltip: "",
										weight: 0,
										minimumWidth: this.fontInfo.lineHeight,
										maximumWidth: this.fontInfo.lineHeight,
										templateId: x.TEMPLATE_ID,
										project(ie) {
											return ie;
										},
									},
									{
										label: (0, p.localize)(5664, null),
										tooltip: "",
										weight: 0.3,
										templateId: H.TEMPLATE_ID,
										project(ie) {
											return ie;
										},
									},
								],
								[this.db.createInstance(x, this), Y],
								{
									identityProvider: { getId: (ie) => ie.instruction.address },
									horizontalScrolling: !1,
									overrideStyles: { listBackground: S.$8P },
									multipleSelectionSupport: !1,
									setRowLineHeight: !1,
									openOnSingleClick: !1,
									accessibilityProvider: new q(),
									mouseSupport: !1,
								},
							),
						)),
							this.c.domNode.classList.add("disassembly-view"),
							this.focusedInstructionReference &&
								this.ob(this.focusedInstructionReference, 0),
							this.D(
								this.c.onDidScroll((ie) => {
									if (!this.r)
										if (
											ie.oldScrollTop > ie.scrollTop &&
											ie.scrollTop < ie.height
										) {
											this.r = !0;
											const ne = Math.floor(
												ie.scrollTop / this.fontInfo.lineHeight,
											);
											this.ib(O.a).then((ee) => {
												ee > 0 && this.c.reveal(ne + ee, 0), (this.r = !1);
											});
										} else
											ie.oldScrollTop < ie.scrollTop &&
												ie.scrollTop + ie.height >
													ie.scrollHeight - ie.height &&
												((this.r = !0),
												this.jb(O.a).then(() => {
													this.r = !1;
												}));
								}),
							),
							this.D(
								this.eb
									.getViewModel()
									.onDidFocusStackFrame(({ stackFrame: ie }) => {
										this.c &&
											ie?.instructionPointerReference &&
											this.goToInstructionAndOffset(
												ie.instructionPointerReference,
												0,
											),
											this.f.fire();
									}),
							),
							this.D(
								this.eb.getModel().onDidChangeBreakpoints((ie) => {
									if (ie && this.c) {
										let ne = !1;
										ie.added?.forEach((ee) => {
											if (ee instanceof M.$X3) {
												const _ = this.mb(ee.instructionReference, ee.offset);
												_ >= 0 &&
													((this.c.row(_).isBreakpointSet = !0),
													(this.c.row(_).isBreakpointEnabled = ee.enabled),
													(ne = !0));
											}
										}),
											ie.removed?.forEach((ee) => {
												if (ee instanceof M.$X3) {
													const _ = this.mb(ee.instructionReference, ee.offset);
													_ >= 0 &&
														((this.c.row(_).isBreakpointSet = !1), (ne = !0));
												}
											}),
											ie.changed?.forEach((ee) => {
												if (ee instanceof M.$X3) {
													const _ = this.mb(ee.instructionReference, ee.offset);
													_ >= 0 &&
														this.c.row(_).isBreakpointEnabled !== ee.enabled &&
														((this.c.row(_).isBreakpointEnabled = ee.enabled),
														(ne = !0));
												}
											}),
											(this.j = this.eb.getModel().getInstructionBreakpoints());
										for (const ee of this.j) this.kb(ee.instructionReference);
										ne && this.f.fire();
									}
								}),
							),
							this.D(
								this.eb.onDidChangeState((ie) => {
									(ie === D.State.Running || ie === D.State.Stopped) &&
										this.g !== D.State.Running &&
										this.g !== D.State.Stopped &&
										(this.pb(),
										(this.m =
											this.cb.getValue(
												"debug",
											).disassemblyView.showSourceCode)),
										(this.g = ie),
										this.f.fire();
								}),
							);
					}
					layout(K) {
						this.c?.layout(K.height);
					}
					async goToInstructionAndOffset(K, J, W) {
						let X = this.u.get(K);
						X === void 0 &&
							(await this.lb(K, 0, -O.a, O.a * 2), (X = this.u.get(K))),
							X && this.hb(X + BigInt(J), W);
					}
					getReferenceAddress(K) {
						return this.u.get(K);
					}
					hb(K, J) {
						if (!this.c || !K) return !1;
						const W = this.nb(K);
						return W >= 0
							? (this.c.reveal(W),
								J && (this.c.domFocus(), this.c.setFocus([W])),
								!0)
							: !1;
					}
					async ib(K) {
						const J = this.c?.row(0);
						return J
							? this.lb(
									J.instructionReference,
									J.instructionReferenceOffset,
									J.instructionOffset - K,
									K,
								)
							: 0;
					}
					async jb(K) {
						const J = this.c?.row(this.c?.length - 1);
						return J
							? this.lb(
									J.instructionReference,
									J.instructionReferenceOffset,
									J.instructionOffset + 1,
									K,
								)
							: 0;
					}
					async kb(K) {
						if (this.u.has(K)) return !0;
						const J = await this.debugSession?.disassemble(K, 0, 0, 1);
						if (J && J.length > 0)
							try {
								return this.u.set(K, BigInt(J[0].address)), !0;
							} catch {
								return !1;
							}
						return !1;
					}
					async lb(K, J, W, X) {
						const Y = this.debugSession,
							ie = await Y?.disassemble(K, J, W, X);
						if (
							(!this.u.has(K) && W !== 0 && (await this.lb(K, 0, 0, O.a)),
							Y && ie && this.c)
						) {
							const ne = [];
							let ee, _;
							for (let fe = 0; fe < ie.length; fe++) {
								const me = ie[fe],
									ve = W + fe;
								if (
									(me.location && ((ee = me.location), (_ = void 0)), me.line)
								) {
									const Ce = {
										startLineNumber: me.line,
										startColumn: me.column ?? 0,
										endLineNumber: me.endLine ?? me.line,
										endColumn: me.endColumn ?? 0,
									};
									c.$iL.equalsRange(Ce, _ ?? null) ||
										((_ = Ce), (me.location = ee));
								}
								let ge;
								try {
									ge = BigInt(me.address);
								} catch {
									console.error(
										`Could not parse disassembly address ${me.address} (in ${JSON.stringify(me)})`,
									);
									continue;
								}
								const be = {
									allowBreakpoint: !0,
									isBreakpointSet: !1,
									isBreakpointEnabled: !1,
									instructionReference: K,
									instructionReferenceOffset: J,
									instructionOffset: ve,
									instruction: me,
									address: ge,
								};
								ne.push(be), J === 0 && ve === 0 && this.u.set(K, ge);
							}
							if (ne.length === 0) return 0;
							const te = this.u.get(K),
								Q = this.j.map((fe) => {
									const me = this.u.get(fe.instructionReference);
									if (me)
										return {
											enabled: fe.enabled,
											address: me + BigInt(fe.offset || 0),
										};
								});
							if (te !== void 0)
								for (const fe of ne) {
									const me = Q.find((ve) => ve?.address === fe.address);
									me &&
										((fe.isBreakpointSet = !0),
										(fe.isBreakpointEnabled = me.enabled));
								}
							const Z = this.c;
							Z.length === 1 && this.c.row(0) === z && Z.splice(0, 1);
							const se = ne[0].address,
								re = ne[ne.length - 1].address,
								le = (0, w.$Bb)(Z.length, (fe) =>
									Number(Z.row(fe).address - se),
								),
								oe = le < 0 ? ~le : le,
								ae = (0, w.$Bb)(Z.length, (fe) =>
									Number(Z.row(fe).address - re),
								),
								$e = (ae < 0 ? ~ae : ae + 1) - oe;
							let ye;
							for (let fe = oe - 1; fe >= 0; fe--) {
								const { instruction: me } = Z.row(fe);
								if (me.location && me.line !== void 0) {
									ye = me;
									break;
								}
							}
							const ue = (fe) =>
								fe.line !== void 0 &&
								fe.location !== void 0 &&
								(!ye ||
									!(0, A.$x3)(fe.location, ye.location) ||
									fe.line !== ye.line);
							for (const fe of ne)
								ue(fe.instruction) &&
									((fe.showSourceLocation = !0), (ye = fe.instruction));
							return Z.splice(oe, $e, ne), ne.length - $e;
						}
						return 0;
					}
					mb(K, J) {
						const W = this.u.get(K);
						return W === void 0 ? -1 : this.nb(W + BigInt(J));
					}
					nb(K) {
						const J = this.c;
						return J && J.length > 0
							? (0, w.$Bb)(J.length, (W) => {
									const X = J.row(W);
									return Number(X.address - K);
								})
							: -1;
					}
					ob(K, J) {
						this.c &&
							((this.r = !0),
							this.pb(),
							(this.j = this.eb.getModel().getInstructionBreakpoints()),
							this.lb(K, J, -O.a * 4, O.a * 8).then(() => {
								if (this.c.length > 0) {
									const W = Math.floor(this.c.length / 2);
									this.c.reveal(W, 0.5),
										this.c.domFocus(),
										this.c.setFocus([W]);
								}
								this.r = !1;
							}));
					}
					pb() {
						this.u.clear(), this.c?.splice(0, this.c.length, [z]);
					}
				};
				(e.$jGc = F),
					(e.$jGc =
						F =
						O =
							Ne(
								[
									j(1, v.$km),
									j(2, I.$iP),
									j(3, $.$lq),
									j(4, o.$gj),
									j(5, s.$Li),
									j(6, D.$75),
								],
								F,
							));
				let x = class {
					static {
						B = this;
					}
					static {
						this.TEMPLATE_ID = "breakpoint";
					}
					constructor(K, J) {
						(this.g = K),
							(this.h = J),
							(this.templateId = B.TEMPLATE_ID),
							(this.a = "codicon-" + L.$8Jb.regular.id),
							(this.b = "codicon-" + L.$8Jb.disabled.id),
							(this.c = "codicon-" + L.$aKb.id),
							(this.d = "codicon-" + L.$dKb.id),
							(this.f = "codicon-" + L.$eKb.id);
					}
					renderTemplate(K) {
						K.style.alignSelf = "flex-end";
						const J = (0, i.$fhb)(K, (0, i.$)(".codicon"));
						(J.style.display = "flex"),
							(J.style.alignItems = "center"),
							(J.style.justifyContent = "center"),
							(J.style.height = this.g.fontInfo.lineHeight + "px");
						const W = { element: void 0 },
							X = [
								this.g.onDidChangeStackFrame(() => this.j(J, W.element)),
								(0, i.$$fb)(K, "mouseover", () => {
									W.element?.allowBreakpoint && J.classList.add(this.c);
								}),
								(0, i.$$fb)(K, "mouseout", () => {
									W.element?.allowBreakpoint && J.classList.remove(this.c);
								}),
								(0, i.$$fb)(K, "click", () => {
									if (W.element?.allowBreakpoint) {
										J.classList.add(this.c);
										const Y = W.element.instructionReference,
											ie = Number(
												W.element.address - this.g.getReferenceAddress(Y),
											);
										W.element.isBreakpointSet
											? this.h.removeInstructionBreakpoints(Y, ie)
											: W.element.allowBreakpoint &&
												!W.element.isBreakpointSet &&
												this.h.addInstructionBreakpoint({
													instructionReference: Y,
													offset: ie,
													address: W.element.address,
													canPersist: !1,
												});
									}
								}),
							];
						return { currentElement: W, icon: J, disposables: X };
					}
					renderElement(K, J, W, X) {
						(W.currentElement.element = K), this.j(W.icon, K);
					}
					disposeTemplate(K) {
						(0, C.$Vc)(K.disposables), (K.disposables = []);
					}
					j(K, J) {
						J?.address === this.g.focusedCurrentInstructionAddress
							? K.classList.add(this.d)
							: J?.address === this.g.focusedInstructionAddress
								? K.classList.add(this.f)
								: (K.classList.remove(this.d), K.classList.remove(this.f)),
							K.classList.remove(this.c),
							J?.isBreakpointSet
								? J.isBreakpointEnabled
									? (K.classList.add(this.a), K.classList.remove(this.b))
									: (K.classList.remove(this.a), K.classList.add(this.b))
								: (K.classList.remove(this.a), K.classList.remove(this.b));
					}
				};
				x = B = Ne([j(1, D.$75)], x);
				let H = class extends C.$1c {
					static {
						U = this;
					}
					static {
						this.TEMPLATE_ID = "instruction";
					}
					static {
						this.a = 25;
					}
					static {
						this.b = 30;
					}
					constructor(K, J, W, X, Y, ie) {
						super(),
							(this.g = K),
							(this.h = W),
							(this.j = X),
							(this.m = Y),
							(this.n = ie),
							(this.templateId = U.TEMPLATE_ID),
							(this.c = J.getColorTheme().getColor(k.$cGc)),
							(this.f = J.getColorTheme().getColor(k.$dGc)),
							this.D(
								J.onDidColorThemeChange((ne) => {
									(this.c = ne.getColor(k.$cGc)),
										(this.f = ne.getColor(k.$dGc));
								}),
							);
					}
					renderTemplate(K) {
						const J = (0, i.$fhb)(K, (0, i.$)(".sourcecode")),
							W = (0, i.$fhb)(K, (0, i.$)(".instruction"));
						this.w(J), this.w(W);
						const X = { element: void 0 },
							Y = [],
							ie = [
								this.g.onDidChangeStackFrame(() => this.r(W, J, X.element)),
								(0, i.$$fb)(J, "dblclick", () =>
									this.t(X.element?.instruction),
								),
							];
						return {
							currentElement: X,
							instruction: W,
							sourcecode: J,
							cellDisposable: Y,
							disposables: ie,
						};
					}
					renderElement(K, J, W, X) {
						this.q(K, J, W, X);
					}
					async q(K, J, W, X) {
						W.currentElement.element = K;
						const Y = K.instruction;
						W.sourcecode.innerText = "";
						const ie = new n.$KL(1e3);
						if (
							this.g.isSourceCodeRender &&
							K.showSourceLocation &&
							Y.location?.path &&
							Y.line !== void 0
						) {
							const ee = this.u(Y);
							if (ee) {
								let _;
								const te = new n.$KL(1e4),
									Q = await this.j.createModelReference(ee);
								if (W.currentElement.element !== K) return;
								if (
									((_ = Q.object.textEditorModel),
									W.cellDisposable.push(Q),
									_ && W.currentElement.element === K)
								) {
									let Z = Y.line;
									for (; Z && Z >= 1 && Z <= _.getLineCount(); ) {
										const se = _.getLineContent(Z);
										if (
											(te.appendString(`  ${Z}: `),
											te.appendString(
												se +
													`
`,
											),
											Y.endLine && Z < Y.endLine)
										) {
											Z++;
											continue;
										}
										break;
									}
									W.sourcecode.innerText = te.build();
								}
							}
						}
						let ne = 10;
						if (Y.address !== "-1") {
							ie.appendString(Y.address),
								Y.address.length < U.a && (ne = U.a - Y.address.length);
							for (let ee = 0; ee < ne; ee++) ie.appendString(" ");
						}
						if (Y.instructionBytes) {
							ie.appendString(Y.instructionBytes),
								(ne = 10),
								Y.instructionBytes.length < U.b &&
									(ne = U.b - Y.instructionBytes.length);
							for (let ee = 0; ee < ne; ee++) ie.appendString(" ");
						}
						ie.appendString(Y.instruction),
							(W.instruction.innerText = ie.build()),
							this.r(W.instruction, W.sourcecode, K);
					}
					disposeElement(K, J, W, X) {
						(0, C.$Vc)(W.cellDisposable), (W.cellDisposable = []);
					}
					disposeTemplate(K) {
						(0, C.$Vc)(K.disposables), (K.disposables = []);
					}
					r(K, J, W) {
						W && this.g.currentInstructionAddresses.includes(W.address)
							? (K.style.background = this.c?.toString() || "transparent")
							: W?.address === this.g.focusedInstructionAddress
								? (K.style.background = this.f?.toString() || "transparent")
								: (K.style.background = "transparent");
					}
					t(K) {
						if (K) {
							const J = this.u(K),
								W = K.endLine
									? {
											startLineNumber: K.line,
											endLineNumber: K.endLine,
											startColumn: K.column || 1,
											endColumn:
												K.endColumn || m.Constants.MAX_SAFE_SMALL_INTEGER,
										}
									: {
											startLineNumber: K.line,
											endLineNumber: K.line,
											startColumn: K.column || 1,
											endColumn:
												K.endColumn || m.Constants.MAX_SAFE_SMALL_INTEGER,
										};
							this.h.openEditor({
								resource: J,
								description: (0, p.localize)(5665, null),
								options: {
									preserveFocus: !1,
									selection: W,
									revealIfOpened: !0,
									selectionRevealType:
										b.TextEditorSelectionRevealType.CenterIfOutsideViewport,
									pinned: !1,
								},
							});
						}
					}
					u(K) {
						const J = K.location.path;
						return J && (0, A.$s3)(J)
							? this.m.asCanonicalUri(r.URI.parse(J))
							: J && (0, d.$nc)(J)
								? this.m.asCanonicalUri(r.URI.file(J))
								: (0, N.$A3)(
										K.location,
										K.location.path,
										this.g.debugSession.getId(),
										this.m,
										this.n,
									);
					}
					w(K) {
						(0, u.$jsb)(K, this.g.fontInfo), (K.style.whiteSpace = "pre");
					}
				};
				H = U = Ne(
					[j(1, I.$iP), j(2, R.$IY), j(3, g.$MO), j(4, T.$Vl), j(5, y.$ik)],
					H,
				);
				class q {
					getWidgetAriaLabel() {
						return (0, p.localize)(5666, null);
					}
					getAriaLabel(K) {
						let J = "";
						const W = K.instruction;
						return (
							W.address !== "-1" &&
								(J += `${(0, p.localize)(5667, null)}: ${W.address}`),
							W.instructionBytes &&
								(J += `, ${(0, p.localize)(5668, null)}: ${W.instructionBytes}`),
							(J += `, ${(0, p.localize)(5669, null)}: ${W.instruction}`),
							J
						);
					}
				}
				let V = class {
					constructor(K, J, W) {
						W.bufferChangeEvents(() => {
							this.c = D.$W5.bindTo(W);
						});
						const X = () => {
							this.b && (this.b.dispose(), (this.b = void 0));
							const Y = K.activeTextEditorControl;
							if ((0, a.$0sb)(Y)) {
								const ie = Y.getModel()?.getLanguageId();
								this.c?.set(
									!!ie &&
										J.getAdapterManager().someDebuggerInterestedInLanguage(ie),
								),
									(this.b = Y.onDidChangeModelLanguage((ne) => {
										this.c?.set(
											J.getAdapterManager().someDebuggerInterestedInLanguage(
												ne.newLanguage,
											),
										);
									}));
							} else this.c?.set(!1);
						};
						X(), (this.a = K.onDidActiveEditorChange(X));
					}
					dispose() {
						this.a.dispose(), this.b?.dispose();
					}
				};
				(e.$kGc = V),
					(e.$kGc = V = Ne([j(0, R.$IY), j(1, D.$75), j(2, f.$6j)], V));
			},
		)
