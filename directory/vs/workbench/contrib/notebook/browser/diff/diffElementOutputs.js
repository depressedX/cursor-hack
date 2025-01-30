import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../nls.js';
import '../../../../../base/common/lifecycle.js';
import './diffElementViewModel.js';
import './notebookDiffEditorBrowser.js';
import '../notebookBrowser.js';
import '../../common/notebookService.js';
import '../../../../../base/common/themables.js';
import '../notebookIcons.js';
import '../../../../../base/browser/keyboardEvent.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../platform/quickinput/common/quickInput.js';
define(
			de[3496],
			he([1, 0, 7, 4, 3, 706, 556, 108, 161, 26, 284, 114, 27, 63]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*nls*/,
 w /*lifecycle*/,
 E /*diffElementViewModel*/,
 C /*notebookDiffEditorBrowser*/,
 d /*notebookBrowser*/,
 m /*notebookService*/,
 r /*themables*/,
 u /*notebookIcons*/,
 a /*keyboardEvent*/,
 h /*keyCodes*/,
 c /*quickInput*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$8Ec = e.$7Ec = void 0),
					(t = mt(t)),
					(i = mt(i));
				class n extends w.$1c {
					constructor(o, f, b, s, l, y, $, v, S) {
						super(),
							(this.b = o),
							(this.c = f),
							(this.f = b),
							(this.g = s),
							(this.h = l),
							(this.j = y),
							(this.m = $),
							(this.n = v),
							(this.output = S),
							(this.resizeListener = this.D(new w.$Zc()));
					}
					render(o, f) {
						const b = document.createElement("div");
						let s;
						const [l, y] = this.output.resolveMimeTypes(this.c, void 0),
							$ = l[y];
						if (l.length > 1) {
							b.style.position = "relative";
							const S = t.$(".multi-mimetype-output");
							S.classList.add(...r.ThemeIcon.asClassNameArray(u.$qOb)),
								(S.tabIndex = 0),
								(S.title = i.localize(
									7979,
									null,
									l.map((I) => I.mimeType).join(", "),
								)),
								b.appendChild(S),
								this.resizeListener.add(
									t.$$fb(S, "mousedown", async (I) => {
										I.leftButton &&
											(I.preventDefault(),
											I.stopPropagation(),
											await this.t(this.c, this.output));
									}),
								),
								this.resizeListener.add(
									t.$0fb(S, t.$$gb.KEY_DOWN, async (I) => {
										const T = new a.$7fb(I);
										(T.equals(h.KeyCode.Enter) || T.equals(h.KeyCode.Space)) &&
											(I.preventDefault(),
											I.stopPropagation(),
											await this.t(this.c, this.output));
									}),
								);
						}
						const v = t.$(".output-inner-container");
						if ((t.$fhb(b, v), l.length !== 0)) {
							const S = this.f.getRendererInfo($.rendererId);
							(s = S
								? {
										type: d.RenderOutputType.Extension,
										renderer: S,
										source: this.output,
										mimeType: $.mimeType,
									}
								: this.q(this.output, $.mimeType)),
								(this.output.pickedMimeType = $);
						}
						(this.domNode = b),
							(this.renderResult = s),
							s &&
								(f ? this.n.insertBefore(b, f) : this.n.appendChild(b),
								this.b.createOutput(
									this.h,
									this.m,
									s,
									() => this.getOutputOffsetInCell(o),
									this.h instanceof E.$REc
										? this.j
										: this.h.type === "insert"
											? C.DiffSide.Modified
											: C.DiffSide.Original,
								));
					}
					q(o, f) {
						if (!o.model.outputs.length)
							return this.s(o, i.localize(7980, null));
						if (!f) {
							const s = o.model.outputs.map((l) => l.mime).join(", ");
							return this.s(o, i.localize(7981, null, s));
						}
						return this.r(o, f);
					}
					r(o, f) {
						const b = `@tag:notebookRenderer ${f}`,
							s = t.$(
								"p",
								void 0,
								`No renderer could be found for mimetype "${f}", but one might be available on the Marketplace.`,
							),
							l = t.$(
								"a",
								{
									href: `command:workbench.extensions.search?%22${b}%22`,
									class: "monaco-button monaco-text-button",
									tabindex: 0,
									role: "button",
									style:
										"padding: 8px; text-decoration: none; color: rgb(255, 255, 255); background-color: rgb(14, 99, 156); max-width: 200px;",
								},
								"Search Marketplace",
							);
						return {
							type: d.RenderOutputType.Html,
							source: o,
							htmlContent: s.outerHTML + l.outerHTML,
						};
					}
					s(o, f) {
						const b = t.$("p", void 0, f);
						return {
							type: d.RenderOutputType.Html,
							source: o,
							htmlContent: b.outerHTML,
						};
					}
					async t(o, f) {
						const [b, s] = f.resolveMimeTypes(o, void 0),
							l = b
								.filter((S) => S.isTrusted)
								.map((S, I) => ({
									label: S.mimeType,
									id: S.mimeType,
									index: I,
									picked: I === s,
									detail: this.u(S.rendererId),
									description: I === s ? i.localize(7982, null) : void 0,
								})),
							y = new w.$Zc(),
							$ = y.add(this.g.createQuickPick());
						($.items = l),
							($.activeItems = l.filter((S) => !!S.picked)),
							($.placeholder =
								l.length !== b.length
									? i.localize(7983, null)
									: i.localize(7984, null));
						const v = await new Promise((S) => {
							y.add(
								$.onDidAccept(() => {
									S(
										$.selectedItems.length === 1
											? $.selectedItems[0].index
											: void 0,
									),
										y.dispose();
								}),
							),
								$.show();
						});
						if (v !== void 0 && v !== s) {
							const S = this.m.outputsViewModels.indexOf(f),
								I = this.domNode.nextElementSibling;
							this.resizeListener.clear();
							const T = this.domNode;
							T && (T.remove(), this.b.removeInset(this.h, this.m, f, this.j)),
								(f.pickedMimeType = b[v]),
								this.render(S, I);
						}
					}
					u(o) {
						const f = this.f.getRendererInfo(o);
						return f
							? `${f.displayName !== "" ? f.displayName : f.id} (${f.extensionId.value})`
							: i.localize(7985, null);
					}
					getCellOutputCurrentIndex() {
						return this.h
							.getNestedCellViewModel(this.j)
							.outputs.indexOf(this.output.model);
					}
					updateHeight(o, f) {
						this.h.updateOutputHeight(this.j, o, f);
					}
					getOutputOffsetInContainer(o) {
						return this.h.getOutputOffsetInContainer(this.j, o);
					}
					getOutputOffsetInCell(o) {
						return this.h.getOutputOffsetInCell(this.j, o);
					}
				}
				e.$7Ec = n;
				let g = class extends w.$1c {
					constructor(o, f, b, s, l, y, $, v) {
						super(),
							(this.c = o),
							(this.f = f),
							(this.g = b),
							(this.h = s),
							(this.j = l),
							(this.m = y),
							(this.n = $),
							(this.q = v),
							(this.b = new Map()),
							this.D(
								this.g.onDidLayoutChange(() => {
									this.b.forEach((S, I) => {
										const T = s.outputs.indexOf(I.model);
										if (T >= 0) {
											const P = this.g.getOutputOffsetInContainer(this.j, T);
											S.domNode.style.top = `${P}px`;
										}
									});
								}),
							),
							this.D(
								this.h.textModel.onDidChangeOutputs((S) => {
									this.r(S);
								}),
							);
					}
					r(o) {
						const f = [];
						this.b.forEach((l, y) => {
							this.h.outputsViewModels.indexOf(y) < 0 &&
								(f.push(y),
								l.domNode.remove(),
								this.c.removeInset(this.g, this.h, y, this.j));
						}),
							f.forEach((l) => {
								this.b.get(l)?.dispose(), this.b.delete(l);
							});
						let b;
						this.h.outputsViewModels.reverse().forEach((l) => {
							if (this.b.has(l)) {
								b = this.b.get(l).domNode;
								return;
							}
							const y = this.h.outputsViewModels.indexOf(l);
							this.s(l, y, b), (b = this.b.get(l)?.domNode);
						});
					}
					render() {
						for (let o = 0; o < this.h.outputsViewModels.length; o++) {
							const f = this.h.outputsViewModels[o];
							this.s(f, o, void 0);
						}
					}
					showOutputs() {
						for (let o = 0; o < this.h.outputsViewModels.length; o++) {
							const f = this.h.outputsViewModels[o];
							this.c.showInset(this.g, f.cellViewModel, f, this.j);
						}
					}
					hideOutputs() {
						this.b.forEach((o, f) => {
							this.c.hideInset(this.g, this.h, f);
						});
					}
					s(o, f, b) {
						this.b.has(o) ||
							this.b.set(
								o,
								new n(
									this.c,
									this.f,
									this.n,
									this.q,
									this.g,
									this.j,
									this.h,
									this.m,
									o,
								),
							),
							this.b.get(o).render(f, b);
					}
				};
				(e.$8Ec = g), (e.$8Ec = g = Ne([j(6, m.$MIb), j(7, c.$DJ)], g));
			},
		),
		