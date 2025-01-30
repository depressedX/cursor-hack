import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import './extHost.protocol.js';
import '../../../base/common/uri.js';
import './extHostTypes.js';
import '../../../base/common/errors.js';
import '../../../base/common/arrays.js';
import '../../../base/common/severity.js';
import '../../../base/common/themables.js';
import '../../services/extensions/common/extensions.js';
import './extHostTypeConverters.js';
define(
		Pe[580],
		Ne([1, 0, 23, 4, 3, 6, 2, 11, 12, 20, 58, 72, 29, 17]),
		function (we, t, e, r, S, N, P, I, l, n, p, y, d, k) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }),
				(t.$Yid = g),
				(p = On(p));
			function g(c, h, $) {
				const T = c.getProxy(N.$lbb.MainThreadQuickOpen);
				class a {
					constructor(C, O) {
						(this.e = new Map()), (this.f = 0), (this.a = C), (this.b = O);
					}
					showQuickPick(C, O, A, J = e.CancellationToken.None) {
						this.c = void 0;
						const L = Promise.resolve(O),
							b = ++this.f,
							F = T.$show(
								b,
								{
									title: A?.title,
									placeHolder: A?.placeHolder,
									matchOnDescription: A?.matchOnDescription,
									matchOnDetail: A?.matchOnDetail,
									ignoreFocusLost: A?.ignoreFocusOut,
									canPickMany: A?.canPickMany,
								},
								J,
							),
							D = {},
							M = F.then(() => D);
						return Promise.race([M, L])
							.then((z) => {
								if (z === D) return;
								const Q = (0, d.$t2)(C, "quickPickItemTooltip");
								return L.then((H) => {
									const B = [];
									for (let U = 0; U < H.length; U++) {
										const Z = H[U];
										if (typeof Z == "string") B.push({ label: Z, handle: U });
										else if (Z.kind === I.QuickPickItemKind.Separator)
											B.push({ type: "separator", label: Z.label });
										else {
											Z.tooltip &&
												!Q &&
												console.warn(
													`Extension '${C.identifier.value}' uses a tooltip which is proposed API that is only available when running out of dev or with the following command line switch: --enable-proposed-api ${C.identifier.value}`,
												);
											const W = Z.iconPath ? w(Z.iconPath) : void 0;
											B.push({
												label: Z.label,
												iconPath: W?.iconPath,
												iconClass: W?.iconClass,
												description: Z.description,
												detail: Z.detail,
												picked: Z.picked,
												alwaysShow: Z.alwaysShow,
												tooltip: Q
													? k.MarkdownString.fromStrict(Z.tooltip)
													: void 0,
												handle: U,
											});
										}
									}
									return (
										A &&
											typeof A.onDidSelectItem == "function" &&
											(this.c = (U) => {
												A.onDidSelectItem(H[U]);
											}),
										T.$setItems(b, B),
										F.then((U) => {
											if (typeof U == "number") return H[U];
											if (Array.isArray(U)) return U.map((Z) => H[Z]);
										})
									);
								});
							})
							.then(void 0, (z) => {
								if (!(0, l.$8)(z)) return T.$setError(b, z), Promise.reject(z);
							});
					}
					$onItemSelected(C) {
						this.c?.(C);
					}
					showInput(C, O = e.CancellationToken.None) {
						return (
							(this.d = C?.validateInput),
							T.$input(C, typeof this.d == "function", O).then(void 0, (A) => {
								if (!(0, l.$8)(A)) return Promise.reject(A);
							})
						);
					}
					async $validateInput(C) {
						if (!this.d) return;
						const O = await this.d(C);
						if (!O || typeof O == "string") return O;
						let A;
						switch (O.severity) {
							case I.InputBoxValidationSeverity.Info:
								A = p.default.Info;
								break;
							case I.InputBoxValidationSeverity.Warning:
								A = p.default.Warning;
								break;
							case I.InputBoxValidationSeverity.Error:
								A = p.default.Error;
								break;
							default:
								A = O.message ? p.default.Error : p.default.Ignore;
								break;
						}
						return { content: O.message, severity: A };
					}
					async showWorkspaceFolderPick(C, O = e.CancellationToken.None) {
						const A = await this.b.executeCommand(
							"_workbench.pickWorkspaceFolder",
							[C],
						);
						if (!A) return;
						const J = await this.a.getWorkspaceFolders2();
						if (J) return J.find((L) => L.uri.toString() === A.uri.toString());
					}
					createQuickPick(C) {
						const O = new m(C, () => this.e.delete(O._id));
						return this.e.set(O._id, O), O;
					}
					createInputBox(C) {
						const O = new E(C, () => this.e.delete(O._id));
						return this.e.set(O._id, O), O;
					}
					$onDidChangeValue(C, O) {
						this.e.get(C)?._fireDidChangeValue(O);
					}
					$onDidAccept(C) {
						this.e.get(C)?._fireDidAccept();
					}
					$onDidChangeActive(C, O) {
						const A = this.e.get(C);
						A instanceof m && A._fireDidChangeActive(O);
					}
					$onDidChangeSelection(C, O) {
						const A = this.e.get(C);
						A instanceof m && A._fireDidChangeSelection(O);
					}
					$onDidTriggerButton(C, O) {
						this.e.get(C)?._fireDidTriggerButton(O);
					}
					$onDidTriggerItemButton(C, O, A) {
						const J = this.e.get(C);
						J instanceof m && J._fireDidTriggerItemButton(O, A);
					}
					$onDidHide(C) {
						this.e.get(C)?._fireDidHide();
					}
				}
				class u {
					static {
						this.a = 1;
					}
					constructor(C, O) {
						(this.x = C),
							(this.y = O),
							(this._id = m.a++),
							(this.e = !1),
							(this.f = !1),
							(this.g = !0),
							(this.j = !1),
							(this.k = !0),
							(this.l = ""),
							(this.n = []),
							(this.o = new Map()),
							(this.p = new r.$re()),
							(this.q = new r.$re()),
							(this.r = new r.$re()),
							(this.s = new r.$re()),
							(this.u = { id: this._id }),
							(this.v = !1),
							(this.w = [this.r, this.s, this.p, this.q]),
							(this.onDidChangeValue = this.q.event),
							(this.onDidAccept = this.p.event),
							(this.onDidTriggerButton = this.r.event),
							(this.onDidHide = this.s.event);
					}
					get title() {
						return this.b;
					}
					set title(C) {
						(this.b = C), this.z({ title: C });
					}
					get step() {
						return this.c;
					}
					set step(C) {
						(this.c = C), this.z({ step: C });
					}
					get totalSteps() {
						return this.d;
					}
					set totalSteps(C) {
						(this.d = C), this.z({ totalSteps: C });
					}
					get enabled() {
						return this.g;
					}
					set enabled(C) {
						(this.g = C), this.z({ enabled: C });
					}
					get busy() {
						return this.j;
					}
					set busy(C) {
						(this.j = C), this.z({ busy: C });
					}
					get ignoreFocusOut() {
						return this.k;
					}
					set ignoreFocusOut(C) {
						(this.k = C), this.z({ ignoreFocusOut: C });
					}
					get value() {
						return this.l;
					}
					set value(C) {
						(this.l = C), this.z({ value: C });
					}
					get placeholder() {
						return this.m;
					}
					set placeholder(C) {
						(this.m = C), this.z({ placeholder: C });
					}
					get buttons() {
						return this.n;
					}
					set buttons(C) {
						const O = (0, d.$t2)(this.x, "quickInputButtonLocation");
						!O &&
							C.some((A) => A.location) &&
							console.warn(
								`Extension '${this.x.identifier.value}' uses a button location which is proposed API that is only available when running out of dev or with the following command line switch: --enable-proposed-api ${this.x.identifier.value}`,
							),
							(this.n = C.slice()),
							this.o.clear(),
							C.forEach((A, J) => {
								const L = A === I.$Ocb.Back ? -1 : J;
								this.o.set(L, A);
							}),
							this.z({
								buttons: C.map((A, J) => ({
									...w(A.iconPath),
									tooltip: A.tooltip,
									handle: A === I.$Ocb.Back ? -1 : J,
									location: O ? A.location : void 0,
								})),
							});
					}
					show() {
						(this.e = !0), (this.f = !0), this.z({ visible: !0 });
					}
					hide() {
						(this.e = !1), this.z({ visible: !1 });
					}
					_fireDidAccept() {
						this.p.fire();
					}
					_fireDidChangeValue(C) {
						(this.l = C), this.q.fire(C);
					}
					_fireDidTriggerButton(C) {
						const O = this.o.get(C);
						O && this.r.fire(O);
					}
					_fireDidHide() {
						this.f && ((this.f = this.e), this.s.fire());
					}
					dispose() {
						this.v ||
							((this.v = !0),
							this._fireDidHide(),
							(this.w = (0, S.$Vc)(this.w)),
							this.t && (clearTimeout(this.t), (this.t = void 0)),
							this.y(),
							T.$dispose(this._id));
					}
					z(C) {
						if (!this.v) {
							for (const O of Object.keys(C)) {
								const A = C[O];
								this.u[O] = A === void 0 ? null : A;
							}
							"visible" in this.u
								? (this.t && (clearTimeout(this.t), (this.t = void 0)),
									this.A())
								: this.e &&
									!this.t &&
									(this.t = setTimeout(() => {
										(this.t = void 0), this.A();
									}, 0));
						}
					}
					A() {
						T.$createOrUpdate(this.u), (this.u = { id: this._id });
					}
				}
				function s(R) {
					if (R instanceof I.$mcb) return { id: R.id };
					const C = o(R),
						O = f(R);
					return {
						dark: typeof C == "string" ? P.URI.file(C) : C,
						light: typeof O == "string" ? P.URI.file(O) : O,
					};
				}
				function f(R) {
					return typeof R == "object" && "light" in R ? R.light : R;
				}
				function o(R) {
					return typeof R == "object" && "dark" in R ? R.dark : R;
				}
				function w(R) {
					const C = s(R);
					let O, A;
					return (
						"id" in C ? (A = y.ThemeIcon.asClassName(C)) : (O = C),
						{ iconPath: O, iconClass: A }
					);
				}
				class m extends u {
					constructor(C, O) {
						super(C, O),
							(this.B = []),
							(this.C = new Map()),
							(this.D = new Map()),
							(this.E = !1),
							(this.F = !0),
							(this.G = !0),
							(this.H = !0),
							(this.I = !1),
							(this.J = []),
							(this.K = new r.$re()),
							(this.L = []),
							(this.M = new r.$re()),
							(this.N = new r.$re()),
							(this.onDidChangeActive = this.K.event),
							(this.onDidChangeSelection = this.M.event),
							(this.onDidTriggerItemButton = this.N.event),
							this.w.push(this.K, this.M, this.N),
							this.z({ type: "quickPick" });
					}
					get items() {
						return this.B;
					}
					set items(C) {
						(this.B = C.slice()),
							this.C.clear(),
							this.D.clear(),
							C.forEach((J, L) => {
								this.C.set(L, J), this.D.set(J, L);
							});
						const O = (0, d.$t2)(this.x, "quickPickItemTooltip"),
							A = [];
						for (let J = 0; J < C.length; J++) {
							const L = C[J];
							if (L.kind === I.QuickPickItemKind.Separator)
								A.push({ type: "separator", label: L.label });
							else {
								L.tooltip &&
									!O &&
									console.warn(
										`Extension '${this.x.identifier.value}' uses a tooltip which is proposed API that is only available when running out of dev or with the following command line switch: --enable-proposed-api ${this.x.identifier.value}`,
									);
								const b = L.iconPath ? w(L.iconPath) : void 0;
								A.push({
									handle: J,
									label: L.label,
									iconPath: b?.iconPath,
									iconClass: b?.iconClass,
									description: L.description,
									detail: L.detail,
									picked: L.picked,
									alwaysShow: L.alwaysShow,
									tooltip: O ? k.MarkdownString.fromStrict(L.tooltip) : void 0,
									buttons: L.buttons?.map((F, D) => ({
										...w(F.iconPath),
										tooltip: F.tooltip,
										handle: D,
									})),
								});
							}
						}
						this.z({ items: A });
					}
					get canSelectMany() {
						return this.E;
					}
					set canSelectMany(C) {
						(this.E = C), this.z({ canSelectMany: C });
					}
					get matchOnDescription() {
						return this.F;
					}
					set matchOnDescription(C) {
						(this.F = C), this.z({ matchOnDescription: C });
					}
					get matchOnDetail() {
						return this.G;
					}
					set matchOnDetail(C) {
						(this.G = C), this.z({ matchOnDetail: C });
					}
					get sortByLabel() {
						return this.H;
					}
					set sortByLabel(C) {
						(this.H = C), this.z({ sortByLabel: C });
					}
					get keepScrollPosition() {
						return this.I;
					}
					set keepScrollPosition(C) {
						(this.I = C), this.z({ keepScrollPosition: C });
					}
					get activeItems() {
						return this.J;
					}
					set activeItems(C) {
						(this.J = C.filter((O) => this.D.has(O))),
							this.z({ activeItems: this.J.map((O) => this.D.get(O)) });
					}
					get selectedItems() {
						return this.L;
					}
					set selectedItems(C) {
						(this.L = C.filter((O) => this.D.has(O))),
							this.z({ selectedItems: this.L.map((O) => this.D.get(O)) });
					}
					_fireDidChangeActive(C) {
						const O = (0, n.$Lb)(C.map((A) => this.C.get(A)));
						(this.J = O), this.K.fire(O);
					}
					_fireDidChangeSelection(C) {
						const O = (0, n.$Lb)(C.map((A) => this.C.get(A)));
						(this.L = O), this.M.fire(O);
					}
					_fireDidTriggerItemButton(C, O) {
						const A = this.C.get(C);
						if (!A || !A.buttons || !A.buttons.length) return;
						const J = A.buttons[O];
						J && this.N.fire({ button: J, item: A });
					}
				}
				class E extends u {
					constructor(C, O) {
						super(C, O), (this.B = !1), this.z({ type: "inputBox" });
					}
					get password() {
						return this.B;
					}
					set password(C) {
						(this.B = C), this.z({ password: C });
					}
					get prompt() {
						return this.C;
					}
					set prompt(C) {
						(this.C = C), this.z({ prompt: C });
					}
					get valueSelection() {
						return this.D;
					}
					set valueSelection(C) {
						(this.D = C), this.z({ valueSelection: C });
					}
					get validationMessage() {
						return this.E;
					}
					set validationMessage(C) {
						(this.E = C),
							C
								? typeof C == "string"
									? this.z({ validationMessage: C, severity: p.default.Error })
									: this.z({
											validationMessage: C.message,
											severity: C.severity ?? p.default.Error,
										})
								: this.z({
										validationMessage: void 0,
										severity: p.default.Ignore,
									});
					}
				}
				return new a(h, $);
			}
		},
	),
		