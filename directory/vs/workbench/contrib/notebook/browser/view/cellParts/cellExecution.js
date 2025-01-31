import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/browser/dom.js';
import '../../../../../../base/common/async.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/numbers.js';
import '../cellPart.js';
import '../../viewModel/codeCellViewModel.js';
import '../../../common/notebookExecutionStateService.js';
define(
			de[4094],
			he([1, 0, 7, 15, 3, 201, 294, 482, 190]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*async*/,
 w /*lifecycle*/,
 E /*numbers*/,
 C /*cellPart*/,
 d /*codeCellViewModel*/,
 m /*notebookExecutionStateService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$K3b = void 0),
					(t = mt(t));
				const r = 200;
				let u = class extends C.$A1b {
					constructor(h, c, n) {
						super(),
							(this.b = h),
							(this.g = c),
							(this.h = n),
							(this.a = this.D(new w.$Zc())),
							this.D(
								this.b.onDidChangeActiveKernel(() => {
									this.c &&
										(this.a.clear(),
										this.b.activeKernel &&
											this.a.add(
												this.b.activeKernel.onDidChange(() => {
													this.c && this.j(this.c.internalMetadata);
												}),
											),
										this.j(this.c.internalMetadata));
								}),
							),
							this.D(
								this.b.onDidScroll(() => {
									this.m();
								}),
							);
					}
					didRenderCell(h) {
						this.j(h.internalMetadata, !0);
					}
					j(h, c = !1) {
						if (
							this.b.activeKernel?.implementsExecutionOrder ||
							(!this.b.activeKernel && typeof h.executionOrder == "number")
						) {
							if (
								typeof h.executionOrder != "number" &&
								!c &&
								this.h.getCellExecution(this.c.uri)
							) {
								const g = this.c;
								(0, i.$Oh)(
									() => {
										this.c === g && this.j(this.c.internalMetadata, !0);
									},
									r,
									this.f,
								);
								return;
							}
							const n =
								typeof h.executionOrder == "number"
									? `[${h.executionOrder}]`
									: "[ ]";
							this.g.innerText = n;
						} else this.g.innerText = "";
					}
					updateState(h, c) {
						c.internalMetadataChanged && this.j(h.internalMetadata);
					}
					updateInternalLayoutNow(h) {
						this.m();
					}
					m() {
						if (this.c)
							if (this.c.isInputCollapsed) t.hide(this.g);
							else {
								t.show(this.g);
								let h =
									this.c.layoutInfo.editorHeight -
									22 +
									this.c.layoutInfo.statusBarHeight;
								if (this.c instanceof d.$31b) {
									const n =
											this.b.getAbsoluteTopOfElement(this.c) +
											this.c.layoutInfo.outputContainerOffset,
										g = this.b.scrollBottom,
										p = 22;
									if (g <= n) {
										const o = n - g;
										(h -= o),
											(h = (0, E.$Zm)(
												h,
												p + 12,
												this.c.layoutInfo.editorHeight -
													p +
													this.c.layoutInfo.statusBarHeight,
											));
									}
								}
								this.g.style.top = `${h}px`;
							}
					}
				};
				(e.$K3b = u), (e.$K3b = u = Ne([j(2, m.$d6)], u));
			},
		)
