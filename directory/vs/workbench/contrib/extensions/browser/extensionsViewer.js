import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../nls.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/actions.js';
import '../common/extensions.js';
import '../../../../base/common/event.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/arrays.js';
import './extensionsList.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../base/browser/keyboardEvent.js';
import '../../../../base/browser/mouseEvent.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/browser/ui/hover/hoverWidget.js';
import './extensionsViews.js';
define(
			de[4297],
			he([
				1, 0, 7, 4, 3, 50, 141, 6, 5, 93, 10, 8, 35, 33, 24, 1356, 51, 114, 168,
				27, 160, 1990,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*nls*/,
				w /*lifecycle*/,
				E /*actions*/,
				C /*extensions*/,
				d /*event*/,
				m /*instantiation*/,
				r /*listService*/,
				u /*configuration*/,
				a /*contextkey*/,
				h /*themeService*/,
				c /*cancellation*/,
				n /*arrays*/,
				g /*extensionsList*/,
				p /*colorRegistry*/,
				o /*keyboardEvent*/,
				f /*mouseEvent*/,
				b /*keyCodes*/,
				s /*hoverWidget*/,
				l /*extensionsViews*/,
) {
				"use strict";
				var y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kTc = e.$jTc = e.$iTc = void 0),
					(e.$lTc = D),
					(t = mt(t));
				let $ = class extends w.$1c {
					constructor(N, A, R) {
						super(),
							(this.f = R),
							(this.element = t.$fhb(N, t.$(".extensions-grid-view"))),
							(this.a = this.f.createInstance(
								g.$YSc,
								{ onFocus: d.Event.None, onBlur: d.Event.None },
								{
									hoverOptions: {
										position() {
											return s.HoverPosition.BELOW;
										},
									},
								},
							)),
							(this.b = A),
							(this.c = this.D(new w.$Zc()));
					}
					setExtensions(N) {
						this.c.clear(), N.forEach((A, R) => this.g(A, R));
					}
					g(N, A) {
						const R = t.$fhb(this.element, t.$(".extension-container"));
						(R.style.height = `${this.b.getHeight()}px`),
							R.setAttribute("tabindex", "0");
						const O = this.a.renderTemplate(R);
						this.c.add((0, w.$Yc)(() => this.a.disposeTemplate(O)));
						const B = this.f.createInstance(P);
						(B.extension = N), O.name.setAttribute("tabindex", "0");
						const U = (z) => {
							(z instanceof o.$7fb && z.keyCode !== b.KeyCode.Enter) ||
								(B.run(z.ctrlKey || z.metaKey),
								z.stopPropagation(),
								z.preventDefault());
						};
						this.c.add(
							t.$0fb(O.name, t.$$gb.CLICK, (z) =>
								U(new f.$2fb(t.getWindow(O.name), z)),
							),
						),
							this.c.add(
								t.$0fb(O.name, t.$$gb.KEY_DOWN, (z) => U(new o.$7fb(z))),
							),
							this.c.add(t.$0fb(R, t.$$gb.KEY_DOWN, (z) => U(new o.$7fb(z)))),
							this.a.renderElement(N, A, O);
					}
				};
				(e.$iTc = $), (e.$iTc = $ = Ne([j(2, m.$Li)], $));
				class v {
					hasChildren({ hasChildren: N }) {
						return N;
					}
					getChildren(N) {
						return N.getChildren();
					}
				}
				class S {
					getHeight(N) {
						return 62;
					}
					getTemplateId({ extension: N }) {
						return N ? I.TEMPLATE_ID : T.TEMPLATE_ID;
					}
				}
				let I = class {
					static {
						y = this;
					}
					static {
						this.TEMPLATE_ID = "extension-template";
					}
					constructor(N) {
						this.a = N;
					}
					get templateId() {
						return y.TEMPLATE_ID;
					}
					renderTemplate(N) {
						N.classList.add("extension");
						const A = t.$fhb(N, t.$("img.icon")),
							R = t.$fhb(N, t.$(".details")),
							O = t.$fhb(R, t.$(".header")),
							B = t.$fhb(O, t.$("span.name")),
							U = this.a.createInstance(P),
							z = [
								t.$0fb(B, "click", (q) => {
									U.run(q.ctrlKey || q.metaKey),
										q.stopPropagation(),
										q.preventDefault();
								}),
							],
							F = t.$fhb(O, t.$("span.identifier")),
							x = t.$fhb(R, t.$(".footer")),
							H = t.$fhb(x, t.$(".author"));
						return {
							icon: A,
							name: B,
							identifier: F,
							author: H,
							extensionDisposables: z,
							set extensionData(q) {
								U.extension = q.extension;
							},
						};
					}
					renderElement(N, A, R) {
						const O = N.element.extension;
						R.extensionDisposables.push(
							t.$0fb(R.icon, "error", () => (R.icon.src = O.iconUrlFallback), {
								once: !0,
							}),
						),
							(R.icon.src = O.iconUrl),
							R.icon.complete
								? (R.icon.style.visibility = "inherit")
								: ((R.icon.style.visibility = "hidden"),
									(R.icon.onload = () =>
										(R.icon.style.visibility = "inherit"))),
							(R.name.textContent = O.displayName),
							(R.identifier.textContent = O.identifier.id),
							(R.author.textContent = O.publisherDisplayName),
							(R.extensionData = N.element);
					}
					disposeTemplate(N) {
						N.extensionDisposables = (0, w.$Vc)(N.extensionDisposables);
					}
				};
				I = y = Ne([j(0, m.$Li)], I);
				class T {
					static {
						this.TEMPLATE_ID = "unknown-extension-template";
					}
					get templateId() {
						return T.TEMPLATE_ID;
					}
					renderTemplate(N) {
						const A = t.$fhb(N, t.$("div.unknown-extension"));
						return (
							(t.$fhb(A, t.$("span.error-marker")).textContent = (0,
							i.localize)(6446, null)),
							(t.$fhb(A, t.$("span.message")).textContent = (0, i.localize)(
								6447,
								null,
							)),
							{ identifier: t.$fhb(A, t.$("span.message")) }
						);
					}
					renderElement(N, A, R) {
						R.identifier.textContent = N.element.extension.identifier.id;
					}
					disposeTemplate(N) {}
				}
				let P = class extends E.$rj {
					constructor(N) {
						super("extensions.action.openExtension", ""), (this.b = N);
					}
					set extension(N) {
						this.a = N;
					}
					run(N) {
						return this.a
							? this.b.open(this.a, { sideByside: N })
							: Promise.resolve();
					}
				};
				P = Ne([j(0, C.$MQb)], P);
				let k = class extends r.$FMb {
					constructor(N, A, R, O, B, U, z, F) {
						const x = new S(),
							H = new v(),
							q = [U.createInstance(I), U.createInstance(T)],
							V = {
								getId({ extension: G, parent: K }) {
									return K
										? this.getId(K) + "/" + G.identifier.id
										: G.identifier.id;
								},
							};
						super(
							"ExtensionsTree",
							A,
							x,
							q,
							H,
							{
								indent: 40,
								identityProvider: V,
								multipleSelectionSupport: !1,
								overrideStyles: R,
								accessibilityProvider: {
									getAriaLabel(G) {
										return (0, l.$hTc)(G.extension);
									},
									getWidgetAriaLabel() {
										return (0, i.localize)(6448, null);
									},
								},
							},
							U,
							O,
							B,
							z,
						),
							this.setInput(N),
							this.u.add(
								this.onDidChangeSelection((G) => {
									t.$8gb(G.browserEvent) &&
										F.open(G.elements[0].extension, { sideByside: !1 });
								}),
							);
					}
				};
				(e.$jTc = k),
					(e.$jTc = k =
						Ne(
							[
								j(3, a.$6j),
								j(4, r.$fMb),
								j(5, m.$Li),
								j(6, u.$gj),
								j(7, C.$MQb),
							],
							k,
						));
				class L {
					constructor(N, A, R, O) {
						(this.extension = N),
							(this.parent = A),
							(this.a = R),
							(this.c = O),
							(this.b = this.a(N));
					}
					get hasChildren() {
						return (0, n.$Pb)(this.b);
					}
					async getChildren() {
						return this.hasChildren
							? (await D(this.b, this.c)).map(
									(A) => new L(A, this, this.a, this.c),
								)
							: null;
					}
				}
				e.$kTc = L;
				async function D(M, N) {
					const A = N.local.reduce(
							(B, U) => (B.set(U.identifier.id.toLowerCase(), U), B),
							new Map(),
						),
						R = [],
						O = [];
					for (const B of M) {
						const U = B.toLowerCase(),
							z = A.get(U);
						z ? R.push(z) : O.push(U);
					}
					if (O.length) {
						const B = await N.getExtensions(
							O.map((U) => ({ id: U })),
							c.CancellationToken.None,
						);
						R.push(...B);
					}
					return R;
				}
				(0, h.$oP)((M, N) => {
					const A = M.getColor(p.$AS);
					A &&
						N.addRule(
							`.extensions-grid-view .extension-container:focus { background-color: ${A}; outline: none; }`,
						);
					const R = M.getColor(p.$BS);
					R &&
						N.addRule(
							`.extensions-grid-view .extension-container:focus { color: ${R}; }`,
						);
					const O = M.getColor(p.$IP),
						B = M.getColor(p.$8P);
					if (O && B) {
						const U = O.transparent(0.9).makeOpaque(B);
						N.addRule(
							`.extensions-grid-view .extension-container:not(.disabled) .author { color: ${U}; }`,
						);
						const z = O.transparent(0.5).makeOpaque(B);
						N.addRule(
							`.extensions-grid-view .extension-container.disabled { color: ${z}; }`,
						);
					}
				});
			},
		)
